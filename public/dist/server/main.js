(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("fs");var n=e.n(t);const r=require("express");var a=e.n(r);const i=require("react");var o=e.n(i);const l=require("react-dom/server");var s=e.n(l);const c=require("react-router-dom/server"),u=require("@mui/material"),m=require("@mui/material/styles");const d={mainFirst:"hsl(228,4%,22%)",mainFirst08:"hsla(228,4%,22%,0.8)",mainFirst06:"hsla(228,4%,22%,0.6)",mainFirst02:"hsla(228,4%,22%,0.2)",mainSecond:"hsl(180,27%,44%)",mainSecond08:"hsla(180,27%,44%,0.8)",mainSecond06:"hsla(180,27%,44%,0.6)",red:"#dd1b1b",black06:"hsla(0,0%,0%,0.6)",black03:"hsla(0,0%,0%,0.3)"};const p=(0,m.createTheme)({breakpoints:{values:{xs:0,sm:320,md:640,lg:1040,xl:1440}},components:{MuiCssBaseline:{styleOverrides:{body:{overflowX:"hidden",fontWeight:"400",backgroundColor:d.mainFirst,width:"100vw",overflow:"hidden",margin:"0",height:"100vh"}}}},palette:{primary:{main:d.mainSecond,contrastText:d.mainFirst02},secondary:{main:d.mainFirst,contrastText:d.mainSecond},text:{primary:d.mainFirst,secondary:d.mainSecond,disabled:d.black06}}}),h=require("react-router-dom"),f=require("@mui/styles");const v=(0,f.makeStyles)({container:{display:"grid !important",placeItems:"center",height:"100vh"}});function g(){var e=v();return o().createElement(u.Container,{className:e.container},o().createElement(u.Typography,{sx:{color:"secondary.main"},variant:"h2",component:"h1",align:"center"},"PAGE NOT FOUND",o().createElement(u.Typography,{variant:"h6",component:"p"},"Go to the ",o().createElement(h.Link,{to:"/home"},"your page"))))}const x=(0,f.makeStyles)({box:{fontWeight:"500"}}),y=require("zustand");var b=e.n(y);const w=require("ramda");const E=function(e){return{login:function(t){return e((function(e){return(0,w.mergeDeepRight)(e,{isAuth:!0,authUserId:t})}))}}};const S=function(e){return{logout:function(){return e((function(e){return(0,w.mergeDeepRight)(e,{isAuth:!1,authUserId:""})}))}}};const k=function(e){return{createNewUser:function(t){return e((function(e){return{users:(0,w.append)(t,e.users)}}))}}};var N=function(){return N=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},N.apply(this,arguments)};const T=b()((function(e,t){return N(N(N({users:[],error:!1,loading:!1,isAuth:!1,authUserId:""},E(e)),S(e)),k(e))}));var C=function(e){var t=e.children,n=T((function(e){return e.isAuth})),r=(0,h.useNavigate)();return(0,i.useEffect)((function(){n||r("/signin")}),[n]),t},P=function(){var e=x();return o().createElement(C,null,o().createElement(u.Box,{className:e.box}))};const O=require("@mui/material/Container");var B=e.n(O);const M=(0,f.makeStyles)({container:{display:"grid !important",placeItems:"center",height:"100vh",padding:"0 !important"},box:{width:"320px",height:"460px",display:"flex",padding:"62px",boxShadow:"0 0 12px rgb(0 0 0 / 50%)",fontWeight:"500",borderRadius:"3%",flexDirection:"column",minWidth:"320px"},input:{marginBottom:"2rem !important","& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-input":{borderColor:"".concat(d.mainFirst06),borderWidth:"1.5px !important"}}});var W=function(){return W=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},W.apply(this,arguments)},F=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},q=((0,w.assoc)("id",Math.random().toString(36).substring(2,15)),function(e){var t=F(e,[]);return(0,w.merge)(W({},t),{id:"".concat(Math.random().toString(36).substring(2,15))})});function I(e){return!!e.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)}const j=(0,m.createTheme)({breakpoints:{values:{xs:0,sm:320,md:640,lg:1040,xl:1440}},components:{MuiCssBaseline:{styleOverrides:{body:{overflowX:"hidden",fontWeight:"400",backgroundColor:d.mainFirst,width:"100vw",overflow:"hidden",margin:"0 0 0 0",height:"100vh"}}}},palette:{secondary:{main:d.mainSecond,contrastText:d.mainFirst02},primary:{main:d.mainFirst,contrastText:d.mainSecond},text:{primary:d.mainFirst,secondary:d.mainFirst,disabled:d.black06}}});var R=function(){return R=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},R.apply(this,arguments)},A=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{s(r.next(e))}catch(e){i(e)}}function l(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((r=r.apply(e,t||[])).next())}))},L=function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},U=o().memo((function(e){var t=e.children,n=e.authUser,r=M(),a=(0,i.useState)(""),l=a[0],s=a[1],c=(0,i.useState)(""),d=c[0],p=c[1],h=(0,i.useState)({errorMail:!1,errorMailText:""}),f=h[0],v=f.errorMail,g=f.errorMailText,x=h[1],y=(0,i.useState)({errorPass:!1,errorPassText:""}),b=y[0],E=b.errorPass,S=b.errorPassText,k=y[1],N=(0,i.useState)(t),T=N[0],C=N[1],P=(0,i.useState)(),O=P[0],W=P[1];(0,i.useEffect)((function(){W(q({email:l,password:d}))}),[l,d]);return(0,i.useEffect)((function(){if(t)try{A(void 0,void 0,void 0,(function(){return L(this,(function(e){return[2,o().Children.map(t,(function(e){return o().isValidElement(e)?o().cloneElement(e,R(R({},w.props),{handleClick:function(e){return function(e){var t=e.id,r=e.email,a=e.password;if(!r)return x({errorMail:!0,errorMailText:"Enter your e-mail"}),a?void 0:void k({errorPass:!0,errorPassText:"Enter your password"});if(a)if(I(r)){if(a.length<6)k({errorPass:!0,errorPassText:"The password must contain at least 6 characters"});else if(!E&&!v){var i=n({id:t,email:r,password:a});i?"mailError"===i.type?x({errorMail:!0,errorMailText:i.message}):k({errorPass:!0,errorPassText:i.message}):(s(""),p(""))}}else x({errorMail:!0,errorMailText:"Incorrect e-mail"});else k({errorPass:!0,errorPassText:"Enter your password"})}(e)},inputError:v&&E,user:O})):e}))]}))})).then((function(e){C(e)}))}catch(e){console.log(e)}}),[t,v&&E,O]),o().createElement(m.ThemeProvider,{theme:j},o().createElement(u.CssBaseline,null),o().createElement(B(),{className:r.container},o().createElement(u.Box,{className:r.box,sx:{backgroundColor:"secondary.main"},component:"form",autoComplete:"off"},o().createElement(u.TextField,{error:v,className:r.input,id:"outlined-required",label:"E-mail",type:"email",sx:{borderColor:"text.primary"},autoComplete:"email",variant:"outlined",helperText:g,value:l,onChange:function(e){return function(e){var t,n=null===(t=e.target)||void 0===t?void 0:t.value;s(n),(""===n||I(n))&&x({errorMail:!1,errorMailText:""})}(e)}}),o().createElement(u.TextField,{error:E,className:r.input,id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password",helperText:S,value:d,onChange:function(e){return function(e){var t,n=null===(t=e.target)||void 0===t?void 0:t.value;p(n),(""===n||n.length>=6)&&k({errorPass:!1,errorPassText:""})}(e)}}),!!T&&T)))}));const D=require("@mui/icons-material/Send");var H=e.n(D);const X=require("@mui/icons-material/HowToRegOutlined");var z=e.n(X);const G=(0,f.makeStyles)({block:{display:"flex",flexDirection:"column"},firstButton:{"&:hover":{boxShadow:"0px 1px 1px -1px rgba(150, 150, 150, 0.84), 0px 1px 1px 0px rgba(214, 209, 209, 1), 0px 1px 1px 0px rgba(179, 172, 172, 0.67)"}},secondButton:{padding:"6px 0",width:"100%"},span:{fontSize:"1 rem",color:"".concat(d.mainFirst06," !important"),margin:"15px auto 15px"}});var _=o().memo((function(e){var t=G(),n=e.inputError,r=e.handleClick,a=e.user,i=(0,h.useNavigate)();return o().createElement("div",{className:t.block},o().createElement(u.Button,{className:t.firstButton,disabled:n,variant:"contained",endIcon:o().createElement(H(),null),onClick:function(){return r&&r(a)}},"Sign in"),o().createElement("span",{className:t.span},"New to this site?"),o().createElement(u.Button,{className:t.secondButton,onClick:function(){return i("/signup")},variant:"outlined",endIcon:o().createElement(z(),null)},"Create account"))})),V=function(){var e=T((function(e){return[e.users,e.loading,e.error,e.isAuth,e.login]})),t=e[0],n=e[1],r=e[2],a=e[3],i=e[4],l=(0,h.useNavigate)();return a?o().createElement(h.Navigate,{to:"/home"}):o().createElement(U,{authUser:function(e){if(!n&&!r){var a=(0,w.find)((0,w.propEq)("email",e.email))(t);return a?a.password!==e.password?{type:"mailPassword",message:"Wrong password"}:(i(a.id),void l("/home")):{type:"mailError",message:"Account with this address is not registered"}}}},o().createElement(_,null))};const Y=require("@mui/icons-material/ArrowForwardOutlined");var $=e.n(Y);const J=(0,f.makeStyles)({block:{display:"flex",flexDirection:"column"},firstButton:{},secondButton:{padding:"6px 0",width:"100%"},span:{fontSize:"1 rem",margin:"15px auto 15px"}});var K,Q=o().memo((function(e){var t=e.inputError,n=e.handleClick,r=e.user,a=J(),i=(0,h.useNavigate)();return o().createElement(o().Fragment,null,o().createElement(u.Button,{className:a.firstButton,disabled:t,variant:"contained",onClick:function(){return n&&n(r)},endIcon:o().createElement(H(),null)},"Create account"),o().createElement("span",{className:a.span},"Already have an account?"),o().createElement(u.Button,{className:a.secondButton,onClick:function(){return i("/signin")},variant:"outlined",endIcon:o().createElement($(),null)},"Sign in"))})),Z=function(){var e=T((function(e){return[e.users,e.loading,e.error,e.isAuth,e.login,e.createNewUser]})),t=e[0],n=e[1],r=e[2],a=e[3],i=e[4],l=e[5],s=(0,h.useNavigate)();return a?o().createElement(h.Navigate,{to:"/home"}):o().createElement(U,{authUser:function(e){if(!n&&!r)try{q({email:"some@gmail.com",name:"Name",lastName:"Lastname",tel:"88002000600",group:"all"});if((0,w.find)((0,w.propEq)("email",e.email))(t))return{type:"mailError",message:"An account with this address has already been registered"};l(e),i(e.id),s("/home")}catch(e){console.log(e)}}},o().createElement(Q,null))};const ee=(0,f.makeStyles)({"& .MuiPaper-root":{minHeight:"65px",maxHeight:"65px",position:"fixed",width:"100vw"},appBar:{minHeight:"65px",maxHeight:"65px",position:"fixed !important",width:"100vw",zIndex:1e3},link:{textDecoration:"none"},toolbar:(K={height:"inherit",display:"flex",alignItems:"center",justifyContent:"space-between",minWidth:"320px",padding:"0 10px !important",width:"100vw",margin:"0 auto"},K[j.breakpoints.up("xl")]={width:"1400px"},K),title:{color:d.mainFirst06,fontSize:"1.35rem !important",fontWeight:"500 !important",letterSpacing:"0.08em !important",minWidth:"20vw",display:"flex",justifyContent:"center",alignItems:"center",cursor:"none"},title__icon:{marginRight:"5px"}});var te;const ne=(0,f.makeStyles)({button:(te={color:"".concat(d.mainFirst06," !important"),padding:"10px 18px 10px 10px !important",borderWidth:"1.5px !important","&:hover":{borderWidth:"1.7px solid !important"}},te[j.breakpoints.up("md")]={padding:"10px 20px !important",minWidth:"108px !important"},te)});var re=function(e,t,n){(0,i.useEffect)((function(){return window.addEventListener(e,t),function(){return window.removeEventListener(e,t)}}),[t,e,n])},ae=function(){var e=function(){var e=(0,i.useState)({height:0,width:0}),t=e[0],n=e[1];return(0,i.useEffect)((function(){n({height:window.innerHeight,width:window.innerWidth})}),[]),re("resize",(function(){return n({height:window.innerHeight,width:window.innerWidth})})),t}().width,t=(0,i.useState)({isSm:!0,isMd:!0,isLg:!0,isXl:!0}),n=t[0],r=t[1];n.isSm,n.isMd,n.isLg,n.isXl;return(0,i.useEffect)((function(){r(e<640?{isSm:!0,isMd:!1,isLg:!1,isXl:!1}:e<1040?{isSm:!1,isMd:!0,isLg:!1,isXl:!1}:e<1440?{isSm:!1,isMd:!1,isLg:!0,isXl:!1}:{isSm:!1,isMd:!1,isLg:!1,isXl:!0})}),[e]),n},ie=o().memo((function(e){var t=ae().isSm,n=ne(),r=e.btnIcon,a=e.onClick,i=e.text,l=e.btnClassName,s=void 0===l?n.button:l;return o().createElement(u.Button,{className:s,onClick:a,variant:"contained",endIcon:r},!t&&i)}));const oe=require("@mui/icons-material/LogoutOutlined");var le,se=e.n(oe),ce=o().memo((function(){ae().isSm;var e=ee(),t=(0,h.useNavigate)(),n=T((function(e){return e.isAuth})),r=T((function(e){return e.logout}));(0,i.useEffect)((function(){n||t("/signin")}),[]);return o().createElement(u.AppBar,{position:"static",className:e.appBar},o().createElement(u.Toolbar,{className:e.toolbar},o().createElement(u.Typography,{className:e.title},"HomePage"),o().createElement(h.Link,{className:e.link,to:"/signin"},o().createElement(ie,{onClick:function(){r()},text:"Logout",btnIcon:o().createElement(se(),null)}))))}));const ue=(0,f.makeStyles)({content:(le={minWidth:" 320px",maxWidth:"639px",paddingTop:"65px",height:"100vh",margin:"0 auto"},le[j.breakpoints.up("md")]={minWidth:"640px",maxWidth:"999px"},le[j.breakpoints.up("lg")]={minWidth:"1000px",maxWidth:"1399px"},le[j.breakpoints.up("xl")]={minWidth:"1400px",maxWidth:"1400px"},le)});var me=o().memo((function(e){var t=e.children,n=ue();return o().createElement(u.Box,{className:n.content},t)}));const de=require("react-dom");var pe,he=e.n(de);const fe=(0,f.makeStyles)({modalBack:{position:"absolute",top:"0",left:"0",width:"100vw",backgroundColor:"rgba(0, 0, 0, 0.3)",display:"grid",placeItems:"center",zIndex:1e4,height:"100vh"},modal:(pe={backgroundColor:"transparent",minWidth:"320px",maxWidth:"320px",display:"flex",justifyContent:"center",position:"relative"},pe[j.breakpoints.up("md")]={margin:"0 auto"},pe)});var ve=o().memo((function(e){var t=e.children,n=(0,i.useState)(),r=n[0],a=n[1],l=fe(),s=(0,i.useRef)(null),c=(0,h.useNavigate)();return(0,i.useEffect)((function(){var e;a(null!==(e=document.querySelector("#modal"))&&void 0!==e?e:void 0)}),[]),function(e){var t=e.action,n=e.ref;re("click",(function(e){var r;e.target instanceof Node&&!(null===(r=n.current)||void 0===r?void 0:r.contains(e.target))&&t()}),[])}({action:function(){return c(-1)},ref:s}),r?he().createPortal(o().createElement("div",{className:l.modalBack},o().createElement("div",{ref:s,className:l.modal},t)),r):null})),ge=o().memo((function(){return o().createElement(ve,null,o().createElement(u.CircularProgress,{color:"primary"}))})),xe=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1];return(0,i.useEffect)((function(){n(!0)}),[]),t?o().createElement(o().Fragment,null,o().createElement(ce,null),o().createElement(me,null,o().createElement(h.Outlet,null))):o().createElement(ge,null)},ye=function(){return o().createElement(m.ThemeProvider,{theme:p},o().createElement(u.CssBaseline,null),o().createElement(h.Routes,null,o().createElement(h.Route,{path:"/",element:o().createElement(xe,null)},o().createElement(h.Route,{index:!0,element:o().createElement(h.Navigate,{to:"/home"})}),o().createElement(h.Route,{path:"/home",element:o().createElement(P,null)})),o().createElement(h.Route,{path:"/signin",element:o().createElement(V,null)}),o().createElement(h.Route,{path:"/signup",element:o().createElement(Z,null)}),o().createElement(h.Route,{path:"*",element:o().createElement(g,null)})))};const be=require("helmet");var we=e.n(be),Ee=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{s(r.next(e))}catch(e){i(e)}}function l(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((r=r.apply(e,t||[])).next())}))},Se=function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},ke=a()(),Ne=[];n().readdirSync("./public/dist/assets").forEach((function(e){"js"===e.split(".").pop()&&Ne.push("/assets/"+e)})),ke.use("/assets",a().static("./public/dist/assets")),ke.use(we()({contentSecurityPolicy:!1})),ke.get("*",(function(e,t){return Ee(void 0,void 0,void 0,(function(){return Se(this,(function(n){var r,a;return t.send((r=s().renderToString(o().createElement(c.StaticRouter,{location:e.url},o().createElement(ye,null))),a=s().renderToString(Ne.map((function(e,t){return o().createElement("script",{src:e,key:t})}))),' \n<!DOCTYPE html>\n<html lang="en">\n        <head>\n                <meta charSet="utf-8"/>\n                <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0">\n                <meta name="theme-color" content="#000000"/>\n                <title>React-Auth</title>\n        </head>\n        <body>\n                <div id="root">'.concat(r,'</div>\n                <div id="modal"></div>\n                ').concat(a,"\n        </body>\n</html>\n"))),[2]}))}))})),ke.listen(3e3,(function(){return console.log("Listening on port http://localhost:".concat(3e3))}))})();