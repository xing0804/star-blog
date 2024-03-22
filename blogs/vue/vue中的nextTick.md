---
title: 浅谈Vue中的nextTick
date: 2024-02-28
categories:
 - Vue
tags:
 - vue
---

> 在了解nextTick之前，我们需要先了解一下JavaScript中的EventLoop（事件循环机制）

在EventLoop中分为宏任务和微任务，宏任务包括整体的代码、setTimeout、setInterval等，微任务包括promise、Object.observe（实现异步监听对象的改变）、MutationObserver（监听DOM元素的变动）等。

执行顺序：**微任务优先级大于宏任务**，微任务跟在宏任务之后，当宏任务执行完毕后立即执行。

EventLoop中的几个概念：
* **执行栈**：当一个函数被调用的时候，这个函数就会被推入执行栈，执行完毕后弹出，整体是一个同步执行的过程。
* **消息队列**：消息队列用来存放异步任务的回调函数，当异步任务完成后，就会将回调函数放入消息队列
* **事件循环**：EventLoop是一个不断执行的循环，负责检查执行栈和消息队列，当执行栈为空时，它会检查消息队列内是否有待执行的任务，如果有就会将消息队列内任务推入执行栈执行，一直重复这种操作，循环进行。

EventLoop的执行过程：
* 执行栈执行同步任务
* 当遇到异步任务的时候，将其回调函数放入消息队列
* 当执行栈为空时，检查消息队列是否有待执行任务，如果有任务，将任务推入执行栈执行
* 重复循环

## 什么是nextTick
> Vue中nextTick其实就是对EventLoop的一种应用

nextTick是Vue中的一个异步更新机制，以确保数据变化后，DOM更新之后执行nextTick内的回调函数。

nextTick主要原理就是利用事件循环中的宏任务队列和微任务队列来确保在DOM更新后执行回调

nextTick的核心机制就是，当vue中数据发生变化后，异步更新DOM元素，在整个过程中将需要执行的回调函数推入队列当中，不是立即执行，而是当DOM更新之后执行。
具体整个队列是微任务还是宏任务，正解是：**优先微任务**。
因为在现在浏览器当中，vue中nextTick会使用Promise和MutationObserver来模拟微任务，如果二者都不支持就会兼容使用setTimout来模拟宏任务

## 为什么需要使用nextTick（在Vue中的作用）
### 为什么需要使用异步更新队列？
* 如果使用同步更新，会多次对一个或多个属性赋值，就会导致频繁触发DOM渲染带来的重排或重绘，影响性能，异步更新减少了一些不必要的渲染。
* 在vue中使用虚拟DOM，当数据状态发生改变的时候，虚拟DOM会计算出需要更新的具体的DOM节点，然后对DOM进行操作，每次状态更新后的渲染过程都需要更多的计算，使用nextTick，可以将多次数据更新合并成一次，减少更多这种无用功所带来的性能消耗。

## nextTick所解决的一些问题以及应用场景
### 解决的问题
* 获取更新之后的DOM元素（虽然说Vue是数据驱动，但是在一些特殊情况下，我们还是需要操作DOM元素）
* DOM更新后的样式计算
* 触发一些特定事件
* 优化性能，原理同上（nextTick在vue中的作用）
* 处理部分因为异步操作带来的问题

### 应用场景
* 需要在更新DOM后执行一些操作时
* 在代码中修改数据之后，需要计算元素的位置、宽高时可以将计算操作放入nextTick的回调函数中，确保可以获取到DOM元素。
* 当你需要在父组件中监听子组件的数据变化，并在变化后执行一些操作，可以使用nextTick，确保可以获取到最新的数据。
* 在钩子函数created中操作DOM

## 实现一个简单的nextTick

```javascript
const callbacks = []; // 待执行的回调函数
let pending = false; // 用于标识任务队列是否在执行

// 执行任务队列函数
const flushCallbacks = () => {
    pending = false;
    const copies = callbacks.slice(); // 复制任务队列
    callbacks.length = 0; // 清空回调函数数组
    for (let i = 0; i < copies.length; i++) {
        copies[i](); // 依次执行回调函数
    }
}

const nextTick = (callback) => {
    callbacks.push(callback);
    if (!pending) {
        pending = true;
        if (typeof Promise !== 'undefined') {
            Promise.resolve().then(flushCallbacks)
        } else if (typeof MutationObserver !== 'undefined') {
            const observer = new MutationObserver(flushCallbacks)
            const textNode = document.createTextNode('1')
            observer.observe(textNode, { characterData: true })
            textNode.data = '2'
        } else if (typeof setImmediate !== 'undefined') {
          	setImmediate(flushCallbacks)
        } else {
          	setTimeout(flushCallbacks, 0)
        }
    }
}
```

