(function(t){function e(e){for(var i,n,o=e[0],l=e[1],c=e[2],h=0,d=[];h<o.length;h++)n=o[h],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],i=!0,o=1;o<s.length;o++){var l=s[o];0!==a[l]&&(i=!1)}i&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var i={},a={app:0},r=[];function n(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=i,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var i=s("85ec"),a=s.n(i);a.a},"0ff1":function(t,e,s){"use strict";var i=s("e7e9"),a=s.n(i);e["default"]=a.a},2209:function(t,e,s){},2664:function(t,e,s){"use strict";var i=s("db1e"),a=s("f9e8"),r=s("2877"),n=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=n.exports},"272d":function(t,e,s){"use strict";var i=s("e00f"),a=s.n(i);e["default"]=a.a},"27e7":function(t,e,s){"use strict";var i=s("c333"),a=s.n(i);a.a},"2f34":function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("div",[s("Header"),s("banner",{staticClass:"banner"}),s("PopularProducts",{staticClass:"body"}),s("Footer",{staticClass:"footer"})],1)])},a=[]},"34dc":function(t,e,s){},"35ca":function(t,e,s){"use strict";var i=s("2209"),a=s.n(i);a.a},"3f6a":function(t,e,s){t.exports=s.p+"img/classic.a64709fd.png"},"412c":function(t,e,s){"use strict";var i=s("ee80"),a=s("4385"),r=(s("4a32"),s("2877")),n=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=n.exports},4385:function(t,e,s){"use strict";var i=s("c36d"),a=s.n(i);e["default"]=a.a},"4a32":function(t,e,s){"use strict";var i=s("b515"),a=s.n(i);a.a},5200:function(t,e,s){"use strict";var i=s("daba"),a=s("0ff1"),r=(s("35ca"),s("2877")),n=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=n.exports},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("bf40");var i=s("2b0e"),a=s("ce5b"),r=s.n(a),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("TopNav"),s("v-main",[s("router-view")],1)],1)},o=[],l=s("5200"),c={name:"app",components:{TopNav:l["default"]}},u=c,h=(s("034f"),s("2877")),d=Object(h["a"])(u,n,o,!1,null,null,null),m=d.exports,g=(s("db4d"),s("8c4f")),p=s("bb51"),v=s("2664"),b=s("412c"),f=s("b789");i["default"].use(g["a"]);var x=[{path:"/",name:"Home",component:p["default"]},{path:"/installation",name:"installation",component:b["default"]},{path:"/aboutus",name:"aboutus",component:v["default"]},{path:"/cart",name:"cart",component:f["default"]}],w=new g["a"]({routes:x}),y=w,C=s("2f62");i["default"].use(C["a"]);var I=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}});s("d5e8"),s("5363");i["default"].use(r.a),i["default"].use(g["a"]),i["default"].component("app",m),new i["default"]({Vue:i["default"],vuetify:new r.a,store:I,router:y,render:function(t){return t(m)}}).$mount("#app")},"5ced":function(t,e,s){},"707a":function(t,e,s){t.exports=s.p+"img/height.aedb5e32.png"},7612:function(t,e,s){t.exports=s.p+"img/install.f5cafe4d.png"},"7ad4":function(t,e,s){"use strict";var i=s("9cae"),a=s.n(i);e["default"]=a.a},"7e51":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("fab",{attrs:{position:t.position,"bg-color":t.bgColor,actions:t.fabActions},on:{message:t.whatsappfunc,call:t.call}}),i("v-card",{staticClass:"container"},[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("div",[i("v-row",[i("v-col",[i("v-divider"),i("v-card",[i("div",[i("v-card",[i("div",{staticClass:"container"},[i("v-text-field",{ref:"Address",staticClass:"input",attrs:{label:"Enter your Address here!","hide-details":"auto",rules:t.Rules,required:""},model:{value:t.overlay,callback:function(e){t.overlay="string"===typeof e?e.trim():e},expression:"overlay"}}),i("br"),i("br"),i("div",{staticClass:"main2"},[i("v-card",{staticClass:"bb",class:t.font},[t._v(" "+t._s(t.overlay))])],1)],1)]),i("div",[i("v-card",{staticClass:"signheight"},[i("div",[i("h5",[t._v("Approximate Width: "+t._s(t.Compensate)+" ")])]),i("div",[i("h5",[t._v("Height: "+t._s(t.isHeight))])]),1==t.containsdecender?i("div",[i("h6",[t._v(" * Height is from lowest to highest point.")]),i("img",{attrs:{src:s("707a")}})]):t._e()]),i("div",[i("h5",{staticClass:"green1"},[t._v("Winter Sale 20% off")]),i("h5",{staticClass:"inputprice"},[t._v(" "+t._s(t.calculateCost))]),i("div",{staticClass:"input"},[t._v(" "+t._s(t.calculateCostdiscount)+" ")])])],1)],1),i("v-card",[i("h3",[t._v("Font offerings")]),i("v-radio-group",{staticClass:"radio",attrs:{"text-align:center":"",mandatory:!0},model:{value:t.radio.value,callback:function(e){t.$set(t.radio,"value",e)},expression:"radio.value"}},[i("v-row",{staticClass:"container",attrs:{dense:""}},[i("v-radio",{staticClass:"radio-1",attrs:{label:"Edward",value:"1",id:"one"}}),i("v-radio",{staticClass:"radio-2",attrs:{label:"Birds of Paradise",value:"2"}}),i("v-radio",{staticClass:"radio-6",attrs:{label:"Aerolite",value:"6"}}),i("v-radio",{staticClass:"radio-7",attrs:{label:"Script",value:"7"}})],1),i("v-row",{staticClass:"container",attrs:{dense:""}},[i("v-radio",{staticClass:"radio-4",attrs:{label:"Slimlines",value:"4"}}),i("v-radio",{staticClass:"radio-5",attrs:{label:"COPASETIC",value:"5"}}),i("v-radio",{staticClass:"radio-3",attrs:{label:"Kavo",value:"3"}}),i("v-radio",{staticClass:"radio-9",attrs:{label:"Dancing",value:"9"}})],1),i("v-row",{staticClass:"container",attrs:{dense:""}},[i("v-radio",{staticClass:"radio-8",attrs:{label:"Custom Font",value:"8"}}),i("div",{staticClass:"container"},["8"==t.radio.value?i("v-text-field",{attrs:{label:"Enter the font name (Preview will not be availaible)",rules:t.Rules,required:""},model:{value:t.isInstructions,callback:function(e){t.isInstructions=e},expression:"isInstructions"}}):t._e()],1)],1)],1)],1),i("div",{staticClass:"container"},[i("div",{staticClass:"selection"},[i("v-row",{attrs:{sm:"2"}},[i("v-select",{attrs:{id:"colour",items:t.items.colours,"item-value":t.items.colours.color,"item-text":"color",label:"Sign Colour (Acrylic)",dense:"",rules:t.Rules,required:""},model:{value:t.items.isColor.color,callback:function(e){t.$set(t.items.isColor,"color",e)},expression:"items.isColor.color"}})],1),i("v-row",[i("v-select",{attrs:{items:t.items.height,"item-value":t.items.height,label:"Sign Height",dense:"",rules:t.Rules,required:""},model:{value:t.isHeight,callback:function(e){t.isHeight=e},expression:"isHeight"}})],1),i("v-row",[i("v-select",{attrs:{items:t.items.thickness,"item-value":t.items.thickness,label:"Sign thickness",dense:"",rules:t.Rules,required:""},model:{value:t.isthickness,callback:function(e){t.isthickness=e},expression:"isthickness"}})],1),i("v-row",[i("v-select",{attrs:{items:t.items.install,"item-value":t.items.install,label:"Do you require installation?",dense:"",rules:t.Rules,required:""},model:{value:t.isInstall,callback:function(e){t.isInstall=e},expression:"isInstall"}})],1),"Yes"===t.isInstall?[i("v-select",{attrs:{items:t.items.location,"item-value":t.items.location,label:"Installation Quote by Region",dense:"",rules:t.Rules,required:""},model:{value:t.isLocation,callback:function(e){t.isLocation=e},expression:"isLocation"}}),i("div",{staticClass:"red"},[t._v(" Please note that we do not install signs higher than 12 feet or remove any old signage or lighting, if you have a non standard installation location please let us know. ")]),i("div",{staticClass:"orange"},[t._v(" Installtion timing may be limited especially during winter months. ")]),i("v-img",{attrs:{"aspect-ratio":"2",src:"https://github.com/zubairzia0/SaugaDesign-Site/blob/master/assets/GTA.png?raw=true"}})]:t._e(),"No"===t.isInstall?void 0:t._e(),0==this.valid?i("div",{staticClass:"container"},[i("p",{staticClass:"red"},[t._v("Please fill all required fields above")])]):t._e()],2),i("v-btn",{class:t.validater(),attrs:{disabled:!t.valid,color:"success",id:"custom-sign","data-item-id":"custom-sign","data-item-price":"0.00","data-item-url":"https://saugadesign.com","data-item-description":"Custom made house address sign","data-item-image":"https://github.com/zubairzia0/SaugaDesign-Site/blob/master/assets/SaugaSignslogo.PNG?raw=true","data-item-name":"Custom Sign","data-item-custom1-name":"Address Sign Text (do not change)","data-item-custom1-type":"textarea","data-item-custom1-required":"true","data-item-custom1-value":t.overlay,"data-item-custom10-name":"Number of digits + letters in Order (do not change)","data-item-custom10-value":t.isNumber,"data-item-custom10-options":"1[+7.65]|2[+15.3]|3[+22.95]|4[+30.6]|5[+38.25]|6[+45.9]|7[+53.55]\n                    |8[+61.2]|9[+68.85]|10[+76.5]|11[+84.15]|12[+91.8]|13[+99.45]|14[+107.1]|15[+114.75]|16[+122.4]|17[+130.05]|18[+137.7]|19[+145.35]|20[+153]|21[+160.65]\n                    |22[+168.3]|23[+175.9]|24[+183.6]|25[+191.25]|26[+198.9]|27[+206.55]|28[+214.2]|29[+221.85]|30[+229.5]","data-item-custom2-name":"Acrylic Colour","data-item-custom2-options":"Black Glossy|Black Matte +$10[+10]|White Glossy|Grey Glossy","data-item-custom2-required":"true","data-item-custom2-value":t.items.isColor.color,"data-item-custom4-name":"Font Choice","data-item-custom4-options":"Edward|Script|Birds|Kavo|Slimlines|Copasetic|Aerolite|Dancing|Custom","data-item-custom4-required":"true","data-item-custom4-value":t.font,"data-item-custom9-name":"Letter Height","data-item-custom9-options":"5 Inch|6 Inch|7 Inch|8 Inch|8.5 Inch|9.5 Inch +$10[+10]|10.5 Inch +$20[+20]|12 Inch +$30[+30]|Custom","data-item-custom9-required":"true","data-item-custom9-value":t.isHeight,"data-item-custom14-name":"Acrylic Thickness","data-item-custom14-options":"3mm|6mm +$40 [+40]","data-item-custom14-required":"true","data-item-custom14-value":t.isthickness,"data-item-custom7-name":"Installation Locaton","data-item-custom7-options":"Halton +$90[+90]|Hamilton +$110[+110]|Peel +$90[+90]|City of Toronto +$110[+110]|York +$110[+110]|Durham +$130[+130]|Kitchener/Waterloo/Guelph/Cambridge/Other +$130[+130]","data-item-custom7-required":"true","data-item-custom7-value":t.isLocation,"data-item-custom8-name":"Phone Number","data-item-custom8-required":"true","data-item-custom13-name":"Any Special Instructions/Requests?","data-item-custom13-type":"textarea","data-item-custom13-value":t.isInstructions,"data-item-has-taxes-included":"true"},on:{click:t.validate}},[t._v("*Add to cart ")]),i("div",[i("h4",{staticClass:"green1"},[t._v("Winter Sale 20% off")]),i("div",{staticClass:"inputprice"},[t._v(" "+t._s(t.calculateCost)+" ")]),i("div",{staticClass:"input"},[t._v(" "+t._s(t.calculateCostdiscount)+" ")])]),i("v-col"),i("div",[i("li",[t._v(" It can take 2 - 6 business days to prepare the sign for shipping")]),i("li",[t._v(" Signs come with the essentials for a drill install (without Epoxy), users can also choose to stick on directly without drilling if the wall permits")])])],1)],1)],1)],1)],1),i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600"}},[i("h2",[t._v("Do-it-yourself (DIY) essentials included:")]),i("br"),i("v-img",{staticClass:"mx-auto",attrs:{src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/included.png?raw=true"}}),i("br"),i("ol",[i("strong",[t._v("1.")]),t._v(" A custom Laser cut cast acrylic sign according to your specification ")]),i("ol",[i("strong",[t._v("2.")]),t._v(" A traced template of the sign for installation ")]),i("ol",[i("strong",[t._v("3.")]),t._v(" Galvanized nails ")]),i("h3",[i("a",{attrs:{href:"https://saugadesign.com/#/installation"}},[t._v("Click here for Installation instructions")])])],1),i("br"),i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600"}},[i("h2",[t._v("Client Photos")]),i("Lingallery",{attrs:{iid:t.currentId,width:600,height:200,items:[{id:"someid1",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide20.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide20.JPG?raw=true"},{id:"someid2",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide21.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide21.JPG?raw=true"},{id:"someid3",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide19.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide19.JPG?raw=true"},{id:"someid1",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide22.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide22.JPG?raw=true"},{id:"someid1",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide23.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide23.JPG?raw=true"},{id:"someid4",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide1.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide1.JPG?raw=true"},{id:"someid5",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide2.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide2.JPG?raw=true"},{id:"someid6",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide6.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide6.JPG?raw=true"},{id:"someid7",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide7.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide7.JPG?raw=true"},{id:"someid8",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide8.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide8.JPG?raw=true"},{id:"someid9",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide9.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide9.JPG?raw=true"},{id:"someid10",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide10.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide10.JPG?raw=true"},{id:"someid11",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide11.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide11.JPG?raw=true"},{id:"someid12",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide12.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide12.JPG?raw=true"},{id:"someid13",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide13.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide13.JPG?raw=true"},{id:"someid14",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide14.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide14.JPG?raw=true"},{id:"someid15",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide15.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide15.JPG?raw=true"},{id:"someid16",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide16.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide16.JPG?raw=true"},{id:"someid17",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide3.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide3.JPG?raw=true"},{id:"someid18",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide4.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide4.JPG?raw=true"},{id:"someid19",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide18.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide18.JPG?raw=true"},{id:"someid20",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide17.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide17.JPG?raw=true"},{id:"someid21",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide5.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide5.JPG?raw=true"}]},on:{"update:iid":function(e){t.currentId=e}}})],1)],1),i("br"),i("br"),i("h2",[t._v("Client Reviews")]),i("div",{attrs:{"data-romw-token":"e47y6hel5LDx6B5bXByW5vlW3qHmByXZVqAlEzzFxdE9dQaBtF"}})],1)],1)},a=[],r=(s("caad"),s("a15b"),s("b680"),s("ac1f"),s("2532"),s("1276"),s("039c")),n=s.n(r),o=s("87ac"),l=s.n(o),c=s("2b0e"),u=s("e37d");c["default"].use(u["a"]);var h={name:"App2",components:{Lingallery:n.a,fab:l.a},data:function(){return{bgColor:"#778899",position:"bottom-right",fabActions:[{name:"call",icon:"call"},{name:"message",icon:"message"}],items:{colours:[{color:"Black Glossy",id:1},{color:"Black Matte +$10",id:2},{color:"White Glossy",id:3},{color:"Grey Glossy",id:4}],images:["../../assets/Crosscurrent.jpeg","../../assets/faris.jpeg"],isColor:{color:""},matte:!1,surface:["Brick","Stucco","Stone","Other"],thickness:["3mm","6mm +$40"],height:["5 Inch","6 Inch","7 Inch","8 Inch","8.5 Inch","9.5 Inch +$10","10.5 Inch +$20","12 Inch +$30"],install:["Yes","No"],location:["Halton +$90","Hamilton +$110","Peel +$90","City of Toronto +$110","York +$110","Durham +$130","Kitchener/Waterloo/Guelph/Cambridge/Other +$130"],pickup:"",payNow:["Yes","No"],Delivery:["Yes","No"]},Rules:[function(t){return!!t||"required"}],valid:!1,currentId:"someid1",isHeight:"8.5 Inch",isDeliver:"",isthickness:"3mm",isInstall:"",isLocation:"",isInstructions:"",overlay:"",cost:0,decender:!1,radio:{value:""}}},computed:{LetterHeight:function(){return"9.5 Inch +$10"==this.isHeight?10:"10.5 Inch +$20"==this.isHeight?20:"12 Inch +$30"==this.isHeight?30:0},Thickness:function(){return"6mm +$40"==this.isthickness?40:0},LocationPrice:function(){return"Black Matte +$10"==this.items.isColor.color?"Yes"==this.isInstall&&"Halton +$90"==this.isLocation||"Yes"==this.isInstall&&"Peel +$90"==this.isLocation?100:"Yes"==this.isInstall&&"City of Toronto +$110"==this.isLocation||"Yes"==this.isInstall&&"York +$110"==this.isLocation||"Yes"==this.isInstall&&"Hamilton +$110"==this.isLocation?120:"Yes"==this.isInstall&&"Durham +$130"==this.isLocation||"Yes"==this.isInstall&&"Kitchener/Waterloo/Guelph/Cambridge +$130"==this.isLocation?140:10:"Yes"==this.isInstall&&"Halton +$90"==this.isLocation||"Yes"==this.isInstall&&"Peel +$90"==this.isLocation?90:"Yes"==this.isInstall&&"City of Toronto +$110"==this.isLocation||"Yes"==this.isInstall&&"York +$110"==this.isLocation||"Yes"==this.isInstall&&"Hamilton +$110"==this.isLocation?110:"Yes"==this.isInstall&&"Durham +$130"==this.isLocation||"Yes"==this.isInstall&&"Kitchener/Waterloo/Guelph/Cambridge/Other +$130"==this.isLocation?130:0},letters:function(){return this.overlay.length},colorIs:function(){return this.isColor.color},calculateCost:function(){var t=this.overlay,e=t.split(" ").join(""),s=this.cost+this.LetterHeight+this.LocationPrice+this.Thickness+7.65*e.length;return"$"+s.toFixed(2)},calculateCostdiscount:function(){var t=this.overlay,e=t.split(" ").join(""),s=this.cost+this.LetterHeight+this.LocationPrice+this.Thickness+7.65*e.length;return"$"+(.8*s).toFixed(2)},isNumber:function(){var t=this.overlay,e=t.split(" ").join("");return e.length},font:function(){return 1==this.radio.value?"Edward":7==this.radio.value?"Script":2==this.radio.value?"Birds":3==this.radio.value?"Kavo":4==this.radio.value?"Slimlines":5==this.radio.value?"Copasetic":6==this.radio.value?"Aerolite":8==this.radio.value?"Custom":9==this.radio.value?"Dancing":""},getTextWidth:function(){var t="";"Edward"==this.font?t="9.5 Inch +$10"==this.isHeight?"13.5px Edward":"10.5 Inch +$20"==this.isHeight?"14.5px Edward":"12 Inch +$30"==this.isHeight?"16.5px Edward":"8 Inch"==this.isHeight?"11px Edward":"7 Inch"==this.isHeight?"9px Edward":"6 Inch"==this.isHeight?"8px Edward":"5 Inch"==this.isHeight?"7px Edward":"12px Edward":"Script"==this.font?t="9.5 Inch +$10"==this.isHeight?"13.5px Script":"10.5 Inch +$20"==this.isHeight?"14.5px Script":"12 Inch +$30"==this.isHeight?"16.5px Script":"8 Inch"==this.isHeight?"11px Script":"7 Inch"==this.isHeight?"9px Script":"6 Inch"==this.isHeight?"8px Script":"5 Inch"==this.isHeight?"7px Script":"12px Script":"Birds"==this.font?t="9.5 Inch +$10"==this.isHeight?"13.5px Birds":"10.5 Inch +$20"==this.isHeight?"14.5px Birds":"12 Inch +$30"==this.isHeight?"16.5px Birds":"8 Inch"==this.isHeight?"11px Birds":"7 Inch"==this.isHeight?"9px Birds":"6 Inch"==this.isHeight?"8px Birds":"5 Inch"==this.isHeight?"7px Birds":"12px Birds":"Kavo"==this.font?t="9.5 Inch +$10"==this.isHeight?"13.5px Kavo":"10.5 Inch +$20"==this.isHeight?"15px Kavo":"12 Inch +$30"==this.isHeight?"17.1px Kavo":"8 Inch"==this.isHeight?"11.4px Kavo":"7 Inch"==this.isHeight?"10px Kavo":"6 Inch"==this.isHeight?"8.5px Kavo":"5 Inch"==this.isHeight?"7px Kavo":"12.2px Kavo":"Slimlines"==this.font?t="9.5 Inch +$10"==this.isHeight?"9px Slimlines":"10.5 Inch +$20"==this.isHeight?"10px Slimlines":"12 Inch +$30"==this.isHeight?"11.5px Slimlines":"8 Inch"==this.isHeight?"7.5px Slimlines":"7 Inch"==this.isHeight?"6.5px Slimlines":"6 Inch"==this.isHeight?"5.5px Slimlines":"5 Inch"==this.isHeight?"4.5px Slimlines":"8px Slimlines":"Copasetic"==this.font?t="9.5 Inch +$10"==this.isHeight?"12.3px Copasetic":"10.5 Inch +$20"==this.isHeight?"13.5px Copasetic":"12 Inch +$30"==this.isHeight?"15.5px Copasetic":"8 Inch"==this.isHeight?"10.5px Copasetic":"7 Inch"==this.isHeight?"9.8px Copasetic":"6 Inch"==this.isHeight?"8px Copasetic":"5 Inch"==this.isHeight?"6.6px Copasetic":"11.5px Copasetic":"Aerolite"==this.font?t="9.5 Inch +$10"==this.isHeight?"14.2px Aerolite":"10.5 Inch +$20"==this.isHeight?"16px Aerolite":"12 Inch +$30"==this.isHeight?"17px Aerolite":"8 Inch"==this.isHeight?"11.8px Aerolite":"7 Inch"==this.isHeight?"10px Aerolite":"6 Inch"==this.isHeight?"8.5px Aerolite":"5 Inch"==this.isHeight?"7.6px Aerolite":"13.2px Aerolite":"Dancing"==this.font&&(t="9.5 Inch +$10"==this.isHeight?"11.4px Dancing":"10.5 Inch +$20"==this.isHeight?"12.8px Dancing":"12 Inch +$30"==this.isHeight?"14.8px Dancing":"8 Inch"==this.isHeight?"9.6px Dancing":"7 Inch"==this.isHeight?"8.4px Dancing":"6 Inch"==this.isHeight?"7.2px Dancing":"5 Inch"==this.isHeight?"6px Dancing":"10.2px Dancing");var e=document.createElement("canvas"),s=e.getContext("2d");s.font=t;var i=s.measureText(this.overlay);return i.width},Compensate:function(){var t;return this.overlay.includes("y")||this.overlay.includes("g")||this.overlay.includes("z")||this.overlay.includes("p")||this.overlay.includes("q")||this.overlay.includes("f")||this.overlay.includes("j")?"Edward"==this.font?(t=.72*this.getTextWidth,t.toFixed(2)+" Inch"):"Script"==this.font?(t=.78*this.getTextWidth,t.toFixed(2)+" Inch"):"Birds"==this.font?(t=.75*this.getTextWidth,t.toFixed(2)+" Inch"):"Aerolite"==this.font?(t=.78*this.getTextWidth,t.toFixed(2)+" Inch"):"Custom"==this.font?"Unknown":(t=this.getTextWidth,t.toFixed(2)+" Inch"):"Custom"==this.font?"Unknown":(t=this.getTextWidth,t.toFixed(2)+" Inch")},containsdecender:function(){return this.overlay.includes("y")||this.overlay.includes("g")||this.overlay.includes("z")||this.overlay.includes("p")||this.overlay.includes("q")||this.overlay.includes("f")||this.overlay.includes("j")?"1":"0"}},methods:{validate:function(){this.$refs.form.validate()},validater:function(){return""==this.letters||""==this.items.isColor.color||""==this.isHeight||""==this.isInstall||"Yes"==this.isInstall&&""===this.isLocation?"":"No"!=this.isInstall||""===this.isLocation?"snipcart-add-item":void(this.isLocation="")},call:function(){window.open("tel:6474084915")},whatsappfunc:function(){return location.href="https://wa.me/14168220044"}}},d=h,m=(s("f6f0"),s("2877")),g=Object(m["a"])(d,i,a,!1,null,"38496c23",null);e["default"]=g.exports},"85ec":function(t,e,s){},"98c4":function(t,e){t.exports={components:{}}},9906:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-footer",{attrs:{dark:"",padless:""}},[s("v-card",{staticClass:"grey lighten-3 black--text text-center",attrs:{flat:"",tile:""}},[s("v-card-text",{staticClass:"black--text pt-0"},[t._v(" We understand that little upgrades can make a substantial difference and our home signs do just that. We hope you enjoy our products as much as we enjoy creating and offering them to you. Let us help you create pride of ownership in your home and put your best foot forward with Sauga Design. "),s("li",[t._v("Phone # 416-553-0850 or 647-408-4915")]),s("li",[t._v("Email : saugadesign@gmail.com")])]),s("v-divider"),s("v-card-text",{staticClass:"grey lighten-3 black--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),s("strong",[t._v("SaugaDesign")])])],1)],1)},a=[],r={data:function(){return{}},components:{},mounted:function(){var t=document.createElement("script");t.setAttribute("src","https://reviewsonmywebsite.com/js/v2/embed.js?id=6019c18b62403111b66e"),document.head.appendChild(t)},methods:{whatsappfunc:function(){return location.href="https://wa.me/14168220044"}}},n=r,o=(s("27e7"),s("2877")),l=Object(o["a"])(n,i,a,!1,null,null,null);e["default"]=l.exports},"9cae":function(t,e,s){var i=s("7e51").default,a=s("9906").default,r=s("a319").default;t.exports={components:{PopularProducts:i,Footer:a,banner:r}}},a319:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vueper-slides",[t._l(t.slides,(function(t,e){return s("vueper-slide",{key:e,attrs:{image:t.image,title:t.title,content:t.content,"hide-overlay":""}})})),s("h1",{staticClass:"vue-typer"},[t._v("Welcome to Sauga Design!")]),s("vue-typer",{staticClass:"vue-typer2",attrs:{text:["Upgrade your house with a beautiful sign!"],repeat:0,shuffle:!1,"initial-action":"typing","pre-type-delay":2600,"type-delay":50,"pre-erase-delay":166,"erase-delay":60,"erase-style":"backspace","erase-on-complete":!1,"caret-animation":"expand"}})],2)},a=[],r=s("e956"),n=s("b1b5"),o=(s("2ec8"),{data:function(){return{slides:[{id:"someid1",image:s("b1e5")},{id:"someid2",content:"<h1 class=fix >From Classic Designs!</h1><br> <h1 class=fix1>with your choice of colour and size</h1>",image:s("3f6a")},{id:"someid3",content:"<h1 class=fix2 >To Modern Designs!</h1>",image:s("db89")},{id:"someid3",content:"<h1 class=fix2 >All signs are DIY ready!",image:s("7612")}]}},components:{VueperSlides:n["VueperSlides"],VueperSlide:n["VueperSlide"],VueTyper:r["VueTyper"]}}),l=o,c=(s("bed7"),s("2877")),u=Object(c["a"])(l,i,a,!1,null,null,null);e["default"]=u.exports},b1e5:function(t,e,s){t.exports=s.p+"img/zaksign2.4297549a.png"},b515:function(t,e,s){},b789:function(t,e,s){"use strict";var i=s("e16f"),a=s("272d"),r=s("2877"),n=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=n.exports},bb51:function(t,e,s){"use strict";var i=s("2f34"),a=s("7ad4"),r=(s("cccb"),s("2877")),n=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=n.exports},bed7:function(t,e,s){"use strict";var i=s("d5d3"),a=s.n(i);a.a},c333:function(t,e,s){},c36d:function(t,e){t.exports={components:{},data:function(){return{bgColor:"#778899",position:"bottom-right",fabActions:[{name:"call",icon:"call"},{name:"message",icon:"message"}]}},methods:{validate:function(){this.$refs.form.validate()},validater:function(){return""==this.letters||""==this.items.isColor.color||""==this.isHeight||""==this.isInstall||"Yes"==this.isInstall&&""===this.isLocation?"":"No"!=this.isInstall||""===this.isLocation?"snipcart-add-item":void(this.isLocation="")},call:function(){window.open("tel:6474084915")},whatsappfunc:function(){return location.href="https://wa.me/14168220044"}}}},cccb:function(t,e,s){"use strict";var i=s("5ced"),a=s.n(i);a.a},d5d3:function(t,e,s){},daba:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-alert",{attrs:{color:"#2A3B4D",dark:"",dense:""}},[t._v(" Order now and get a 20% winter discount! ")]),s("v-app-bar",[s("v-spacer"),s("span",{staticClass:"hidden-sm-and-up"},[s("v-btn",{staticClass:"menu",attrs:{absolute:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[t._v(" Menu ")])],1),s("v-toolbar-items",{staticClass:"hidden-xs-only"},[s("v-btn",{attrs:{to:"/",text:""}},[t._v(" Home ")]),s("v-btn",{attrs:{to:"installation",text:""}},[t._v(" DIY Installation ")]),s("v-btn",{attrs:{to:"aboutus",text:""}},[t._v(" About us! ")]),s("v-btn",{attrs:{href:"#cart",text:""}},[t._v(" Cart ")])],1)],1),s("v-navigation-drawer",{staticClass:"container",attrs:{absolute:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list",[t._l(t.items,(function(e){return s("v-list-item",{key:e.title,attrs:{to:e.link,link:""}},[s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),s("v-btn",{staticClass:"container",attrs:{href:"#cart",text:""}},[t._v(" Cart ")])],2)],1)],1)},a=[]},db1e:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"container"},[s("v-card-title",[t._v("Welcome to SaugaDesign!")]),s("v-card-text",{staticClass:"container"},[t._v(" We are located in Mississauga, Ontario, Canada and have been creating custom laser cut products since 2016. Our designs are completely customizable and beautify and update the façade of your home. Our mission is to provide you with a one stop shop for customizable signs without hassle or high cost. We are passionate about our work and our friendly service and detailed craftsmanship is why our clients keep returning and referring us to their family and friends. ")]),s("v-card-text",[s("li",[t._v("Phone # 416-553-0850 or 647-408-4915")]),s("li",[t._v("Email : saugadesign@gmail.com")]),t._v(" (We prefer you send a text message and we will return your call!) ")])],1)},a=[]},db89:function(t,e,s){t.exports=s.p+"img/modern.72860035.png"},e00f:function(t,e){t.exports={components:{}}},e16f:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("head")},a=[]},e7e9:function(t,e){t.exports={data:function(){return{drawer:!1,items:[{title:"Home",link:"/"},{title:"DIY Installation",link:"installation"},{title:"About us!",link:"aboutus"}]}}}},ee80:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("v-card",[s("v-card",[s("br"),s("p",[t._v(" So you have decided to take on a do-it-yourself (DIY) project, we love that and think you will do a great job! However we put together an 8 step guide below that will help you make sure you do it right the first time! Also before you get started, read the list of required items, also go over the 8 steps before starting so you understand how it will all fit together, Good luck! ")]),s("v-card-title",[t._v(" Items required ")]),s("ol",{staticClass:"main"},[s("ol",[t._v(" 1) Drill (hammer drill recommended) - Drill is needed to make holes in the wall, a hammer drill makes it easy to drill into stone or brick. ")]),s("ol",[t._v(" 2) Ladder - To climb up, make sure its on a solid footing! ")]),s("ol",[t._v(" 3) Tape - This is needed to put up the paper template on the wall ")]),s("ol",[t._v(" 4) Measuring Tape and Protective glasses - To measure the wall and protect your eyes from drilling ")]),s("ol",[t._v(" 5) Epoxy - To stick the nails to the back of the sign and fill holes ")]),s("v-card-title",[t._v(" Optional ")]),s("ol",[t._v(" 6) Silicone - In case you are thinking about upgrading your facade in the near future you can use silicone in the drilled holes so that the sign is easily removable. "),s("br"),s("br")])],1)],1),s("v-card",[s("v-card-title",[t._v(" Examples of Epoxy:")]),s("ol",{staticClass:"main"},[s("ol",[s("li",[s("a",{attrs:{href:"https://www.amazon.ca/PC-Products-PC-Clear-Adhesive-1-Ounce/dp/B008DZ19WC/ref=sr_1_9?crid=32QAS5KEZIV4X&dchild=1&keywords=epoxy+adhesive&qid=1603157728&sprefix=epoxy+ad%2Caps%2C157&sr=8-9"}},[t._v("Fast Cure Liquid")])]),s("li",[s("a",{attrs:{href:"https://www.amazon.ca/MinuteWeld-Instant-Setting-Syringe-Yanyi-0-85-Fluid/dp/B07GLVMVVF/ref=sr_1_1_sspa?dchild=1&keywords=epoxy+adhesive+acrylic&qid=1603158652&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExSjFQWjk0SERRTTJOJmVuY3J5cHRlZElkPUEwMDA1OTAyM0FDRFJUSUk5SzYyOSZlbmNyeXB0ZWRBZElkPUExMDM4MzI4MUdDVUlGNzlSN0VOMiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="}},[t._v(" Yanyi 0.85 Liquid Ounce Epoxy Resin Crystal Clear")])]),s("li",[s("a",{attrs:{href:"https://www.amazon.ca/LePage-Premium-Polyurethane-Adhesive-1403221/dp/B0049OETBE/ref=sr_1_1_sspa?dchild=1&keywords=LePage+PL+Premium+Polyurethane+Adhesive&qid=1603160119&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyUzdBRElENU9ZTzlPJmVuY3J5cHRlZElkPUEwMzkxNjMxMkhGMjJEMUNTT0RNTyZlbmNyeXB0ZWRBZElkPUExMDI1NDc2MzdTM1FKRVNJMDNGMyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="}},[t._v("LePage PL Premium Polyurethane Adhesive")])])])]),s("v-card-title",[t._v(" Examples of Silicone:")]),s("ol",{staticClass:"main"},[s("ol",[s("li",[s("a",{attrs:{href:"https://www.amazon.ca/Red-Devil-100-Percent-Architectural-10-1-Ounce/dp/B000BQWB5U/ref=sr_1_10?dchild=1&keywords=LePage+silicone+indoor+outdoor&qid=1603166059&sr=8-10"}},[t._v("Red Devil Silicone")])])])])],1),s("v-col",[s("v-container",{attrs:{fluid:""}},[s("v-card-title",[t._v("Installation Steps !")]),s("v-row",{attrs:{dense:""}},[s("v-card",{attrs:{"max-width":"370",outlined:""}},[s("v-img",{staticClass:"white--text align-end",attrs:{height:"350px",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/nail.jpeg?raw=true"}}),s("v-list-item-content",[s("div",{staticClass:"overline mb-0"},[t._v("Step 1")]),s("h2",[t._v("Glue nails using Epoxy")]),s("v-card-text",[t._v(" Using an epoxy adhesive attach the provided nails to the backside of the sign numbers/letters, lightly sand the area before applying the epoxy for a stronger hold. Use as many nails as would be required for the sign to be stable and upright on the wall. We use atleast two on the numbers and more on longer words to keep them stable. ")])],1)],1),s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"370",outlined:""}},[s("v-img",{staticClass:"white--text align-end",attrs:{height:"350px",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/mark.jpeg?raw=true"}}),s("v-list-item-content",[s("div",{staticClass:"overline mb-0"},[t._v("Step 2")]),s("h2",[t._v("Mark nail positions on template")]),s("v-card-text",[t._v(" A tracing off your sign comes in the package, after the epoxy has hardened, mark positioning of the nails on the template provided. This will allow you to drill holes. ")])],1)],1),s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"370",outlined:""}},[s("v-img",{staticClass:"white--text align-end",attrs:{height:"350px",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/template.jpeg?raw=true"}}),s("v-list-item-content",[s("div",{staticClass:"overline mb-0"},[t._v("Step 3")]),s("h2",[t._v("Tape the template to the wall")]),s("v-card-text",[t._v(" Tape the template now marked with the nails locations to the wall where you want to install the sign. Ensure it is leveled and in the desired spot. ")])],1)],1),s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"370",outlined:""}},[s("v-img",{staticClass:"white--text align-end",attrs:{height:"350px",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/drill.jpeg?raw=true"}}),s("v-list-item-content",[s("div",{staticClass:"overline mb-0"},[t._v("Step 4")]),s("h2",[t._v("Drill the holes on the template")]),s("v-card-text",[t._v(" Drill into the marked areas of the template (7/16'' or 1/4'' drill bit recommended). We usually drill 1.5 inch deep. ")])],1)],1),s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"370",outlined:""}},[s("v-img",{staticClass:"white--text align-end",attrs:{height:"350px",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/ensure.jpeg?raw=true"}}),s("v-list-item-content",[s("div",{staticClass:"overline mb-0"},[t._v("Step 5")]),s("h2",[t._v("Ensure drilled holes fit sign nails")]),s("v-card-text",[t._v(" After drilling the holes check if the nails glued on the characters fit the drilled holes. ")])],1)],1),s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"370",outlined:""}},[s("v-img",{staticClass:"white--text align-end",attrs:{height:"350px",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/sillicone.jpg?raw=true"}}),s("v-list-item-content",[s("div",{staticClass:"overline mb-0"},[t._v("Step 6")]),s("h2",[t._v("Fill holes with an adhesive")]),s("v-card-text",[t._v(" Remove the template and fill the drilled holes with an epoxy/adhesive. Here you can also choose to use silicone if you want to remove the sign in the future. ")])],1)],1),s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"370",outlined:""}},[s("v-img",{staticClass:"white--text align-end",attrs:{height:"350px",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/sign.jpeg?raw=true"}}),s("v-list-item-content",[s("div",{staticClass:"overline mb-0"},[t._v("Step 7")]),s("h2",[t._v("Insert sign into holes")]),s("v-card-text",[t._v(" With the template removed, place the sign with attached nails into the silicon or epoxy filled holes.")])],1)],1),s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"370",outlined:""}},[s("v-img",{staticClass:"white--text align-end",attrs:{height:"350px",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/covering.jpeg?raw=true"}}),s("v-list-item-content",[s("div",{staticClass:"overline mb-0"},[t._v("Step 8")]),s("h2",{staticClass:"headline mb-1"},[t._v("Remove protective covering!")]),s("v-card-text",[t._v(" Remove the thin plastic layer on the front side of the sign. This can also be done before step 6 or 7. ")])],1)],1)],1)],1)],1)],1)],1)},a=[]},f6f0:function(t,e,s){"use strict";var i=s("34dc"),a=s.n(i);a.a},f9e8:function(t,e,s){"use strict";var i=s("98c4"),a=s.n(i);e["default"]=a.a}});
//# sourceMappingURL=app.36a480e2.js.map