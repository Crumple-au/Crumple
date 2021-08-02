(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{128:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(12),c=r.n(a),i=(r(97),r(8)),s=r(16),o=r(170),l=r(10),j=r(75),d=r(25),u=r(15),b=r.n(u),h=r(22),O=r(23),A=r.n(O),p="USER_SIGNIN_REQUEST",x="USER_SIGNIN_SUCCESS",m="USER_SIGNIN_FAIL",f="USER_REGISTER_REQUEST",g="USER_REGISTER_SUCCESS",U="USER_REGISTER_FAIL",v="USER_SIGNOUT",F="USER_DETAILS_REQUEST",R="USER_DETAILS_SUCCESS",K="USER_DETAILS_FAIL",y="USER_DETAILS_RESET",S="USER_LIST_REQUEST",E="USER_LIST_SUCCESS",C="USER_LIST_FAIL",w="USER_UPDATE_PROFILE_REQUEST",I="USER_UPDATE_PROFILE_SUCCESS",N="USER_UPDATE_PROFILE_FAIL",k="USER_UPDATE_PROFILE_RESET",T="USER_DELETE_REQUEST",P="USER_DELETE_SUCCESS",q="USER_DELETE_FAIL",B="USER_DELETE_RESET";var Q="https://crumple-au.herokuapp.com",D=function(){return function(e){localStorage.removeItem("userInfo"),e({type:v}),document.location.href="/signin"}},L=function(e){return function(){var t=Object(h.a)(b.a.mark((function t(r,n){var a,c,i,s,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:F,payload:e}),a=n(),c=a.userSignin.userInfo,t.prev=2,t.next=5,A.a.get(Q+"/api/users/profile/".concat(e),{headers:{Authorization:"Bearer ".concat(null===c||void 0===c?void 0:c.token)}});case 5:i=t.sent,s=i.data,r({type:R,payload:s}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),o=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,r({type:K,payload:o});case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,r){return t.apply(this,arguments)}}()},V=r(55),X=r(158),G=r(160),H=r(172),W=r(161),J=r(162),z=r(163),M=r(82),Y=r(156),_=Object(M.a)({palette:{primary:{main:"#6184C4"},secondary:{main:"#F62D01"},info:{main:"#323232"}},typography:{fontFamily:"Prompt",h1:{fontWeight:500}}}),Z=Object(Y.a)({navlink:{color:"#ffffff",textDecoration:"none","a:visited":{color:"#ffffff"}},formControl:{minWidth:120,marginTop:"1rem"},textForm:{marginTop:"1rem"},card:{margin:"1rem"}}),$="#F62D01",ee="#323232",te="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAwADAAAD/4QAsRXhpZgAATU0AKgAAAAgAAQExAAIAAAAKAAAAGgAAAABHcmVlbnNob3QA/9sAQwAHBQUGBQQHBgUGCAcHCAoRCwoJCQoVDxAMERgVGhkYFRgXGx4nIRsdJR0XGCIuIiUoKSssKxogLzMvKjInKisq/9sAQwEHCAgKCQoUCwsUKhwYHCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq/8AAEQgBFAETAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8mooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoo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",re=r(2),ne=function(){var e,t,r=Z(),n=Object(l.c)((function(e){return e.userSignin})).userInfo,a=Object(l.c)((function(e){return e.cart})).cartItems,c=Object(l.b)(),s=function(){c(D())};return Object(re.jsx)(X.a,{style:{backgroundColor:ee},position:"sticky",children:Object(re.jsxs)(G.a,{children:[Object(re.jsx)(H.a,{pl:"5rem",py:"0.5rem",children:Object(re.jsx)(i.b,{to:"/",children:Object(re.jsx)("img",{src:te,alt:"logo",width:"60"})})}),Object(re.jsx)(H.a,{pr:"5rem",children:Object(re.jsx)(i.b,{to:"/",className:r.navlink,children:Object(re.jsx)(W.a,{variant:"h5",children:"crumple"})})}),Object(re.jsx)(H.a,{p:"1.5rem",children:Object(re.jsx)(i.b,{to:"/categories",className:r.navlink,children:"DISCOVER"})}),Object(re.jsx)(H.a,{p:"1.5rem",children:Object(re.jsx)(i.b,{to:"/about",className:r.navlink,children:"ABOUT"})}),Object(re.jsxs)(J.a,{container:!0,justifyContent:"flex-end",children:[Object(re.jsx)(H.a,{p:"2rem",children:Object(re.jsxs)(i.b,{className:"link",to:"/cart",children:[Object(re.jsx)(V.b,{fontSize:"1.4rem",className:r.navlink}),a.length>0&&Object(re.jsx)("span",{className:"badge",children:a.length})]})}),n&&n.isAdmin?Object(re.jsxs)(H.a,{py:"1.5rem",className:"dropdown",children:[Object(re.jsx)(z.a,(e={to:"#",variant:"contained"},Object(d.a)(e,"to","/profile"),Object(d.a)(e,"children",n.name),e)),Object(re.jsxs)("ul",{className:"dropdown-content",children:[Object(re.jsx)("li",{children:Object(re.jsx)(i.b,{className:"link",to:"/profile/".concat(n._id),children:"Profile"})}),Object(re.jsx)("li",{children:Object(re.jsx)(i.b,{className:"link",to:"/allusers",children:"All users"})}),Object(re.jsx)("li",{children:Object(re.jsx)(i.b,{className:"link",to:"#signout",onClick:s,children:"Sign Out"})})]})]}):n?Object(re.jsxs)(H.a,{py:"1.5rem",className:"dropdown",children:[Object(re.jsx)(z.a,(t={to:"#",variant:"contained"},Object(d.a)(t,"to","/profile"),Object(d.a)(t,"children",n.name),t)),Object(re.jsxs)("ul",{className:"dropdown-content",children:[Object(re.jsx)("li",{children:Object(re.jsx)(i.b,{className:"link",to:"/profile/".concat(n._id),children:"Profile"})}),Object(re.jsx)("li",{children:Object(re.jsx)(i.b,{className:"link",to:"#signout",onClick:s,children:"Sign Out"})})]})]}):Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(H.a,{py:"1.5rem",children:Object(re.jsx)(z.a,{component:i.b,variant:"contained",to:"/signin",children:"LOG IN"})}),Object(re.jsx)(H.a,{p:"1.5rem",pr:"5rem",children:Object(re.jsx)(z.a,{component:i.b,variant:"contained",color:"primary",to:"/signup",children:"SIGN UP"})})]})]})]})})},ae=r.p+"static/media/crumple-stick0.9491f61b.jpg",ce=function(){return Object(re.jsxs)(H.a,{mt:"4vh",children:[Object(re.jsxs)(H.a,{display:"flex",flexDirection:"column",height:"30vh",width:"auto",alignItems:"center",justifyContent:"center",pt:"14vh",children:[Object(re.jsx)(W.a,{variant:"h1",children:"made for makers"}),Object(re.jsxs)(W.a,{variant:"h4",color:"textSecondary",children:[Object(re.jsx)("span",{style:{color:"#6184C4"},children:"crumple"})," makes it easy"]}),Object(re.jsxs)(W.a,{variant:"h4",color:"textSecondary",children:["for ",Object(re.jsx)("span",{style:{color:$},children:"artists"})," and"," ",Object(re.jsx)("span",{style:{color:$},children:"creatives"})]}),Object(re.jsx)(W.a,{variant:"h4",color:"textSecondary",children:"to get paid for their work."}),Object(re.jsx)(H.a,{m:"2rem",children:Object(re.jsx)(z.a,{component:i.b,to:"/categories",variant:"contained",color:"primary",children:"Get Started"})})]}),Object(re.jsx)(H.a,{ml:"5rem",mt:"3vh",children:Object(re.jsx)("img",{src:ae,alt:"stickman",height:"850",width:"auto"})})]})},ie=r(18),se=r(164),oe=r(171),le=r(173),je=function(){var e=Z(),t=Object(n.useState)(""),r=Object(ie.a)(t,2),a=r[0],c=r[1],i=Object(n.useState)(""),s=Object(ie.a)(i,2),o=s[0],l=s[1];return Object(re.jsxs)(H.a,{display:"flex",flexDirection:"row",justifyContent:"center",margin:"2rem",children:[Object(re.jsx)(se.a,{variant:"outlined",size:"small",className:e.formControl,children:Object(re.jsxs)(oe.a,{variant:"outlined",size:"small",label:"DISCOVER",role:"dropdown",id:"discover",inputProps:{id:"discover","data-testid":"listbox"},select:!0,defaultValue:"",value:o,onChange:function(e){return l(e.target.value)},children:[Object(re.jsx)(le.a,{value:"drawing",children:"DRAWING"}),Object(re.jsx)(le.a,{value:"design",children:"DESIGN"}),Object(re.jsx)(le.a,{value:"merch",children:"MERCH"}),Object(re.jsx)(le.a,{value:"books",children:"BOOKS"}),Object(re.jsx)(le.a,{value:"photos",children:"PHOTOS"}),Object(re.jsx)(le.a,{value:"film",children:"FILM"}),Object(re.jsx)(le.a,{value:"music",children:"MUSIC"}),Object(re.jsx)(le.a,{value:"crafts",children:"CRAFTS"})]})}),Object(re.jsx)(se.a,{variant:"filled",size:"small",children:Object(re.jsx)(oe.a,{variant:"outlined",id:"search",label:"Search",size:"small",className:e.textForm,value:a,onChange:function(e){return c(e.target.value)}})}),Object(re.jsx)(H.a,{children:Object(re.jsx)(z.a,{type:"submit",id:"search-button","data-testid":"search-button",onClick:function(e){e.preventDefault(),console.log(o,a),c("")},className:e.textForm,variant:"contained",size:"large",children:Object(re.jsx)(V.a,{fontSize:"1.4rem"})})})]})},de=r(165),ue=r(166),be=r(167),he=r(168),Oe=r(169),Ae=function(e){var t=Object(n.useState)([]),r=Object(ie.a)(t,2),a=r[0],c=r[1];return Object(n.useEffect)((function(){(function(){var t=Object(h.a)(b.a.mark((function t(){var r,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.get(Q+e);case 2:r=t.sent,n=r.data,c(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),{categories:a}},pe=function(){var e=Ae("/api/categories").categories,t=Z();return Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(je,{}),Object(re.jsx)(H.a,{m:"4rem 2rem 2rem 2rem",children:Object(re.jsx)(J.a,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",children:e.map((function(e){return Object(re.jsx)(J.a,{item:!0,xs:12,sm:6,md:3,align:"center",children:Object(re.jsxs)(de.a,{className:t.card,children:[Object(re.jsxs)(ue.a,{children:[Object(re.jsx)(be.a,{children:Object(re.jsx)(H.a,{display:"flex",justifyContent:"center",p:"1rem",border:3,children:Object(re.jsx)("img",{src:e.image,alt:e.altName,height:"100px",width:"100px"})})}),Object(re.jsxs)(he.a,{children:[Object(re.jsx)(W.a,{align:"center",children:e.name}),Object(re.jsx)(W.a,{align:"center",color:"textSecondary",children:e.description})]})]}),Object(re.jsx)(Oe.a,{children:Object(re.jsx)(i.b,{to:"/category/".concat(e._id),children:Object(re.jsx)(z.a,{size:"small",children:"Explore"})})})]})},e._id)}))})})]})},xe=function(){var e=Object(s.f)().id,t=Ae("/api/categories/".concat(e)).categories,r=Z();return Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(je,{}),Object(re.jsx)(H.a,{m:"4rem 2rem 2rem 2rem",children:Object(re.jsxs)(J.a,{container:!0,spacing:1,children:[Object(re.jsx)(J.a,{item:!0,xs:12,sm:12,md:12,align:"center",children:Object(re.jsxs)(de.a,{className:r.card,children:[Object(re.jsxs)(ue.a,{children:[Object(re.jsx)(be.a,{children:Object(re.jsx)(H.a,{display:"flex",justifyContent:"center",p:"1rem",border:3,children:Object(re.jsx)("img",{src:t.image,alt:t.altName,height:"100px",width:"100px"})})}),Object(re.jsxs)(he.a,{children:[Object(re.jsx)(W.a,{align:"center",children:t.name}),Object(re.jsx)(W.a,{align:"center",color:"textSecondary",children:t.description})]})]}),Object(re.jsxs)(he.a,{children:[Object(re.jsx)(W.a,{align:"center",children:"Price"}),Object(re.jsx)(W.a,{children:"Sort by"})]}),Object(re.jsx)(Oe.a,{children:Object(re.jsx)(H.a,{})})]})}),Object(re.jsx)(J.a,{item:!0,xs:12,sm:6,md:3,align:"center",children:Object(re.jsx)(H.a,{children:"Artworks here"})})]})})]})},me=r(80),fe=function(){var e,t,r=Z(),n=Object(l.c)((function(e){return e.userSignin})).userInfo,a=Object(l.b)(),c=function(){a(D())};return Object(re.jsx)(X.a,{style:{height:"5rem",backgroundColor:ee},position:"sticky",children:Object(re.jsxs)(G.a,{children:[Object(re.jsx)(H.a,{py:"1.5rem",children:Object(re.jsx)(i.b,{to:"/",children:Object(re.jsx)("img",{src:te,alt:"logo",width:"60"})})}),n&&n.isAdmin?Object(re.jsxs)(H.a,{py:"1.5rem",className:"dropdown",children:[Object(re.jsx)(z.a,(e={to:"#",variant:"contained"},Object(d.a)(e,"to","/profile"),Object(d.a)(e,"children",n.name),e)),Object(re.jsxs)("ul",{className:"dropdown-content",children:[Object(re.jsx)("li",{children:Object(re.jsx)(i.b,{className:"link",to:"/profile/".concat(n._id),children:"Profile"})}),Object(re.jsx)("li",{children:Object(re.jsx)(i.b,{className:"link",to:"/allusers",children:"All users"})}),Object(re.jsx)("li",{children:Object(re.jsx)(i.b,{className:"link",to:"#signout",onClick:c,children:"Sign Out"})})]})]}):n?Object(re.jsxs)(H.a,{py:"1.5rem",className:"dropdown",children:[Object(re.jsx)(z.a,(t={to:"#",variant:"contained"},Object(d.a)(t,"to","/profile"),Object(d.a)(t,"children",n.name),t)),Object(re.jsxs)("ul",{className:"dropdown-content",children:[Object(re.jsx)("li",{children:Object(re.jsx)(i.b,{className:"link",to:"/profile/".concat(n._id),children:"Profile"})}),Object(re.jsx)("li",{children:Object(re.jsx)(i.b,{className:"link",to:"#signout",onClick:c,children:"Sign Out"})})]})]}):Object(re.jsx)(re.Fragment,{children:Object(re.jsx)(J.a,{container:!0,justifyContent:"flex-end",children:Object(re.jsxs)(H.a,{py:"1.5rem",className:"dropdown",children:[Object(re.jsx)(H.a,{to:"#",variant:"contained",children:Object(re.jsx)(me.a,{size:30})}),Object(re.jsxs)("ul",{className:"dropdown-content",children:[Object(re.jsx)("li",{py:"1.5rem",children:Object(re.jsx)(i.b,{className:r.navlink,to:"/signin",children:"LOG IN"})}),Object(re.jsx)("li",{p:"1.5rem",children:Object(re.jsx)(i.b,{className:r.navlink,to:"/signup",children:"SIGN UP"})}),Object(re.jsx)("li",{p:"1.5rem",children:Object(re.jsx)(i.b,{to:"/categories",className:r.navlink,children:"DISCOVER"})}),Object(re.jsx)("li",{p:"1.5rem",children:Object(re.jsx)(i.b,{to:"/about",className:r.navlink,children:"ABOUT"})})]})]})})})]})})},ge=function(){return Object(re.jsx)("div",{children:"About page"})},Ue=function(){return Object(re.jsx)("div",{children:"FAQs"})},ve=r.p+"static/media/404.7725c6cd.gif",Fe=function(){return Object(re.jsx)("img",{className:"errorGif",src:ve,alt:"404 Error"})};var Re=function(e){var t=Object(l.c)((function(e){return e.userSignin})),r=t.loading,a=t.userInfo,c=t.error,s=Object(l.b)(),o=Object(n.useState)(""),j=Object(ie.a)(o,2),d=j[0],u=j[1],O=Object(n.useState)(""),f=Object(ie.a)(O,2),g=f[0],U=f[1],v=e.location.search?e.location.search.split("=")[1]:"/";return Object(n.useEffect)((function(){a&&(e.history.push(v),console.log(v))}),[a,e.history,v]),Object(re.jsx)("div",{className:"form",children:Object(re.jsx)("form",{onSubmit:function(e){e.preventDefault(),s(function(e,t){return function(){var r=Object(h.a)(b.a.mark((function r(n){var a,c;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n({type:p,payload:{email:e,password:t}}),r.prev=1,r.next=4,A.a.post(Q+"/api/users/signin",{email:e,password:t});case 4:a=r.sent,c=a.data,n({type:x,payload:c}),localStorage.setItem("userInfo",JSON.stringify(c)),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),n({type:m,payload:r.t0.message});case 13:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(e){return r.apply(this,arguments)}}()}(d,g))},children:Object(re.jsxs)("ul",{className:"form-container",children:[Object(re.jsxs)("div",{className:"form-heading",children:[Object(re.jsx)("img",{className:"logo",src:te,alt:"Crumple logo"}),Object(re.jsx)("span",{children:"Crumple"})]}),Object(re.jsxs)("div",{className:"alert-box",children:[r&&Object(re.jsx)("div",{children:"Loading..."}),c&&Object(re.jsx)("div",{children:c})]}),Object(re.jsxs)("div",{className:"form-fields",children:[Object(re.jsx)("h3",{children:"Welcome back"}),Object(re.jsxs)("li",{children:[Object(re.jsxs)("label",{htmlFor:"email",children:["Email",Object(re.jsx)(i.b,{className:"link",to:"/"===v?"register":"register?redirect="+v,children:"New to Crumple?"})]}),Object(re.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return u(e.target.value)}})]}),Object(re.jsxs)("li",{children:[Object(re.jsxs)("label",{htmlFor:"password",children:["Password",Object(re.jsx)(i.b,{to:"#",className:"link",children:"Forgot your password?"})]}),Object(re.jsx)("input",{type:"password",id:"password",name:"password",onChange:function(e){return U(e.target.value)}})]}),Object(re.jsx)("li",{children:Object(re.jsx)("button",{type:"submit",className:"button primary",children:"Sign in"})})]})]})})})},Ke="ARTWORK_DETAILS_REQUEST",ye="ARTWORK_DETAILS_SUCCESS",Se="ARTWORK_DETAILS_FAIL";var Ee=function(e){var t=e.user;return Object(re.jsx)("main",{className:"main",children:t?Object(re.jsxs)(re.Fragment,{children:[Object(re.jsxs)("h1",{children:[t.name,"'s Profile page"]}),Object(re.jsx)("h1",{children:t.email}),Object(re.jsxs)("h1",{children:["Admin: ",String(t.isAdmin)]}),Object(re.jsxs)("h1",{children:["Seller: ",String(t.isSeller)]}),Object(re.jsx)("p",{children:t.description})]}):Object(re.jsx)("h1",{children:"No profile data"})})},Ce=function(e){var t=e.user,r=e.artworks;return Object(re.jsxs)("main",{className:"main",children:[t.name,"'s Artworks",r.map((function(e){return Object(re.jsxs)("ul",{children:[Object(re.jsx)("li",{children:e.name}),Object(re.jsxs)("li",{children:["Category: ",e.category]}),Object(re.jsx)("li",{children:e.description}),Object(re.jsxs)("li",{children:["$",e.price]}),Object(re.jsx)("br",{})]},e._id)}))]})};var we=function(){return Object(re.jsx)("main",{className:"main",children:"Payment"})};var Ie=function(e){var t=Object(s.f)().userId,r=Object(n.useState)(""),a=Object(ie.a)(r,2),c=a[0],i=a[1],o=Object(n.useState)(""),j=Object(ie.a)(o,2),d=j[0],u=j[1],O=Object(n.useState)(""),p=Object(ie.a)(O,2),m=p[0],f=p[1],g=Object(n.useState)(!1),U=Object(ie.a)(g,2),v=U[0],F=U[1],R=Object(l.c)((function(e){return e.userDetails})),K=R.loading,y=R.error,S=R.user,E=Object(l.c)((function(e){return e.userUpdateProfile})).success,C=Object(l.b)();return Object(n.useEffect)((function(){E?(C({type:k}),e.history.push("/profile/".concat(t))):S?(i(S.name),u(S.email),f(S.description),F(S.isSeller)):C(L(t))}),[C,S,E,e.history,t]),Object(re.jsx)("div",{className:"main",children:Object(re.jsx)("form",{onSubmit:function(e){e.preventDefault(),C(function(e){return function(){var t=Object(h.a)(b.a.mark((function t(r,n){var a,c,i,s,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:w,payload:e}),a=n(),c=a.userSignin.userInfo,t.prev=2,t.next=5,A.a.put(Q+"/api/users/profile/edit/".concat(c._id),e,{headers:{Authorization:"Bearer ".concat(c.token)}});case 5:i=t.sent,s=i.data,r({type:I,payload:s}),r({type:x,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(2),o=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,r({type:N,payload:o});case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e,r){return t.apply(this,arguments)}}()}({userId:t,name:c,email:d,description:m,isSeller:v}))},children:Object(re.jsxs)("ul",{className:"form-container",children:[Object(re.jsx)("div",{className:"form-heading",children:Object(re.jsxs)("h1",{children:["Edit ",c]})}),Object(re.jsxs)("div",{className:"alert-box",children:[K&&Object(re.jsx)("div",{children:"Loading..."}),y&&Object(re.jsx)("div",{children:y})]}),Object(re.jsxs)("div",{className:"form-fields",children:[Object(re.jsxs)("li",{children:[Object(re.jsx)("label",{htmlFor:"name",children:"Name"}),Object(re.jsx)("input",{id:"name",type:"text",placeholder:"Enter name",value:c,onChange:function(e){return i(e.target.value)}})]}),Object(re.jsxs)("li",{children:[Object(re.jsx)("label",{htmlFor:"email",children:"Email"}),Object(re.jsx)("input",{id:"email",type:"email",placeholder:"Enter email",value:d,onChange:function(e){return u(e.target.value)}})]}),Object(re.jsxs)("li",{children:[Object(re.jsx)("label",{htmlFor:"description",children:"Description"}),Object(re.jsx)("textarea",{id:"description",type:"text",placeholder:"Enter your description",value:m,maxLength:"140",style:{resize:"none",width:"100%",height:"10rem"},onChange:function(e){return f(e.target.value)}})]}),Object(re.jsx)("li",{children:Object(re.jsx)("button",{type:"submit",className:"primary",children:"Update"})})]})]})})})};var Ne=function(){var e=Object(s.f)().userId,t=Object(l.c)((function(e){return e.artworkList})).artworks,r=Object(l.c)((function(e){return e.userDetails})),a=r.loading,c=r.error,o=r.user,j=Object(l.b)();return Object(n.useEffect)((function(){o||(j(L(e)),j(function(e){var t=e.seller,r=void 0===t?"":t;return function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:Ke}),e.prev=1,e.next=4,A.a.get("".concat(Q,"/api/artworks?seller=").concat(r));case 4:n=e.sent,a=n.data,t({type:ye,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:Se,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}({seller:e})))}),[j,o,e]),Object(re.jsx)(i.a,{children:Object(re.jsxs)("div",{className:"profile-container",children:[Object(re.jsxs)("nav",{className:"sidebar",children:[Object(re.jsx)(i.c,{activeClassName:"selected",to:"/profile/".concat(e),children:"Profile"}),Object(re.jsx)(i.c,{activeClassName:"selected",to:"/profile/".concat(e,"/artworks"),children:"Artworks"}),Object(re.jsx)(i.c,{activeClassName:"selected",to:"/profile/".concat(e,"/payments"),children:"Payments"}),Object(re.jsx)(i.c,{activeClassName:"selected",to:"/profile/".concat(e,"/settings"),children:"Settings"}),Object(re.jsx)(i.c,{activeClassName:"selected",to:"/profile/".concat(e,"/faq"),children:"FAQ"})]}),a?Object(re.jsx)(re.Fragment,{children:Object(re.jsx)("h1",{children:"loading..."})}):c?Object(re.jsx)(re.Fragment,{children:c.message}):Object(re.jsxs)(s.c,{children:[Object(re.jsx)(s.a,{path:"/profile/:userId/artworks",children:Object(re.jsx)(Ce,{user:o,artworks:t})}),Object(re.jsx)(s.a,{path:"/profile/:userId/payments",children:Object(re.jsx)(we,{})}),Object(re.jsx)(s.a,{path:"/profile/:userId/settings",children:Object(re.jsx)(Ie,{})}),Object(re.jsx)(s.a,{path:"/profile/:userId",children:Object(re.jsx)(Ee,{user:o})})]})]})})};var ke=function(e){var t=Object(l.c)((function(e){return e.userRegister})),r=t.loading,a=t.userInfo,c=t.error,s=Object(l.b)(),o=Object(n.useState)(""),j=Object(ie.a)(o,2),d=j[0],u=j[1],O=Object(n.useState)(""),p=Object(ie.a)(O,2),m=p[0],v=p[1],F=e.location.search?e.location.search.split("=")[1]:"/";return Object(n.useEffect)((function(){a&&e.history.push(F)}),[a,e.history,F]),Object(re.jsx)("div",{className:"form",children:Object(re.jsx)("form",{onSubmit:function(e){e.preventDefault(),s(function(e,t){return function(){var r=Object(h.a)(b.a.mark((function r(n){var a,c;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n({type:f,payload:{email:e,password:t}}),r.prev=1,r.next=4,A.a.post(Q+"/api/users/register",{email:e,password:t});case 4:a=r.sent,c=a.data,n({type:g,payload:c}),n({type:x,payload:c}),localStorage.setItem("userInfo",JSON.stringify(c)),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(1),n({type:U,payload:r.t0.message});case 14:case"end":return r.stop()}}),r,null,[[1,11]])})));return function(e){return r.apply(this,arguments)}}()}(d,m))},children:Object(re.jsxs)("ul",{className:"form-container",children:[Object(re.jsxs)("div",{className:"form-heading",children:[Object(re.jsx)("img",{className:"logo",src:te,alt:"Crumple logo"}),Object(re.jsx)("span",{children:"Crumple"})]}),Object(re.jsxs)("div",{className:"alert-box",children:[r&&Object(re.jsx)("div",{children:"Loading..."}),c&&Object(re.jsx)("div",{children:c})]}),Object(re.jsxs)("div",{className:"form-fields",children:[Object(re.jsx)("h3",{children:"Join a community of creates!"}),Object(re.jsxs)("li",{children:[Object(re.jsxs)("label",{htmlFor:"email",children:["Email",Object(re.jsx)(i.b,{to:"#",className:"link",children:"Already have an account?"})]}),Object(re.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return u(e.target.value)}})]}),Object(re.jsxs)("li",{children:[Object(re.jsx)("label",{htmlFor:"password",children:"Password "}),Object(re.jsx)("input",{type:"password",id:"password",name:"password",onChange:function(e){return v(e.target.value)}})]}),Object(re.jsxs)("li",{children:[Object(re.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password "}),Object(re.jsx)("input",{type:"password",id:"confirmPassword",name:"confirmPassword",onChange:function(e){return v(e.target.value)}})]}),Object(re.jsx)("li",{children:Object(re.jsx)("button",{type:"submit",className:"button primary",children:"Sign in"})})]})]})})})};var Te=function(e){var t=Object(l.c)((function(e){return e.userList})),r=t.loading,a=t.error,c=t.users,s=Object(l.c)((function(e){return e.userDelete})).success,o=Object(l.b)(),j=function(e){var t;window.confirm("Are you sure?")&&o((t=e._id,function(){var e=Object(h.a)(b.a.mark((function e(r,n){var a,c,i,s,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:T,payload:t}),a=n(),c=a.userSignin.userInfo,e.prev=2,e.next=5,A.a.delete(Q+"/api/users/delete/".concat(t),{headers:{Authorization:"Bearer ".concat(c.token)}});case 5:i=e.sent,s=i.data,r({type:P,payload:s}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),o=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,r({type:q,payload:o});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,r){return e.apply(this,arguments)}}()))};return Object(n.useEffect)((function(){o(function(){var e=Object(h.a)(b.a.mark((function e(t,r){var n,a,c,i,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:S}),e.prev=1,n=r(),a=n.userSignin.userInfo,e.next=5,A.a.get(Q+"/api/users",{headers:{Authorization:"Bearer ".concat(a.token)}});case 5:c=e.sent,i=c.data,t({type:E,payload:i}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),s=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:C,payload:s});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,r){return e.apply(this,arguments)}}()),o({type:y})}),[o,s]),Object(re.jsxs)("div",{children:[Object(re.jsx)("h1",{children:"Users"}),r?Object(re.jsx)("h1",{children:"Loading..."}):a?Object(re.jsx)("h1",{children:a}):Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(je,{}),Object(re.jsxs)("table",{className:"table",children:[Object(re.jsx)("thead",{children:Object(re.jsxs)("tr",{children:[Object(re.jsx)("th",{children:"ID"}),Object(re.jsx)("th",{children:"NAME"}),Object(re.jsx)("th",{children:"EMAIL"}),Object(re.jsx)("th",{children:"IS SELLER"}),Object(re.jsx)("th",{children:"IS ADMIN"}),Object(re.jsx)("th",{children:"ACTIONS"})]})}),Object(re.jsx)("tbody",{children:c.map((function(t){return Object(re.jsxs)("tr",{children:[Object(re.jsx)("td",{children:t._id}),Object(re.jsx)("td",{children:Object(re.jsx)(i.b,{to:"/profile/".concat(t._id),children:t.name})}),Object(re.jsx)("td",{children:t.email}),Object(re.jsx)("td",{children:t.isSeller?"YES":" NO"}),Object(re.jsx)("td",{children:t.isAdmin?"YES":"NO"}),Object(re.jsxs)("td",{children:[Object(re.jsx)("button",{type:"button",className:"small",onClick:function(){return e.history.push("/profile/".concat(t._id,"/settings"))},children:"Edit"}),Object(re.jsx)("button",{type:"button",className:"small",onClick:function(){return j(t)},children:"Delete"})]})]},t._id)}))})]})]})]})},Pe="CART_ADD_ITEM_FAIL",qe="CART_ADD_ITEM",Be="CART_REMOVE_ITEM",Qe="CART_SAVE_SHIPPING_ADDRESS",De="CART_SAVE_PAYMENT_METHOD",Le="CART_EMPTY";var Ve=function(e){var t=Object(s.f)().artworkId,r=e.location.search?Number(e.location.search.split("=")[1]):1,a=Object(l.c)((function(e){return e.cart})).cartItems,c=Object(l.b)();return Object(n.useEffect)((function(){t&&c(function(e,t){return function(){var r=Object(h.a)(b.a.mark((function r(n,a){var c,i,s,o;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,A.a.get("/api/artworks/".concat(e));case 2:c=r.sent,i=c.data,s=a(),(o=s.cart.cartItems).length>0&&i.seller._id!==o[0].seller._id?n({type:Pe,payload:"Can't Add To Cart. Buy only from ".concat(o[0].seller.seller.name," in this order")}):(n({type:qe,payload:{name:i.name,price:i.price,countInStock:i.countInStock,artwork:i._id,seller:i.seller,qty:t}}),localStorage.setItem("cartItems",JSON.stringify(a().cart.cartItems)));case 6:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()}(t,r)),console.log("CartItems: ",a)}),[c,t,r,a]),Object(re.jsxs)("div",{children:[Object(re.jsx)("h1",{children:"Shopping Cart"}),0===a.length?Object(re.jsx)("h3",{children:"Cart is empty"}):Object(re.jsx)(re.Fragment,{children:a.map((function(e){return Object(re.jsxs)("ul",{children:[Object(re.jsx)("li",{children:e.name}),Object(re.jsxs)("li",{children:["$",e.price]})]},e.artwork)}))})]})},Xe=r(49),Ge=r(81);var He=r(83),We=r(20),Je={userSignin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null},cart:{cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]}},ze=Object(Xe.b)({userSignin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return{loading:!0};case x:return{loading:!1,userInfo:t.payload};case m:return{loading:!1,error:t.payload};case v:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{loading:!0};case g:return{loading:!1,userInfo:t.payload};case U:return{loading:!1,error:t.payload};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return{loading:!0};case R:return{loading:!1,user:t.payload};case K:return{loading:!1,error:t.payload};case y:return{loading:!0};default:return e}},userList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{loading:!0};case E:return{loading:!1,users:t.payload};case C:return{loading:!1,error:t.payload};default:return e}},userUpdateProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{loading:!0};case I:return{loading:!1,success:!0};case N:return{loading:!1,error:t.payload};case k:return{};default:return e}},userDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{loading:!0};case P:return{loading:!1,success:!0};case q:return{loading:!1,error:t.payload};case B:return{};default:return e}},artworkList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ke:return{loading:!0};case ye:return{loading:!1,artworks:t.payload.artworks};case Se:return{loading:!1,error:t.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case qe:var r=t.payload,n=e.cartItems.find((function(e){return e.artwork===r.artwork}));return n?Object(We.a)(Object(We.a)({},e),{},{error:"",cartItems:e.cartItems.map((function(e){return e.artwork===n.artwork?r:e}))}):Object(We.a)(Object(We.a)({},e),{},{error:"",cartItems:[].concat(Object(He.a)(e.cartItems),[r])});case Be:return Object(We.a)(Object(We.a)({},e),{},{error:"",cartItems:e.cartItems.filter((function(e){return e.artwork!==t.payload}))});case Qe:return Object(We.a)(Object(We.a)({},e),{},{shippingAddress:t.payload});case De:return Object(We.a)(Object(We.a)({},e),{},{paymentMethod:t.payload});case Pe:return Object(We.a)(Object(We.a)({},e),{},{error:t.payload});case Le:return Object(We.a)(Object(We.a)({},e),{},{error:"",cartItems:[]});default:return e}}}),Me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Xe.c,Ye=Object(Xe.d)(ze,Je,Me(Object(Xe.a)(Ge.a))),_e=function(){var e=Object(j.useMediaQuery)({minWidth:200,maxWidth:800});return Object(re.jsx)(l.a,{store:Ye,children:Object(re.jsx)(o.a,{theme:_,children:Object(re.jsxs)(i.a,{children:[e?Object(re.jsx)(fe,{}):Object(re.jsx)(ne,{}),Object(re.jsxs)(s.c,{children:[Object(re.jsx)(s.a,{exact:!0,path:"/",children:Object(re.jsx)(ce,{})}),Object(re.jsx)(s.a,{path:"/categories",children:Object(re.jsx)(pe,{})}),Object(re.jsx)(s.a,{path:"/category/:id",children:Object(re.jsx)(xe,{})}),Object(re.jsx)(s.a,{path:"/about",children:Object(re.jsx)(ge,{})}),Object(re.jsx)(s.a,{path:"/faqs",children:Object(re.jsx)(Ue,{})}),Object(re.jsx)(s.a,{path:"/signin",component:Re}),Object(re.jsx)(s.a,{path:"/signup",component:ke}),Object(re.jsx)(s.a,{path:"/profile/:userId",component:Ne}),Object(re.jsx)(s.a,{path:"/allusers",component:Te}),Object(re.jsx)(s.a,{path:"/cart/:artworkId?",component:Ve}),Object(re.jsx)(s.a,{path:"*",children:Object(re.jsx)(Fe,{})})]})]})})})},Ze=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,175)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),c(e),i(e)}))};c.a.render(Object(re.jsx)(_e,{}),document.getElementById("root")),Ze()},97:function(e,t,r){}},[[128,1,2]]]);
//# sourceMappingURL=main.cdcf2d89.chunk.js.map