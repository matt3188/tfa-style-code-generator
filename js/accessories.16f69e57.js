(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["accessories"],{"0748":function(e,t,l){"use strict";var n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("b-table",e._b({attrs:{data:e.data}},"b-table",e.$props,!1),[e._l(e.columnHeadings,(function(t){return[l("b-table-column",{key:t.field,attrs:{field:t.field,label:t.label,sortable:""},scopedSlots:e._u([{key:"default",fn:function(l){return[[e._v(e._s(l.row[t.field]))]]}}],null,!0)})]})),l("b-table-column",{attrs:{field:"actions","custom-key":"actions"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._t("actions",null,null,t)]}}],null,!0)})],2)},a=[],o={name:"Table",props:{data:{type:Array,required:!0},columnHeadings:{type:Array,required:!0},sortIconSize:{type:String,default:"is-default"},striped:{type:Boolean,deault:!0},hoverable:{type:Boolean,deault:!0},defaultSort:String,defaultSortDirection:{type:String,default:"asc"},detailKey:String,loading:{type:Boolean,default:!1}}},s=o,c=l("2877"),r=Object(c["a"])(s,n,a,!1,null,null,null);t["a"]=r.exports},"245e":function(e,t,l){"use strict";l.r(t);var n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("b-container",[l("b-columns",[l("b-column",[l("Table",{attrs:{columnHeadings:e.columns,data:e.accessories,loading:!e.accessories},scopedSlots:e._u([{key:"actions",fn:function(e){return[l("TableActions",{attrs:{slotProps:e}})]}}])})],1)],1)],1)},a=[],o=l("5530"),s=l("2f62"),c=l("0748"),r=l("c51d"),i={name:"Accessories",components:{TableActions:r["a"],Table:c["a"]},data:function(){return{columns:[{field:"styleCode",label:"Style Code"},{field:"accessory",label:"Accessory"},{field:"club",label:"Club"},{field:"description",label:"Description"},{field:"season",label:"season"},{field:"year",label:"year"}]}},computed:Object(o["a"])(Object(o["a"])({},Object(s["d"])(["all"])),Object(s["c"])(["accessories"]))},u=i,d=l("2877"),b=Object(d["a"])(u,n,a,!1,null,null,null);t["default"]=b.exports},c51d:function(e,t,l){"use strict";var n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"buttons"},[l("b-button",{attrs:{type:"is-danger","icon-right":"delete"},on:{click:function(t){return e.confirmCustomDelete(e.slotProps.row)}}})],1)},a=[],o=l("5530"),s=l("2f62"),c=l("c219"),r={name:"TableActions",props:{slotProps:Object},methods:Object(o["a"])(Object(o["a"])({},Object(s["b"])(["getAll"])),{},{confirmCustomDelete:function(e){var t=this;this.$buefy.dialog.confirm({title:"Deleting item",message:"Are you sure you want to <b>delete</b> ".concat(e.styleCode,"? This action cannot be undone."),confirmText:"Delete",type:"is-danger",hasIcon:!0,onConfirm:function(){return t.deleteItem(e)}})},deleteItem:function(e){var t=this;c["a"].delete(e.id).then((function(){t.$buefy.toast.open({message:"".concat(e.styleCode," deleted"),type:"is-success"}),t.getAll()}))}})},i=r,u=l("2877"),d=Object(u["a"])(i,n,a,!1,null,null,null);t["a"]=d.exports}}]);
//# sourceMappingURL=accessories.16f69e57.js.map