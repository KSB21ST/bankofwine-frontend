(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8803],{17052:function(y){y.exports={main:"main___2kx2N",password:"password___2JDrd",getCaptcha:"getCaptcha___1oboe",submit:"submit___34wM2",login:"login___1qBuj",success:"success___3hl98",warning:"warning___2i2r2",error:"error___3JfQo","progress-pass":"progress-pass___BM1Xu",progress:"progress___2s68u"}},90434:function(y,C,e){"use strict";e.r(C),e.d(C,{default:function(){return K}});var hs=e(13062),T=e(71230),gs=e(57663),Z=e(71577),ms=e(89032),S=e(15746),ps=e(20136),V=e(55241),fs=e(34669),G=e(54458),xs=e(34792),M=e(48086),d=e(2824),js=e(47673),l=e(4107),Fs=e(43358),A=e(34041),ys=e(9715),g=e(17681),v=e(67294),m=e(25377),$=e(73727),O=e(3182),J=e(94043),P=e.n(J);function Q(f){return p.apply(this,arguments)}function p(){return p=(0,O.Z)(P().mark(function f(x){return P().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.WY)("/api/register",{method:"POST",data:x}));case 1:case"end":return n.stop()}},f)})),p.apply(this,arguments)}var U=e(17052),t=e.n(U),s=e(85893),i=g.Z.Item,B=A.Z.Option,W=l.Z.Group,X={ok:(0,s.jsx)("div",{className:t().success,children:(0,s.jsx)("span",{children:"\u5F3A\u5EA6\uFF1A\u5F3A"})}),pass:(0,s.jsx)("div",{className:t().warning,children:(0,s.jsx)("span",{children:"\u5F3A\u5EA6\uFF1A\u4E2D"})}),poor:(0,s.jsx)("div",{className:t().error,children:(0,s.jsx)("span",{children:"\u5F3A\u5EA6\uFF1A\u592A\u77ED"})})},Y={ok:"success",pass:"normal",poor:"exception"},H=function(){var x=(0,v.useState)(0),j=(0,d.Z)(x,2),n=j[0],E=j[1],L=(0,v.useState)(!1),N=(0,d.Z)(L,2),F=N[0],z=N[1],k=(0,v.useState)("86"),D=(0,d.Z)(k,2),b=D[0],q=D[1],_=(0,v.useState)(!1),w=(0,d.Z)(_,2),ss=w[0],es=w[1],rs=!1,h,as=g.Z.useForm(),ts=(0,d.Z)(as,1),o=ts[0];(0,v.useEffect)(function(){return function(){clearInterval(h)}},[h]);var ns=function(){var r=59;E(r),h=window.setInterval(function(){r-=1,E(r),r===0&&clearInterval(h)},1e3)},I=function(){var r=o.getFieldValue("password");return r&&r.length>9?"ok":r&&r.length>5?"pass":"poor"},R=(0,m.QT)(Q,{manual:!0,onSuccess:function(r,a){r.status==="ok"&&(M.ZP.success("\u6CE8\u518C\u6210\u529F\uFF01"),m.m8.push({pathname:"/user/register-result",state:{account:a.email}}))}}),us=R.loading,os=R.run,ls=function(r){os(r)},is=function(r,a){var c=Promise;return a&&a!==o.getFieldValue("password")?c.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u5339\u914D!"):c.resolve()},cs=function(r,a){var c=Promise;return a?(F||z(!!a),es(!ss),a.length<6?c.reject(""):(a&&rs&&o.validateFields(["confirm"]),c.resolve())):(z(!!a),c.reject("\u8BF7\u8F93\u5165\u5BC6\u7801!"))},ds=function(r){q(r)},vs=function(){var r=o.getFieldValue("password"),a=I();return r&&r.length?(0,s.jsx)("div",{className:t()["progress-".concat(a)],children:(0,s.jsx)(G.Z,{status:Y[a],className:t().progress,strokeWidth:6,percent:r.length*10>100?100:r.length*10,showInfo:!1})}):null};return(0,s.jsxs)("div",{className:t().main,children:[(0,s.jsx)("h3",{children:"\u6CE8\u518C"}),(0,s.jsxs)(g.Z,{form:o,name:"UserRegister",onFinish:ls,children:[(0,s.jsx)(i,{name:"mail",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740!"},{type:"email",message:"\u90AE\u7BB1\u5730\u5740\u683C\u5F0F\u9519\u8BEF!"}],children:(0,s.jsx)(l.Z,{size:"large",placeholder:"\u90AE\u7BB1"})}),(0,s.jsx)(V.Z,{getPopupContainer:function(r){return r&&r.parentNode?r.parentNode:r},content:F&&(0,s.jsxs)("div",{style:{padding:"4px 0"},children:[X[I()],vs(),(0,s.jsx)("div",{style:{marginTop:10},children:(0,s.jsx)("span",{children:"\u8BF7\u81F3\u5C11\u8F93\u5165 6 \u4E2A\u5B57\u7B26\u3002\u8BF7\u4E0D\u8981\u4F7F\u7528\u5BB9\u6613\u88AB\u731C\u5230\u7684\u5BC6\u7801\u3002"})})]}),overlayStyle:{width:240},placement:"right",visible:F,children:(0,s.jsx)(i,{name:"password",className:o.getFieldValue("password")&&o.getFieldValue("password").length>0&&t().password,rules:[{validator:cs}],children:(0,s.jsx)(l.Z,{size:"large",type:"password",placeholder:"\u81F3\u5C116\u4F4D\u5BC6\u7801\uFF0C\u533A\u5206\u5927\u5C0F\u5199"})})}),(0,s.jsx)(i,{name:"confirm",rules:[{required:!0,message:"\u786E\u8BA4\u5BC6\u7801"},{validator:is}],children:(0,s.jsx)(l.Z,{size:"large",type:"password",placeholder:"\u786E\u8BA4\u5BC6\u7801"})}),(0,s.jsxs)(W,{compact:!0,children:[(0,s.jsxs)(A.Z,{size:"large",value:b,onChange:ds,style:{width:"20%"},children:[(0,s.jsx)(B,{value:"86",children:"+86"}),(0,s.jsx)(B,{value:"87",children:"+87"})]}),(0,s.jsx)(i,{style:{width:"80%"},name:"mobile",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7!"},{pattern:/^\d{11}$/,message:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF!"}],children:(0,s.jsx)(l.Z,{size:"large",placeholder:"\u624B\u673A\u53F7"})})]}),(0,s.jsxs)(T.Z,{gutter:8,children:[(0,s.jsx)(S.Z,{span:16,children:(0,s.jsx)(i,{name:"captcha",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801!"}],children:(0,s.jsx)(l.Z,{size:"large",placeholder:"\u9A8C\u8BC1\u7801"})})}),(0,s.jsx)(S.Z,{span:8,children:(0,s.jsx)(Z.Z,{size:"large",disabled:!!n,className:t().getCaptcha,onClick:ns,children:n?"".concat(n," s"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"})})]}),(0,s.jsxs)(i,{children:[(0,s.jsx)(Z.Z,{size:"large",loading:us,className:t().submit,type:"primary",htmlType:"submit",children:(0,s.jsx)("span",{children:"\u6CE8\u518C"})}),(0,s.jsx)($.rU,{className:t().login,to:"/user/login",children:(0,s.jsx)("span",{children:"\u4F7F\u7528\u5DF2\u6709\u8D26\u6237\u767B\u5F55"})})]})]})]})},K=H}}]);
