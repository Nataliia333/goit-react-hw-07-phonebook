(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__hdfZR",ContactButton:"ContactForm_ContactButton__28Nz1"}},22:function(t,e,n){t.exports={ContactButton:"ContactsList_ContactButton__N8ESB"}},23:function(t,e,n){t.exports={Container:"Container_Container__2hR5d"}},30:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),o=n(7),i=n.n(o),u=(n(30),n(5)),s=n(17),l=n(8),b=n(3),d=n(18),j=n.n(d),O=n(4),f=n(19),p=n.n(f),m=n(6),h=n(2),C=n(41),x={addContact:Object(b.b)("app/Save_contact",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(C.a)(),name:e,number:n}}})),deleteContact:Object(b.b)("app/Delete_contact"),updateFilter:Object(b.b)("app/Update_filter")},v=Object(b.c)([],(c={},Object(m.a)(c,x.addContact,(function(t,e){var n=e.payload;return[].concat(Object(l.a)(t),[n])})),Object(m.a)(c,x.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),g=Object(b.c)("",Object(m.a)({},x.updateFilter,(function(t,e){return e.payload}))),_=Object(h.c)({items:v,filter:g}),y={key:"contacts",storage:p.a,blacklist:["filter"]},F=[].concat(Object(l.a)(Object(b.d)({serializableCheck:{ignoredActions:[O.a,O.f,O.b,O.c,O.d,O.e]}})),[j.a]),k=Object(b.a)({reducer:{contacts:Object(O.g)(y,_)},middleware:F,devTools:!1}),B={store:k,persistor:Object(O.h)(k)},N=n(20),w=n(21),A=n(25),D=n(24),L=n(13),S=n(14),E=n.n(S),z=n(1),J=Object(u.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onAdd:function(e){return t(x.addContact(e))}}}))((function(t){var e=t.contacts,n=t.onAdd,c={name:"",number:""},a=function(t){c=Object(L.a)(Object(L.a)({},c),{},Object(m.a)({},t.target.id,t.target.value))};return Object(z.jsxs)("form",{className:E.a.ContactForm,children:[Object(z.jsx)("label",{children:"Name"}),Object(z.jsx)("input",{type:"text",onChange:a,id:"name"}),Object(z.jsx)("label",{children:"Number"}),Object(z.jsx)("input",{type:"text",onChange:a,id:"number"}),Object(z.jsx)("button",{className:E.a.ContactButton,type:"submit",onClick:function(){e.map((function(t){return t.name})).includes(c.name)?alert("".concat(c.name," is already in contacts.")):n(c)},children:"AddContact"})]})})),R=n(22),I=n.n(R),M=Object(u.b)((function(t){return{contacts:t.contacts.items,filter:t.contacts.filter}}),(function(t){return{onDelete:function(e){return t(x.deleteContact(e))}}}))((function(t){var e=t.filter,n=t.contacts,c=t.onDelete,a=function(t){c(t.target.id),console.log(t.target.id)};return Object(z.jsx)("ul",{children:(e?n.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})):n).map((function(t){var e=t.id,n=t.name,c=t.number;return Object(z.jsxs)("li",{children:[n,": ",c,Object(z.jsx)("button",{id:e,className:I.a.ContactButton,type:"button",onClick:a,children:"Delete"})]},e)}))})})),T=Object(u.b)(null,(function(t){return{updateFilter:function(e){return t(x.updateFilter(e.target.value))}}}))((function(t){var e=t.updateFilter;return Object(z.jsx)("div",{children:Object(z.jsx)("input",{type:"text",onChange:e,id:"find",placeholder:"Enter name for Search"})})})),U=n(23),Z=n.n(U),q=function(t){var e=t.children;return Object(z.jsx)("div",{className:Z.a.Container,children:e})},G=function(t){Object(A.a)(n,t);var e=Object(D.a)(n);function n(){return Object(N.a)(this,n),e.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return Object(z.jsxs)(q,{children:[Object(z.jsx)("h2",{children:"Form Contact"}),Object(z.jsx)(J,{}),Object(z.jsx)("h2",{children:"Contacts List"}),Object(z.jsx)(T,{}),Object(z.jsx)(M,{})]})}}]),n}(a.Component);i.a.render(Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(u.a,{store:B.store,children:Object(z.jsx)(s.a,{loading:null,persistor:B.persistor,children:Object(z.jsx)(G,{})})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b6696928.chunk.js.map