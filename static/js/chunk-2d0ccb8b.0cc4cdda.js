(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ccb8b"],{"4eae":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"att-container"},[e("div",[e("div",{staticClass:"style-panel"},[e("div",{staticClass:"style-panel__header"},[e("div",{staticClass:"style-panel__header__wrapper",on:{click:function(s){t.collapse.title=!t.collapse.title}}},[e("div",{staticClass:"style-panel__header__collapse"},[t.collapse.title?e("i",{staticClass:"el-icon-arrow-up"}):e("i",{staticClass:"el-icon-arrow-down"})]),e("div",{staticClass:"style-panel__header__title"},[t._v(" "+t._s(t.$t("Props.Visual"))+" ")])])]),t.collapse.title?t._e():e("div",{staticClass:"style-panel__content"},[e("div",{staticClass:"style-item"},[e("div",{staticClass:"style-item__text"},[t._v(" "+t._s(t.$t("Props.Opacity"))+" ")]),e("div",{staticClass:"style-item__content"},[e("div",{staticClass:"att-slider"},[e("el-slider",{attrs:{step:.05,max:1,min:0},on:{change:t.valueUpdated},model:{value:t.visual["opacity"],callback:function(s){t.$set(t.visual,"opacity",s)},expression:"visual['opacity']"}})],1)])]),e("div",{staticClass:"style-item inline"},[e("div",{staticClass:"style-item__text"},[t._v(" "+t._s(t.$t("Props.Visible"))+" ")]),e("div",{staticClass:"style-item__content"},[e("div",{staticClass:"att-switch"},[e("el-switch",{attrs:{"active-color":"#86bd23","inactive-color":"#999"},on:{change:t.valueUpdated},model:{value:t.visual["visible"],callback:function(s){t.$set(t.visual,"visible",s)},expression:"visual['visible']"}})],1)])])])])])])},i=[],l=e("4940"),c={name:"PropVisual",components:{},props:{visual:{type:Object,default:function(){return Object(l["c"])()}}},data:function(){return{collapse:{title:!1}}},computed:{},mounted:function(){},methods:{valueUpdated:function(){this.$emit("updated")}}},n=c,o=e("2877"),d=Object(o["a"])(n,a,i,!1,null,"f8600502",null);s["default"]=d.exports}}]);