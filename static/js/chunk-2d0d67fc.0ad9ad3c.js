(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d67fc"],{"738b":function(t,e,l){"use strict";l.r(e);var s=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"att-container"},[l("div",[l("div",{staticClass:"style-panel"},[l("div",{staticClass:"style-panel__header"},[l("div",{staticClass:"style-panel__header__wrapper",on:{click:function(e){t.collapse.title=!t.collapse.title}}},[l("div",{staticClass:"style-panel__header__collapse"},[t.collapse.title?l("i",{staticClass:"el-icon-arrow-up"}):l("i",{staticClass:"el-icon-arrow-down"})]),l("div",{staticClass:"style-panel__header__title"},[t._v("Fills")])])]),t.collapse.title?t._e():l("div",{staticClass:"style-panel__content"},[l("div",{staticClass:"style-item inline"},[l("div",{staticClass:"style-item__text"},[t._v("Enable")]),l("div",{staticClass:"style-item__content"},[l("div",{staticClass:"att-switch"},[l("el-switch",{attrs:{"active-color":"#86bd23","inactive-color":"#999"},model:{value:t.fills["enabled"],callback:function(e){t.$set(t.fills,"enabled",e)},expression:"fills['enabled']"}})],1)])]),t.fills["enabled"]?l("div",{staticClass:"style-item inline"},[l("div",{staticClass:"style-item__text"},[t._v("Background color")]),l("div",{staticClass:"style-item__content"},[l("div",{staticClass:"item-inline att-colorpicker"},[l("color-picker",{attrs:{color:t.fills["color"]},on:{"update:color":function(e){return t.$set(t.fills,"color",e)}}})],1)])]):t._e()])])])])},i=[],a=l("4940"),c={name:"PropFills",components:{},props:{fills:{type:Object,default:function(){return Object(a["j"])()}}},data:function(){return{collapse:{title:!1}}},computed:{},mounted:function(){},methods:{}},n=c,o=l("2877"),r=Object(o["a"])(n,s,i,!1,null,"d9e00aec",null);e["default"]=r.exports}}]);