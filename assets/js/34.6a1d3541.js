(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{530:function(s,t,a){"use strict";a.r(t);var r=a(3),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"使用async属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用async属性"}},[s._v("#")]),s._v(" 使用async属性")]),s._v(" "),t("ul",[t("li",[s._v("如果script标签设置了这个值，则说明引入的js需要异步加载和执行，注意此属性只适用于外部引入的js")]),s._v(" "),t("li",[s._v("在有async的情况下脚本异步加载和执行，并且不会阻塞页面加载，但是也并不会保证其加载的顺序，如果多个async优先执行，则先加载好的js文件，所以使用此方式- 加载的js文件最好不要包含其他依赖")])]),s._v(" "),t("h2",{attrs:{id:"使用defer属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用defer属性"}},[s._v("#")]),s._v(" 使用defer属性")]),s._v(" "),t("ul",[t("li",[s._v("如果使用此属性，也将会使js异步加载执行，且会在文档被解析完成后执行，这样就不会阻塞页面加载，但是它将会按照原来的执行顺序执行，对于有依赖关系的也可使用")]),s._v(" "),t("li",[s._v("html4.0中定义了defer，html5.0中定义了async")])]),s._v(" "),t("h2",{attrs:{id:"不同情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同情况"}},[s._v("#")]),s._v(" 不同情况")]),s._v(" "),t("ul",[t("li",[s._v("如果只有async，那么脚本在下载完成后异步执行。")]),s._v(" "),t("li",[s._v("如果只有defer，那么脚本会在页面解析完毕之后执行。")]),s._v(" "),t("li",[s._v("如果都没有，那么脚本会在页面中马上解执行，停止文档解析阻塞页面加载")]),s._v(" "),t("li",[s._v("如果都有那么同async，当然此情况一般用于html的版本兼容下，如果没有async则defer生效")]),s._v(" "),t("li",[s._v("不过还是推荐直接把script标签放在body底部")])])])}),[],!1,null,null,null);t.default=e.exports}}]);