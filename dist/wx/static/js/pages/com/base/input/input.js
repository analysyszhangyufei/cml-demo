var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([60],{221:function(e,t,n){n(222),n(223)},222:function(e,t){},223:function(e,t,n){function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var u=t[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(t,n,u){return n&&e(t.prototype,n),u&&e(t,u),t}}(),o=n(2),f=(u(o),n(0)),r=u(f),s=function(){function e(){i(this,e),this.data={isfocus:!1,inputValue:"",eventName:"触发的事件名称",keywords:"",winHeight:0,testMaxMinVal:"10"},this.computed={},this.watch={},this.methods={inputEvent:function(e){this.inputValue=e.detail.value},testEvent:function(e){this.eventName=e.type},bindblurevent:function(){this.isfocus=!1},testMaxMinEvent:function(e){var t=this;this.testMaxMinVal="",setTimeout(function(){t.testMaxMinVal=e.detail.value},300)}}}return a(e,[{key:"beforeCreate",value:function(){}},{key:"created",value:function(){}},{key:"beforeMount",value:function(){}},{key:"mounted",value:function(){var e=this;setTimeout(function(){e.isfocus=!0},300)}},{key:"beforeDestroy",value:function(){}},{key:"destroyed",value:function(){}}]),e}();t.default=new s,t.default=r.default.createPage(t.default).getOptions()}},[221]);