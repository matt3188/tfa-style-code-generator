(function(e){function t(t){for(var a,r,i=t[0],u=t[1],l=t[2],s=0,d=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={index:0},o={index:0},c=[];function i(e){return u.p+"js/"+({accessories:"accessories",addAccessory:"addAccessory",addClothing:"addClothing",clothing:"clothing",home:"home",profile:"profile"}[e]||e)+"."+{accessories:"8382078e",addAccessory:"ed720da1",addClothing:"a85596be",clothing:"857f46a5",home:"c1fc4ac4",profile:"b756d43a"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={addAccessory:1,addClothing:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({accessories:"accessories",addAccessory:"addAccessory",addClothing:"addClothing",clothing:"clothing",home:"home",profile:"profile"}[e]||e)+"."+{accessories:"31d6cfe0",addAccessory:"fbec8fc2",addClothing:"877c3c99",clothing:"31d6cfe0",home:"31d6cfe0",profile:"31d6cfe0"}[e]+".css",o=u.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],s=l.getAttribute("data-href");if(s===a||s===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/tfa-style-code-generator/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TheNavBar"),n("router-view"),n("TheFooter")],1)},c=[],i=n("5530"),u=n("2f62"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-navbar",{scopedSlots:e._u([{key:"brand",fn:function(){return[a("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[a("img",{attrs:{src:n("cf05"),alt:"T&F Sports Aparell"}})])]},proxy:!0},e.$auth.isAuthenticated?{key:"start",fn:function(){return[a("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[e._v(" Home")]),a("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/clothing"}}},[e._v(" Clothing ")]),a("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/accessories"}}},[e._v(" Accessories ")])]},proxy:!0}:null,{key:"end",fn:function(){return[a("b-navbar-item",{attrs:{tag:"div"}},[e.$auth.isAuthenticated?a("b-button",{on:{click:e.logout}},[e._v("Log out")]):a("b-button",{attrs:{type:"is-primary"},on:{click:e.login}},[e._v(" Log in ")])],1)]},proxy:!0}],null,!0)})},s=[],d={name:"TheNavBar",methods:{login:function(){this.$auth.loginWithRedirect()},logout:function(){this.$auth.logout({returnTo:window.location.href})}}},f=d,m=(n("664e"),n("2877")),h=Object(m["a"])(f,l,s,!1,null,"4cb12eee",null),p=h.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-footer",[n("div",{staticClass:"content has-text-centered"},[n("p",[e._v(" Made with"),n("b-icon",{attrs:{icon:"heart",size:"is-small"}}),e._v(" for T&F Sports Apparel"),n("br"),e._v(" By Matt Coleman ")],1)])])},g=[],b={name:"TheFooter"},y=b,C=Object(m["a"])(y,v,g,!1,null,null,null),S=C.exports,A={name:"App",components:{TheNavBar:p,TheFooter:S},methods:Object(i["a"])({},Object(u["b"])(["getAll"])),mounted:function(){this.getAll()}},T=A,E=(n("5c0b"),Object(m["a"])(T,o,c,!1,null,null,null)),w=E.exports,O=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),k=n("1da1"),_=n("15fd"),j=(n("caad"),n("2532"),n("841c"),n("ac1f"),n("96cf"),n("9767")),x=function(){return window.history.replaceState({},document.title,"/")},R=function(){return a},L=function(e){var t=e.onRedirectCallback,n=void 0===t?x:t,o=e.redirectUri,c=void 0===o?"https://matt3188.github.io/tfa-style-code-generator":o,u=Object(_["a"])(e,["onRedirectCallback","redirectUri"]);return a||(a=new r["a"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(e,t){var n=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.popupOpen=!0,a.prev=1,a.next=4,n.auth0Client.loginWithPopup(e,t);case 4:return a.next=6,n.auth0Client.getUser();case 6:return n.user=a.sent,a.next=9,n.auth0Client.isAuthenticated();case 9:n.isAuthenticated=a.sent,n.error=null,a.next=17;break;case 13:a.prev=13,a.t0=a["catch"](1),n.error=a.t0,console.error(a.t0);case 17:return a.prev=17,n.popupOpen=!1,a.finish(17);case 20:return a.next=22,n.auth0Client.getUser();case 22:n.user=a.sent,n.isAuthenticated=!0;case 24:case"end":return a.stop()}}),a,null,[[1,13,17,20]])})))()},handleRedirectCallback:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.auth0Client.handleRedirectCallback();case 4:return t.next=6,e.auth0Client.getUser();case 6:e.user=t.sent,e.isAuthenticated=!0,e.error=null,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),e.error=t.t0;case 14:return t.prev=14,e.loading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,11,14,17]])})))()},loginWithRedirect:function(e){return this.auth0Client.loginWithRedirect(e)},getIdTokenClaims:function(e){return this.auth0Client.getIdTokenClaims(e)},getTokenSilently:function(e){return this.auth0Client.getTokenSilently(e)},getTokenWithPopup:function(e){return this.auth0Client.getTokenWithPopup(e)},logout:function(e){return this.auth0Client.logout(e)}},created:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(j["a"])(Object(i["a"])(Object(i["a"])({},u),{},{client_id:u.clientId,redirect_uri:c}));case 2:if(e.auth0Client=t.sent,t.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){t.next=11;break}return t.next=7,e.auth0Client.handleRedirectCallback();case 7:a=t.sent,r=a.appState,e.error=null,n(r);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](3),e.error=t.t0;case 16:return t.prev=16,t.next=19,e.auth0Client.isAuthenticated();case 19:return e.isAuthenticated=t.sent,t.next=22,e.auth0Client.getUser();case 22:return e.user=t.sent,e.loading=!1,t.finish(16);case 25:case"end":return t.stop()}}),t,null,[[3,13,16,25]])})))()}}),a)},M={install:function(e,t){e.prototype.$auth=L(t)}},P=function(e,t,n){var a=R(),r=function(){if(a.isAuthenticated)return n();a.loginWithRedirect({appState:{targetUrl:e.fullPath}})};if(!a.loading)return r();a.$watch("loading",(function(e){if(!1===e)return r()}))};r["a"].use(O["a"]);var F,U=[{path:"/",name:"Home",component:function(){return n.e("home").then(n.bind(null,"bb51"))}},{path:"/tfa-style-code-generator/",redirect:"/"},{path:"/profile",name:"Profile",component:function(){return n.e("profile").then(n.bind(null,"c66d"))},beforeEnter:P},{path:"/clothing",name:"Clothing",component:function(){return n.e("clothing").then(n.bind(null,"b7e6"))},beforeEnter:P},{path:"/clothing/add",name:"Add Clothing",component:function(){return n.e("addClothing").then(n.bind(null,"641f"))},beforeEnter:P},{path:"/accessories",name:"Accessories",component:function(){return n.e("accessories").then(n.bind(null,"245e"))},beforeEnter:P},{path:"/accessories/add",name:"Add Accessory",component:function(){return n.e("addAccessory").then(n.bind(null,"1406"))},beforeEnter:P}],N=new O["a"]({mode:"history",base:"/tfa-style-code-generator/",routes:U}),B=N,W={all:[],selections:{accessorySelected:{},categorySelected:{name:"Mens",value:"M"},garmentSelected:{name:"",value:""},clubSelected:{name:"",value:""},seasonSelected:{name:"",value:""},yearSelected:{name:"",value:""}},categories:[{name:"Mens",value:"M"},{name:"Ladies",value:"L"},{name:"Kids",value:"K"},{name:"Baby",value:"B"}],accessories:[{name:"Bag",value:"1"},{name:"Bedding",value:"2"},{name:"Car Merchandise",value:"3"},{name:"Flask",value:"4"},{name:"Football",value:"5"},{name:"Footwear",value:"6"},{name:"Goal Keeper Gloves",value:"7"},{name:"Hat",value:"8"},{name:"Key Ring",value:"9"},{name:"Miscellaneous Accessories",value:"10"},{name:"Mug",value:"11"},{name:"Pin Badge",value:"12"},{name:"Scarf",value:"13"},{name:"Shin Guards / Pads",value:"14"},{name:"Stationary",value:"15"},{name:"Tie",value:"16"},{name:"Towel",value:"17"},{name:"Wallet",value:"18"},{name:"Water bottle",value:"19"}],garments:[{name:"T-Shirt",value:"1"},{name:"Polo",value:"2"},{name:"Sweatshirt",value:"3"},{name:"Hoodie",value:"4"},{name:"Track Jacket",value:"5"},{name:"Shorts",value:"6"},{name:"Leggings",value:"7"},{name:"Jog pants",value:"8"},{name:"Shirt",value:"9"},{name:"Knitwear",value:"10"},{name:"Pyjamas",value:"11"},{name:"Retro Shirt",value:"12"}],clubs:[{name:"Atlético Madrid",value:"ADM"},{name:"Brighton and Hove Albion",value:"BHA"},{name:"Burnley F.C.",value:"BURN"},{name:"Exeter City F.C.",value:"EXFC"},{name:"Ipswich Town F.C.",value:"IPS"},{name:"Leeds United",value:"LUFC"},{name:"Leicester City F.C.",value:"LCFC"},{name:"Luton Town F.C.",value:"LUTFC"},{name:"Malaga C.F.",value:"MAL"},{name:"Middlesbrough United",value:"MID"},{name:"Millwall Football Club",value:"MILL"},{name:"Nottingham F.C.",value:"NOTF"},{name:"Queens Park Rangers",value:"QPR"},{name:"Real Madrid C.F.",value:"RM"},{name:"Southampton F.C.",value:"STH"},{name:"Sunderland A.F.C.",value:"SUN"},{name:"Tottenham Hotspur",value:"THFC"},{name:"West Ham United",value:"WHU"}],seasons:[{name:"Spring Summer",value:"SS"},{name:"Autumn Winter",value:"AW"}],years:[{name:"2021",value:"21"},{name:"2022",value:"22"},{name:"2023",value:"23"},{name:"2024",value:"24"}]},H=n("c219"),I={getAll:function(e){var t=e.commit;H["a"].getAll().then((function(e){t("SET_ALL",e.data)}))},updateAccessory:function(e,t){var n=e.commit;n("SET_ACCESSORY",t)},updateCategory:function(e,t){var n=e.commit;n("SET_CATEGORY",t)},updateGarment:function(e,t){var n=e.commit;n("SET_GARMENT",t)},updateSeason:function(e,t){var n=e.commit;n("SET_SEASON",t)},updateClub:function(e,t){var n=e.commit;n("SET_CLUB",t)},updateYear:function(e,t){var n=e.commit;n("SET_YEAR",t)},emptySelections:function(e){var t=e.commit;t("EMPTY_SELECTIONS")}},Y=(n("4de4"),{garments:function(e){return e.all.filter((function(e){return e.garment}))},accessories:function(e){return e.all.filter((function(e){return e.accessory}))},garmentCount:function(e,t){return function(e){return t.garments.filter((function(t){return t.garment==e})).length}},accessoryCount:function(e,t){return function(e){return t.accessories.filter((function(t){return t.accessory==e})).length}}}),$=n("ade3"),G="SET_ALL",D="SET_ACCESSORY",K="SET_CATEGORY",J="SET_GARMENT",q="SET_SEASON",Q="SET_CLUB",z="SET_YEAR",X="EMPTY_SELECTIONS",V=(F={},Object($["a"])(F,G,(function(e,t){e.all=t})),Object($["a"])(F,D,(function(e,t){e.selections.accessorySelected=t})),Object($["a"])(F,K,(function(e,t){e.selections.categorySelected=t})),Object($["a"])(F,J,(function(e,t){e.selections.garmentSelected=t})),Object($["a"])(F,q,(function(e,t){e.selections.seasonSelected=t})),Object($["a"])(F,Q,(function(e,t){e.selections.clubSelected=t})),Object($["a"])(F,z,(function(e,t){e.selections.yearSelected=t})),Object($["a"])(F,X,(function(e){e.selections={accessorySelected:{name:"",value:""},categorySelected:{name:"",value:""},garmentSelected:{name:"",value:""},seasonSelected:{name:"",value:""},clubSelected:{name:"",value:""},yearSelected:{name:"",value:""}}})),F),Z=n("b054"),ee=n.n(Z);r["a"].use(u["a"]);var te=!0,ne=new u["a"].Store({state:W,actions:I,getters:Y,mutations:V,plugins:[ee()({collapsed:!0,logActions:!te,logMutations:!te})],strict:!te}),ae=n("289d"),re=(n("5abe"),n("13ce")),oe=n.n(re);r["a"].use(oe.a),r["a"].use(ae["a"]),r["a"].use(M,{domain:"tfsportsapparel.eu.auth0.com",clientId:"YveEWsK06T2LFEC8DE4fnrT9LpFeD7jI",onRedirectCallback:function(e){B.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}}),r["a"].config.productionTip=!1,new r["a"]({router:B,store:ne,render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"5fe3":function(e,t,n){},"664e":function(e,t,n){"use strict";n("5fe3")},"9c0c":function(e,t,n){},c219:function(e,t,n){"use strict";var a=n("d4ec"),r=n("bee2"),o=n("bc3a"),c=n.n(o),i=c.a.create({baseURL:"https://tfa-style-number-api.herokuapp.com",withCredentials:!1,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS","Content-type":"application/json"}}),u=function(){function e(){Object(a["a"])(this,e)}return Object(r["a"])(e,[{key:"getAll",value:function(){return i.get("/style-codes")}},{key:"get",value:function(e){return i.get("/style-codes/".concat(e))}},{key:"create",value:function(e){return console.log(e),i.post("/style-codes",e)}},{key:"update",value:function(e,t){return i.put("/style-codes/".concat(e),t)}},{key:"delete",value:function(e){return i.delete("/style-codes/".concat(e))}},{key:"deleteAll",value:function(){return i.delete("/style-codes")}}]),e}();t["a"]=new u},cf05:function(e,t,n){e.exports=n.p+"img/logo.ec162a4d.png"}});
//# sourceMappingURL=index.2732916d.js.map