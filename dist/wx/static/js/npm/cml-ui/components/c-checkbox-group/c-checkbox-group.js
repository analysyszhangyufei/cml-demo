var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([84],{346:function(t,e,i){i(347),i(348)},347:function(t,e){},348:function(t,e,i){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=i(0),l=function(t){return t&&t.__esModule?t:{default:t}}(a),o=function t(){n(this,t),this.props={option:{type:Array,default:[{}]},position:{type:String,default:"left"},horizontal:{type:Boolean,default:!1},uncheckIcon:{type:String,default:""},checkedIcon:{type:String,default:""},cstyle:{type:String,default:""},itemStyle:{type:String,default:""}},this.data={},this.computed={horizontalStyle:function(){return this.horizontal?"display:inline-flex;flex-direction:row;align-items:center;flex-wrap:wrap;flex:1;"+this.cstyle:this.cstyle},subPosition:function(){return"right"!==this.position||this.horizontal?"left":"right"}},this.watch={},this.methods={valueChange:function(t){var e=JSON.parse(JSON.stringify(this.option)),i=e[t.detail.index];i={checked:t.detail.value,label:i.label,disabled:i.disabled},e[t.detail.index]=i;var n=[];e.forEach(function(t){t.checked&&n.push(t.label)}),this.$cmlEmit("groupchange",{index:t.detail.index,value:e,selected:n})}}};e.default=new o,e.default=l.default.createComponent(e.default).getOptions()}},[346]);