(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{436:function(v,_,l){"use strict";l.r(_);var t=l(2),i=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"string"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[v._v("#")]),v._v(" String")]),v._v(" "),_("h3",{attrs:{id:"其他"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[v._v("#")]),v._v(" 其他")]),v._v(" "),_("ul",[_("li",[v._v("单引号，双引号----json字符串必须使用双引号")]),v._v(" "),_("li",[v._v("length，是String得一个属性")]),v._v(" "),_("li",[v._v("str与json之间转换\n"),_("ul",[_("li",[v._v("JSON.stringify() 将对象转化为字符串")]),v._v(" "),_("li",[v._v("JSON.parse() 将字符串转化为对象")])])])]),v._v(" "),_("h3",{attrs:{id:"方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[v._v("#")]),v._v(" 方法")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("str.charAt(index)")]),v._v(" "),_("ul",[_("li",[v._v("参数：index  Number")]),v._v(" "),_("li",[v._v("返回值：返回下标为index的子字符串  String")])])]),v._v(" "),_("li",[_("p",[v._v("str.indexOf('a');")]),v._v(" "),_("ul",[_("li",[v._v("参数：要查询的字符串")]),v._v(" "),_("li",[v._v("返回值：Number 返回目标字符串的下标位置，未找到：-1")])])]),v._v(" "),_("li",[_("p",[v._v("str.lastIndexOf('a');")]),v._v(" "),_("ul",[_("li",[v._v("参数、返回值同上")]),v._v(" "),_("li",[v._v("倒序查找")])])]),v._v(" "),_("li",[_("p",[v._v("str.replace('需要替换的内容','替换后的内容')；")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("功能：将指定的字符串替换，"),_("strong",[v._v("只能替换第一个")])])]),v._v(" "),_("li",[_("p",[v._v("返回值：String  返回替换后的字符串")])]),v._v(" "),_("li",[_("blockquote",[_("p",[v._v("不修改原字符串")])])])])]),v._v(" "),_("li",[_("p",[v._v("str.slice(起始下标，结束下标)；")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("功能：截取字符串")])]),v._v(" "),_("li",[_("p",[v._v("返回值：String 截取str从起始下标开始到结束下标结束的字符串")])]),v._v(" "),_("li",[_("blockquote",[_("p",[v._v("截取时：包含起始下标，不包含结束下标")]),v._v(" "),_("p",[v._v("不修改原字符串")]),v._v(" "),_("p",[v._v("识别负数，eg：-1:倒数第一个字符")])])])])]),v._v(" "),_("li",[_("p",[v._v("str.substring(起始下标，结束下标)")]),v._v(" "),_("ul",[_("li",[v._v("功能：截取字符串，其他同slice，但是"),_("strong",[v._v("不识别负数")])])])]),v._v(" "),_("li",[_("p",[v._v("str.substr(起始下标，截取的长度)")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("返回值：String  截取从起始下标开始的长度为截取长度的字符串")])]),v._v(" "),_("li",[_("blockquote",[_("p",[v._v("包含起始下标的字符")]),v._v(" "),_("p",[v._v("不修改原来字符串")]),v._v(" "),_("p",[v._v("起始下标识别负数")])])])])]),v._v(" "),_("li",[_("p",[v._v("str.split(',');")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("功能：用逗号将str拆分成一个数组")])]),v._v(" "),_("li",[_("p",[v._v("返回值：Array  原字符串被参数字符串分割之后的"),_("strong",[v._v("数组")])])]),v._v(" "),_("li",[_("blockquote",[_("p",[v._v("不修改原字符串")]),v._v(" "),_("p",[v._v("参数字符串会被删除")])])])])]),v._v(" "),_("li",[_("p",[v._v("str.toLowerCase()")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("将str字符串中的字符转化为小写")])]),v._v(" "),_("li",[_("blockquote",[_("p",[v._v("不修改原字符串")])])])])]),v._v(" "),_("li",[_("p",[v._v("str.toUpperCase()")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("将str字符串中的字符转化为大写")])]),v._v(" "),_("li",[_("blockquote",[_("p",[v._v("不修改原字符串")])])])])]),v._v(" "),_("li",[_("p",[v._v("str.trim()")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("返回值：去掉str的左右空格之后的字符串")])]),v._v(" "),_("li",[_("blockquote",[_("p",[v._v("不修改原字符串")])])])])]),v._v(" "),_("li",[_("p",[v._v("str.match()")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("功能：在str中检索指定的值，或找到一个或多个正则表达式的匹配")])]),v._v(" "),_("li",[_("p",[v._v("参数： 可以是字符串或者正则表达式")])]),v._v(" "),_("li",[_("p",[v._v("返回值：检索到的结果")])]),v._v(" "),_("li",[_("blockquote",[_("p",[v._v("不修改原字符串")])])])])]),v._v(" "),_("li",[_("p",[v._v("str.concat()")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("参数：多个字符串")])]),v._v(" "),_("li",[_("p",[v._v("返回值，连接，拼接之后的长字符串")])]),v._v(" "),_("li",[_("blockquote",[_("p",[v._v("不会修改原字符串")])])])])]),v._v(" "),_("li",[_("p",[v._v("str.padStart()、str.padEnd()")])])])])}),[],!1,null,null,null);_.default=i.exports}}]);