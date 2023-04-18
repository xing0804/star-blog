---
title: js eventLoop事件循环机制
date: 2023-04-10
categories:
 - javaScript
tags:
 - js
---

> javascript 是单线程，同一时间只能执行一件事情

* 宏任务
  * script（整体代码）、setTimeout、setInterval、setImmediate、I/O、UI rendering
* 微任务
  * promise、Object.observe、MutationObserver
  * 注意：new promise不是微任务，.then,.catch才是异步操作才是微任务
* 优先任务级（微任务大于宏任务）
  * process.nextTick > promise.then > setTimeout > setImmediate
 ![](/事件循环机制.png)

> 微任务永远跟在**当前**宏任务后面
>
> 一个宏任务和它下方的所有微任务合在一起统称**事件循环**
>
> 每一个微任务都有一个微任务队列
>
> 执行顺序:同步任务(主线程任务) > 异步任务(微任务 > 宏任务) > 下一次循环

事件循环机制，大体上由三个部分组成**调用栈**（call stack）**消息队列**（Message Stack）**微任务队列**（Microtask Stack）

* 调用栈：执行
* 消息队列：存放宏任务
* 微任务队列：存放微任务

流程：自上而下调用--遇到函数调用会把函数压入调用栈当中（被压入的函数叫做帧）--函数调用完返回后会从调用栈当中弹出--遇到宏任务将其加入到消息队列当中--遇到微任务将其加入微任务队列当中--当调用栈为空时，将微任务队列当中内容压入调用栈--再次为空，将消息队列内容压到调用栈当中--一波接一波。。。