(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{70:function(e,A,i){},95:function(e,A,i){"use strict";i.r(A);var o=i(0),t=i.n(o),n=i(26),r=i.n(n),a=i(24),c=i(25),K=i(49),F="USER_SIGNIN_REQUEST",U="USER_SIGNIN_SUCCESS",s="USER_SIGNIN_FAIL";var l=Object(c.b)({userSignin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},A=arguments.length>1?arguments[1]:void 0;switch(A.type){case F:return{loading:!0};case U:return{loading:!1,userInfo:A.payload};case s:return{loading:!1,error:A.payload};default:return e}}}),j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.c,R=Object(c.d)(l,{userSignin:{}},j(Object(c.a)(K.a))),d=(i(70),i(15)),h=i(4),u=i(114),O=i(57),b=i(117),x=i(111),p=i(115),f=i(112),v=i(113),y=i(56),q=i(110),g=Object(y.a)({palette:{primary:{main:"#6184C4"},secondary:{main:"#F62D01"},info:{main:"#323232"}},typography:{fontFamily:"Prompt",h1:{fontWeight:500}}}),C=Object(q.a)({navlink:{color:"#ffffff",textDecoration:"none","a:visited":{color:"#ffffff"}}}),B="#F62D01",Q=i(2),X=function(){var e=C();return Object(Q.jsx)(b.a,{style:{backgroundColor:"#323232"},position:"sticky",children:Object(Q.jsxs)(x.a,{children:[Object(Q.jsx)(p.a,{pl:"5rem",py:"0.5rem",children:Object(Q.jsx)(d.b,{to:"/",children:Object(Q.jsx)("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAwADAAAD/4QAsRXhpZgAATU0AKgAAAAgAAQExAAIAAAAKAAAAGgAAAABHcmVlbnNob3QA/9sAQwAHBQUGBQQHBgUGCAcHCAoRCwoJCQoVDxAMERgVGhkYFRgXGx4nIRsdJR0XGCIuIiUoKSssKxogLzMvKjInKisq/9sAQwEHCAgKCQoUCwsUKhwYHCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq/8AAEQgBFAETAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8mooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoo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",alt:"logo",width:"60"})})}),Object(Q.jsx)(p.a,{pr:"5rem",children:Object(Q.jsx)(d.b,{to:"/",className:e.navlink,children:Object(Q.jsx)(f.a,{variant:"h5",children:"crumple"})})}),Object(Q.jsx)(p.a,{p:"1.5rem",children:Object(Q.jsx)(d.b,{to:"/discover",className:e.navlink,children:"DISCOVER"})}),Object(Q.jsx)(p.a,{p:"1.5rem",children:Object(Q.jsx)(d.b,{to:"/about",className:e.navlink,children:"ABOUT"})}),Object(Q.jsxs)(v.a,{container:!0,justifyContent:"flex-end",children:[Object(Q.jsx)(p.a,{p:"1.5rem",children:Object(Q.jsx)(O.a,{})}),Object(Q.jsx)(p.a,{p:"1.5rem",children:Object(Q.jsx)(d.b,{to:"/signin",className:e.navlink,children:"LOGIN"})}),Object(Q.jsx)(p.a,{p:"1.5rem",pr:"5rem",children:Object(Q.jsx)(f.a,{children:"SIGN UP"})})]})]})})},m=function(){return Object(Q.jsx)("div",{children:"Categories"})},V=function(){return Object(Q.jsx)("div",{children:"About"})},w=function(){return Object(Q.jsx)("div",{children:"FAQs"})},P=function(){return Object(Q.jsx)("div",{children:"Error"})},E=function(){return Object(Q.jsxs)(p.a,{display:"flex",flexDirection:"column",height:"65vh",width:"auto",alignItems:"center",justifyContent:"center",children:[Object(Q.jsx)(f.a,{variant:"h1",children:"made for makers"}),Object(Q.jsxs)(f.a,{variant:"h3",color:"textSecondary",children:[Object(Q.jsx)("span",{style:{color:"#6184C4"},children:"crumple"})," makes it easy"]}),Object(Q.jsxs)(f.a,{variant:"h3",color:"textSecondary",children:["for ",Object(Q.jsx)("span",{style:{color:B},children:"artists"})," and"," ",Object(Q.jsx)("span",{style:{color:B},children:"creatives"})]}),Object(Q.jsx)(f.a,{variant:"h3",color:"textSecondary",children:"to get paid for their work."})]})},S=i(37),T=i(36),H=i.n(T),G=i(54),k=i(55),W=i.n(k);var N=function(e){var A=Object(o.useState)(""),i=Object(S.a)(A,2),t=i[0],n=i[1],r=Object(o.useState)(""),c=Object(S.a)(r,2),K=c[0],l=c[1],j=Object(a.c)((function(e){return e.userSignin})),R=j.loading,h=j.userInfo,u=j.error,O=Object(a.b)(),b=e.location.search?e.location.search.split("=")[1]:"/";return Object(o.useEffect)((function(){h&&(e.history.push(b),console.log(b))}),[h]),Object(Q.jsx)("div",{className:"form",children:Object(Q.jsx)("form",{onSubmit:function(e){e.preventDefault(),O(function(e,A){return function(){var i=Object(G.a)(H.a.mark((function i(o){var t,n;return H.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return o({type:F,payload:{email:e,password:A}}),i.prev=1,i.next=4,W.a.post("https://crumple-au.herokuapp.com/api/users/signin",{email:e,password:A});case 4:t=i.sent,n=t.data,o({type:U,payload:n}),i.next=12;break;case 9:i.prev=9,i.t0=i.catch(1),o({type:s,payload:i.t0.message});case 12:case"end":return i.stop()}}),i,null,[[1,9]])})));return function(e){return i.apply(this,arguments)}}()}(t,K))},children:Object(Q.jsxs)("ul",{className:"form-container",children:[Object(Q.jsx)("li",{children:Object(Q.jsx)("h2",{children:"Sign-In"})}),Object(Q.jsxs)("li",{children:[R&&Object(Q.jsx)("div",{children:"Loading..."}),u&&Object(Q.jsx)("div",{children:u})]}),Object(Q.jsxs)("li",{children:[Object(Q.jsx)("label",{htmlFor:"email",children:"Email"}),Object(Q.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return n(e.target.value)}})]}),Object(Q.jsxs)("li",{children:[Object(Q.jsx)("label",{htmlFor:"password",children:"Password"}),Object(Q.jsx)("input",{type:"password",id:"password",name:"password",onChange:function(e){return l(e.target.value)}})]}),Object(Q.jsx)("li",{children:Object(Q.jsx)("button",{type:"submit",className:"button primary",children:"Signin"})}),Object(Q.jsx)("li",{children:"New to Crumple?"}),Object(Q.jsx)("li",{children:Object(Q.jsx)(d.b,{to:"/"===b?"register":"register?redirect="+b,children:"Create your Crumple account"})})]})})})},D=function(){return Object(Q.jsx)(u.a,{theme:g,children:Object(Q.jsxs)(d.a,{children:[Object(Q.jsx)(X,{}),Object(Q.jsxs)(h.c,{children:[Object(Q.jsx)(h.a,{exact:!0,path:"/",children:Object(Q.jsx)(E,{})}),Object(Q.jsx)(h.a,{path:"/discover",children:Object(Q.jsx)(m,{})}),Object(Q.jsx)(h.a,{path:"/about",children:Object(Q.jsx)(V,{})}),Object(Q.jsx)(h.a,{path:"/faqs",children:Object(Q.jsx)(w,{})}),Object(Q.jsx)(h.a,{path:"/signin",component:N}),Object(Q.jsx)(h.a,{path:"*",children:Object(Q.jsx)(P,{})})]})]})})},J=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,118)).then((function(A){var i=A.getCLS,o=A.getFID,t=A.getFCP,n=A.getLCP,r=A.getTTFB;i(e),o(e),t(e),n(e),r(e)}))};r.a.render(Object(Q.jsx)(t.a.StrictMode,{children:Object(Q.jsx)(a.a,{store:R,children:Object(Q.jsx)(D,{})})}),document.getElementById("root")),J()}},[[95,1,2]]]);
//# sourceMappingURL=main.3f7b1a61.chunk.js.map