var __CML__GLOBAL=require("../../../manifest.js");__CML__GLOBAL.webpackJsonp([64],{196:function(t,s,e){e(197),e(198)},197:function(t,s){},198:function(t,s,e){function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(Array.isArray(t)){for(var s=0,e=Array(t.length);s<t.length;s++)e[s]=t[s];return e}return Array.from(t)}Object.defineProperty(s,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=e(2),r=n(a),c=e(0),f=n(c);s.default={data:{title:"cml.initSocket",subtitle:"演示 websocket 链接，发送，接收和关闭",respones:[],isShowLoading:!1,msgs:{},ws:null,cell:{title:"WebSocket 演示",list:[{title:"初始化一个 socket 链接",btnText:"点击开启",extraData:{action:"open"}},{title:"发送数据",btnText:"点击发送",extraData:{action:"send"}},{title:"关闭 socket 链接",btnText:"点击关闭",extraData:{action:"close"}}]}},methods:{onBtnClicked:function(t){var s=t.detail.extraData.action;this[void 0===s?"open":s]()},showLoading:function(){this.isShowLoading=!0},hideLoading:function(){this.isShowLoading=!1},flushMsg:function(){this.msgs={},this.flatten2Responses()},flatten2Responses:function(){this.respones=Object.entries(this.msgs).map(function(t){return{name:t[0],value:"string"==typeof t[1]&&t[1],child:"object"===o(t[1])&&t[1]}})},appendMsg:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(t in this.msgs)if("string"==typeof this.msgs[t]&&(this.msgs[t]=[this.msgs[t]]),"string"==typeof s)this.msgs[t].push(s);else{var e;(e=this.msgs[t]).push.apply(e,i(s))}else this.msgs[t]=s;this.flatten2Responses()},open:function(){var t=this,s=this.ws=r.default.initSocket("wss://www.deskry.com:8008/");this.showLoading(),this.flushMsg(),this.appendMsg("建立链接","wss://www.deskry.com:8008/"),s.onopen(function(){t.hideLoading(),t.appendMsg("建立链接","链接成功")}),s.onmessage(function(s){t.hideLoading(),t.appendMsg("接收透传信息",s.data)}),s.onerror(function(s){t.hideLoading(),t.appendMsg("链接错误",s.message)}),s.onclose(function(){t.hideLoading(),t.appendMsg("链接关闭","关闭成功"),t.ws=null})},send:function(){if(!this.ws)return this.appendMsg("错误提示","请先开启 socket 链接");this.showLoading(),this.appendMsg("发送信息",["一段文本信息: Hi, this is cml","一个数组: 1,2,3"]),this.ws.send({text:"Hi, this is cml",arr:["1","2","3"]})},close:function(){if(!this.ws)return this.appendMsg("错误提示","请先开启 socket 链接");this.ws.close()}}},s.default=f.default.createPage(s.default).getOptions()}},[196]);