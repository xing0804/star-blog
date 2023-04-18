---
title: Nodejs 内置模块
date: 2022-07-04
categories:
 - NodeJs
tags:
 - node
---

## 内置模块

> node没有全局作用域，只有模块作用域
>
> ​	外部访问不到内部，内部也访问不到外部

* 在node中模块有三种：
  * 具名的核心模块，例如fs,http
  * 用户自己编写的文件模块
    * 相对路径必须加./，不能省略，否则会报错，因为**它会把那个模块看作核心模块**
    * 可以省略后缀名

### http

* request请求事件处理函数，需要接收两个参数:

  * Request请求对象

    * 请求对象可以用来获取客户端的一些请求信息，例如请求路径

  * Response响应对象

    * 响应对象可以用来给客户端发送响应消息

    * response对象有一一个方法: write 可以用来给客户端发送响应数据，write可以使用多次，但是最后一定要使用end 来结束响应，否则客户端会一直等待

    * ```javascript
      response.write("hello");//响应内容只能是二进制数据以及字符串，数字，数组，对象，布尔值等等都不行
      //可以使用JSON.stringify()转换成json字符串
      response.write("_wyx");
      response.write("_world");
      response.end();//告诉客户端，我的话说完了，你可以呈递给用户了
      ```

  * ```javascript
    server.on('request',function (request,response) {
        console.log("收到客户端的请求了，请求路径是："+request.url)
    });
    ```

### fs

### url

* url.parse('url',true)

### process （进程模块）

> 可以获得或修改node进程的设置，process进程是一个全局进程（node主进程），你可以通过process变量访问

参考文档：http://nodejs.cn/api/process.html

### 模块与模块之间如何进行通信

* exports导出，require引进
* require是一个方法，它的作用就是用来加载模块的
  * 作用
    * 加载文件模块并执行里面的代码
    * 拿到被加载文件模块导出的接口对象
* 在每一个文件模块中都提供了一个对象：exports
  * exports默认是一个空对象

### 事件委派的应用场景
> 原本给子元素的事件委派给父元素（原理：事件冒泡）
* 给多个按钮添加事件
* ajax返回事件