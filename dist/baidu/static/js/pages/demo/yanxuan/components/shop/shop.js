var __CML__GLOBAL=require("../../../../../manifest.js");__CML__GLOBAL.webpackJsonp([55],{378:function(e,t,n){n(379),n(380)},379:function(e,t){},380:function(e,t,n){function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(2),r=a(i),f=n(21),l=a(f),s=n(0),c=a(s),d=function(){function e(){o(this,e),this.data={rightbtn:{name:"编辑"},goods:[],goodslist:[],scrollerHeight:0},this.methods={godetail:function(){r.default.navigateTo({path:"/pages/demo/yanxuan/pages/detail/detail"})}}}return u(e,[{key:"created",value:function(){var e=l.default.data.result;this.goods=e.goods}},{key:"mounted",value:function(){var e=this;r.default.getSystemInfo().then(function(t){e.scrollerHeight=Number(t.viewportHeight)-114-90-66})}}]),e}();t.default=new d,t.default=c.default.createComponent(t.default).getOptions()}},[378]);