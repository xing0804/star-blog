---
title: 创建一个Vue3+ts+vite的项目
date: 2023-04-025
sidebar: 'auto'
categories:
 - Vue
tags:
 - vue
 - ts
 - vite
---

## 1、创建Vue3项目
```
// npm
npm create vite@latest
// yarn
npm create vite
```
接下来就按照提示选择或输入自己项目的配置
## 2、安装less/scss
```
npm add -D sass
npm add -D less
```
个人喜欢scss
## 3、自动导入
> **尤大推荐** 使用之后就不用导入hook、reactive、ref
```
npm install -D unplugin-vue-components unplugin-auto-import
```
在vite.config.ts中进行配置
```typeScript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
// 自动导入vue中hook reactive ref等
import AutoImport from "unplugin-auto-import/vite"
//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite';
 
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			//安装两行后你会发现在组件中不用再导入ref，reactive等
			imports: ['vue', 'vue-router'],
            //存放的位置
			dts: "src/auto-import.d.ts",
		}),
		Components({
			// 引入组件的,包括自定义组件
            // 存放的位置
            dts: "src/components.d.ts",
		}),
	],
 
})
```
## 4、安装router
```
// npm
npm install vue-router@4
// yarn
yarn add vue-router@4
```
main.ts文件引入
```typeScript
import { createApp } from 'vue'
import App from './App.vue'
 
 //routes
 import router from "./routes/index"; 
 
const app= createApp(App)
 
 //routes 
 app.use(router)  
app.mount('#app')
```
然后在src下面创建一个routes文件夹，创建一个index.ts文件
```typeScript
 import { createRouter, createWebHistory } from "vue-router";
 
 
let routes= [
    {
        path: '/',
        name: 'home',
        //使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
        component: () => import('../view/homeView.vue')
    },
    //{
        //配置404页面
        //path: '/:catchAll(.*)',
        //name: '404',
        //component: () => import(''),
    //}
]
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})
// 导出
export default router 
```
## 5、安装pinia
> 因为是Vue3+ts，安装pinia更好，vuex拥抱ts没有pinia友好
```
// npm
npm install pinia
// yarn
yarn add pinia
```
main.ts引用
```typeScript
import { createApp } from 'vue'
import App from './App.vue'
//pinia
import { createPinia } from 'pinia' 
const pinia = createPinia()
 
const app = createApp(App)
 
//pinia
app.use(pinia)
 
app.mount('#app')
```