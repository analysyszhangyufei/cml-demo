var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([81],{351:function(t,e,i){i(352),i(353)},352:function(t,e){},353:function(t,e,i){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(0),a=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function(){function t(){n(this,t),this.props={option:{type:Array,default:[{}]},position:{type:String,default:"left"},horizontal:{type:Boolean,default:!1},color:{type:String,default:"#fc9153"},cstyle:{type:String,default:""},itemStyle:{type:String,default:""}},this.data={radioList:[]},this.computed={horizontalStyle:function(){return this.horizontal?"display:inline-flex;flex-direction:row;align-items:center;flex-wrap:wrap;flex:1;"+this.cstyle:this.cstyle},subPosition:function(){return"right"!==this.position||this.horizontal?"left":"right"}},this.watch={option:function(t){try{this.radioList=JSON.parse(JSON.stringify(t))}catch(t){console.error("【c-radio-group】入参option有问题，",t)}}},this.methods={valueChange:function(t){this.radioList=this.radioList.map(function(e,i){return i==t.detail.index?e.checked=!0:e.checked=!1,e}),this.$cmlEmit("groupchange",{value:this.radioList,index:t.detail.index})}}}return o(t,[{key:"mounted",value:function(){try{this.radioList=JSON.parse(JSON.stringify(this.option))}catch(t){console.error("【c-radio-group】入参option有问题，",t)}}}]),t}();e.default=new u,e.default=a.default.createComponent(e.default).getOptions()}},[351]);