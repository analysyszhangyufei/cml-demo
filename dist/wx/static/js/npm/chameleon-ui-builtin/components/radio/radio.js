var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([88],{474:function(e,t,n){n(475),n(476)},475:function(e,t){},476:function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(0),c=function(e){return e&&e.__esModule?e:{default:e}}(o),a=function(){function e(){i(this,e),this.props={checked:{type:Boolean,default:!1},label:{type:String},disabled:{type:Boolean,default:!1},position:{type:String,default:"left"},groupIndex:{type:Number,default:-1},color:{type:String,default:"#fc9153"}},this.data={innerChecked:!1},this.computed={radioStyle:function(){var e="";return this.disabled&&(e+="opacity:0.5;"),"right"==this.position?e+="position:absolute;right:0;margin-right:45cpx;":e+="margin-right:13cpx;",e},radioInnerStyle:function(){var e="";return this.innerChecked&&(e+="border:10cpx solid "+this.color+";"),e},radioClass:function(){return this.disabled?this.innerChecked?"cml-radio-selected-disabled":"cml-radio-unselect-disabled":this.innerChecked?"cml-radio-selected":"cml-radio-unselect"}},this.watch={checked:function(e){this.innerChecked=e}},this.methods={changeSelect:function(){if(!this.disabled){this.innerChecked=!this.innerChecked;var e={value:this.innerChecked};-1!==this.groupIndex&&(e.index=this.groupIndex),this.$cmlEmit("change",e),this.$cmlEmit("changeevent",e)}}}}return r(e,[{key:"mounted",value:function(){this.innerChecked=this.checked}}]),e}();t.default=new a,t.default=c.default.createComponent(t.default).getOptions()}},[474]);