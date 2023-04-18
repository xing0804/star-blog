---
title: Web Workers
date: 2022-03-03
tags:
 - js
---

## Web Workers

### 介绍

* H5规范提供了js多线程解决方案
* 我们可以将大计算量的代码交给web workers运行，而不冻结用户界面
* 但是子线程完全受主线程控制，且不操作DOM，因此这个标准并没有改变js单线程的本质

### 使用

* 创建一个在分线程执行的js文件
* 在主线程的js中给分线程发送消息并设置回调

```HTML
<body>
<input type="text" id="number" placeholder="请输入数值！">
<button id="btn">fibonacci</button>

<script>

    let input = document.getElementById('number');
    document.getElementById('btn').onclick=()=>{
        let number = input.value;

        //创建一个worker对象
        let worker = new Worker('web_workers.js');
        //发送消息给分线程
        worker.postMessage(number);
        console.log('主线程给分线程发送数据:',number);
        //绑定接收信息的监听
        worker.onmessage = (event)=>{
            console.log('接收到分线程发来的数据!',event.data);
            alert(event.data);
        }

    }
</script>

</body>
```
