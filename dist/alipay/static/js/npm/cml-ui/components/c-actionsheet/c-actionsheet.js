var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([86],{304:function(t,e,n){n(305),n(306)},305:function(t,e){},306:function(t,e,n){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),l=function(t){return t&&t.__esModule?t:{default:t}}(a),c=function t(){i(this,t),this.props={show:{type:Boolean,default:!1},title:{type:String,default:""},cancelTxt:{type:String,default:"取消"},headerStyle:{type:String,default:""},cancelStyle:{type:String,default:""},contentStyle:{type:String,default:""},activeStyle:{type:String,default:""},list:{type:Array,default:[""]},pickerStyle:{type:Boolean,default:!1},active:{type:Number,default:-1}},this.computed={actionHeaderStyle:function(){return this.headerStyle},actionCancelStyle:function(){return this.cancelStyle},actionContentStyle:function(){return"height:"+100*this.list.length+"cpx"},textStyle:function(){return this.contentStyle},activeTextStyle:function(){return this.activeStyle},listHeight:function(){return 100*this.list.length}},this.methods={cancelclick:function(){this.$cmlEmit("cancel")},itemClick:function(t){this.$cmlEmit("select",{index:String(t.currentTarget.dataset.idx),value:t.currentTarget.dataset.value})},actiontap:function(){}}};e.default=new c,e.default=l.default.createComponent(e.default).getOptions()}},[304]);