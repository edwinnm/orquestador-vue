(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"166a":function(t,e,i){},3408:function(t,e,i){},"3ad0":function(t,e,i){},"615b":function(t,e,i){},"61d2":function(t,e,i){},"899c":function(t,e,i){},a434:function(t,e,i){"use strict";var s=i("23e7"),n=i("23cb"),a=i("a691"),r=i("50c4"),l=i("7b0b"),o=i("65f0"),c=i("8418"),u=i("1dde"),d=u("splice"),h=Math.max,p=Math.min,v=9007199254740991,f="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var i,s,u,d,m,g,b=l(this),y=r(b.length),I=n(t,y),O=arguments.length;if(0===O?i=s=0:1===O?(i=0,s=y-I):(i=O-2,s=p(h(a(e),0),y-I)),y+i-s>v)throw TypeError(f);for(u=o(b,s),d=0;d<s;d++)m=I+d,m in b&&c(u,d,b[m]);if(u.length=s,i<s){for(d=I;d<y-s;d++)m=d+s,g=d+i,m in b?b[g]=b[m]:delete b[g];for(d=y;d>y-s+i;d--)delete b[d-1]}else if(i>s)for(d=y-s;d>I;d--)m=d+s-1,g=d+i-1,m in b?b[g]=b[m]:delete b[g];for(d=0;d<i;d++)b[d+I]=arguments[d+2];return b.length=y-s+i,u}})},c740:function(t,e,i){"use strict";var s=i("23e7"),n=i("b727").findIndex,a=i("44d2"),r="findIndex",l=!0;r in[]&&Array(1)[r]((function(){l=!1})),s({target:"Array",proto:!0,forced:l},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a(r)},db42:function(t,e,i){},f820:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h5",{staticClass:"text-h4 my-4"},[t._v("Servicios utilizados")]),i("v-card",{attrs:{tile:""}},t._l(t.services,(function(e){return i("v-list-item",{key:e.title},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-h5 py-4"},[t._v(t._s(e.title))]),i("v-list-item-subtitle",{staticClass:"text-subtitle-1 py-1"},[t._v(" "+t._s(e.description)+" ")]),i("v-list-item-subtitle",[i("a",{staticClass:"text-decoration-none",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.url))])])],1)],1)})),1)],1)},n=[],a={data:function(){return{services:[{title:"Usuario Random",description:"Servicio empleado para obtener información de usuarios ficticios.",url:"https://randomuser.me/"},{title:"Avatars",description:"Servicio utilizado para generar avatars estilo pixel art a partir del username y el nombre real de usuario.",url:"https://avatars.dicebear.com/"},{title:"Lorem Picsum",description:"Servicio utilizado para generar la galería de cada usuario.",url:"https://picsum.photos/"}]}}},r=a,l=i("2877"),o=i("6544"),c=i.n(o),u=i("5530"),d=(i("a9e3"),i("0481"),i("615b"),i("10d2")),h=i("297c"),p=i("1c87"),v=i("58df"),f=Object(v["a"])(h["a"],p["a"],d["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(u["a"])(Object(u["a"])({"v-card":!0},p["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},d["a"].options.computed.classes.call(this))},styles:function(){var t=Object(u["a"])({},d["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=h["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}}),m=(i("61d2"),i("a9ad")),g=i("4e82"),b=i("7560"),y=i("f2e7"),I=i("5607"),O=i("80d2"),C=i("d9bd"),x=Object(v["a"])(m["a"],p["a"],b["a"],Object(g["a"])("listItemGroup"),Object(y["b"])("inputValue")),_=x.extend().extend({name:"v-list-item",directives:{Ripple:I["a"]},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return Object(u["a"])(Object(u["a"])({"v-list-item":!0},p["a"].options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(p["a"].options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&Object(C["d"])("avatar",this)},methods:{click:function(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs:function(){var t=Object(u["a"])({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-".concat(this._uid)):this.isInList&&(t.role="listitem")),t}},render:function(t){var e=this,i=this.generateRouteLink(),s=i.tag,n=i.data;n.attrs=Object(u["a"])(Object(u["a"])({},n.attrs),this.genAttrs()),n[this.to?"nativeOn":"on"]=Object(u["a"])(Object(u["a"])({},n[this.to?"nativeOn":"on"]),{},{keydown:function(t){t.keyCode===O["l"].enter&&e.click(t),e.$emit("keydown",t)}}),this.inactive&&(s="div"),this.inactive&&this.to&&(n.on=n.nativeOn,delete n.nativeOn);var a=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(s,this.setTextColor(this.color,n),a)}}),j=i("b85c"),k=(i("c740"),i("a434"),i("3ad0"),i("8dd9")),$=(k["a"].extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return Object(u["a"])(Object(u["a"])({},k["a"].options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var e=this.groups.findIndex((function(e){return e._uid===t._uid}));e>-1&&this.groups.splice(e,1)},listClick:function(t){if(!this.expand){var e,i=Object(j["a"])(this.groups);try{for(i.s();!(e=i.n()).done;){var s=e.value;s.toggle(t)}}catch(n){i.e(n)}finally{i.f()}}}},render:function(t){var e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:Object(u["a"])({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}}),i("ade3")),A=(i("466d"),i("ac1f"),i("db42"),i("9d26")),B=(i("498a"),i("2b0e")),V=B["a"].extend({name:"v-list-item-icon",functional:!0,render:function(t,e){var i=e.data,s=e.children;return i.staticClass="v-list-item__icon ".concat(i.staticClass||"").trim(),t("div",i,s)}}),S=i("7e2b"),w=B["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(C["d"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}}),L=i("3206"),z=i("0789"),M=Object(v["a"])(S["a"],w,m["a"],Object(L["a"])("list"),y["a"]),G=(M.extend().extend({name:"v-list-group",directives:{ripple:I["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:String,noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes:function(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive:function(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created:function(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy:function(){this.list&&this.list.unregister(this)},methods:{click:function(t){var e=this;this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((function(){return e.isActive=!e.isActive})))},genIcon:function(t){return this.$createElement(A["a"],t)},genAppendIcon:function(){var t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(V,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader:function(){return this.$createElement(_,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:Object($["a"])({},this.activeClass,this.isActive),props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(u["a"])(Object(u["a"])({},this.listeners$),{},{click:this.click})},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:t.isActive}]},Object(O["j"])(t))]}))},genPrependIcon:function(){var t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(V,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange:function(t){if(this.group){var e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e}},toggle:function(t){var e=this,i=this._uid===t;i&&(this.isBooted=!0),this.$nextTick((function(){return e.isActive=i}))},matchRoute:function(t){return null!==t.match(this.group)}},render:function(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(z["a"],this.genItems())])}}),i("899c"),i("4de4"),i("caad"),i("2532"),i("159b"),i("fb6a"),i("7db0"),i("166a"),i("a452")),E=Object(v["a"])(G["a"],b["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(u["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(C["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var s=this.selectedValues.indexOf(i);if(!(s<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var s=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,s))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),s=i.findIndex((function(e){return e===t}));this.mandatory&&s>-1&&i.length-1<1||null!=this.max&&s<0&&i.length+1>this.max||(s>-1?i.splice(s,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}}),R=(E.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),Object(v["a"])(E,m["a"]).extend({name:"v-list-item-group",provide:function(){return{isInGroup:!0,listItemGroup:this}},computed:{classes:function(){return Object(u["a"])(Object(u["a"])({},E.options.computed.classes.call(this)),{},{"v-list-item-group":!0})}},methods:{genData:function(){return this.setTextColor(this.color,Object(u["a"])(Object(u["a"])({},E.options.methods.genData.call(this)),{},{attrs:{role:"listbox"}}))}}}),B["a"].extend({name:"v-list-item-action",functional:!0,render:function(t,e){var i=e.data,s=e.children,n=void 0===s?[]:s;i.staticClass=i.staticClass?"v-list-item__action ".concat(i.staticClass):"v-list-item__action";var a=n.filter((function(t){return!1===t.isComment&&" "!==t.text}));return a.length>1&&(i.staticClass+=" v-list-item__action--stack"),t("div",i,n)}}),i("3408"),i("24b2")),N=i("a236"),P=Object(v["a"])(m["a"],R["a"],N["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(u["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(u["a"])({height:Object(O["d"])(this.size),minWidth:Object(O["d"])(this.size),width:Object(O["d"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),T=P,D=(T.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes:function(){return Object(u["a"])(Object(u["a"])({"v-list-item__avatar--horizontal":this.horizontal},T.options.computed.classes.call(this)),{},{"v-avatar--tile":this.tile||this.horizontal})}},render:function(t){var e=T.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}}),Object(O["e"])("v-list-item__action-text","span"),Object(O["e"])("v-list-item__content","div")),H=Object(O["e"])("v-list-item__title","div"),J=Object(O["e"])("v-list-item__subtitle","div"),U=Object(l["a"])(r,s,n,!1,null,null,null);e["default"]=U.exports;c()(U,{VCard:f,VListItem:_,VListItemContent:D,VListItemSubtitle:J,VListItemTitle:H})}}]);
//# sourceMappingURL=about.e7ae385f.js.map