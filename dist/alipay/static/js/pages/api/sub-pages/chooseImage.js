var __CML__GLOBAL=require("../../../manifest.js");__CML__GLOBAL.webpackJsonp([14],{174:function(e,t,n){n(175),n(176)},175:function(e,t){},176:function(e,t,n){function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(177),c=a(o),i=n(0),r=a(i);t.default={data:{chooseType:"camera",title:"cml.chooseImage",subtitle:"选择图片",imgSrc:"",cell:{title:"选择图片",list:[{title:"相册",btnText:"点击选择"}]},map:{camera:"从相机直接拍摄",album:"从相册获取",choice:"菜单选项获取"}},methods:{onBtnClicked:function(e){var t=this;(0,c.default)({type:this.chooseType}).then(function(e){t.imgSrc=e.base64||e.WxTempFilePaths[0]})}},beforeCreate:function(e){this.chooseType=e.type},created:function(){this.cell.list[0].title=this.map[this.chooseType]}},t.default=r.default.createPage(t.default).getOptions()},177:function(e,t,n){function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"choice"};return new Promise(function(t,n){c.default.chooseImage(e,function(e){t(e)},function(e){n(e)})})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var o=n(178),c=function(e){return e&&e.__esModule?e:{default:e}}(o)},178:function(e,t,n){function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(1),i=function(){function e(){a(this,e)}return o(e,[{key:"chooseImage",value:function(e,t,n){var a=[];switch(e.type){case"camera":a=["camera"];break;case"album":a=["album"];break;default:a=["album","camera"]}my.chooseImage({count:1,sizeType:["original"],sourceType:a,success:function(e){t({base64:"",tempFilePaths:e.apFilePaths})},fail:function(e){n({errMsg:e.errorMessage})}})}}]),e}();t.default=new i,(0,c.copyProtoProperty)(t.default)}},[174]);