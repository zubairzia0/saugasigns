(function(t){function e(e){for(var n,s,o=e[0],u=e[1],c=e[2],l=0,f=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var u=a[s];0!==i[u]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},r=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d2f4e816"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=n);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=s(t);var c=new Error;r=function(e){u.onerror=u.onload=null,clearTimeout(l);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",c.name="ChunkLoadError",c.type=n,c.request=r,a[1](c)}i[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},"03a5":function(t,e,a){var n=a("377b");t.exports={components:{VerticalProduct:n},methods:{addToCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.commit("addItemToCart",{itemId:t,quantity:e}),this.$store.commit("updateSnackbar",{show:!0})}}}},"0ff1":function(t,e,a){"use strict";var n=a("e7e9"),i=a.n(n);e["default"]=i.a},1215:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",[a("Header"),a("PopularProducts",{staticClass:"body"}),a("Footer",{staticClass:"footer"})],1)])},i=[]},"1c5d":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Cart")])},i=[]},"1ef9":function(t,e,a){"use strict";a.r(e);var n=a("e8a0"),i=a("368b");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var s=a("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},2368:function(t,e,a){"use strict";var n=a("953a"),i=a("7e50"),r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"25ad":function(t,e,a){"use strict";a.r(e);var n=a("9313"),i=a("7589");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var s=a("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},2664:function(t,e,a){"use strict";var n=a("cb59"),i=a("f9e8"),r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"272d":function(t,e,a){"use strict";var n=a("e00f"),i=a.n(n);e["default"]=i.a},"285f":function(t,e,a){"use strict";a.r(e);var n=a("03a5"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"2a44":function(t,e,a){"use strict";a.r(e);var n=a("c011"),i=a("285f");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var s=a("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},"2c52":function(t,e,a){"use strict";a.r(e);var n=a("d335"),i=a("490e");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var s=a("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},"31ad":function(t,e,a){"use strict";a.r(e);var n=a("998b"),i=a("4109");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var s=a("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},"368b":function(t,e,a){"use strict";a.r(e);var n=a("d5f1"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"377b":function(t,e,a){"use strict";a.r(e);var n=a("fd27"),i=a("8690");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var s=a("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},"3aa1":function(t,e,a){"use strict";var n=a("fe63"),i=a.n(n);i.a},4109:function(t,e,a){"use strict";a.r(e);var n=a("c6c6"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"436b":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",[a("v-toolbar-title",[t._v("Saugadesign - Custom Home Address signs")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{to:"/",text:""}},[t._v(" Home ")]),a("v-btn",{attrs:{to:"aboutus",text:""}},[t._v(" About us! ")]),a("v-btn",{attrs:{href:"#cart",text:""}},[t._v(" Cart ")])],1)],1)],1)},i=[]},"43ff":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" Sidebar ")])},i=[]},"450f":function(t,e){t.exports={data:function(){return{prices:["Any","Under $25","$25 to $100","$100 to $500","Over $500"],priceFilter:0,checkbox:!0}}}},"472e":function(t,e,a){"use strict";var n=a("f030"),i=a.n(n);e["default"]=i.a},"490e":function(t,e,a){"use strict";a.r(e);var n=a("9fe4"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"50af":function(t,e,a){"use strict";a.r(e);var n=a("55cb"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},5200:function(t,e,a){"use strict";var n=a("436b"),i=a("0ff1"),r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"55cb":function(t,e){t.exports={props:{next:Function,previous:Function,rules:Object,data:Object}}},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("bf40");var n=a("2b0e"),i=a("ce5b"),r=a.n(i),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("TopNav"),a("v-main",[a("router-view")],1)],1)},o=[],u=a("5200"),c={name:"app",components:{TopNav:u["default"]}},l=c,d=(a("034f"),a("2877")),f=Object(d["a"])(l,s,o,!1,null,null,null),m=f.exports,v=(a("d3b7"),a("8c4f")),p=a("bb51"),h=a("2664"),b=a("b789"),g=a("7cb4"),y=a("2368");n["default"].use(v["a"]);var x=[{path:"/",name:"Home",component:p["default"]},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/aboutus",name:"aboutus",component:h["default"]},{path:"/cart",name:"cart",component:b["default"]},{path:"/checkout",name:"checkout",component:g["default"]},{path:"/thank-you",name:"thankyou",component:y["default"]}],w=new v["a"]({routes:x}),_=w,C=a("2f62");n["default"].use(C["a"]);var O=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("d5e8"),a("5363");n["default"].use(r.a),n["default"].use(v["a"]),n["default"].component("app",m),new n["default"]({Vue:n["default"],vuetify:new r.a,store:O,router:_,render:function(t){return t(m)}}).$mount("#app")},"5ced":function(t,e,a){},"5fc7":function(t,e,a){"use strict";a.r(e);var n=a("962a"),i=a("50af");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var s=a("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},7589:function(t,e,a){"use strict";a.r(e);var n=a("f46b"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"7ad4":function(t,e,a){"use strict";var n=a("9cae"),i=a.n(n);e["default"]=i.a},"7cb4":function(t,e,a){"use strict";var n=a("f2ad"),i=a("472e"),r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"7e50":function(t,e,a){"use strict";var n=a("ab1f"),i=a.n(n);e["default"]=i.a},"7e51":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",{staticClass:"container"},[n("v-img",{attrs:{src:a("7e71"),"aspect-ratio":"3"}},[n("h1",{staticClass:"vue-typer"},[t._v("Welcome to Sauga Design!")]),n("vue-typer",{staticClass:"vue-typer2",attrs:{text:["Get a quote and place an order below"],repeat:0,shuffle:!1,"initial-action":"typing","pre-type-delay":2600,"type-delay":50,"pre-erase-delay":166,"erase-delay":60,"erase-style":"backspace","erase-on-complete":!1,"caret-animation":"expand"}}),n("v-row",{class:t.font,attrs:{align:"end"}},[n("vue-typer",{staticClass:"Banner1",attrs:{text:["123 Address Sign"],repeat:0,shuffle:!1,"initial-action":"typing","pre-type-delay":5200,"type-delay":100,"pre-erase-delay":1500,"erase-delay":200,"erase-style":"backspace","erase-on-complete":!1,"caret-animation":"expand"}})],1)],1),n("div",[n("v-row",[n("v-col",[n("v-text-field",{staticClass:"input",attrs:{label:"Enter Address Sign here!","hide-details":"auto"},model:{value:t.overlay,callback:function(e){t.overlay="string"===typeof e?e.trim():e},expression:"overlay"}}),n("h2",[t._v("Select a Font")]),n("v-radio-group",{staticClass:"radio",attrs:{"text-align:center":"",mandatory:!0},model:{value:t.radio.value,callback:function(e){t.$set(t.radio,"value",e)},expression:"radio.value"}},[n("div",{staticClass:"overline mb-3"},[t._v("Classic")]),n("v-row",[n("v-radio",{staticClass:"radio-1",attrs:{label:"Edward",value:"1",id:"one"}}),n("v-radio",{staticClass:"radio-2",attrs:{label:"ALS",value:"2"}}),n("v-radio",{staticClass:"radio-6",attrs:{label:"Aerolite",value:"6"}})],1),n("div",{staticClass:"overline mb-3"},[t._v("Modern")]),n("v-row",[n("v-radio",{staticClass:"radio-4",attrs:{label:"Slimlines",value:"4"}}),n("v-radio",{staticClass:"radio-5",attrs:{label:"COPASETIC",value:"5"}}),n("v-radio",{staticClass:"radio-3",attrs:{label:"Kavo",value:"3"}})],1)],1),n("div",[n("h2",[t._v("Sign Preview:")]),n("div",{staticClass:"main2"},[n("v-card",{class:t.font},[t._v(t._s(t.overlay))])],1)]),n("v-card",[n("div",{staticClass:"container"},[n("label"),n("div",{staticClass:"selection"},[n("v-row",{attrs:{sm:"2"}},[n("v-select",{attrs:{id:"colour",items:t.items.colours,"item-value":t.items.colours.color,"item-text":"color",label:"Sign Colour (Acrylic)",dense:""},model:{value:t.items.isColor.color,callback:function(e){t.$set(t.items.isColor,"color",e)},expression:"items.isColor.color"}})],1),n("v-row",["Black"===t.items.isColor.color?[n("v-select",{attrs:{items:t.items.finish,"item-value":t.items.finish,label:"Acrylic Finish",dense:""},model:{value:t.isFinish,callback:function(e){t.isFinish=e},expression:"isFinish"}})]:t._e()],2),n("v-row",[n("v-select",{attrs:{items:t.items.surface,"item-value":t.items.surface,label:"Surface applied on",dense:""},model:{value:t.isSurface,callback:function(e){t.isSurface=e},expression:"isSurface"}})],1),n("v-row",[n("v-select",{attrs:{items:t.items.height,"item-value":t.items.height,label:"Letter Height (Capital Letter)",dense:""},model:{value:t.isHeight,callback:function(e){t.isHeight=e},expression:"isHeight"}})],1),n("v-row",[n("v-select",{attrs:{items:t.items.install,"item-value":t.items.install,label:"Installation Required?",dense:""},model:{value:t.isInstall,callback:function(e){t.isInstall=e},expression:"isInstall"}})],1),"Yes"===t.isInstall?[n("v-select",{attrs:{items:t.items.location,"item-value":t.items.location,label:"Installation Quote by Region",dense:""},model:{value:t.isLocation,callback:function(e){t.isLocation=e},expression:"isLocation"}}),n("div",{staticClass:"blue"},[t._v(" Please note that we do not install signs beyond 12 feet of height ")])]:t._e(),"Other"===t.isLocation&&"Yes"===t.isInstall?[n("div",{staticClass:"red"},[t._v(" We only provide quotes for installations within the GTA region. If other is selected we can discuss your installation options when we reach out to you. if you have any questions click on the chat bubble on the bottom right and leave a message. You can also email us at saugadesign@gmail.com. ")])]:t._e(),"No"===t.isInstall?[n("v-select",{attrs:{items:t.items.deliver,"item-value":t.items.deliver,label:"Delivery options",dense:""},model:{value:t.isDeliver,callback:function(e){t.isDeliver=e},expression:"isDeliver"}}),"Pickup"===t.isDeliver?n("div",{staticClass:"blue"},[t._v("We will contact you to let you know when the sign will be ready for pickup. Pickup address: 6973 Lisanne Crt, Mississauga, ON L5N6Z7.")]):t._e(),"Shipping"===t.isDeliver?n("div",{staticClass:"blue"},[t._v("After you place an order we will contact you via your phone and/or email address which you will provide during checkout and discuss your shipping options along with finalizing your order")]):t._e()]:t._e()],2)])])],1)],1)],1),n("v-divider"),n("v-row",[n("v-col",[n("v-text-field",{staticClass:"input",attrs:{id:"price",label:"Quoted: $","hide-details":"auto",readonly:""},model:{value:t.calculateCost,callback:function(e){t.calculateCost=e},expression:"calculateCost"}})],1),n("v-card-actions",[n("v-btn",{staticClass:"snipcart-add-item",attrs:{id:"custom-sign","data-item-id":"custom-sign","data-item-price":"25.00","data-item-url":"https://saugadesign.com","data-item-description":"Custom made house address sign","data-item-image":"/assets/SaugaSignslogo.PNG","data-item-name":"Custom Sign","data-item-custom1-name":"Address Sign Text","data-item-custom1-type":"textarea","data-item-custom1-required":"true","data-item-custom1-value":t.overlay,"data-item-custom2-name":"Acrylic Colour","data-item-custom2-options":"Black|Red|White|Grey","data-item-custom2-required":"true","data-item-custom2-value":t.items.isColor.color,"data-item-custom3-name":"Font Choice","data-item-custom3-options":"Edward|Script|Kavo|Slimlines|Copasetic|Aerolite","data-item-custom3-required":"true","data-item-custom3-value":t.font,"data-item-custom5-name":"Surface Applied on","data-item-custom5-options":"Brick|Stucco|Stone|Other","data-item-custom5-value":t.isSurface,"data-item-custom6-name":"Installation","data-item-custom6-options":"No|Yes","data-item-custom6-required":"true","data-item-custom6-value":t.isInstall,"data-item-custom7-name":"Installation Quote by Region","data-item-custom7-options":"None|Halton +$80|Peel+$80|City of Toronto +$90|York +$90|Durham +$100|Other","data-item-custom7-value":t.isLocation,"data-item-custom9-name":"Letter Height","data-item-custom9-options":"8.5 Inch|9.5 Inch +$10|10.5 Inch +$20","data-item-custom9-required":"true","data-item-custom9-value":t.isHeight,"data-item-custom10-name":"Acrylic Finish","data-item-custom10-value":t.isFinish,"data-item-custom10-options":"Glossy|Matte +$10","data-item-custom11-name":"Quoted","data-item-custom11-value":"$"+t.calculateCost,"data-item-custom8-name":"Phone Number","data-item-custom8-required":"true","data-item-custom12-name":"Delivery Options","data-item-custom12-value":t.isDeliver,"data-item-custom12-options":"Pickup|Shipping"}},[t._v("*Add to cart")])],1)],1),n("div",[n("p",{staticClass:"yellow"},[t._v(" *We require a $25 down-payment to start work on your order. The remainder can be payed upon delivery/pickup. Out of region orders will need to be fully payed before shipping. We take 1 - 2 business days to process your order. ")])]),n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600"}},[n("h2",[t._v("Client Photos")]),n("Lingallery",{attrs:{iid:t.currentId,width:600,height:400,items:[{id:"someid1",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/york.jpeg?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/york.jpeg?raw=true"},{id:"someid8",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Crosscurrent2.jpeg?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Crosscurrent2.jpeg?raw=true"},{id:"someid2",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/cactus.jpeg?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/cactus.jpeg?raw=true"},{id:"someid3",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/faris.jpeg?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/faris.jpeg?raw=true"},{id:"someid4",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/hollypoint.jpeg?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/hollypoint.jpeg?raw=true"},{id:"someid5",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/horsham.jpeg?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/horsham.jpeg?raw=true"},{id:"someid6",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Rattlesnake.jpeg?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Rattlesnake.jpeg?raw=true"},{id:"someid7",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/wendron.jpeg?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/wendron.jpeg?raw=true"}]},on:{"update:iid":function(e){t.currentId=e}}})],1)],1)],1)},i=[],r=(a("a15b"),a("b680"),a("ac1f"),a("1276"),a("e956")),s=a("039c"),o=a.n(s),u={name:"App2",components:{VueTyper:r["VueTyper"],Lingallery:o.a},data:function(){return{items:{colours:[{color:"Black",id:1},{color:"Red",id:2},{color:"White",id:3},{color:"Grey",id:4}],isColor:{color:""},matte:!1,surface:["Brick","Stucco","Stone","Other"],finish:["Glossy","Matte +$10"],height:["8.5 Inch","9.5 Inch +$10","10.5 Inch +$20"],install:["Yes","No"],location:["Halton +$80","Peel+$80","City of Toronto +$90","York +$90","Durham +$100","Other"],pickup:"",payNow:["Yes","No"],deliver:["Pickup","Shipping"]},currentId:"someid1",isSurface:"",isFinish:"",isHeight:"",isDeliver:"",isInstall:"",isLocation:"",ispayNow:"",overlay:"",cost:0,radio:{value:""}}},computed:{LetterHeight:function(){return"9.5 Inch +$10"==this.isHeight?10:"10.5 Inch +$20"==this.isHeight?20:0},LocationPrice:function(){return"Matte +$10"==this.isFinish?"Yes"==this.isInstall&&"Halton +$80"==this.isLocation||"Yes"==this.isInstall&&"Peel+$80"==this.isLocation?90:"Yes"==this.isInstall&&"City of Toronto +$90"==this.isLocation||"Yes"==this.isInstall&&"York +$90"==this.isLocation?100:"Yes"==this.isInstall&&"Durham +$100"==this.isLocation?110:10:"Yes"==this.isInstall&&"Halton +$80"==this.isLocation||"Yes"==this.isInstall&&"Peel+$80"==this.isLocation?80:"Yes"==this.isInstall&&"City of Toronto +$90"==this.isLocation||"Yes"==this.isInstall&&"York +$90"==this.isLocation?90:"Yes"==this.isInstall&&"Durham +$100"==this.isLocation?100:0},letters:function(){return this.overlay.length},colorIs:function(){return this.isColor.color},calculateCost:function(){var t=this.overlay,e=t.split(" ").join(""),a=this.cost+this.LetterHeight+this.LocationPrice+6.79*e.length;return a.toFixed(2)},font:function(){return 1==this.radio.value?"Edward":2==this.radio.value?"Script":3==this.radio.value?"Kavo":4==this.radio.value?"Slimlines":5==this.radio.value?"Copasetic":6==this.radio.value?"Aerolite":""}}},c=u,l=(a("3aa1"),a("2877")),d=Object(l["a"])(c,n,i,!1,null,"51ac3e00",null);e["default"]=d.exports},"7e71":function(t,e,a){t.exports=a.p+"img/house.17a9628c.jpg"},"85ec":function(t,e,a){},8690:function(t,e,a){"use strict";a.r(e);var n=a("a9bd"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"8f05":function(t,e,a){"use strict";a.r(e);var n=a("43ff"),i=a("a628");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var s=a("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},9313:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Product List")])},i=[]},"953a":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Store")])},i=[]},"962a":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Shipping Info")])},i=[]},"98c4":function(t,e){t.exports={components:{}}},9906:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",[t._v(" © "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Sauga Design")])])},i=[],r={components:{}},s=r,o=a("2877"),u=Object(o["a"])(s,n,i,!1,null,null,null);e["default"]=u.exports},"998b":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Review")])},i=[]},"9cae":function(t,e,a){var n=a("7e51").default,i=a("9906").default;t.exports={components:{PopularProducts:n,Footer:i}}},"9fe4":function(t,e){t.exports={props:{next:Function,rules:Object,data:Object}}},a628:function(t,e,a){"use strict";a.r(e);var n=a("450f"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},a9bd:function(t,e,a){a("a9e3"),t.exports={props:{product:Object,addToCart:Function,i:Number}}},ab1f:function(t,e,a){var n=a("8f05"),i=a("2a44");t.exports={components:{Sidebar:n,ProductDisplay:i}}},b789:function(t,e,a){"use strict";var n=a("1c5d"),i=a("272d"),r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},b916:function(t,e,a){"use strict";a.r(e);var n=a("d947"),i=a("baa9");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var s=a("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},baa9:function(t,e,a){"use strict";a.r(e);var n=a("df1c"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},bb51:function(t,e,a){"use strict";var n=a("1215"),i=a("7ad4"),r=(a("cccb"),a("2877")),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},c011:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" Products ")])},i=[]},c6c6:function(t,e){t.exports={props:{previous:Function,submitOrder:Function,data:Object}}},cb59:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1400"}},[a("v-card-title",[t._v("Welcome to SaugaDesign!")]),a("v-card-text",{staticClass:"text--primary"},[a("p",[t._v(" We are located in Mississauga, Ontaio, Canada and have been creating custom laser cut products since 2016. Our designs are completely customizable and beautify and update the façade of your home. ")]),a("p",[t._v(" Our mission is to provide you with a one stop shop for customizable signs without hassle or high cost. We are passionate about our work and our friendly service and detailed craftsmanship is why our clients keep returning and referring us to their family and friends. We understand that little upgrades can make a substantial difference and our home signs do just that. We hope you enjoy our products as much as we enjoy creating and offering them to you. Let us help you create pride of ownership in your home and put your best foot forward with SaugaDesigns. ")]),a("h3",[t._v(" Also, if you want to talk just click on the chat bubble on the bottom right! ")])])],1)},i=[]},cccb:function(t,e,a){"use strict";var n=a("5ced"),i=a.n(n);i.a},d335:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Contact Info")])},i=[]},d5f1:function(t,e){t.exports={data:function(){return{checkoutForm:null,nameRules:[],name:"",emailRules:[],email:""}},methods:{goToCheckout:function(){this.$router.push({name:"checkout"})}}}},d947:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Horizontal Product")])},i=[]},df1c:function(t,e,a){a("a9e3"),t.exports={props:{product:Object,updateCart:Function,btnAction:String,i:Number}}},e00f:function(t,e,a){var n=a("25ad"),i=a("1ef9");t.exports={components:{ProductList:n,CheckoutBox:i}}},e7e9:function(t,e){t.exports={data:function(){return{drawer:!1}}}},e8a0:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Checkout Box")])},i=[]},f030:function(t,e,a){var n=a("2c52"),i=a("5fc7"),r=a("31ad");t.exports={components:{ContactInfo:n,ShippingInfo:i,Review:r},data:function(){return{step:1,checkoutForm:!1,data:{email:"",name:"",phone:"",street:"",state:"",zip:""},rules:{required:function(t){return!!t||"Required."},zip:function(t){return 5==t.length||"Must be five characters"},email:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."},phone:function(t){var e=/\d{10}/;return e.test(t)||"Invalid phone number."}}}},methods:{next:function(){this.step+=1},previous:function(){this.step-=1},submitOrder:function(){this.$router.push({name:"thankyou"})}}}},f2ad:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Checkout")])},i=[]},f46b:function(t,e,a){var n=a("b916");t.exports={components:{HorizontalProduct:n},methods:{removeFromCart:function(){}}}},f9e8:function(t,e,a){"use strict";var n=a("98c4"),i=a.n(n);e["default"]=i.a},fd27:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Vertical Product")])},i=[]},fe63:function(t,e,a){}});
//# sourceMappingURL=app.80c84c3d.js.map