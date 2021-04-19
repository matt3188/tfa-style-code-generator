(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["addAccessory"],{"0cb2":function(e,t,n){var r=n("7b0b"),c=Math.floor,a="".replace,s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,o,u,l){var d=n+e.length,f=o.length,p=i;return void 0!==u&&(u=r(u),p=s),a.call(l,p,(function(r,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(d);case"<":s=u[a.slice(1,-1)];break;default:var i=+a;if(0===i)return r;if(i>f){var l=c(i/10);return 0===l?r:l<=f?void 0===o[l-1]?a.charAt(1):o[l-1]+a.charAt(1):r}s=o[i-1]}return void 0===s?"":s}))}},1406:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("b-columns",[n("b-column",[n("h1",{staticClass:"mb-5"},[e._v("Add Accessory")]),n("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.createRecord(t)}}},[n("RadioInput",{ref:"ainput",attrs:{inputs:e.accessories,label:"Accessories"},on:{changed:e.generateAccessoryNumber}}),n("RadioInput",{ref:"ainput1",attrs:{inputs:e.clubs,label:"Clubs"},on:{changed:e.updateClub}}),n("b-field",{attrs:{label:"Product Description"}},[n("b-input",{model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1),n("RadioInput",{ref:"ainput2",attrs:{inputs:e.seasons,label:"Seasons"},on:{changed:e.updateSeason}}),n("RadioInput",{ref:"ainput3",attrs:{inputs:e.years,label:"Years"},on:{changed:e.updateYear}}),n("hr"),n("h1",[e._v("Style code: "+e._s(e.generateAccesory))]),n("b-button",{staticClass:"mt-4",attrs:{tag:"input","native-type":"submit",value:"Submit",type:"is-primary"}})],1)])],1)],1)},c=[],a=n("5530"),s=(n("99af"),n("a4d3"),n("e01a"),n("5319"),n("ac1f"),n("b0c0"),n("2f62")),i=n("c219"),o=n("8017"),u={name:"Home",data:function(){return{input:"",accessoryNumber:""}},components:{RadioInput:o["a"]},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(s["c"])(["accessoryCount"])),Object(s["d"])({accessories:function(e){return e.accessories},accessorySelected:function(e){return e.selections.accessorySelected},clubs:function(e){return e.clubs},clubSelected:function(e){return e.selections.clubSelected},seasons:function(e){return e.seasons},seasonSelected:function(e){return e.selections.seasonSelected},years:function(e){return e.years},yearSelected:function(e){return e.selections.yearSelected}})),{},{generateAccesory:function(){return"TFACC".concat(this.accessoryNumber).concat(this.undef(this.clubSelected)).concat(this.description).concat(this.undef(this.seasonSelected)).concat(this.undef(this.yearSelected))},description:function(){return this.input?"-".concat(this.input.replace(/\s+/g,"_").toUpperCase(),"-"):"-"}}),methods:Object(a["a"])(Object(a["a"])({},Object(s["b"])(["getAll","updateAccessory","updateSeason","updateClub","updateYear","emptySelections"])),{},{undef:function(e){return"undefined"!==typeof e.value?e.value:" - "},createRecord:function(){var e=this,t={accessory:this.accessorySelected.name,club:this.clubSelected.name,description:this.input,season:this.seasonSelected.name,styleCode:this.generateAccesory,year:this.yearSelected.name};i["a"].create(t).then((function(t){console.log(t),e.success()}))},generateAccessoryNumber:function(e){var t=this.accessoryCount(e.name)+1,n=t.toLocaleString(void 0,{useGrouping:!1,minimumIntegerDigits:3});return this.accessoryNumber="".concat(e.value).concat(n),this.updateAccessory(e)},success:function(){this.$buefy.toast.open({message:"Something happened correctly!",type:"is-success"}),this.$refs.ainput.resetModel(),this.$refs.ainput1.resetModel(),this.$refs.ainput2.resetModel(),this.$refs.ainput3.resetModel(),this.input="",this.accessoryNumber="",this.getAll(),this.emptySelections()}})},l=u,d=(n("8c11"),n("2877")),f=Object(d["a"])(l,r,c,!1,null,"779192dc",null);t["default"]=f.exports},5319:function(e,t,n){"use strict";var r=n("d784"),c=n("825a"),a=n("50c4"),s=n("a691"),i=n("1d80"),o=n("8aa5"),u=n("0cb2"),l=n("14c3"),d=Math.max,f=Math.min,p=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=r.REPLACE_KEEPS_$0,v=h?"$":"$0";return[function(n,r){var c=i(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,c,r):t.call(String(c),n,r)},function(e,r){if(!h&&b||"string"===typeof r&&-1===r.indexOf(v)){var i=n(t,e,this,r);if(i.done)return i.value}var m=c(e),g=String(this),y="function"===typeof r;y||(r=String(r));var S=m.global;if(S){var A=m.unicode;m.lastIndex=0}var $=[];while(1){var _=l(m,g);if(null===_)break;if($.push(_),!S)break;var x=String(_[0]);""===x&&(m.lastIndex=o(g,a(m.lastIndex),A))}for(var C="",E=0,w=0;w<$.length;w++){_=$[w];for(var O=String(_[0]),I=d(f(s(_.index),g.length),0),R=[],j=1;j<_.length;j++)R.push(p(_[j]));var M=_.groups;if(y){var k=[O].concat(R,I,g);void 0!==M&&k.push(M);var N=String(r.apply(void 0,k))}else N=u(O,g,I,R,M,r);I>=E&&(C+=g.slice(E,I)+N,E=I+O.length)}return C+g.slice(E)}]}))},8017:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:e.localLabel,grouped:"","group-multiline":""}},e._l(e.inputs,(function(t){return n("b-radio-button",{key:t.name,attrs:{"native-value":t,type:"is-primary"},on:{input:e.changed},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[e._v(" "+e._s(t.name)+" ")])})),1)},c=[],a={name:"RadioInput",props:{label:String,inputs:Array},data:function(){return{model:""}},computed:{localLabel:function(){return this.label.indexOf("Accessories")>-1?"Categories":this.label}},methods:{changed:function(e){this.$emit("changed",e)},resetModel:function(){this.model=""}},watch:{success:function(){this.model=""}}},s=a,i=n("2877"),o=Object(i["a"])(s,r,c,!1,null,null,null);t["a"]=o.exports},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"8c11":function(e,t,n){"use strict";n("d08d")},"99af":function(e,t,n){"use strict";var r=n("23e7"),c=n("d039"),a=n("e8b5"),s=n("861d"),i=n("7b0b"),o=n("50c4"),u=n("8418"),l=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),h=f("isConcatSpreadable"),b=9007199254740991,v="Maximum allowed index exceeded",m=p>=51||!c((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),g=d("concat"),y=function(e){if(!s(e))return!1;var t=e[h];return void 0!==t?!!t:a(e)},S=!m||!g;r({target:"Array",proto:!0,forced:S},{concat:function(e){var t,n,r,c,a,s=i(this),d=l(s,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(a=-1===t?s:arguments[t],y(a)){if(c=o(a.length),f+c>b)throw TypeError(v);for(n=0;n<c;n++,f++)n in a&&u(d,f,a[n])}else{if(f>=b)throw TypeError(v);u(d,f++,a)}return d.length=f,d}})},b0c0:function(e,t,n){var r=n("83ab"),c=n("9bf2").f,a=Function.prototype,s=a.toString,i=/^\s*function ([^ (]*)/,o="name";r&&!(o in a)&&c(a,o,{configurable:!0,get:function(){try{return s.call(this).match(i)[1]}catch(e){return""}}})},d08d:function(e,t,n){},e01a:function(e,t,n){"use strict";var r=n("23e7"),c=n("83ab"),a=n("da84"),s=n("5135"),i=n("861d"),o=n("9bf2").f,u=n("e893"),l=a.Symbol;if(c&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new l(e):void 0===e?l():l(e);return""===e&&(d[t]=!0),t};u(f,l);var p=f.prototype=l.prototype;p.constructor=f;var h=p.toString,b="Symbol(test)"==String(l("test")),v=/^Symbol\((.*)\)[^)]+$/;o(p,"description",{configurable:!0,get:function(){var e=i(this)?this.valueOf():this,t=h.call(e);if(s(d,e))return"";var n=b?t.slice(7,-1):t.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}}}]);
//# sourceMappingURL=addAccessory.ed720da1.js.map