var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([52],{215:function(e,t,n){n(216),n(217)},216:function(e,t){},217:function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=n(2),l=i(u),r=n(0),d=i(r),f=function(){function e(){a(this,e),this.data={allLine:["chameleon的目标是 真正专注于让一套代码运行多端的开发框架，提供标准的MVVM架构开发模式统一各类终端","chameleon主要特性: ","1、简洁强大的构建配置","2、语法统一、快速上手","3、方便的数据管理方案","4、差异化方案","......"],addLine:[],pageHeight:0},this.computed={addTextClass:function(){return this.allLine.length===this.addLine.length?"disable-text":"active-text"},removeTextClass:function(){return 0===this.addLine.length?"disable-text":"active-text"}},this.watch={},this.methods={add:function(){this.addLine.length>=this.allLine.length||this.addLine.push(this.allLine[this.addLine.length])},remove:function(){this.addLine.length<=0||this.addLine.pop()}}}return o(e,[{key:"beforeCreate",value:function(){}},{key:"created",value:function(){var e=this;l.default.getSystemInfo().then(function(t){var n=t.viewportHeight;n&&(e.pageHeight=n)})}},{key:"beforeMount",value:function(){}},{key:"mounted",value:function(){}},{key:"beforeDestroy",value:function(){}},{key:"destroyed",value:function(){}}]),e}();t.default=new f,t.default=d.default.createPage(t.default).getOptions()}},[215]);