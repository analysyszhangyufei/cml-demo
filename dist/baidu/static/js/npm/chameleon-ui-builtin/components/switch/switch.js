var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([86],{483:function(e,t,n){n(484),n(485)},484:function(e,t){},485:function(e,t,n){function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),c=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function e(){a(this,e),this.props={checked:{type:Boolean,default:!1},label:{type:String,default:""},disabled:{type:Boolean,default:!1},opencolor:{type:String,default:"#fc9153"}},this.methods={switchChange:function(e){this.$cmlEmit("change",{value:e.detail.checked}),this.$cmlEmit("changeevent",{value:e.detail.checked})}}};t.default=new i,t.default=c.default.createComponent(t.default).getOptions()}},[483]);