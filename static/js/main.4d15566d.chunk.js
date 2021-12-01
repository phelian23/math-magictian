(this["webpackJsonpmath-magician"]=this["webpackJsonpmath-magician"]||[]).push([[0],{12:function(t,e,n){t.exports={quote:"quotes_quote__2dl6B",quoteCont:"quotes_quoteCont__38YQ_"}},14:function(t,e,n){t.exports={footer:"footer_footer__3Maox"}},19:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n(13),c=n.n(i),a=n(7),u=(n(19),n(2)),r=n(5),s=n(3),l=n(11),b=n.n(l);function j(t,e,n){var o=b()(t),i=b()(e);if("+"===n)return o.plus(i).toString();if("-"===n)return o.minus(i).toString();if("x"===n)return o.times(i).toString();if("\xf7"===n)try{return o.div(i).toString()}catch(c){return"Can't divide by 0."}if("%"===n)try{return o.mod(i).toString()}catch(c){return"Can't do modulus 0."}throw Error("Unknown operation '".concat(n,"'"))}var m=n(0),d=function(){var t=Object(o.useState)("0"),e=Object(r.a)(t,2),n=e[0],i=e[1],c=Object(o.useState)(null),a=Object(r.a)(c,2),u=a[0],l=a[1],b=Object(o.useState)(null),d=Object(r.a)(b,2),x=d[0],p=d[1],O=function(t){var e,o,c=(e={total:n,next:u,operation:x},"AC"===(o=t)?{total:"0",next:null,operation:null}:o.match(/[0-9]+/)?"0"===o&&"0"===e.next?{}:e.operation?e.next?Object(s.a)(Object(s.a)({},e),{},{next:e.next+o}):Object(s.a)(Object(s.a)({},e),{},{next:o}):e.next?{next:e.next+o,total:null}:{next:o,total:null}:"."===o?e.next?e.next.includes(".")?Object(s.a)({},e):Object(s.a)(Object(s.a)({},e),{},{next:"".concat(e.next,".")}):e.operation?{next:"0."}:e.total?e.total.includes(".")?{}:{total:"".concat(e.total,".")}:{total:"0."}:"="===o?e.next&&e.operation?{total:j(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===o?e.next?Object(s.a)(Object(s.a)({},e),{},{next:(-1*parseFloat(e.next)).toString()}):e.total?Object(s.a)(Object(s.a)({},e),{},{total:(-1*parseFloat(e.total)).toString()}):{}:e.next||!e.total||e.operation?e.operation?e.total&&!e.next?Object(s.a)(Object(s.a)({},e),{},{operation:o}):{total:j(e.total,e.next,e.operation),next:null,operation:o}:e.next?{total:e.next,next:null,operation:o}:{operation:o}:Object(s.a)(Object(s.a)({},e),{},{operation:o}));i(c.total),l(c.next),p(c.operation)};return Object(m.jsxs)("div",{className:"main-calc disflex",children:[Object(m.jsx)("p",{className:"calc-text",children:"Let's do some Math!"}),Object(m.jsxs)("div",{className:"calculator disflex",children:[Object(m.jsxs)("div",{className:"solution",children:[n,x,u]}),Object(m.jsxs)("div",{className:"buttons disflex",children:[Object(m.jsxs)("div",{className:"grey-buttons",children:[Object(m.jsx)("button",{type:"button",onClick:function(){return O("AC")},children:"AC"}),Object(m.jsx)("button",{type:"button",onClick:function(){return O("+/-")},children:"+/-"}),Object(m.jsx)("button",{type:"button",onClick:function(){return O("%")},children:"%"}),Object(m.jsx)("button",{type:"button",onClick:function(){return O("7")},children:"7"}),Object(m.jsx)("button",{type:"button",onClick:function(){return O("8")},children:"8"}),Object(m.jsx)("button",{type:"button",onClick:function(){return O("9")},children:"9"}),Object(m.jsx)("button",{type:"button",onClick:function(){return O("4")},children:"4"}),Object(m.jsx)("button",{type:"button",onClick:function(){return O("5")},children:"5"}),Object(m.jsx)("button",{type:"button",onClick:function(){return O("6")},children:"6"}),Object(m.jsx)("button",{type:"button",onClick:function(){return O("1")},children:"1"}),Object(m.jsx)("button",{type:"button",onClick:function(){return O("2")},children:"2"}),Object(m.jsx)("button",{type:"button",onClick:function(){return O("3")},children:"3"}),Object(m.jsx)("button",{type:"button",onClick:function(){return O("0")},className:"double-btn",children:"0"}),Object(m.jsx)("button",{type:"button",onClick:function(){return O(".")},children:"."})]}),Object(m.jsxs)("div",{className:"orange-buttons disflex",children:[Object(m.jsx)("button",{type:"button",onClick:function(){return O("\xf7")},children:"\xf7"}),Object(m.jsx)("button",{type:"button",onClick:function(){return O("x")},children:"x"}),Object(m.jsx)("button",{type:"button",onClick:function(){return O("-")},children:"-"}),Object(m.jsx)("button",{type:"button",onClick:function(){return O("+")},children:"+"}),Object(m.jsx)("button",{type:"button",onClick:function(){return O("=")},children:"="})]})]})]})]})},x=n(6),p=n.n(x),O=function(){return Object(m.jsxs)("header",{className:p.a.navbar,children:[Object(m.jsx)("h1",{children:"Math Magicians"}),Object(m.jsxs)("ul",{className:p.a.list,children:[Object(m.jsx)("li",{className:p.a.listItem,children:Object(m.jsx)(a.b,{to:"/",className:p.a.listLink,children:"Home"})}),Object(m.jsx)("li",{className:p.a.listItem,children:Object(m.jsx)(a.b,{to:"/calculator",className:p.a.listLink,children:"Calculator"})}),Object(m.jsx)("li",{className:p.a.listItem,children:Object(m.jsx)(a.b,{to:"quotes",className:p.a.listLink,children:"Quote"})})]})]})},h=n(9),f=n.n(h),v=function(){return Object(m.jsxs)("header",{className:f.a.header,children:[Object(m.jsx)("h3",{children:"Welcome to our page!"}),Object(m.jsx)("p",{className:f.a.text,children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ullam modi magni odit distinctio facilis tempora illum commodi cum quasi ab ratione fuga inventore vero, consequuntur, consectetur eaque voluptatum vitae? magni odit distinctio facilis tempora illum commodi cum quasi ab ratione fuga inventore vero, consequuntur, consectetur eaque voluptatum vitae? magni odit distinctio facilis tempora illum commodi cum quasi ab ratione fuga inventore vero, consequuntur, consectetur eaque voluptatum vitae?"}),Object(m.jsx)("p",{className:f.a.text,children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ullam modi magni odit distinctio facilis tempora illum commodi cum quasi ab ratione fuga inventore vero, consequuntur, consectetur eaque voluptatum vitae? magni odit distinctio facilis tempora illum commodi cum quasi ab ratione fuga inventore vero, consequuntur, consectetur eaque voluptatum vitae? magni odit distinctio facilis tempora illum commodi cum quasi ab ratione fuga inventore vero, consequuntur, consectetur eaque voluptatum vitae?"})]})},g=n(12),C=n.n(g),q=function(){return Object(m.jsx)("section",{className:C.a.quoteCont,children:Object(m.jsx)("p",{className:C.a.quote,children:"Mathematics is not about numbers, equations, computations or algorithms: it is about understanding - William Paul Thurston"})})},_=n(14),k=n.n(_),y=function(){return Object(m.jsxs)("section",{className:k.a.footer,children:[Object(m.jsx)("p",{children:"Math Magicians"}),Object(m.jsxs)("p",{children:["\xa9 Copyright 2021",Object(m.jsx)("br",{})," ","Created by Femi Awoyemi"]})]})},N=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(O,{}),Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{path:"/",element:Object(m.jsx)(v,{})}),Object(m.jsx)(u.a,{path:"/calculator",element:Object(m.jsx)(d,{})}),Object(m.jsx)(u.a,{path:"/quotes",element:Object(m.jsx)(q,{})})]}),Object(m.jsx)(y,{})]})};c.a.render(Object(m.jsx)(a.a,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={navbar:"navbar_navbar__1qcLL",list:"navbar_list__3Rf-K",listItem:"navbar_listItem__3oRC3",listLink:"navbar_listLink__27NdH"}},9:function(t,e,n){t.exports={header:"homepage_header__2E_8n",text:"homepage_text__15NaR"}}},[[21,1,2]]]);
//# sourceMappingURL=main.4d15566d.chunk.js.map