var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([8],{430:function(e,t,n){n(431),n(432)},431:function(e,t){},432:function(e,t,n){function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}return function(t,n,c){return n&&e(t.prototype,n),c&&e(t,c),t}}(),h=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(h),u=function(){function e(){c(this,e),this.props={checked:{type:Boolean,default:!1},label:{type:String,default:""},disabled:{type:Boolean,default:!1},position:{type:String,default:"left"},groupIndex:{type:Number,default:-1},checkedIcon:{type:String,default:""},uncheckIcon:{type:String,default:""},cstyle:{type:String,default:""}},this.data={checkedImg:n(433),uncheckImg:n(434),innerChecked:!1},this.computed={checkStyle:function(){var e="";return this.disabled&&(e+="opacity:0.5;"),"right"==this.position?e+="position:absolute;right:0;margin-right:45cpx;":e+="margin-right:13cpx;",e},checkImg:function(){return this.innerChecked?this.checkedImg:this.uncheckImg},checkClass:function(){return this.disabled?"cml-checkbox-disabled":this.innerChecked?"cml-checkbox-checked":"cml-checkbox-uncheck"},computedCstyle:function(){return this.cstyle}},this.watch={checked:function(e){this.innerChecked=e},uncheckIcon:function(){this.initImg()},checkedIcon:function(){this.initImg()}},this.methods={changeCheck:function(){if(!this.disabled){this.innerChecked=!this.innerChecked;var e={value:this.innerChecked,index:this.groupIndex};this.$cmlEmit("changeevent",e),this.$cmlEmit("change",e)}},initImg:function(){this.uncheckIcon&&(this.uncheckImg=this.uncheckIcon),this.checkedIcon&&(this.checkedImg=this.checkedIcon)}}}return i(e,[{key:"created",value:function(){var e=this.checked;this.innerChecked=e}},{key:"mounted",value:function(){this.initImg()}}]),e}();t.default=new u,t.default=o.default.createComponent(t.default).getOptions()},433:function(e,t,n){e.exports=n.p+"static/img/selected_520dcc8.png"},434:function(e,t,n){e.exports=n.p+"static/img/unselected_4e38c39.png"}},[430]);