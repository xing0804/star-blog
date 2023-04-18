---
title: Express 框架
date: 2022-07-04
categories:
 - NodeJs
tags:
 - node
 - express
---

## express

> node开发框架

### 中间件

#### 中间件使用注意事项

* 一定要在路由之前注册中间件
* 客户端发送过来的请求，可以连续调用多个中间件进行处理
* 执行完中间件的业务代码之后，不要忘记调用next()函数
* 为了防止代码逻辑混乱，调用next()函数后不要再写额外的代码
* 连续调用多个中间件时，多个中间件之间，共享req和res对象

#### 中间件分类

* 应用级别中间件

  > 绑定在app上，使用app.use()或者app.get()/post()

  * 全局中间件
  * 局部中间件

* 路由级别的中间件

  > 绑定在router对象上

* 错误级别的中间件

  * 作用：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。

  * 格式：function（err,req,res,next）

  * ```javascript
    app.use(function (err, req, res, next) {
        console.log('发生了错误：' + err.message);
        res.send('Error: ' + err.message);
    })
    ```

* Express内置的中间件

  >  自Express 4.16.0版本开始，Express 内置了3个常用的中间件，极大的提高了Express项目的开发效率和体验:

  * express.static 快速托管静态资源的内置中间件，例如:HTML文件、图片、CSS样式等（无兼容性)
  * express.json解析JSON格式的请求体数据（有兼容性，仅在4.16.0+版本中可用)
  * express.urlencoded解析URL-encoded格式的请求体数据（有兼容性，仅在4.16.0+版本中可用)

### Cors跨域

#### cors简单请求与预检请求