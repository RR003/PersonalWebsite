(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{34:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(11),a=n.n(i),r=n(8),o=(n(34),n(67)),l=n(1);function j(e){var t=e.menuOpen,n=e.setMenuOpen;return Object(l.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsxs)("div",{className:"left",children:[Object(l.jsx)("a",{href:"#intro",className:"logo",children:"Rahul"}),Object(l.jsxs)("div",{className:"itemContainer",children:[Object(l.jsx)(o.a,{className:"icon"}),Object(l.jsx)("span",{children:"rahulraja.sbu@gmail.com"})]})]}),Object(l.jsx)("div",{className:"right",children:Object(l.jsxs)("div",{className:"hamburger",onClick:function(){return n(!t)},children:[Object(l.jsx)("span",{className:"line1"}),Object(l.jsx)("span",{className:"line2"}),Object(l.jsx)("span",{className:"line3"})]})})]})})}n(40);var d=n(66),u=n(26);function b(){var e=Object(c.useRef)();Object(c.useEffect)((function(){Object(u.a)(e.current,{showCursor:!0,backDelay:1500,strings:["Developer","Student","Creator"]})}),[]);return Object(l.jsxs)("div",{className:"intro",id:"intro",children:[Object(l.jsx)("div",{className:"left",children:Object(l.jsx)("div",{className:"imgContainer"})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("h2",{children:"Hi There, I'm "}),Object(l.jsx)("h1",{children:"Rahul Raja"}),Object(l.jsx)("h3",{children:Object(l.jsx)("span",{ref:e})}),Object(l.jsx)("h4",{children:"I am currently a 2nd year student majoring in CS @ Stony Brook Univeristy. I have a great understanding of full stack applications in both Java and Javascript. I also have a keen interest in Machine and Deep Learning, especially research involving computer vision. Feel free to contact and connect on my socials and browse through my portfolio."}),Object(l.jsxs)("div",{className:"logos",children:[Object(l.jsx)("img",{src:"/assets/linkedin.png",alt:"",className:"logo",onClick:function(){return window.open("https://www.linkedin.com/in/rahul-raja-977b32203/")}}),Object(l.jsx)("img",{src:"/assets/twitter.png",alt:"",className:"logo",onClick:function(){return window.open("https://twitter.com/RahulRaja003")}}),Object(l.jsx)("img",{src:"/assets/github.png",alt:"",className:"logo",onclick:function(){return window.open("https://github.com/RR003")}})]}),Object(l.jsx)(d.a,{className:"button",variant:"contained",color:"primary",onClick:function(){console.log("hello"),window.open("/assets/resume.pdf")},children:"View Resume"})]})})]})}n(41),n(42);function h(e){var t=e.id,n=e.title,c=e.active,s=e.setSelected;return Object(l.jsx)("li",{className:c?"portfolioList active":"portfolioList",onClick:function(){return s(t)},children:n})}var O=[{id:1,title:"ShowBinge",img:"/assets/showbinge.png",link:"https:showbinge.herokuapp.com"},{id:2,title:"NutriCal",img:"https://upandrunningdubai.com/wp-content/uploads/2021/07/ingredients-healthy-foods-selection_35641-2931.jpg",link:"https://devpost.com/software/nutrical-0q4vrx"},{id:3,title:"Touch Typer",img:"https://onlinetyping.org/typing-lessons/images/touch-typing-keyboard.png",link:"https://devpost.com/software/touch-typer"},{id:4,title:"Memories App",img:"/assets/memories.png"}],p=[{id:1,title:"CSE 160: OOP",img:"/assets/971.jpg",link:"https://github.com/RR003/CSE160"}],m=[];function f(){var e=Object(c.useState)("web"),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)([]),a=Object(r.a)(i,2),o=a[0],j=a[1];Object(c.useEffect)((function(){switch(n){case"web":j(O);break;case"school":j(p);break;case"ai":j(m);break;default:j(O)}}),[n]);return Object(l.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(l.jsx)("h1",{children:"Portfolio"}),Object(l.jsx)("ul",{children:[{id:"web",title:"Web Applications"},{id:"school",title:"School Work"},{id:"ai",title:"Artificial Intelligence"}].map((function(e){return Object(l.jsx)(h,{title:e.title,active:n===e.id,setSelected:s,id:e.id})}))}),Object(l.jsx)("div",{className:"container",children:o.map((function(e){return Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("img",{src:e.img,alt:"",onClick:function(){return t=e.link,void window.open(t);var t}}),Object(l.jsx)("h3",{children:e.title})]})}))})]})}n(43);function x(){return Object(l.jsxs)("div",{className:"works",id:"works",children:[Object(l.jsx)("h1",{children:"Stay Tuned for updates!"}),Object(l.jsx)("h2",{children:"New Section Coming Soon"})]})}var g=n(20),v=n.n(g),S=n(27),w=(n(45),n(19));function N(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(!1),a=Object(r.a)(i,2),o=a[0],j=a[1],d=Object(c.useState)(""),u=Object(r.a)(d,2),b=u[0],h=u[1],O=function(){var e=Object(S.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s(!0),e.prev=2,n={email:o,message:b},console.log("hello"),e.next=7,w.a.send(Object({NODE_ENV:"production",PUBLIC_URL:"/react-gh-pages",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SERVICE_ID,Object({NODE_ENV:"production",PUBLIC_URL:"/react-gh-pages",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_TEMPLATE_ID,n,Object({NODE_ENV:"production",PUBLIC_URL:"/react-gh-pages",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_USER_ID);case 7:s("message sent successfully!"),document.getElementById("send").disabled=!0,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),s("Error sending email"),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"contact",id:"contact",children:[Object(l.jsx)("div",{className:"left",children:Object(l.jsx)("img",{src:"https://raw.githubusercontent.com/safak/youtube/da700015c8a88050fad7b961e99a7039638ab3b2/public/assets/shake.svg",alt:""})}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsx)("h2",{children:"Contact."}),Object(l.jsxs)("form",{onSubmit:O,children:[Object(l.jsx)("input",{type:"text",placeholder:"Email",onChange:function(e){return j(e.target.value)}}),Object(l.jsx)("textarea",{placeholder:"Message",onChange:function(e){return h(e.target.value)}}),Object(l.jsx)("button",{type:"submit",id:"send",children:"Send"}),Object(l.jsx)("span",{children:n})]})]})]})}n(46),n(47);function C(e){var t=e.menuOpen,n=e.setMenuOpen;return Object(l.jsx)("div",{className:"menu "+(t&&"active"),children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{onClick:function(){return n(!1)},children:Object(l.jsx)("a",{href:"#intro",children:"Home"})}),Object(l.jsx)("li",{onClick:function(){return n(!1)},children:Object(l.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(l.jsx)("li",{onClick:function(){return n(!1)},children:Object(l.jsx)("a",{href:"#contact",children:"Contact"})}),Object(l.jsx)("li",{onClick:function(){return n(!1)},children:Object(l.jsx)("a",{href:"#works",children:"Works"})})]})})}var k=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(j,{menuOpen:n,setMenuOpen:s}),Object(l.jsx)(C,{menuOpen:n,setMenuOpen:s}),Object(l.jsxs)("div",{className:"sections",children:[Object(l.jsx)(b,{}),Object(l.jsx)(f,{}),Object(l.jsx)(N,{}),Object(l.jsx)(x,{})]})]})};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.ca460267.chunk.js.map