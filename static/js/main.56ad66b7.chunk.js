(this.webpackJsonpappiness_task=this.webpackJsonpappiness_task||[]).push([[0],{128:function(e,a,t){},189:function(e,a,t){e.exports=t(369)},194:function(e,a,t){},195:function(e,a,t){},330:function(e,a,t){},369:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(5),o=t.n(l),s=(t(194),t(195),t(196),t(381)),m=t(379),i=t(380),c=t(31),d=t(383),u=t(384),p=(t(128),t(64)),g=Object(p.b)((function(e){return{Credentials:e.Credentials}}))((function(e){return r.a.createElement("div",{className:"form-layout"},r.a.createElement(m.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(a){var t=a.email,n=a.password;if(t===e.Credentials.username&&n===e.Credentials.password){var r="email=".concat(t,"&password=").concat(n);window.location.href="/dashboard?"+encodeURIComponent(r)}else s.a.warn("Invalid Email/ Password...")}},r.a.createElement(m.a.Item,{name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},r.a.createElement(i.a,{prefix:r.a.createElement(d.a,{className:"site-form-item-icon"}),placeholder:"Email"})),r.a.createElement(m.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},r.a.createElement(i.a,{prefix:r.a.createElement(u.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),r.a.createElement(m.a.Item,null,r.a.createElement(c.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"))))})),f=t(162),h=t.n(f),E=t(378),b=t(382),v=t(376),x=t(377),y=t(163),w=t(164),N=t(183),k=t(186),I=t(371),C=t(372),j=t(373),O=t(374),L=t(375),P=t(94),T=(t(330),{fontSize:"24px",marginLeft:"35px",color:"#fff",paddingBottom:"50px",marginBottom:"-7px",height:"40px",paddingLeft:"1px",paddingTop:"20px",marginTop:"-8px"}),_=function(e){Object(k.a)(t,e);var a=Object(N.a)(t);function t(e){return Object(y.a)(this,t),a.call(this,e)}return Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I.a,{id:"nav",className:"navbar navbar-default navbar-fixed-top be-top-header",light:!0,expand:"xs"},r.a.createElement(C.a,{style:T,className:"brand",href:"/"},"Appiness Interactive"),r.a.createElement(j.a,{className:"nav navbar-nav",navbar:!0},r.a.createElement(O.a,null),r.a.createElement(L.a,{className:"navLink"})),r.a.createElement(j.a,{className:"ml-auto",navbar:!0,style:{color:"blue"}},r.a.createElement("button",{style:{backgroundColor:"#000"}},r.a.createElement("a",{tag:P.b,style:{color:"#fff",marginLeft:"7px"},href:"/"},"Logout")," "))))}}]),t}(r.a.Component),A=[],B=[{title:"Id",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Gender",dataIndex:"gender",key:"gender"},{title:"Address",dataIndex:"address",key:"address"},{title:"Mobile No",key:"phone",dataIndex:"phone"}];function W(e){for(var a=e.users,t=0;t<a.length;t++)A.push({id:a[t].id,name:a[t].name,age:a[t].age,gender:a[t].gender,address:a[t].email,phone:[a[t].phoneNo]});return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),r.a.createElement("div",{className:"p-3 my-2 rounded"},r.a.createElement(b.a,{style:{maxWidth:"1400px",marginTop:"20px"}},r.a.createElement(v.a,null,"Employee List"),r.a.createElement(x.a,null,r.a.createElement(E.a,{className:"main-table",columns:B,dataSource:A})))))}var q=Object(p.b)((function(e){return{Credentials:e.Credentials,users_data:e.users}}))((function(e){var a=e.Credentials.username,t=e.Credentials.password,n=h.a.parse(decodeURIComponent(e.location.search)),l=n.email,o=n.password;return l===a&&o===t?r.a.createElement("div",null,r.a.createElement(W,{users:e.users_data})):window.location.href="/"})),F=t(45);t(368);var J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P.a,null,r.a.createElement(F.c,null,r.a.createElement(F.a,{exact:!0,path:"/",component:g}),r.a.createElement(F.a,{exact:!0,path:"/dashboard",component:q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=t(61),S=Object(R.b)({users:function(){return[{id:1,name:"test1",age:"11",gender:"male",email:"test1@gmail.com",phoneNo:"9415346313"},{id:2,name:"test2",age:"12",gender:"male",email:"test2@gmail.com",phoneNo:"9415346314"},{id:3,name:"test3",age:"13",gender:"male",email:"test3@gmail.com",phoneNo:"9415346315"},{id:4,name:"test4",age:"14",gender:"male",email:"test4@gmail.com",phoneNo:"9415346316"},{id:5,name:"test5",age:"15",gender:"male",email:"test5@gmail.com",phoneNo:"9415346317"},{id:6,name:"test6",age:"16",gender:"male",email:"test6@gmail.com",phoneNo:"9415346318"}]},Credentials:function(){return{username:"hruday@gmail.com",password:"hruday123"}}});o.a.render(r.a.createElement(p.a,{store:Object(R.c)(S)},r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[189,1,2]]]);
//# sourceMappingURL=main.56ad66b7.chunk.js.map