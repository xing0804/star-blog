(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{428:function(t,a,v){"use strict";v.r(a);var e=v(2),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"diff算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diff算法"}},[t._v("#")]),t._v(" Diff算法")]),t._v(" "),a("blockquote",[a("p",[t._v("diff算法就是将虚拟节点进行对比,并返回一个patch对象来存储两个节点不同的地方,最后用返回的这个patch对象记录的消息去局部更新Dom")])]),t._v(" "),a("h3",{attrs:{id:"特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),a("ul",[a("li",[t._v("只会同层级进行比较,不会跨层级比较")]),t._v(" "),a("li",[t._v("在比较过程中,循环从两边向中间比较")]),t._v(" "),a("li",[t._v("边比较边更新")])]),t._v(" "),a("h3",{attrs:{id:"diff算法步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diff算法步骤"}},[t._v("#")]),t._v(" diff算法步骤")]),t._v(" "),a("ul",[a("li",[t._v("先用js对象结构标识DOM树的结构,然后用这个树解析构建一个真正的DOM树,插到文档当中")]),t._v(" "),a("li",[t._v("在数据进行变更的时候,构建一个新的对象树,然后用新的树和旧的树进行不叫(diff),记录两个树的差异")]),t._v(" "),a("li",[t._v("把新树记录的差异应用到旧树所构建的真正DOM树上(patch),更新视图")])]),t._v(" "),a("h3",{attrs:{id:"key的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key的作用"}},[t._v("#")]),t._v(" key的作用")]),t._v(" "),a("ul",[a("li",[t._v("为了高效的更新虛拟DOM，其原理是vue在patch（补丁）过程中通过key可以精准判断两个节点是否是同一个，从而避免频繁更新不同元素，使得整个patch过程更加高效，减少DOM操作量，提高性能。")]),t._v(" "),a("li",[t._v("若不设置key还可能在列表更新时引发一些隐蔽的bug.eg:某行不该更新的却更新了")]),t._v(" "),a("li",[t._v("vue中在使用相同标签名元素的过渡切换时，也会使用到key属性，其目的也是为了让vue可以区分它们，否则vue只会替换其内部属性而不会触发过渡效果。")])])])}),[],!1,null,null,null);a.default=s.exports}}]);