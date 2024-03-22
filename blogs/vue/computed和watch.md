---
title: computed 和 watch
date: 2024-02-28
categories:
 - Vue
tags:
 - vue
---

# computed和watch区别

## 定义
### computed
> 计算属性

从组件数据中产生新的数据

当被绑定的响应式数据发生改变时，computed也会触发

使用方法：一般设置一个方法，这个方法返回计算之后的结果

computed默认只有getter，但是如果需要时computed也可以使用对象进行配置使用，该配置对象内有两个方法，get和set
* get()，也就是上述默认设置的方法，返回计算后的结果
* set(newVal)，当你对该计算属性进行设置赋值的时候触发，newVal是被赋值的值
### watch
> 监听器

监听组件内一个响应式数据的变化，并执行副作用

使用方法：一般是传递一个方法，这个方法就是需要执行的副作用，watch没有返回值，但是可以执行一些异步方法等复杂性逻辑；

watch还可以是一个对象，对象内除了handler函数（也就是上述执行操作的函数）之外，还有deep，immediate等属性。

当我们需要对一个对象进行深度监听的时候，可以设置deep:true，但是这样会对该对象内所有属性进行监听，优化：如果需要监听一个对象内的某个属性的变化，还可以使用.点操作符字符串的形式来进行监听（这类方法还可以用来监听路由的变化，包括路由的传参query以及params）

## 使用场景
### computed
计算属性设计的初衷时用于简单运算的，为了简化模板中的复杂逻辑，方便维护模板

### watch
计算属性在大多数使用场景更合适，但是，当需要在数据变化时执行异步或者开销较大的操作时，使用watch还是很有必要的。

二者都可以用来**响应数据的变化**，但是个人观点：在能用计算属性就**首选计算属性**，当我们需要在数据变化后执行一些**异步或者复杂操作**的时候可以选择watch

## vue3中的变化
在vue3中watch不允许在使用点操作符字符串形式来进行监听了，vue3中使用watch、watchEffect来作为监听器。

### watch和watchEffect
> 官网地址:https://cn.vuejs.org/guide/essentials/watchers.html

二者都是监听器,都可以用来监听响应式数据的变化,我们在源码中也可以看到,二者都调用了同一个方法doWatch();

* 首先定义上官网是这么解释的:`watchEffect`:立即执行一个函数,然后被动地追踪它的以来,并且当依赖改变时重新执行该函数;`watch`:侦测一个或多个响应式数据源并在数据变化时调用一个回调函数.

* 可以说`watchEffect`是一种特殊的`watch`,`watchEffect`传入的函数既是依赖收集的数据源,也是回调函数,而`watch`相对而言就比较底层一点,可以接收多种数据源,包括收集依赖的getter函数,因此它可以完全实现watchEffect的功能,同时因为要指定依赖收集的getter函数,依赖可以控制更加精准,而且还可以获取数据改变前后的值(watchEffect获取的都是改变后的值,这个是watch相对于watchEffect最大的区别)

* `watchEffect`在使用时,传入的函数会立即执行一次,而`watch`默认不会执行回调函数,如果需要,可以传入配置项{'immediate: true'}

* 从实现上来讲,`watchEffect(fn)`相当于`watch(fn, fn, {immediate: true})`

`watchEffect`还有两个其他写法
`watchPostEffect`和`watchSyncEffect`相当于`watchEffect`在配置项内添加{flush: 'post'}和{flush: 'sync'}

`watchPostEffect`:在回调函数内可以访问被Vue更新之后的组件的DOM;

`watchSyncEffect`:在Vue进行任何更新之前触发(谨慎使用)

### computed原理
涉及响应式原理