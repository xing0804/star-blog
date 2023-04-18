---
title: js 类型及检测方式
date: 2023-04-03
sidebar: 'auto'
categories:
 - javaScript
tags:
 - js
---

## JS内置类型

### 基础类型（原始数据类型）

* undefined
* Null
* String
* Number
* Boolean
* Symbol （ES6新增）
* BigInt（ES10新增）

> 存储在栈内存中,在引用或拷贝时，会创建一个完全相等的变量；占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储。

### 引用数据类型

* Object
  * Object
  * Array
  * RegExp
  * Date
  * Math
  * Function

> 存储在堆内存，存储的是地址，多个引用指向同一个地址，这里会涉及一个“共享”的概念；占据空间大、大小不固定。引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

## 数据类型检测

### typeof

> 对于原始数据类型来说,除了null都可以显示正确

```javascript
typeof null // object
```

> 对于引用数据类型,除了函数都显示object

```javascript
typeof function() {} // function
```

想判断一个对象正确类型,可以使用instanceof

### instanceof

> 内部机制: 判断对象原型链中是不是能找到类型的prototype

可以准确判断引用数据类型,但是不能判断基础数据类型

```javascript
2 instanceof Number // false
true instanceof Boolean // false
[] instanceof Array // true
```

### constructor

> 如果是个简单的数据,直接判断是可以准确判断出来类型的,但是如果自己创建一个对象,然后更改它的原型,constructor就不可靠了

```javascript
(5).constructor === Number // true
(false).constructor === Boolean // true
({}).constructor === Object // true

function Fn(){};
fn.prototype = new Array();
var f = new Fn();

console.log(f.constructor === Fn); // false
console.log(f.constructor === Array); // true
```

### **Object.prototype.toString.call()**

> `toString()` 是 `Object` 的原型方法，调用该方法，可以统一返回格式为 `“[object Xxx]”` 的字符串，其中 `Xxx` 就是对象的类型。对于 `Object` 对象，直接调用 `toString()` 就能返回 `[object Object]`；而对于其他对象，则需要通过 `call` 来调用，才能返回正确的类型信息。

```javascript
Object.prototype.toString({})       // "[object Object]"
Object.prototype.toString.call({})  // 同上结果，加上call也ok
Object.prototype.toString.call(1)    // "[object Number]"
```

### 全局通用的数据类型判断方法

```javascript
function getType(obj){
  let type  = typeof obj;
  if (type !== "object") {    // 先进行typeof判断，如果是基础数据类型，直接返回
    return type;
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');  // 注意正则中间有个空格
}
/* 代码验证，需要注意大小写，哪些是typeof判断，哪些是toString判断？思考下 */
getType([])     // "Array" typeof []是object，因此toString返回
getType('123')  // "string" typeof 直接返回
getType(window) // "Window" toString返回
getType(null)   // "Null"首字母大写，typeof null是object，需toString来判断
getType(undefined)   // "undefined" typeof 直接返回
getType()            // "undefined" typeof 直接返回
getType(function(){}) // "function" typeof能判断，因此首字母小写
getType(/123/g)      //"RegExp" toString返回
```

