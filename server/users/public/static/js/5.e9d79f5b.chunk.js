(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{109:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(15),s=a(0),c=a.n(s),i=a(112),l=a(106),o=a(63),u=a(107),d=a(9),m=a.n(d),b=a(18),p=a(19),f=a(26),k=function(){var e=Object(b.a)(m.a.mark((function e(t,a,n,s,c,i,l){var o,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(!0),o=Object(r.a)(Object(r.a)({},n),t),!a){e.next=8;break}return e.next=5,Object(f.c)(o);case 5:e.t0=e.sent,e.next=11;break;case 8:return e.next=10,Object(f.a)(o);case 10:e.t0=e.sent;case 11:if((u=e.t0)&&s(!1),u&&Object(p.b)(u),!u||!u.status){e.next=17;break}return a?l(u.data):i(u.data),e.abrupt("return",c({show:!1}));case 17:case"end":return e.stop()}}),e)})));return function(t,a,r,n,s,c,i){return e.apply(this,arguments)}}(),j=a(33);t.default=function(e){var t=e.setShowModal,a=e.data,d=Object(u.a)(),m=d.register,b=d.handleSubmit,p=d.errors,f=Object(s.useState)(!1),E=Object(n.a)(f,2),O=E[0],h=E[1],v=a.edit,x=void 0!==v&&v,w=a.editData,N=void 0===w?{}:w,T=a.user,g=Object(s.useContext)(j.a),D=g.addNewTask,S=g.editATask;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h5",{className:"text-center mb-3"}," ",x?"Edit Task":"Add Task "),c.a.createElement("form",{onSubmit:b((function(e){return k(Object(r.a)(Object(r.a)({},e),{},{userId:T}),x,N,h,t,D,S)}))},c.a.createElement(i.a,null,c.a.createElement("label",{className:p.description?"error-label":"label",htmlFor:"Description"},p.message?"Description is required":"Description"),c.a.createElement("textarea",{ref:m({required:!0}),rows:"10",className:"form-control",name:"description",defaultValue:null===N||void 0===N?void 0:N.description})),c.a.createElement(l.a,{variant:"dark",block:!0,size:"md",type:"submit",disabled:O,className:"mt-4"},!O&&c.a.createElement("span",null," ",x?"Edit Task":"Add Task "),O&&c.a.createElement(o.a,{animation:"border",size:"sm",role:"status","aria-hidden":!0,className:"align-baseline"},c.a.createElement("span",{className:"sr-only"},"Loading...")))))}}}]);
//# sourceMappingURL=5.e9d79f5b.chunk.js.map