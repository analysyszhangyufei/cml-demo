var __CML__GLOBAL=require("../../manifest.js");__CML__GLOBAL.webpackJsonp([69],{227:function(e,t,n){n(228),n(229)},228:function(e,t){},229:function(e,t,n){function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var u=t[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(t,n,u){return n&&e(t.prototype,n),u&&e(t,u),t}}(),o=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(o),f=function(){function e(){u(this,e),this.data={isfocus:!1,inputValue:"",eventName:"触发的事件名称"},this.computed={},this.watch={},this.methods={inputEvent:function(e){this.inputValue=e.detail.value},testEvent:function(e){this.eventName=e.type},bindblurevent:function(){this.isfocus=!1}}}return i(e,[{key:"mounted",value:function(){var e=this;setTimeout(function(){e.isfocus=!0},300)}},{key:"beforeDestroy",value:function(){}},{key:"destroyed",value:function(){}}]),e}();t.default=new f,t.default=a.default.createComponent(t.default).getOptions()}},[227]);