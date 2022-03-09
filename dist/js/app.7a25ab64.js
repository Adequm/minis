(function(e){function t(t){for(var i,a,o=t[0],c=t[1],l=t[2],h=0,m=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&m.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},s={app:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/minis/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"229b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",style:{height:e.innerHeight+"px",maxWidth:e.isDesktop?e.containerWidth+"px":"100vw",maxHeight:e.isDesktop?e.containerHeight+"px":"100vh"}},[e.isPageLoad?n("div",{staticClass:"minis__wrapper"},[e.isDesktop?n("SettingsDesktop",{attrs:{themeIcon:e.themeMain.icon},on:{switchTheme:e.switchTheme,switchLang:e.switchLang,switchFullscreen:function(t){e.isFullscreen=!e.isFullscreen}},model:{value:e.isClosedSettings,callback:function(t){e.isClosedSettings=t},expression:"isClosedSettings"}}):e._e(),n("div",{staticClass:"layout-empty"},[n("Icon",{attrs:{type:"home",size:100}})],1),n("AppModal",{model:{value:e.openedModalName,callback:function(t){e.openedModalName=t},expression:"openedModalName"}},["settings"==e.openedModalName?n("SettingsMobile",{attrs:{themeIcon:e.themeMain.icon,isWidthMore768:e.isWidthMore768},on:{switchTheme:e.switchTheme,switchLang:e.switchLang,switchFullscreen:function(t){e.isFullscreen=!e.isFullscreen}}}):e._e()],1),e.isDesktop?n("div",{staticClass:"resize_button",on:{mousedown:function(t){return t.preventDefault(),e.startResize.apply(null,arguments)},dblclick:function(t){return t.preventDefault(),e.autoResize.apply(null,arguments)}}}):e._e(),e.isDesktop?n("a",{staticClass:"minis",attrs:{href:"https://adequm.github.io/minis",target:"_blank"}},[e._v("Minis")]):e._e()],1):n("Icon",{staticClass:"loader",attrs:{type:"loader",size:100,rotate:""}})],1)},r=[],a=n("5530"),o=(n("4d90"),n("d3b7"),n("25f0"),n("99af"),n("2ef0")),c=n.n(o),l=n("1da1"),u=n("3835"),h=(n("96cf"),n("07ac"),n("159b"),n("4fad"),n("2f62")),m={name:"App",data:function(){return{isPageLoad:!1}},watch:{translateOfMinis:{deep:!0,immediate:!0,handler:function(e){Object.values(e).length&&(document.title=this.translate("title"))}},themeMain:{deep:!0,handler:"themeMainInit"},themeSpecial:{deep:!0,handler:"themeSpecialInit"},themesJSON:{deep:!0,handler:"themesJSONInit"}},computed:Object(a["a"])(Object(a["a"])({},Object(h["b"])(["themeMain","themeSpecialName","themeSpecial"])),Object(h["d"])({minisTheme:function(e){return e.minis.minisTheme},minisLang:function(e){return e.minis.minisLang},themesJSON:function(e){return e.minis.themesJSON},minisJSON:function(e){return e.minis.minisJSON},translateJSON:function(e){return e.minis.translateJSON}})),methods:Object(a["a"])(Object(a["a"])({},Object(h["c"])({switchTheme:function(e,t){return e("switchTheme",t)},switchLang:function(e,t){return e("switchLang",t)},initMinis:function(e,t){return e("initMinis",t)}})),{},{themeMainInit:function(){if(!this.themeMain)return this.switchTheme("main");Object.entries(this.themeMain.colors).forEach((function(e){var t=Object(u["a"])(e,2),n=t[0],i=t[1];document.body.style.setProperty("--".concat(n),i)}))},themeSpecialInit:function(){if(!this.themeSpecial)return this.switchTheme("special");document.body.style.setProperty("--special-color",this.themeSpecial.normal)},themesJSONInit:function(){Object.entries(this.themesJSON.default||[]).forEach((function(e){var t=Object(u["a"])(e,2),n=t[0],i=t[1];document.body.style.setProperty("--".concat(n,"-color"),i)}))},isExistMinisData:function(){return c.a.size(this.themesJSON)&&c.a.size(this.minisJSON)&&c.a.size(this.translateJSON)},getMinisOptions:function(){var e=this,t="https://adequm.github.io/minis";return new Promise(function(){var n=Object(l["a"])(regeneratorRuntime.mark((function n(i){var s,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(t,"/translateJSON.json")).then((function(e){return e.json()}));case 3:return s=n.sent,n.next=6,fetch("".concat(t,"/minisJSON.json")).then((function(e){return e.json()}));case 6:return r=n.sent,n.next=9,fetch("".concat(t,"/themesJSON.json")).then((function(e){return e.json()}));case 9:a=n.sent,i({translateJSON:s,minisJSON:r,themesJSON:a}),n.next=16;break;case 13:n.prev=13,n.t0=n["catch"](0),setTimeout(Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isExistMinisData()&&(e.themeMainInit(),e.themeSpecialInit(),e.themesJSONInit(),e.isPageLoad=!0),t.next=3,e.getMinisOptions();case 3:n=t.sent,i(n);case 5:case"end":return t.stop()}}),t)}))),2e3);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e){return n.apply(this,arguments)}}())}}),created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getMinisOptions();case 2:n=t.sent,e.initMinis(n),e.isPageLoad=!0;case 5:case"end":return t.stop()}}),t)})))()}},d={data:function(){return{minContainerWidth:300,minContainerHeight:560,containerWidth:null,containerHeight:null,innerHeight:null,innerWidth:null,startResizeX:null,startResizeY:null,startResizeWidth:null,startResizeHeight:null,resizeHash:null,onInputFocus:!1,isFullscreen:!1}},watch:{isFullscreen:"resizeContainer",innerHeight:"resizeContainer",innerWidth:"resizeContainer"},computed:{isWidthMore768:function(e){return e.innerWidth>=768},isDesktop:function(e){return e.isWidthMore768&&!e.isFullscreen},appWidth:function(e){return e.isDesktop?e.containerWidth:e.innerWidth},appHeight:function(e){return e.isDesktop?e.containerHeight:e.innerHeight},maxContainerWidth:function(e){return e.innerWidth-180},maxContainerHeight:function(e){return e.innerHeight-100},isMinContainerWidth:function(e){return e.containerWidth===e.minContainerWidth},isMaxContainerWidth:function(e){return e.containerWidth===e.maxContainerWidth},isMinContainerHeight:function(e){return e.containerHeight===e.minContainerHeight},isMaxContainerHeight:function(e){return e.containerHeight===e.maxContainerHeight}},methods:{resizeContainer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.containerWidth,n=this.minContainerWidth,i=this.maxContainerWidth,s=this.containerHeight,r=this.minContainerHeight,a=this.maxContainerHeight;this.containerWidth=c.a.clamp(e.containerWidth||t,n,i),this.containerHeight=c.a.clamp(e.containerHeight||s,r,a)},setContainerSize:function(e){var t=this,n=e.pageX,i=e.pageY;requestAnimationFrame((function(){if(!c.a.isNull(t.startResizeX)&&!c.a.isNull(t.startResizeWidth)&&!c.a.isNull(t.startResizeY)&&!c.a.isNull(t.startResizeHeight)){var e=2*(n-t.startResizeX)+t.startResizeWidth,s=2*(i-t.startResizeY)+t.startResizeHeight;t.resizeContainer({containerWidth:e,containerHeight:s})}}))},startResize:function(e){this.startResizeX=e.pageX,this.startResizeY=e.pageY,this.startResizeWidth=this.containerWidth,this.startResizeHeight=this.containerHeight,document.addEventListener("mousemove",this.setContainerSize),document.addEventListener("mouseup",this.stopResize),window.addEventListener("mouseleave",this.stopResize),window.addEventListener("click",this.stopResize),window.addEventListener("contextmenu",this.stopResize)},stopResize:function(){this.startResizeX=null,this.startResizeY=null,this.startResizeWidth=null,this.startResizeHeight=null,document.removeEventListener("mousemove",this.setContainerSize),document.removeEventListener("mouseup",this.stopResize),window.removeEventListener("mouseleave",this.stopResize),window.removeEventListener("click",this.stopResize),window.removeEventListener("contextmenu",this.stopResize)},autoResize:function(){var e=this.isMinContainerWidth&&this.isMinContainerHeight;this.resizeContainer({containerWidth:e?this.maxContainerWidth:this.minContainerWidth,containerHeight:e?this.maxContainerHeight:this.minContainerHeight})}},beforeMount:function(){var e=this,t=function(){e.innerWidth=document.body.offsetWidth,e.onInputFocus||(e.innerHeight=innerHeight)};t(),window.addEventListener("resize",t),setInterval(t,1e3)}},p=(n("ac1f"),n("1276"),n("cb29"),n("e9c4"),{watch:{themeHash:{immediate:!0,handler:function(){var e=this,t=new Image,n=location.pathname.split("/")[1];t.src="/".concat(n,"/icon.svg"),t.addEventListener("load",(function(){[16,32].forEach((function(n){var i,s=document.createElement("canvas");s.height=n,s.width=n;var r=s.getContext("2d");r.beginPath(),r.drawImage(t,0,0,n,n),r.globalCompositeOperation="source-in",r.rect(0,0,n,n),r.fillStyle=null===(i=e.themeSpecial)||void 0===i?void 0:i.normal,r.fill();var a=document.querySelector('link[sizes="'.concat(n,"x").concat(n,'"]'));a.setAttribute("href",s.toDataURL())}))}))}}},computed:Object(a["a"])(Object(a["a"])({},Object(h["b"])(["themeSpecial","themeMain"])),{},{themeHash:function(){return JSON.stringify(this.themeSpecial)+JSON.stringify(this.themeMain)}})}),f={computed:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(h["d"])(["projectKey"])),Object(h["d"])({minisLang:function(e){return e.minis.minisLang},translateJSON:function(e){return e.minis.translateJSON}})),{},{translateOfMinis:function(e){var t=e.translateJSON,n=e.minisLang,i=e.projectKey;return c.a.get(null===t||void 0===t?void 0:t[n],i,{})},translateErrorMessage:function(e){var t=e.translateJSON,n=e.minisLang;return c.a.get(null===t||void 0===t?void 0:t[n],"default.error","%err%")},translate:function(e){var t=e.translateErrorMessage,n=e.translateOfMinis;return function(e,i){return c.a.get(n,e,i||t)}},translateDef:function(e){var t=e.translateJSON,n=e.minisLang,i=e.translateErrorMessage;return function(e,s){var r;return c.a.get(null===t||void 0===t||null===(r=t[n])||void 0===r?void 0:r.default,e,s||i)}},translateChain:function(e){var t=e.translateJSON,n=e.minisLang,i=e.translateErrorMessage;return function e(t,n,s){var r=n||c.a.isNumber(n)?c.a.get(t,n,s||i):t;return function(t,n){return t?e(r,t,n):r}}(null===t||void 0===t?void 0:t[n])}})},g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon",attrs:{"area-text":e.text,side:e.side},on:{click:function(t){return e.$emit("click",t)}}},[n("i",{class:["fi fi-"+e.border+"-"+e.type,{rotate:e.rotate}],style:{fontSize:e.size+"px",maxHeight:e.size+"px",maxWidth:e.size+"px",lineHeight:1}})])},v=[],b=(n("a9e3"),{name:"Icon",props:{type:String,size:{type:Number,default:20},border:{type:String,default:"rs"},text:String,side:{type:String,default:"left"},rotate:{type:Boolean,default:!1}}}),S=b,O=(n("e59a"),n("2877")),w=Object(O["a"])(S,g,v,!1,null,"27d701bb",null),y=w.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"settings",class:{isClosedSettings:e.value}},[n("Icon",{attrs:{type:"settings",size:22},on:{click:function(t){return t.preventDefault(),e.$emit("input",!e.value)}}}),n("Icon",{attrs:{type:e.themeIcon,size:22},on:{click:function(t){return t.preventDefault(),e.$emit("switchTheme","main")}}}),n("Icon",{attrs:{type:"palette",size:22},on:{click:function(t){return t.preventDefault(),e.$emit("switchTheme","special")}}}),n("Icon",{attrs:{type:"globe",size:22},on:{click:function(t){return t.preventDefault(),e.$emit("switchLang")}}}),n("Icon",{attrs:{type:"expand-arrows-alt",size:22},on:{click:function(t){return t.preventDefault(),e.$emit("switchFullscreen")}}})],1)},z=[],N={name:"SettingsDesktop",components:{Icon:y},props:{themeIcon:String,value:Boolean}},C=N,x=(n("f937"),Object(O["a"])(C,M,z,!1,null,"cd2b87c0",null)),j=x.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"settings",class:{isClosedSettings:e.value}},[n("Icon",{attrs:{type:e.themeIcon,size:30},on:{click:function(t){return t.preventDefault(),e.$emit("switchTheme","main")}}}),n("Icon",{attrs:{type:"palette",size:30},on:{click:function(t){return t.preventDefault(),e.$emit("switchTheme","special")}}}),n("Icon",{attrs:{type:"globe",size:30},on:{click:function(t){return t.preventDefault(),e.$emit("switchLang")}}}),e.isWidthMore768?n("Icon",{attrs:{type:"compress-alt",size:30},on:{click:function(t){return t.preventDefault(),e.$emit("switchFullscreen")}}}):e._e(),n("a",{staticClass:"minis",attrs:{href:"https://adequm.github.io/minis",target:"_blank"}},[n("Icon",{attrs:{type:"home",size:30}})],1)],1)},H=[],J={name:"SettingsMobile",components:{Icon:y},props:{themeIcon:String,value:Boolean,isWidthMore768:Boolean}},W=J,R=(n("72b7"),Object(O["a"])(W,k,H,!1,null,"0335f584",null)),L=R.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.value?n("div",{staticClass:"modal"},[n("div",{staticClass:"modal__background",on:{click:function(t){return e.$emit("input",null)}}}),n("div",{staticClass:"modal__content"},[e._t("default")],2)]):e._e()},_=[],D={name:"AppModal",props:{value:String}},E=D,T=(n("6dbd"),Object(O["a"])(E,I,_,!1,null,"14494698",null)),F=T.exports,$={components:{AppModal:F,SettingsDesktop:j,SettingsMobile:L,Icon:y},mixins:[m,d,p,f],data:function(){return{lodash:c.a,isClosedSettings:!0,openedModalName:null,slideIndexHistory:0}},watch:{isDesktop:function(e){e&&"settings"==this.openedModalName&&(this.openedModalName=null,this.isClosedSettings=!1)}},computed:Object(a["a"])({},Object(h["d"])(["savedHistory"])),methods:{getFormatDate:function(e){if(!e)return this.translate("error");var t=new Date(e),n=t.getDate().toString().padStart(2,0),i=(t.getMonth()+1).toString().padStart(2,0),s=t.getFullYear(),r=t.getHours().toString().padStart(2,0),a=t.getMinutes().toString().padStart(2,0);return"".concat(n,".").concat(i,".").concat(s," | ").concat(r,":").concat(a)},removeFromHistoryHandler:function(){this.$refs.layoutContent.removeFromHistoryHandler(this.slideIndexHistory),this.openedModalName=null}},beforeMount:function(){var e=this;document.body.addEventListener("click",(function(t){document.body===t.path[0]&&e.isDesktop&&(e.isClosedSettings||(e.isClosedSettings=!0))}))}},P=$,A=(n("5c0b"),Object(O["a"])(P,s,r,!1,null,null,null)),Y=A.exports,X=n("9483");Object(X["a"])("".concat("/minis/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("fb6a");var q=n("0e44"),B=n("0759"),K=n.n(B),U=(n("b64b"),{state:function(){return{minisLang:"ru",minisThemeMain:null,minisThemeSpecial:null,themesJSON:{},translateJSON:{},minisJSON:{}}},getters:{themeMain:function(e){var t,n,i=e.themesJSON,s=e.minisThemeMain,r=null===i||void 0===i||null===(t=i.main)||void 0===t?void 0:t[s];return r?i.main[s]:null===i||void 0===i||null===(n=i.main)||void 0===n?void 0:n.dark},themeSpecialName:function(e){var t,n,i,s=e.themesJSON,r=e.minisThemeSpecial,a=null===s||void 0===s||null===(t=s.special)||void 0===t||null===(n=t.colors)||void 0===n?void 0:n[r];return a?r:null===s||void 0===s||null===(i=s.special)||void 0===i?void 0:i.default},themeSpecial:function(e,t){var n,i,s=e.themesJSON,r=t.themeSpecialName;return null===s||void 0===s||null===(n=s.special)||void 0===n||null===(i=n.colors)||void 0===i?void 0:i[r]}}});U.mutations={switchTheme:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"main",n="main"==t?"minisThemeMain":"minisThemeSpecial",s="main"==t?e.themesJSON.main:e.themesJSON.special.colors,r=Object.keys(s),a=r.indexOf(e[n]),o=(a+1)%r.length;i["a"].set(e,n,r[o])},switchLang:function(e){var t=Object.keys(e.translateJSON),n=t.indexOf(e.minisLang),s=(n+1)%t.length;i["a"].set(e,"minisLang",t[s])},initMinis:function(e,t){var n=t.translateJSON,s=t.minisJSON,r=t.themesJSON;i["a"].set(e,"minisJSON",s),i["a"].set(e,"translateJSON",n),i["a"].set(e,"themesJSON",r)}};var G=U,Q="minis-home",V={projectKey:Q.split("-").slice(-1)[0]};i["a"].use(h["a"]);var Z=["minis.minisThemeMain","minis.minisThemeSpecial","minis.minisLang","minis.themesJSON","minis.translateJSON","minis.minisJSON"],ee=[];V.modules={minis:G},V.plugins=[K()({predicate:function(){return[].concat(Z,ee)}}),Object(q["a"])({paths:Z,key:"minis"}),Object(q["a"])({paths:ee,key:Q})];var te=new h["a"].Store(V);i["a"].config.productionTip=!1,new i["a"]({store:te,render:function(e){return e(Y)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"6dbd":function(e,t,n){"use strict";n("229b")},"72b7":function(e,t,n){"use strict";n("b357")},"9c0c":function(e,t,n){},b357:function(e,t,n){},e3aa:function(e,t,n){},e509:function(e,t,n){},e59a:function(e,t,n){"use strict";n("e3aa")},f937:function(e,t,n){"use strict";n("e509")}});
//# sourceMappingURL=app.7a25ab64.js.map