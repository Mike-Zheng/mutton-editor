(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40ed69fa"],{"21a6":function(t,e,n){(function(n){var o,a,s;(function(n,i){a=[],o=i,s="function"===typeof o?o.apply(e,a):o,void 0===s||(t.exports=s)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function o(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){c(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function s(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(o){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,r=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(t,e,n){var r=i.URL||i.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?s(c):a(c.href)?o(t,e,n):s(c,c.target="_blank")):(c.href=r.createObjectURL(t),setTimeout((function(){r.revokeObjectURL(c.href)}),4e4),setTimeout((function(){s(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,i){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,i),n);else if(a(t))o(t,n,i);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout((function(){s(r)}))}}:function(t,e,n,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return o(t,e,n);var s="application/octet-stream"===t.type,c=/constructor/i.test(i.HTMLElement)||i.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||s&&c||r)&&"undefined"!=typeof FileReader){var p=new FileReader;p.onloadend=function(){var t=p.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},p.readAsDataURL(t)}else{var u=i.URL||i.webkitURL,d=u.createObjectURL(t);a?a.location=d:location.href=d,a=null,setTimeout((function(){u.revokeObjectURL(d)}),4e4)}});i.saveAs=c.saveAs=c,t.exports=c}))}).call(this,n("c8ba"))},"53f5":function(t,e,n){"use strict";n("b846")},b846:function(t,e,n){},ce01:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"att-container"},[n("div",[n("div",{staticClass:"style-panel"},[n("div",{staticClass:"style-panel__header"},[n("div",{staticClass:"style-panel__header__wrapper",on:{click:function(e){t.collapse.title=!t.collapse.title}}},[n("div",{staticClass:"style-panel__header__collapse"},[t.collapse.title?n("i",{staticClass:"el-icon-arrow-up"}):n("i",{staticClass:"el-icon-arrow-down"})]),n("div",{staticClass:"style-panel__header__title"},[t._v(" "+t._s(t.$t("Props.Export"))+" ")])])]),t.collapse.title?t._e():n("div",{staticClass:"style-panel__content"},[n("div",{staticClass:"style-item"},[n("div",{staticClass:"style-item__text"},[t._v(" "+t._s(t.$t("Props.Device_Screen"))+" ")]),n("div",{staticClass:"style-item__content"},[n("div",{staticClass:"att-select"},[n("el-select",{attrs:{"popper-class":"att-select-dropdown",placeholder:""},model:{value:t.ext,callback:function(e){t.ext=e},expression:"ext"}},t._l(t.exportExt,(function(t,e){return n("el-option",{key:e,attrs:{label:t.name,value:t.ext}})})),1)],1)])]),n("div",{staticClass:"style-item"},[n("div",{staticClass:"style-item__content"},[n("el-button",{staticStyle:{width:"100%"},on:{click:t.exportPage}},[t._v(" "+t._s(t.$t("Props.Export"))+" ")])],1)])])])])])},a=[],s=n("21a6"),i={name:"PropExport",components:{},props:{},data:function(){return{collapse:{title:!1},ext:"png",exportExt:[{name:".png",ext:"png"},{name:".jpg",ext:"jpg"},{name:".svg",ext:"svg"}]}},computed:{document:function(){return this.$store.state.editor.document},pageFrame:{get:function(){return this.$store.state.editor.document.frame},set:function(t){this.$store.commit("editor/UPDATE_DOCUMENT",{frame:{height:parseInt(t.height),width:parseInt(t.width)}})}},isLoading:{get:function(){return this.$store.state.app.isLoading},set:function(t){this.$store.commit("app/SET_APP",{isLoading:t})}}},mounted:function(){},methods:{exportPage:function(t){console.log("export",this.ext),this.isLoading=!0;var e=this;try{var n=document.getElementById("canvasInner"),o=this.document.$name;switch(this.ext){case"png":this.$exportImage.toBlob(n).then((function(t){Object(s["saveAs"])(t,o+".png"),e.isLoading=!1}));break;case"jpg":this.$exportImage.toJpeg(n,{quality:.95}).then((function(t){Object(s["saveAs"])(t,o+".jpg"),e.isLoading=!1}));break;case"svg":this.$exportImage.toSvg(n,{filter:function(){return"i"!==n.tagName}}).then((function(t){Object(s["saveAs"])(t,o+".svg"),e.isLoading=!1}));break;default:break}}catch(a){this.$message.error(this.$t("Message.Export_failed")),this.isLoading=!1}}}},r=i,c=(n("53f5"),n("2877")),l=Object(c["a"])(r,o,a,!1,null,"1919d815",null);e["default"]=l.exports}}]);