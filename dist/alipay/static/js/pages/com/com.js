var __CML__GLOBAL=require("../../manifest.js");__CML__GLOBAL.webpackJsonp([5],{155:function(t,e,a){a(156),a(157)},156:function(t,e){},157:function(t,e,a){function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),n=a(2),r=i(n),c=a(34),u=i(c),h=a(0),m=i(h),p=u.default.routes,d={};p.forEach(function(t){d[t.name]=t});var s=function(){function t(){o(this,t),this.data={iconApiUri:a(20),cells:[{title:"基础内容",iconUri:a(35),list:[{method:"",url:d.text.path,title:d.text.name},{method:"",url:d.view.path,title:d.view.name}]},{title:"视图容器",iconUri:a(36),list:[{method:"",url:d.list.path,title:d.list.name},{method:"",url:d.scroller.path,title:d.scroller.name},{method:"",url:d.carousel.path,title:d.carousel.name}]},{title:"布局容器",iconUri:a(36),list:[{method:"",url:d.row.path,title:d.row.name},{method:"",url:d.layout.path,title:d.layout.name}]},{title:"表单组件",iconUri:a(158),list:[{method:"",url:d.button.path,title:d.button.name},{method:"",url:d.input.path,title:d.input.name},{method:"",url:d.textarea.path,title:d.textarea.name},{method:"",url:d.switch.path,title:d.switch.name},{method:"",url:d.radio.path,title:d.radio.name},{method:"",url:d.checkbox.path,title:d.checkbox.name}]},{title:"媒体组件",iconUri:a(37),list:[{method:"",url:d.image.path,title:d.image.name},{method:"",url:d.video.path,title:d.video.name}]},{title:"扩展组件",iconUri:a(37),list:[{method:"",url:d["c-dialog"].path,title:d["c-dialog"].name},{method:"",url:d["c-loading"].path,title:d["c-loading"].name},{method:"",url:d["c-toast"].path,title:d["c-toast"].name},{method:"",url:d["c-tip"].path,title:d["c-tip"].name},{method:"",url:d["c-popup"].path,title:d["c-popup"].name},{method:"",url:d["c-actionsheet"].path,title:d["c-actionsheet"].name},{method:"",url:d["c-picker"].path,title:d["c-picker"].name},{method:"",url:d["c-tab"].path,title:d["c-tab"].name},{method:"",url:d["c-checkbox-group"].path,title:d["c-checkbox-group"].name},{method:"",url:d["c-radio-group"].path,title:d["c-radio-group"].name}]}]},this.methods={cellItemSeleted:function(t){var e=t.detail,a=e.method,i=e.extraData,o=e.url;o?r.default.navigateTo({path:o}):this[a]&&this[a](i)}}}return l(t,[{key:"created",value:function(){}}]),t}();e.default=new s,e.default=m.default.createPage(e.default).getOptions()},158:function(t,e,a){t.exports=a.p+"static/img/form_1d8d4bd.png"},36:function(t,e,a){t.exports=a.p+"static/img/view_b6fa835.png"},37:function(t,e,a){t.exports=a.p+"static/img/media_1c79816.png"}},[155]);