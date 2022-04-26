"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[666],{6666:function(e,a,r){r.r(a),r.d(a,{default:function(){return d}});var s=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"register-container"},[r("div",{staticClass:"register"},[r("h3",[e._v("注册新用户 "),r("span",{staticClass:"go"},[e._v("我有账号，去 "),r("router-link",{attrs:{to:"/login",target:"_blank"}},[e._v("登陆")])],1)]),r("div",{staticClass:"content"},[r("label",[e._v("手机号:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNum,expression:"phoneNum"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^1\d{10}$/},expression:"{ required: true, regex: /^1\\d{10}$/ }"}],class:{invalid:e.errors.has("phone")},attrs:{type:"number",placeholder:"请输入你的手机号",name:"phone"},domProps:{value:e.phoneNum},on:{input:function(a){a.target.composing||(e.phoneNum=a.target.value)}}}),r("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("phone")))])]),r("div",{staticClass:"content"},[r("label",[e._v("验证码:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^\d{6}$/},expression:"{ required: true, regex: /^\\d{6}$/ }"}],class:{invalid:e.errors.has("code")},attrs:{type:"text",placeholder:"请输入验证码",name:"code"},domProps:{value:e.code},on:{input:function(a){a.target.composing||(e.code=a.target.value)}}}),r("button",{staticStyle:{width:"100px",height:"38px"},on:{click:e.getCode}},[e._v(" 获取验证码 ")]),r("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("code")))])]),r("div",{staticClass:"content"},[r("label",[e._v("登录密码:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^[0-9A-Za-z]{8,20}$/},expression:"{ required: true, regex: /^[0-9A-Za-z]{8,20}$/ }"}],class:{invalid:e.errors.has("password")},attrs:{type:"password",placeholder:"请输入你的登录密码",name:"password"},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}}),r("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("password")))])]),r("div",{staticClass:"content"},[r("label",[e._v("确认密码:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.checkPassword,expression:"checkPassword"},{name:"validate",rawName:"v-validate",value:{required:!0,is:e.password},expression:"{ required: true, is: password }"}],class:{invalid:e.errors.has("checkPassword")},attrs:{type:"password",placeholder:"请输入确认密码",name:"checkPassword"},domProps:{value:e.checkPassword},on:{input:function(a){a.target.composing||(e.checkPassword=a.target.value)}}}),r("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("checkPassword")))])]),r("div",{staticClass:"controls"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.agree,expression:"agree"},{name:"validate",rawName:"v-validate",value:{required:!0,agree:!0},expression:"{ required: true, agree: true }"}],class:{invalid:e.errors.has("agree")},attrs:{type:"checkbox",name:"agree"},domProps:{checked:Array.isArray(e.agree)?e._i(e.agree,null)>-1:e.agree},on:{change:function(a){var r=e.agree,s=a.target,t=!!s.checked;if(Array.isArray(r)){var i=null,o=e._i(r,i);s.checked?o<0&&(e.agree=r.concat([i])):o>-1&&(e.agree=r.slice(0,o).concat(r.slice(o+1)))}else e.agree=t}}}),r("span",[e._v("同意协议并注册《尚品汇用户协议》")]),r("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("agree")))])]),r("div",{staticClass:"btn"},[r("button",{on:{click:e.handleRegister}},[e._v("完成注册")])])]),e._m(0)])},t=[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"copyright"},[r("ul",[r("li",[e._v("关于我们")]),r("li",[e._v("联系我们")]),r("li",[e._v("联系客服")]),r("li",[e._v("商家入驻")]),r("li",[e._v("营销中心")]),r("li",[e._v("手机尚品汇")]),r("li",[e._v("销售联盟")]),r("li",[e._v("尚品汇社区")])]),r("div",{staticClass:"address"},[e._v("地址：北京市昌平区宏福科技园综合楼6层")]),r("div",{staticClass:"beian"},[e._v("京ICP备19006430号 ")])])}],i=r(6198),o=(r(8975),{name:"Register",data:function(){return{phoneNum:"",code:"",password:"",checkPassword:"",agree:!1}},methods:{getCode:function(){if(this.phoneNum)try{this.$store.dispatch("getCode",this.phoneNum),this.code=this.$store.state.user.code}catch(e){alert(e.message)}else this.errMsgPhone=!0},handleRegister:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function a(){var r,s,t,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$validator.validateAll();case 2:if(r=a.sent,!r){a.next=17;break}return a.prev=4,s=e.phoneNum,t=e.code,i=e.password,e.checkPassword,a.next=8,e.$store.dispatch("onRegister",{phone:s,code:t,password:i});case 8:e.$message({type:"success",message:"注册成功！",duration:2e3}),e.$router.push("/login"),a.next=15;break;case 12:a.prev=12,a.t0=a["catch"](4),alert(a.t0.message);case 15:a.next=18;break;case 17:e.$message({type:"error",message:"请正确填写注册信息！",duration:2e3,center:!0});case 18:case"end":return a.stop()}}),a,null,[[4,12]])})))()}}}),n=o,c=r(1001),l=(0,c.Z)(n,s,t,!1,null,"bfe9aa94",null),d=l.exports}}]);
//# sourceMappingURL=666-legacy.42d3bc9f.js.map