var __CML__GLOBAL=require("../../../manifest.js");__CML__GLOBAL.webpackJsonp([52],{185:function(t,r,n){n(186),n(187)},186:function(t,r){},187:function(t,r,n){function i(t){return t&&t.__esModule?t:{default:t}}function e(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=n(11),o=i(a),c=n(0),s=i(c),u=(0,o.default)(),h=(0,o.default)(),_=function t(){e(this,t),this.data={animationData:u,animationTextData:h,current_rotate:0,current_scale:1,current_translate:50,current_transform:[45,1],current_color:"#F0AD4E",current_opacity:1,current_width:250,current_height:250},this.methods={rotate:function(){for(var t=u;360!==this.current_rotate;)this.current_rotate+=90,t=t.rotate(this.current_rotate).step({duration:500,timingFunction:"ease-in-out",delay:0});this.animationData=t.export(),this.current_rotate=0},scale:function(){this.current_scale=2===this.current_scale?1:2,this.animationData=u.scale(this.current_scale).step({duration:500,timingFunction:"linear",delay:0}).export()},translate:function(){this.current_translate=50===this.current_translate?-50:50,this.animationData=u.translate(this.current_translate,this.current_translate).step({duration:500,timingFunction:"ease-in",delay:0}).export()},transform:function(){this.current_transform=0===this.current_transform[0]?[45,1.2]:[0,1],this.animationData=u.rotate(this.current_transform[0]).scale(this.current_transform[1]).step({duration:500,timingFunction:"ease-out",delay:0}).rotate("-90deg").scale(1.2).step({duration:500,timingFunction:"ease-out",delay:0}).export()},backgroundColor:function(){this.current_color="#F0AD4E"===this.current_color?"#D9534F":"#F0AD4E",this.animationData=u.backgroundColor(this.current_color).step({duration:500,timingFunction:"linear",delay:0}).export()},opacity:function(){this.current_opacity=1===this.current_opacity?.1:1,this.animationData=u.opacity(this.current_opacity).step({duration:500,timingFunction:"linear",delay:0}).export()},width:function(){this.current_width=250===this.current_width?125:250,this.animationData=u.width(this.current_width).step({timingFunction:"linear",delay:0,duration:500}).export()},height:function(){this.current_height=250===this.current_height?125:250,this.animationData=u.height(this.current_height).step({duration:500,timingFunction:"linear",delay:0}).export()},composite:function(){this.current_transform=0===this.current_transform[0]?[45,1.5]:[0,1],this.current_color="#F0AD4E"===this.current_color?"#D9534F":"#F0AD4E",this.current_opacity=1===this.current_opacity?.1:1,this.current_translate=50===this.current_translate?-50:50,this.current_width=250===this.current_width?125:250,this.current_height=250===this.current_height?125:250,this.animationData=u.width(this.current_width).height(this.current_height).rotate(this.current_transform[0]).scale(this.current_transform[1]).opacity(this.current_opacity).backgroundColor(this.current_color).translate(this.current_translate,this.current_translate).step({duration:1e3,timingFunction:"ease-out",delay:0}).export()}}};r.default=new _,r.default=s.default.createPage(r.default).getOptions()}},[185]);