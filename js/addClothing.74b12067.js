(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["addClothing"],{"0cb2":function(e,t,n){var r=n("7b0b"),a=Math.floor,i="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,s,u,l){var d=n+e.length,f=s.length,p=o;return void 0!==u&&(u=r(u),p=c),i.call(l,p,(function(r,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(d);case"<":c=u[i.slice(1,-1)];break;default:var o=+i;if(0===o)return r;if(o>f){var l=a(o/10);return 0===l?r:l<=f?void 0===s[l-1]?i.charAt(1):s[l-1]+i.charAt(1):r}c=s[o-1]}return void 0===c?"":c}))}},2922:function(e,t,n){"use strict";n("cf42")},5319:function(e,t,n){"use strict";var r=n("d784"),a=n("825a"),i=n("50c4"),c=n("a691"),o=n("1d80"),s=n("8aa5"),u=n("0cb2"),l=n("14c3"),d=Math.max,f=Math.min,p=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=r.REPLACE_KEEPS_$0,g=h?"$":"$0";return[function(n,r){var a=o(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,a,r):t.call(String(a),n,r)},function(e,r){if(!h&&b||"string"===typeof r&&-1===r.indexOf(g)){var o=n(t,e,this,r);if(o.done)return o.value}var m=a(e),v=String(this),S="function"===typeof r;S||(r=String(r));var y=m.global;if(y){var C=m.unicode;m.lastIndex=0}var $=[];while(1){var _=l(m,v);if(null===_)break;if($.push(_),!y)break;var x=String(_[0]);""===x&&(m.lastIndex=s(v,i(m.lastIndex),C))}for(var E="",A=0,I=0;I<$.length;I++){_=$[I];for(var O=String(_[0]),R=d(f(c(_.index),v.length),0),w=[],M=1;M<_.length;M++)w.push(p(_[M]));var j=_.groups;if(S){var G=[O].concat(w,R,v);void 0!==j&&G.push(j);var N=String(r.apply(void 0,G))}else N=u(O,v,R,w,j,r);R>=A&&(E+=v.slice(A,R)+N,A=R+O.length)}return E+v.slice(A)}]}))},"641f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("b-columns",[n("b-column",[n("h1",{staticClass:"mb-5"},[e._v("Add Clothing")]),n("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.createRecord(t)}}},[n("RadioInput",{ref:"input",attrs:{inputs:e.categories,label:"Categories"},on:{changed:e.updateCategory}}),n("RadioInput",{ref:"input1",attrs:{inputs:e.garments,label:"Garments"},on:{changed:e.generateGarmentNumber}}),n("RadioInput",{ref:"input2",attrs:{inputs:e.clubs,label:"Clubs"},on:{changed:e.updateClub}}),n("b-field",{attrs:{label:"Product Description"}},[n("b-input",{model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1),n("RadioInput",{ref:"input3",attrs:{inputs:e.seasons,label:"Seasons"},on:{changed:e.updateSeason}}),n("RadioInput",{ref:"input4",attrs:{inputs:e.years,label:"Years"},on:{changed:e.updateYear}}),n("hr"),n("h1",[e._v("Style code: "+e._s(e.generateGarment))]),n("b-button",{staticClass:"mt-4",attrs:{tag:"input","native-type":"submit",label:"Submit",type:"is-primary",disabled:!0}})],1)])],1)],1)},a=[],i=n("5530"),c=(n("99af"),n("a4d3"),n("e01a"),n("5319"),n("ac1f"),n("b0c0"),n("2f62")),o=n("c219"),s=n("8017"),u={name:"AddClothing",data:function(){return{input:"",garmentNumber:""}},components:{RadioInput:s["a"]},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(c["c"])(["garmentCount"])),Object(c["d"])({accessories:function(e){return e.accessories},accessorySelected:function(e){return e.selections.accessorySelected},categories:function(e){return e.categories},categorySelected:function(e){return e.selections.categorySelected},clubs:function(e){return e.clubs},clubSelected:function(e){return e.selections.clubSelected},garments:function(e){return e.garments},garmentSelected:function(e){return e.selections.garmentSelected},seasons:function(e){return e.seasons},seasonSelected:function(e){return e.selections.seasonSelected},years:function(e){return e.years},yearSelected:function(e){return e.selections.yearSelected}})),{},{generateGarment:function(){return"TF".concat(this.undef(this.categorySelected)).concat(this.garmentNumber).concat(this.undef(this.clubSelected)).concat(this.description).concat(this.undef(this.seasonSelected)).concat(this.undef(this.yearSelected))},description:function(){return this.input?"-".concat(this.input.replace(/\s+/g,"_").toUpperCase(),"-"):"-"}}),methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["emptySelections","getAll","updateCategory","updateClub","updateGarment","updateSeason","updateYear"])),{},{undef:function(e){return"undefined"!==typeof e.value?e.value:" - "},createRecord:function(){var e=this,t={category:this.categorySelected.name,club:this.clubSelected.name,description:this.input,garment:this.garmentSelected.name,season:this.seasonSelected.name,styleCode:this.generateGarment,year:this.yearSelected.name};o["a"].create(t).then((function(t){console.log(t),e.success()}))},generateGarmentNumber:function(e){var t=this.garmentCount(e.name)+1,n=t.toLocaleString(void 0,{useGrouping:!1,minimumIntegerDigits:3});return this.garmentNumber="".concat(e.value).concat(n),this.updateGarment(e)},randomNumber:function(){return Math.floor(899*Math.random()+100)},success:function(){this.$buefy.toast.open({message:"Something happened correctly!",type:"is-success"}),this.$refs.input.resetModel(),this.$refs.input1.resetModel(),this.$refs.input2.resetModel(),this.$refs.input3.resetModel(),this.$refs.input4.resetModel(),this.input="",this.garmentNumber="",this.getAll(),this.emptySelections()}})},l=u,d=(n("2922"),n("2877")),f=Object(d["a"])(l,r,a,!1,null,"05b44433",null);t["default"]=f.exports},8017:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{label:e.localLabel,grouped:"","group-multiline":""}},e._l(e.inputs,(function(t){return n("b-radio-button",{key:t.name,attrs:{"native-value":t,type:"is-primary"},on:{input:e.changed},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[e._v(" "+e._s(t.name)+" ")])})),1)},a=[],i={name:"RadioInput",props:{label:String,inputs:Array},data:function(){return{model:""}},computed:{localLabel:function(){return this.label.indexOf("Accessories")>-1?"Categories":this.label}},methods:{changed:function(e){this.$emit("changed",e)},resetModel:function(){this.model=""}}},c=i,o=n("2877"),s=Object(o["a"])(c,r,a,!1,null,null,null);t["a"]=s.exports},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"99af":function(e,t,n){"use strict";var r=n("23e7"),a=n("d039"),i=n("e8b5"),c=n("861d"),o=n("7b0b"),s=n("50c4"),u=n("8418"),l=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),h=f("isConcatSpreadable"),b=9007199254740991,g="Maximum allowed index exceeded",m=p>=51||!a((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),v=d("concat"),S=function(e){if(!c(e))return!1;var t=e[h];return void 0!==t?!!t:i(e)},y=!m||!v;r({target:"Array",proto:!0,forced:y},{concat:function(e){var t,n,r,a,i,c=o(this),d=l(c,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(i=-1===t?c:arguments[t],S(i)){if(a=s(i.length),f+a>b)throw TypeError(g);for(n=0;n<a;n++,f++)n in i&&u(d,f,i[n])}else{if(f>=b)throw TypeError(g);u(d,f++,i)}return d.length=f,d}})},b0c0:function(e,t,n){var r=n("83ab"),a=n("9bf2").f,i=Function.prototype,c=i.toString,o=/^\s*function ([^ (]*)/,s="name";r&&!(s in i)&&a(i,s,{configurable:!0,get:function(){try{return c.call(this).match(o)[1]}catch(e){return""}}})},cf42:function(e,t,n){},e01a:function(e,t,n){"use strict";var r=n("23e7"),a=n("83ab"),i=n("da84"),c=n("5135"),o=n("861d"),s=n("9bf2").f,u=n("e893"),l=i.Symbol;if(a&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new l(e):void 0===e?l():l(e);return""===e&&(d[t]=!0),t};u(f,l);var p=f.prototype=l.prototype;p.constructor=f;var h=p.toString,b="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var e=o(this)?this.valueOf():this,t=h.call(e);if(c(d,e))return"";var n=b?t.slice(7,-1):t.replace(g,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}}}]);
//# sourceMappingURL=addClothing.74b12067.js.map