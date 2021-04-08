(function(e){function t(t){for(var a,r,u=t[0],s=t[1],l=t[2],i=0,m=[];i<u.length;i++)r=u[i],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&m.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},c={app:0},o=[];function r(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"95fbb33d"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=c[e]=[t,a]}));t.push(n[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=r(e);var l=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(i);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}c[e]=void 0}};var i=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/tfa-style-code-generator/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"27c0":function(e,t,n){"use strict";n("9dd2")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},o=[],r=(n("5c0b"),n("2877")),u={},s=Object(r["a"])(u,c,o,!1,null,null,null),l=s.exports,i=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("b-columns",[n("b-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[n("b-tab-item",{attrs:{label:"Clothing"}},[e.submitted?n("b-column",[e._v(" Submitted ")]):n("b-column",[n("RadioInput",{attrs:{inputs:e.categories,label:"Categories"},on:{changed:e.updateCategory}}),n("RadioInput",{attrs:{inputs:e.garments,label:"Garments"},on:{changed:e.generateGarmentNumber}}),n("RadioInput",{attrs:{inputs:e.clubs,label:"Clubs"},on:{changed:e.updateClub}}),n("b-field",{attrs:{label:"Product Description"}},[n("b-input",{model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1),n("RadioInput",{attrs:{inputs:e.seasons,label:"Seasons"},on:{changed:e.updateSeason}}),n("RadioInput",{attrs:{inputs:e.years,label:"Years"},on:{changed:e.updateYear}}),n("hr"),n("h1",[e._v("Style code: "+e._s(e.generateGarment))]),n("b-button",{staticClass:"mt-4",attrs:{type:"is-primary"},on:{click:function(t){return e.createRecord("clothing")}}},[e._v(" Submit ")])],1)],1),n("b-tab-item",{attrs:{label:"Accesories"}},[e.submitted?n("b-column",[e._v(" Submitted ")]):n("b-column",[n("RadioInput",{attrs:{inputs:e.accessories,label:"Accessories"},on:{changed:e.updateAccessory}}),n("RadioInput",{attrs:{inputs:e.clubs,label:"Clubs"},on:{changed:e.updateClub}}),n("b-field",{attrs:{label:"Product Description"}},[n("b-input",{model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1),n("RadioInput",{attrs:{inputs:e.seasons,label:"Seasons"},on:{changed:e.updateSeason}}),n("RadioInput",{attrs:{inputs:e.years,label:"Years"},on:{changed:e.updateYear}}),n("hr"),n("h1",[e._v("Style code: "+e._s(e.generateAccesory))]),n("b-button",{attrs:{type:"is-primary"},on:{click:function(t){return e.createRecord()}}},[e._v(" Submit ")])],1)],1)],1)],1)],1)},m=[],b=n("5530"),p=(n("99af"),n("a4d3"),n("e01a"),n("5319"),n("ac1f"),n("b0c0"),n("2f62")),f=n("c219"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:e.localLabel,grouped:"","group-multiline":""}},e._l(e.inputs,(function(t){return n("b-radio-button",{key:t.name,attrs:{"native-value":t,type:"is-primary"},on:{input:e.changed},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[e._v(" "+e._s(t.name)+" ")])})),1)},h=[],S=(n("fb6a"),{name:"RadioInput",props:{label:String,inputs:Array},data:function(){return{model:""}},computed:Object(b["a"])(Object(b["a"])({},Object(p["c"])({selected:function(e){return this.label.indexOf("Categories")>-1?e.selections.categorySelected:this.label.indexOf("Accessories")>-1?e.selections.accessorySelected:e.selections["".concat(this.label.toLowerCase().slice(0,-1),"Selected")]}})),{},{localLabel:function(){return this.label.indexOf("Accessories")>-1?"Categories":this.label}}),methods:Object(b["a"])(Object(b["a"])({},Object(p["b"])({updateState:function(e,t){return this.label.indexOf("Categories")>-1?e("updateCategory",t):this.label.indexOf("Accessories")>-1?e("updateAccessory",t):e("update".concat(this.label.slice(0,-1)),t)}})),{},{changed:function(e){this.updateState(e)}})}),g=S,y=Object(r["a"])(g,v,h,!1,null,null,null),C=y.exports,O={name:"Home",data:function(){return{all:[],input:"",activeTab:0,submitted:!1}},components:{RadioInput:C},computed:Object(b["a"])(Object(b["a"])({},Object(p["c"])({accessories:function(e){return e.accessories},accessorySelected:function(e){return e.selections.accessorySelected},categories:function(e){return e.categories},categorySelected:function(e){return e.selections.categorySelected},clubs:function(e){return e.clubs},clubSelected:function(e){return e.selections.clubSelected},garments:function(e){return e.garments},garmentSelected:function(e){return e.selections.garmentSelected},seasons:function(e){return e.seasons},seasonSelected:function(e){return e.selections.seasonSelected},years:function(e){return e.years},yearSelected:function(e){return e.selections.yearSelected}})),{},{generateGarment:function(){return"TF".concat(this.undef(this.categorySelected)).concat(this.undef(this.garmentSelected)).concat(this.undef(this.clubSelected)).concat(this.description).concat(this.undef(this.seasonSelected)).concat(this.undef(this.yearSelected))},generateAccesory:function(){return"ACC".concat(this.undef(this.accessorySelected)).concat(this.undef(this.clubSelected)).concat(this.description).concat(this.undef(this.seasonSelected)).concat(this.undef(this.yearSelected))},description:function(){return this.input?"-".concat(this.input.replace(/\s+/g,"_").toUpperCase(),"-"):"-"}}),methods:Object(b["a"])(Object(b["a"])({},Object(p["b"])(["updateAccessory","updateCategory","updateGarment","updateSeason","updateClub","updateYear"])),{},{undef:function(e){return"undefined"!==typeof e.value?e.value:" - "},createRecord:function(e){var t=this,n={};n="clothing"===e?{category:this.categorySelected.name,club:this.clubSelected.name,description:this.input,garment:this.garmentSelected.name,season:this.seasonSelected.name,styleCode:this.generateGarment,year:this.yearSelected.name}:{accessory:this.accessorySelected.name,club:this.clubSelected.name,description:this.input,garment:this.garmentSelected.name,season:this.seasonSelected.name,styleCode:this.generateAccesory,year:this.yearSelected.name},f["a"].create(n).then((function(e){console.log(e),t.submitted=!0,setTimeout((function(){t.submitted=!1}),2e3)}))},deleteAll:function(){f["a"].deleteAll()},generateGarmentNumber:function(e){this.updateGarment("".concat(e,"-").concat(this.randomNumber()))},randomNumber:function(){return Math.floor(899*Math.random()+100)}})},A=O,T=(n("27c0"),Object(r["a"])(A,d,m,!1,null,"60e5e1fc",null)),_=T.exports;a["a"].use(i["a"]);var E,j=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],R=new i["a"]({mode:"history",base:"/tfa-style-code-generator/",routes:j}),w=R,M={selections:{accessorySelected:{},categorySelected:{},garmentSelected:{},clubSelected:{},seasonSelected:{},yearSelected:{}},categories:[{name:"Mens",value:"M"},{name:"Ladies",value:"L"},{name:"Kids",value:"K"},{name:"Baby",value:"B"}],accessories:[{name:"Bag",value:"001"},{name:"Bedding",value:"002"},{name:"Car Merchandise",value:"003"},{name:"Flask",value:"004"},{name:"Football",value:"005"},{name:"Footwear",value:"006"},{name:"Goal Keeper Gloves",value:"007"},{name:"Hat",value:"008"},{name:"Key Ring",value:"009"},{name:"Miscellaneous Accessories",value:"010"},{name:"Mug",value:"011"},{name:"Pin Badge",value:"012"},{name:"Scarf",value:"013"},{name:"Shin Guards / Pads",value:"014"},{name:"Stationary",value:"015"},{name:"Tie",value:"016"},{name:"Towel",value:"017"},{name:"Wallet",value:"018"},{name:"Water bottle",value:"019"}],garments:[{name:"T-Shirt",value:"001"},{name:"Polo",value:"002"},{name:"Sweatshirt",value:"003"},{name:"Hoodie",value:"004"},{name:"Track Jacket",value:"005"},{name:"Shorts",value:"006"},{name:"Leggings",value:"007"},{name:"Jog pants",value:"008"},{name:"Shirt",value:"009"},{name:"Knitwear",value:"010"},{name:"Pyjamas",value:"011"},{name:"Retro Shirt",value:"012"}],clubs:[{name:"Atlético Madrid",value:"ADM"},{name:"Brighton and Hove Albion",value:"BHA"},{name:"Burnley F.C.",value:"BURN"},{name:"Exeter City F.C.",value:"EXFC"},{name:"Ipswich Town F.C.",value:"IPS"},{name:"Leeds United",value:"LUFC"},{name:"Leicester City F.C.",value:"LCFC"},{name:"Luton Town F.C.",value:"LUTFC"},{name:"Malaga C.F.",value:"MAL"},{name:"Middlesbrough United",value:"MID"},{name:"Millwall Football Club",value:"MILL"},{name:"Nottingham F.C.",value:"NOTF"},{name:"Queens Park Rangers",value:"QPR"},{name:"Real Madrid C.F.",value:"RM"},{name:"Southampton F.C.",value:"STH"},{name:"Sunderland A.F.C.",value:"SUN"},{name:"Tottenham Hotspur",value:"THFC"},{name:"West Ham United",value:"WHU"}],seasons:[{name:"Spring Summer",value:"SS"},{name:"Autumn Winter",value:"AW"}],years:[{name:"2021",value:"21"},{name:"2022",value:"22"},{name:"2023",value:"23"},{name:"2024",value:"24"}]},P={updateAccessory:function(e,t){var n=e.commit;n("SET_ACCESSORY",t)},updateCategory:function(e,t){var n=e.commit;n("SET_CATEGORY",t)},updateGarment:function(e,t){var n=e.commit;n("SET_GARMENT",t)},updateSeason:function(e,t){var n=e.commit;n("SET_SEASON",t)},updateClub:function(e,t){var n=e.commit;n("SET_CLUB",t)},updateYear:function(e,t){var n=e.commit;n("SET_YEAR",t)},emptySelections:function(e){var t=e.commit;t("EMPTY_SELECTIONS")}},L={},k=n("ade3"),F="SET_ACCESSORY",x="SET_CATEGORY",I="SET_GARMENT",G="SET_SEASON",N="SET_CLUB",U="SET_YEAR",Y="EMPTY_SELECTIONS",H=(E={},Object(k["a"])(E,F,(function(e,t){e.selections.accessorySelected=t})),Object(k["a"])(E,x,(function(e,t){e.selections.categorySelected=t})),Object(k["a"])(E,I,(function(e,t){e.selections.garmentSelected=t})),Object(k["a"])(E,G,(function(e,t){e.selections.seasonSelected=t})),Object(k["a"])(E,N,(function(e,t){e.selections.clubSelected=t})),Object(k["a"])(E,U,(function(e,t){e.selections.yearSelected=t})),Object(k["a"])(E,Y,(function(e){e.selections={}})),E),B=n("b054"),D=n.n(B);a["a"].use(p["a"]);var W=!0,K=new p["a"].Store({state:M,actions:P,getters:L,mutations:H,plugins:[D()({collapsed:!0,logActions:!W,logMutations:!W})],strict:!W}),J=n("289d"),$=(n("5abe"),n("13ce")),Q=n.n($);a["a"].use(Q.a),a["a"].use(J["a"]),a["a"].config.productionTip=!1,new a["a"]({router:w,store:K,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},"9dd2":function(e,t,n){},c219:function(e,t,n){"use strict";var a=n("d4ec"),c=n("bee2"),o=n("bc3a"),r=n.n(o),u=r.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/tfa-style-code-generator/"}).VUE_APP_API_URL,withCredentials:!1,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS","Content-type":"application/json"}}),s=function(){function e(){Object(a["a"])(this,e)}return Object(c["a"])(e,[{key:"getAll",value:function(){return u.get("/style-codes")}},{key:"get",value:function(e){return u.get("/style-codes/".concat(e))}},{key:"create",value:function(e){return console.log(e),u.post("/style-codes",e)}},{key:"update",value:function(e,t){return u.put("/style-codes/".concat(e),t)}},{key:"delete",value:function(e){return u.delete("/style-codes/".concat(e))}},{key:"deleteAll",value:function(){return u.delete("/style-codes")}}]),e}();t["a"]=new s}});
//# sourceMappingURL=app.aa7c5f75.js.map