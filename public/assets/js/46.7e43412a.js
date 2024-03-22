(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{457:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"express"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#express"}},[s._v("#")]),s._v(" express")]),s._v(" "),t("blockquote",[t("p",[s._v("node开发框架")])]),s._v(" "),t("h3",{attrs:{id:"中间件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中间件"}},[s._v("#")]),s._v(" 中间件")]),s._v(" "),t("h4",{attrs:{id:"中间件使用注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中间件使用注意事项"}},[s._v("#")]),s._v(" 中间件使用注意事项")]),s._v(" "),t("ul",[t("li",[s._v("一定要在路由之前注册中间件")]),s._v(" "),t("li",[s._v("客户端发送过来的请求，可以连续调用多个中间件进行处理")]),s._v(" "),t("li",[s._v("执行完中间件的业务代码之后，不要忘记调用next()函数")]),s._v(" "),t("li",[s._v("为了防止代码逻辑混乱，调用next()函数后不要再写额外的代码")]),s._v(" "),t("li",[s._v("连续调用多个中间件时，多个中间件之间，共享req和res对象")])]),s._v(" "),t("h4",{attrs:{id:"中间件分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中间件分类"}},[s._v("#")]),s._v(" 中间件分类")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("应用级别中间件")]),s._v(" "),t("blockquote",[t("p",[s._v("绑定在app上，使用app.use()或者app.get()/post()")])]),s._v(" "),t("ul",[t("li",[s._v("全局中间件")]),s._v(" "),t("li",[s._v("局部中间件")])])]),s._v(" "),t("li",[t("p",[s._v("路由级别的中间件")]),s._v(" "),t("blockquote",[t("p",[s._v("绑定在router对象上")])])]),s._v(" "),t("li",[t("p",[s._v("错误级别的中间件")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("作用：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。")])]),s._v(" "),t("li",[t("p",[s._v("格式：function（err,req,res,next）")])]),s._v(" "),t("li",[t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" req"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" next")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'发生了错误：'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("send")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Error: '")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])])]),s._v(" "),t("li",[t("p",[s._v("Express内置的中间件")]),s._v(" "),t("blockquote",[t("p",[s._v("自Express 4.16.0版本开始，Express 内置了3个常用的中间件，极大的提高了Express项目的开发效率和体验:")])]),s._v(" "),t("ul",[t("li",[s._v("express.static 快速托管静态资源的内置中间件，例如:HTML文件、图片、CSS样式等（无兼容性)")]),s._v(" "),t("li",[s._v("express.json解析JSON格式的请求体数据（有兼容性，仅在4.16.0+版本中可用)")]),s._v(" "),t("li",[s._v("express.urlencoded解析URL-encoded格式的请求体数据（有兼容性，仅在4.16.0+版本中可用)")])])])]),s._v(" "),t("h3",{attrs:{id:"cors跨域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cors跨域"}},[s._v("#")]),s._v(" Cors跨域")]),s._v(" "),t("h4",{attrs:{id:"cors简单请求与预检请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cors简单请求与预检请求"}},[s._v("#")]),s._v(" cors简单请求与预检请求")])])}),[],!1,null,null,null);t.default=e.exports}}]);