---
title: 关于Vue中的$set
date: 2023-12-31
categories:
 - Vue
tags:
 - vue
---

# $set原理
## $set用法
vm.$set(target, key, value)中接收三个参数
* target 目标值
* key 将要设置的属性
* value 要设置的属性值

我们都知道在vue2中的响应式原理是通过ES5的Object.defineProperty来实现的,也因为ES5的限制,vue2中的并不能监听到data中定义的数据和对象的变化.

* 数组:
  * 无法通过数组下标赋值的形式监听到数组的变化
  * 无法监听数组长度的变化,也就是无法通过.length赋值来改变数组的长度
  * 在vue中对对象的push,pop,shift,unshift,splice,sort,reverse方法进行了包裹重写,使得在vue2中这些方法可以监听到数组的变化
* 对象:
  * 无法监听到对象的添加和删除
  * 因为vue2中初始化实例的时候将属性转换成了getter和setter方法,所以属性必须在data对象上才可以将其转换成响应式

使用$set或者Vue.set()方法就可以对数组和对象进行赋值,并且更新渲染

## 在Vue3中移除了$set

因为在Vue3中响应式是通过proxy来实现的,proxy可以监听到数组和对象的变化,所以也就没有$set存在的必要

**Vue2底层使用ES5来实现,Vue3使用ES6来实现,对比下来,Vue2对浏览器的兼容性更好,Vue3的功能更加强大**