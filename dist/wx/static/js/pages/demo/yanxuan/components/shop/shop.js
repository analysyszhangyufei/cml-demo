var __CML__GLOBAL=require("../../../../../manifest.js");__CML__GLOBAL.webpackJsonp([55],{382:function(e,t,n){n(383),n(384)},383:function(e,t){},384:function(e,t,n){function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=n(6),r=a(u),i=n(4),l=a(i),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(25),s=a(c),d=n(0),g=a(d),h=function(){function e(){o(this,e),this.data={rightbtn:{name:"编辑"},goods:[],goodslist:[],scrollerHeight:0},this.methods={godetail:function(){(0,l.default)({path:"/pages/demo/yanxuan/pages/detail/detail"})}}}return f(e,[{key:"created",value:function(){var e=s.default.data.result;this.goods=e.goods}},{key:"mounted",value:function(){var e=this;(0,r.default)().then(function(t){e.scrollerHeight=Number(t.viewportHeight)-114-90-66})}}]),e}();t.default=new h,t.default=g.default.createComponent(t.default).getOptions()}},[382]);