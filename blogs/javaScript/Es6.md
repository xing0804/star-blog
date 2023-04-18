---
title: Es6 新增属性及用法
date: 2022-06-27
sidebar: 'auto'
sticky: 2
categories:
 - javaScript
tags:
 - es6
---

# ES6

## let和const

### let

* let，不能重复声明同一个变量名，var可以，防止变量污染
* 识别块级作用域  （就是在一个{}里面生效）
* 不存在变量提升，不会预解析，必须先声明再使用，否则会报错
* 不影响作用域链 

### const

> 声明常量

* 一定要赋初始值
* 一般常量使用大写
* 常量的值不能修改
* 块级作用域
* 不会预解析，必须先声明再使用，否则会报错
* 对于数组和对象的元素修改，不算做对常量的修改，不会报错（所以以后声明数字和对象的时候使用const比较保险，也可以防止误操作）

## 变量的解构

### 数组的结构

### 对象的解构

## 模板字符串

* 声明
  * ``
* 内容可任意直接出现换行符，标签，变量

## 箭头函数

* this指针------》this是静态的，this始终指向函数声明时所在作用域下的this的值
* 不能作为构造函数实例化对象
* 不能使用arguments变量
* 箭头函数的简写
  * 省略小括号，当形参有且只有一个的时候
  * 省略花括号，当代码体只有一条语句的时候此时return必须省略，而且语句的执行结果就是函数的返回值
* 箭头函数适合与this无关的回调，定时器，数组的方法回调
* 箭头函数不适合与this有关的回调，事件回调，对象的方法

## 函数参数初始值，默认值

* es6允许函数参数赋值初始值，一般具有默认值的参数位置靠后

* 与解构赋值结合

  * ```javascript
    function concat({host='127.0.0.1',username,password}){
        let host = host;
        let username = username;
        let password = password;
    }
    concat({
        host:'',
        username:'name',
        password:'pwd'
    })
    ```

    

* rest参数

  * > 引入rest，用于获取函数的实参，用来代替arguments

  * **如果使用rest，rest参数必须要放到参数最后**
  
  * ```javascript
    //es5
    function date(){
        console.log(arguments); //console:object
    }
    //es6 rest参数
    function date(...args){
        console.log(args);//console:Array 提高了对于参数使用的灵活性
    }
    date('ming','hong','liang');
    
    ```
  
    

## 扩展运算符

> [...]扩展运算符可以将**数组**转换为逗号分隔的**参数序列**，
>
> **还可以解构字符串**使字符串转变成数组，eg：[...'sdfg'] // ['s','d','f','g']

* 数组的合并

  * ```javascript
    const yiban = ['ming','hong'];
    const erban = ['liang','xing'];
    //原来
    const hebing = yiban.concat(erban); //['ming','hong','liang','xing']
    //现在
    const hebing = [...yiban,...erban]; //['ming','hong','liang','xing']
    ```

    

* 数组的克隆

  * ```javascript
    const code = ['A','B','C'];
    const clone = [...code]; //浅拷贝
    ```

    

* 将伪数组转换为真正的数组

  * ```javascript
    const divs = document.getSelectAll('div'); //__proto__:Object 
    const divArr = [...divs]; //__proto__:Array 就可以使用array的方法啦
    ```

    

* 扩展运算符与rest参数的区别

  * ...是在实参，rest参数是在形参

## Symbol

* 表示独一无二的值，类似于字符串

### 创建Symbol

* let s=Symbol();
* let s1=Symbol.for（"卫玉星");
* 二者区别，比如创建两个参数i一样的Symbol对象，eg:let s2=Symbol.for（"卫玉星");
  * 第一种前后不同
  * 第二种前后相同
* 不能与其他数据进行运算

### Symbol应用

* 向对象中添加方法
  * up
  * down

### symbol内置属性

## 迭代器（Iterator）

> 是一种**接口**，为各种不同的数据结构提供统一的访问机制，任何数据结构只要部署Iterator 接口，就可以完成**遍历**操作。
>
> 这个接口指的就是对象里面的一个属性，属性名：**Symbol.iterator**

* 使用for。。。of。。。遍历
* 工作原理
  * 创建一个指针对象，指向当前数据结构的起始位置
  * 第一次调用对象的next方法，指针自动指向数据结构的第一个成员.
  * 接下来不断调用next方法，指针- -直往后移动，直到指向最后一个成员
  * 每调用next方法返回一个包含value和done 属性的对象

##### 注:需要自定义遍历数据的时候，要想到迭代器。

[D:\BSH\学习计划\code\es6\iterator.html](iterator迭代器案例)

## 生成器

> * 是一个特殊的函数
> * 异步编程的一种新的解决方案

### 声明



## async和await（es8）

可以让异步像同步一样

### async

#### 声明

* async 函数的返回值为promise对象
* promise 对象的结果由async函数执行的返回值决定

```javascript
asunc function fn(){
	return obj;
}
const result = fn();
console.log(result);
//只要你obj不是一个promise对象，那么result就是一个成功的promise，
//如果没有obj，result = Promise(resolve(obj))
//如果抛出错误 throw new Error('出错了！'); result = Promise(rejected)
//if obj为一个Promise((resolve,reject)=>{});promise是成功的result就是成功的，反之亦然
```

### await

* await 必须写在 async 函数中
* await 右侧的表达式一般为 promise 对象
* await 返回的是 promise 成功的值
* await 的 promise 失败了，就会抛出异常，需要通过try。。。catch捕获

### async_await

D:\BSH\学习计划\code\es6\async_await

## ES8对象方法的扩展

D:\BSH\学习计划\code\es8\对象方法扩展.html

## ES9

D:\BSH\学习计划\code\es9

* 对象展开和rest对象
* 正则扩展-命名捕获分组
* 正则扩展-反向断言
* 正则扩展-dotAll模式

## ES10

D:\BSH\学习计划\code\es10

* Object.fromEntries  将二维数组转换为对象
* trimStart 和 trimEnd 去除字符串前后空格
* flat 和 flatMap  将多维数组降维
* Symbol.prototype.description 获取Symbol对象的描述

## ES11

D:\BSH\学习计划\code\es11

* 私有属性  #属性
* Promise.allSettled()
* String.prototype.matchAll()
* 可选链操作符 ?.
* 动态import  ---懒加载
* bigInt数据类型   123n
* globalThis  全局对象
