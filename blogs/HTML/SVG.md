---
title: SVG介绍及在Vue项目中的应用
date: 2023-07-18
sidebar: 'auto'
tags:
 - svg

---

# SVG基础知识与使用

## 概述

1. SVG是 Scalable Vector Graphics 的缩写 意为可缩放矢量图形
2. SVG是一个基于文本的开放网络标准，用来定义用于网络的矢量图形
3. SVG图像在放大或改变尺寸的情况下其图形质量不会有所损失，因此能够优雅而简洁地渲染不同大小的图形，并和CSS，DOM，JavaScript和SMIL等其他网络标准无缝衔接
4. SVG 使用 XML 格式定义图形
5. SVG是万维网联盟的标准与诸如 DOM 和 XSL 之类的 W3C 标准是一个整体

## 优势

相对于其他格式的图像，SVG的优势有很多：

1. SVG 与 JPEG 和 GIF 图像比起来，尺寸更小，且可压缩性更强。
2. SVG图像中的文本是可选的，同时也是可搜索的，且可以与 JavaScript 技术一起运行
3. SVG可在图像质量不下降的情况下被放大和缩小
4. SVG可被非常多的工具读取和修改（比如文本编辑器）
5. SVG图像不依赖分辨率，可在任何的分辨率下被高质量地打印
6. SVG文件是纯粹的XML
7. SVG是开放的标准

> PS: 需要注意的是因为XML和HTML不同，XML是区分大小写的，而SVG是使用XML格式来定义图形，所以在编写SVG的的时候元素和属性必须按标准格式书写。

## 使用

### 如何在HTML中使用SVG

SVG 文件有5种方法嵌入 HTML 文档：`<img>`、`<embed>`、`<object> `、 `<iframe>`、直接嵌入HTML代码中。

#### 代码案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
    </svg>
    <!-- <img src="circle1.svg" alt=""/>
    <embed src="circle1.svg" type="image/svg+xml" />
    <object data="circle1.svg" type="image/svg+xml"></object>
    <iframe src="circle1.svg"></iframe> -->
</body>

</html>
```

### 属性

#### width，height

width、height设置用来设置SVG的宽高。

> PS：在不设置宽高的情况下，默认为300 * 150，当内部元素大于300 * 150时，大于部分会被隐藏。

#### viewBox

viewBox 属性定义了SVG中可以显示的区域。

语法：`viewBox="x y w h"` x、y为起始点，w、h为显示区域的宽高。

#### version

version属性用于指明SVG的版本，也就是指明SVG文档应该遵循的规范。version属性纯粹就是一个说明，对渲染或处理没有任何影响。

#### xmlns和xmlns:xlink

### 基本图形

* 圆形 circle
  * cx，cy：x，y坐标
  * r：半径
* 矩形 rect
  * x，y：起始点坐标
  * rx，ry：圆角x，y轴方向的半径
  * width，height：矩形的宽高
* 椭圆 ellipse
  * cx，cy：坐标
  * rx，ry：x轴半径，y轴半径
* 线条 line
  * x1，y1：起点坐标
  * x2，y2：终点坐标
* 折线 polyline
  * points：点集数列，其中每个点都必须包含2个数字，一个是x坐标，一个是y坐标
    * `point=“0 0, 20 40, 70 80”`
* 多边形 polygon
  * points为点集数列，其中每个点都必须包含2个数字，一个是x坐标，一个是y坐标
    * `points="0 0, 20 40, 70 80, 100 90, 200 30, 250 50"`
* 路径 path
  * d: 为一个点集数列以及其它绘制路径的信息
    * `d="M50 50 H 200 V 200 H 50 L 50 50"`

