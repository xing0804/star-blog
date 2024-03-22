---
title: Js 在工作中常用的几个方法
date: 2023-06-01
categories:
 - javaScript
tags:
 - js
---

## 获取当前时间，根据格式化不同的格式
``` javascript
const getDate = (pattern, date = new Date()) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const second = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    return pattern.replace('yyyy', year)
        .replace('MM', month)
        .replace('dd', day)
        .replace('hh', hour)
        .replace('mm', minute)
        .replace('ss', second);
}
```

## 判断是否为数组
``` javascript
const myIsArray = (arr) => {
    return Array.isArray(arr)
}
```

## 判断一个数组中是否包含另一个数组中所有元素
``` javascript
const isSubset = (arr1, arr2) => {
    return arr2.every(function(val) {
        return arr1.indexOf(val) >= 0;
    });
}
```

## 数组去重 Set
``` javascript
const arrayDeduplication = (arr) => {
    return [...new Set(arr)]
}
```

## 数组连接，对象连接
``` javascript
// 连接数组
const arrAll = arr1.concat(arr2);
const arrAll = [...arr1, ...arr2];
// 连接对象
const objAll = Object.assign(target,  ...source); // 浅拷贝
```

## Object方法总结
``` javascript
Object.keys(obj); // 获取对象的键 return []
Object.values(obj); // 获取对象的值 return []
Object.entries(obj); // 获取对象的键值对 return [[key, value], []]
```

## 判断一个Object是否为{}
``` javascript
const obj = {};
const isEmpty = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}
console.log(isEmpty(obj))
```

## 获取当前url
``` javascript
const getUrl = () => {
    return window.location.href;
}
```

## 强制跳转链接
``` javascript
window.localtion.replace(url);
```

## 设置cookie 并判断cookie是否拥有某个属性
``` javascript
document.cookie = 'name=name; value=value; expires=date; path=path'
const ifCookieExist = (attr) => {
    return document.cookie.split(';').some(ele => ele.trim().startWith(`${attr}=`))
}
```

## 获取视图宽度和高度
``` javascript
const getViewWH = () => {
    return {
        width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), // （不包含进度条， 包含进度条）
        height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    }
}
```

## 从树结构中查找对应属性值的这个对象

```js
/**
 * 从树结构中查找对应属性值的这个对象
 * @param treeData 树结构数据
 * @param attr 属性key
 * @param attrValue 属性值
 * @param childName 对应child字段名
 */
export const selectObjFromTree = (treeData, attr, attrValue, childName = 'children') => {
    treeData.forEach(ele => {
        if (ele[attr] === attrValue) {
            return ele;
        } else {
            if (ele[childName] && ele[childName].length > 0) {
                selectObjFromTree(ele[childName], attr, attrValue, childName);
            }
        }
    })
}
```

## 树型结构数据扁平化成数组

```js
/**
 * 树型结构数据扁平化成数组
 * @param treeData 树数据
 * @param childName 对应child字段名
 * @return {[]}
 */
export const treeFlatArray = (treeData, childName = 'children') => {
    const arr = [];
    treeData.forEach(ele => {
        arr.push(ele);
        ele[childName] && ele[childName].length > 0 && arr.push(...treeFlatArray(ele[childName]))
    });
    return arr;
}
```

## 手机号中间四位****处理

```js
str.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
```
