---
title: Vue 响应式原理
date: 2023-04-03
sidebar: 'auto'
categories:
 - Vue
tags:
 - vue
---

## Vue2响应式原理
Vue 的响应式原理是核心是通过 ES5 的保护对象的 Object.defindeProperty 中的访问器属性中的 get 和 set 方法，data 中声明的属性都被添加了访问器属性，当读取 data 中的数据时自动调用 get 方法，当修改 data 中的数据时，自动调用 set 方法，检测到数据的变化，会通知观察者 Wacher，观察者 Wacher自动触发重新render 当前组件（子组件不会重新渲染）,生成新的虚拟 DOM 树，Vue 框架会遍历并对比新虚拟 DOM 树和旧虚拟 DOM 树中每个节点的差别，并记录下来，最后，加载操作，将所有记录的不同点，局部修改到真实 DOM树上。
> 总结：Vue2 采用数据劫持结合发布—订阅模式的方法，通过 Object.defineProperty() 来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
### Object.defineProperty()
用法/优缺点
* 可以检测对象中数据发生的修改
* 缺点：对于复杂的对象层级很深的话，需要进行深度监听，这样就需要递归（复杂）
* 缺点：在一个对象中新增或者删除属性，该方法不可以检测到，可以使用`Vue.set()`和`Vue.delete()`来实现
## Vue3响应式原理
> Vue3改用Proxy，因为Proxy可以直接见监听`对象和数组`的变化，而且proxy作为新标准，肯定会收到浏览器厂家持续的性能优化点

proxy只可以代理对象的第一层，Vue3判断当前Reflect.get的返回值是否为Object，如果是则再通过reactive方法做代理， 这样就实现了深度观测。

## Proxy 相比于 definedProperty的优势
* 数组变化可以监听到
* 不需要深度遍历监听