var __CML__GLOBAL=require("../../../../../manifest.js");__CML__GLOBAL.webpackJsonp([93],{459:function(t,e,n){n(460),n(461)},460:function(t,e){},461:function(t,e,n){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),r=function(t){return t&&t.__esModule?t:{default:t}}(a),u=function t(){i(this,t),this.props={justify:{type:String,default:"center"},align:{type:String,default:"middle"},height:{type:Number,default:0},wrap:{type:Boolean,default:!1},margin:{type:Number,default:0}},this.computed={rowClass:function(){return"flex-row-"+this.justify+"-"+this.align},rowStyle:function(){var t="";return this.height&&(t+="height:"+this.height+"cpx;"),this.wrap&&(t+="flex-wrap:wrap;"),this.margin&&(t+="margin:"+this.margin/2+"cpx 0;"),t}}};e.default=new u,e.default=r.default.createComponent(e.default).getOptions()}},[459]);