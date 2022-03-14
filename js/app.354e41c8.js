(function(e){function t(t){for(var i,a,o=t[0],c=t[1],u=t[2],h=0,m=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&m.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},s={app:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/minis/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"015b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",class:{fullscreen:e.isFullscreen},style:{height:e.innerHeight+"px",maxWidth:e.isDesktop?e.containerWidth+"px":"100vw",maxHeight:e.isDesktop?e.containerHeight+"px":"100vh"}},[e.isPageLoad?n("div",{staticClass:"minis__wrapper"},[e.isDesktop?n("SettingsDesktop",{attrs:{themeIcon:e.themeMain.icon},on:{switchTheme:e.switchTheme,switchLang:e.switchLang,switchFullscreen:e.switchFullscreen},model:{value:e.isClosedSettings,callback:function(t){e.isClosedSettings=t},expression:"isClosedSettings"}}):e._e(),n("LayoutContent",{ref:"layoutContent",style:{filter:e.openedModalName?"blur(2px)":"none"},attrs:{isDesktop:e.isDesktop},on:{openModal:function(t){e.openedModalName=t}}}),n("AppModal",{model:{value:e.openedModalName,callback:function(t){e.openedModalName=t},expression:"openedModalName"}},["settings"==e.openedModalName?n("SettingsMobile",{attrs:{themeIcon:e.themeMain.icon,isWidthMore768:e.isWidthMore768},on:{switchTheme:e.switchTheme,switchLang:e.switchLang,switchFullscreen:e.switchFullscreen}}):e._e()],1),e.isDesktop?n("div",{staticClass:"resize_button",on:{mousedown:function(t){return t.preventDefault(),e.startResize.apply(null,arguments)},dblclick:function(t){return t.preventDefault(),e.autoResize.apply(null,arguments)}}}):e._e(),e.isDesktop?n("a",{staticClass:"minis",attrs:{href:"https://adequm.github.io/minis",target:"_blank"}},[e._v("Minis")]):e._e()],1):n("Icon",{staticClass:"loader",attrs:{type:"time-oclock",size:100,rotate:""}})],1)},r=[],a=n("5530"),o=n("2ef0"),c=n.n(o),u=n("1da1"),l=n("3835"),h=(n("96cf"),n("07ac"),n("d3b7"),n("159b"),n("4fad"),n("2f62")),m={name:"App",data:function(){return{isPageLoad:!1}},watch:{translateOfMinis:{deep:!0,immediate:!0,handler:function(e){Object.values(e).length&&(document.title=this.translate("title"))}},themeMain:{deep:!0,handler:"themeMainInit"},themeSpecial:{deep:!0,handler:"themeSpecialInit"},themesJSON:{deep:!0,handler:"themesJSONInit"}},computed:Object(a["a"])(Object(a["a"])({},Object(h["b"])(["themeMain","themeSpecialName","themeSpecial"])),Object(h["d"])({minisTheme:function(e){return e.minis.minisTheme},minisLang:function(e){return e.minis.minisLang},themesJSON:function(e){return e.minis.themesJSON},minisJSON:function(e){return e.minis.minisJSON},translateJSON:function(e){return e.minis.translateJSON}})),methods:Object(a["a"])(Object(a["a"])({},Object(h["c"])({switchTheme:function(e,t){return e("switchTheme",t)},switchLang:function(e,t){return e("switchLang",t)},initMinis:function(e,t){return e("initMinis",t)}})),{},{themeMainInit:function(){if(!this.themeMain)return this.switchTheme("main");Object.entries(this.themeMain.colors).forEach((function(e){var t=Object(l["a"])(e,2),n=t[0],i=t[1];document.body.style.setProperty("--".concat(n),i)}))},themeSpecialInit:function(){if(!this.themeSpecial)return this.switchTheme("special");document.body.style.setProperty("--special-color",this.themeSpecial.normal)},themesJSONInit:function(){Object.entries(this.themesJSON.default||[]).forEach((function(e){var t=Object(l["a"])(e,2),n=t[0],i=t[1];document.body.style.setProperty("--".concat(n,"-color"),i)}))},isExistMinisData:function(){return c.a.size(this.themesJSON)&&c.a.size(this.minisJSON)&&c.a.size(this.translateJSON)},getMinisOptions:function(){var e=this,t="https://adequm.github.io/minis";return new Promise(function(){var n=Object(u["a"])(regeneratorRuntime.mark((function n(i){var s,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(t,"/translateJSON.json")).then((function(e){return e.json()}));case 3:return s=n.sent,n.next=6,fetch("".concat(t,"/minisJSON.json")).then((function(e){return e.json()}));case 6:return r=n.sent,n.next=9,fetch("".concat(t,"/themesJSON.json")).then((function(e){return e.json()}));case 9:a=n.sent,i({translateJSON:s,minisJSON:r,themesJSON:a}),n.next=16;break;case 13:n.prev=13,n.t0=n["catch"](0),setTimeout(Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isExistMinisData()&&(e.themeMainInit(),e.themeSpecialInit(),e.themesJSONInit(),e.isPageLoad=!0),t.next=3,e.getMinisOptions();case 3:n=t.sent,i(n);case 5:case"end":return t.stop()}}),t)}))),2e3);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e){return n.apply(this,arguments)}}())}}),created:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getMinisOptions();case 2:n=t.sent,e.initMinis(n),e.isPageLoad=!0;case 5:case"end":return t.stop()}}),t)})))()}},d={data:function(){return{minContainerWidth:300,minContainerHeight:560,containerWidth:null,containerHeight:null,innerHeight:null,innerWidth:null,startResizeX:null,startResizeY:null,startResizeWidth:null,startResizeHeight:null,resizeHash:null,onInputFocus:!1}},watch:{isFullscreen:"resizeContainer",innerHeight:"resizeContainer",innerWidth:"resizeContainer"},computed:Object(a["a"])(Object(a["a"])({},Object(h["d"])(["isFullscreen"])),{},{isWidthMore768:function(e){return e.innerWidth>=768},isDesktop:function(e){return e.isWidthMore768&&!e.isFullscreen},appWidth:function(e){return e.isDesktop?e.containerWidth:e.innerWidth},appHeight:function(e){return e.isDesktop?e.containerHeight:e.innerHeight},maxContainerWidth:function(e){return e.innerWidth-180},maxContainerHeight:function(e){return e.innerHeight-100},isMinContainerWidth:function(e){return e.containerWidth===e.minContainerWidth},isMaxContainerWidth:function(e){return e.containerWidth===e.maxContainerWidth},isMinContainerHeight:function(e){return e.containerHeight===e.minContainerHeight},isMaxContainerHeight:function(e){return e.containerHeight===e.maxContainerHeight}}),methods:{resizeContainer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.containerWidth,n=this.minContainerWidth,i=this.maxContainerWidth,s=this.containerHeight,r=this.minContainerHeight,a=this.maxContainerHeight;this.containerWidth=c.a.clamp(e.containerWidth||t,n,i),this.containerHeight=c.a.clamp(e.containerHeight||s,r,a)},setContainerSize:function(e){var t=this,n=e.pageX,i=e.pageY;requestAnimationFrame((function(){if(!c.a.isNull(t.startResizeX)&&!c.a.isNull(t.startResizeWidth)&&!c.a.isNull(t.startResizeY)&&!c.a.isNull(t.startResizeHeight)){var e=2*(n-t.startResizeX)+t.startResizeWidth,s=2*(i-t.startResizeY)+t.startResizeHeight;t.resizeContainer({containerWidth:e,containerHeight:s})}}))},startResize:function(e){this.startResizeX=e.pageX,this.startResizeY=e.pageY,this.startResizeWidth=this.containerWidth,this.startResizeHeight=this.containerHeight,document.addEventListener("mousemove",this.setContainerSize),document.addEventListener("mouseup",this.stopResize),window.addEventListener("mouseleave",this.stopResize),window.addEventListener("click",this.stopResize),window.addEventListener("contextmenu",this.stopResize)},stopResize:function(){this.startResizeX=null,this.startResizeY=null,this.startResizeWidth=null,this.startResizeHeight=null,document.removeEventListener("mousemove",this.setContainerSize),document.removeEventListener("mouseup",this.stopResize),window.removeEventListener("mouseleave",this.stopResize),window.removeEventListener("click",this.stopResize),window.removeEventListener("contextmenu",this.stopResize)},autoResize:function(){var e=this.isMinContainerWidth&&this.isMinContainerHeight;this.resizeContainer({containerWidth:e?this.maxContainerWidth:this.minContainerWidth,containerHeight:e?this.maxContainerHeight:this.minContainerHeight})}},beforeMount:function(){var e=this,t=function(){e.innerWidth=document.body.offsetWidth,e.onInputFocus||(e.innerHeight=innerHeight)};t(),window.addEventListener("resize",t),setInterval(t,1e3)}},p=(n("ac1f"),n("1276"),n("cb29"),n("99af"),n("e9c4"),{watch:{themeHash:{immediate:!0,handler:function(){var e=this,t=new Image,n=location.pathname.split("/")[1];t.src="/".concat(n,"/icon.svg"),t.addEventListener("load",(function(){[16,32].forEach((function(n){var i,s=document.createElement("canvas");s.height=n,s.width=n;var r=s.getContext("2d");r.beginPath(),r.drawImage(t,0,0,n,n),r.globalCompositeOperation="source-in",r.rect(0,0,n,n),r.fillStyle=null===(i=e.themeSpecial)||void 0===i?void 0:i.normal,r.fill();var a=document.querySelector('link[sizes="'.concat(n,"x").concat(n,'"]'));a.setAttribute("href",s.toDataURL())}))}))}}},computed:Object(a["a"])(Object(a["a"])({},Object(h["b"])(["themeSpecial","themeMain"])),{},{themeHash:function(){return JSON.stringify(this.themeSpecial)+JSON.stringify(this.themeMain)}})}),f={computed:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(h["d"])(["projectKey"])),Object(h["d"])({minisLang:function(e){return e.minis.minisLang},translateJSON:function(e){return e.minis.translateJSON}})),{},{translateOfMinis:function(e){var t=e.translateJSON,n=e.minisLang,i=e.projectKey;return c.a.get(null===t||void 0===t?void 0:t[n],i,{})},translateErrorMessage:function(e){var t=e.translateJSON,n=e.minisLang;return c.a.get(null===t||void 0===t?void 0:t[n],"default.error","%err%")},translate:function(e){var t=e.translateErrorMessage,n=e.translateOfMinis;return function(e,i){return c.a.get(n,e,i||t)}},translateDef:function(e){var t=e.translateJSON,n=e.minisLang,i=e.translateErrorMessage;return function(e,s){var r;return c.a.get(null===t||void 0===t||null===(r=t[n])||void 0===r?void 0:r.default,e,s||i)}},translateChain:function(e){var t=e.translateJSON,n=e.minisLang,i=e.translateErrorMessage;return function e(t,n,s){var r=n||c.a.isNumber(n)?c.a.get(t,n,s||i):t;return function(t,n){return t?e(r,t,n):r}}(null===t||void 0===t?void 0:t[n])}})},g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon",attrs:{"area-text":e.text,side:e.side},on:{click:function(t){return e.$emit("click",t)}}},[n("i",{class:["fi fi-"+e.border+"-"+e.type,{rotate:e.rotate}],style:{fontSize:e.size+"px",maxHeight:e.size+"px",maxWidth:e.size+"px",lineHeight:1}})])},v=[],b=(n("a9e3"),{name:"Icon",props:{type:String,size:{type:Number,default:20},border:{type:String,default:"rs"},text:String,side:{type:String,default:"left"},rotate:{type:Boolean,default:!1}}}),O=b,S=(n("e59a"),n("2877")),w=Object(S["a"])(O,g,v,!1,null,"27d701bb",null),y=w.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"settings",class:{isClosedSettings:e.value}},[n("Icon",{attrs:{type:"settings",size:22},on:{click:function(t){return t.preventDefault(),e.$emit("input",!e.value)}}}),n("Icon",{attrs:{type:e.themeIcon,size:22},on:{click:function(t){return t.preventDefault(),e.$emit("switchTheme","main")}}}),n("Icon",{attrs:{type:"palette",size:22},on:{click:function(t){return t.preventDefault(),e.$emit("switchTheme","special")}}}),n("Icon",{attrs:{type:"globe",size:22},on:{click:function(t){return t.preventDefault(),e.$emit("switchLang")}}}),n("Icon",{attrs:{type:"expand-arrows-alt",size:22},on:{click:function(t){return t.preventDefault(),e.$emit("switchFullscreen")}}})],1)},N=[],M={name:"SettingsDesktop",components:{Icon:y},props:{themeIcon:String,value:Boolean}},z=M,x=(n("f937"),Object(S["a"])(z,j,N,!1,null,"cd2b87c0",null)),C=x.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"settings",class:{isClosedSettings:e.value}},[n("Icon",{attrs:{type:e.themeIcon,size:30},on:{click:function(t){return t.preventDefault(),e.$emit("switchTheme","main")}}}),n("Icon",{attrs:{type:"palette",size:30},on:{click:function(t){return t.preventDefault(),e.$emit("switchTheme","special")}}}),n("Icon",{attrs:{type:"globe",size:30},on:{click:function(t){return t.preventDefault(),e.$emit("switchLang")}}}),e.isWidthMore768?n("Icon",{attrs:{type:"compress-alt",size:30},on:{click:function(t){return t.preventDefault(),e.$emit("switchFullscreen")}}}):e._e(),n("a",{staticClass:"minis",attrs:{href:"https://adequm.github.io/minis",target:"_blank"}},[n("Icon",{attrs:{type:"home",size:30}})],1)],1)},J=[],L={name:"SettingsMobile",components:{Icon:y},props:{themeIcon:String,value:Boolean,isWidthMore768:Boolean}},W=L,R=(n("72b7"),Object(S["a"])(W,k,J,!1,null,"0335f584",null)),H=R.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.value?n("div",{staticClass:"modal"},[n("div",{staticClass:"modal__background",on:{click:function(t){return e.$emit("input",null)}}}),n("div",{staticClass:"modal__content"},[e._t("default")],2)]):e._e()},_=[],D={name:"AppModal",props:{value:String}},E=D,T=(n("5ee2"),Object(S["a"])(E,I,_,!1,null,"2a1b4e70",null)),F=T.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{key:e.hashProjectsIcons,staticClass:"minis__content"},e._l(e.projectsIcons,(function(t,i){return n("svg",{key:i,attrs:{width:"90",height:"90",xmlns:"http://www.w3.org/2000/svg",id:"Layer_"+i,"data-name":"Layer_"+i,viewBox:"0 0 90 90"}},e._l(t,(function(e){return n("path",{key:e,attrs:{d:e}})})),0)})),0)},$=[],A=(n("4de4"),n("ddb0"),n("fb6a"),n("5319"),{name:"LayoutContent",mixins:[f],data:function(){return{lodash:c.a,projectsIcons:{}}},computed:Object(a["a"])(Object(a["a"])({},Object(h["d"])({minisJSON:function(e){return e.minis.minisJSON}})),{},{projectsList:function(e){return c.a.keys(e.minisJSON).filter((function(e){return"home"!==e}))},hashProjectsIcons:function(e){return JSON.stringify(e.projectsIcons)}}),beforeMount:function(){var e=this;c.a.each(this.projectsList,function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(n){var i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://adequm.github.io/minis-".concat(n,"/icon.svg"));case 2:return i=t.sent,t.next=5,i.text();case 5:s=t.sent,e.projectsIcons[n]=c.a.chain(s).replace(/\s*d=\"/g,"").replace(/\"\s*/g,"").replace(/\/>/g,"").replace("</svg>","").split("<path").slice(1).value();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}),q=A,X=(n("9731"),Object(S["a"])(q,P,$,!1,null,"7339cbfb",null)),Y=X.exports,B={components:{AppModal:F,SettingsDesktop:C,SettingsMobile:H,Icon:y,LayoutContent:Y},mixins:[m,d,p,f],data:function(){return{lodash:c.a,isClosedSettings:!0,openedModalName:null}},watch:{isDesktop:function(e){e&&"settings"==this.openedModalName&&(this.openedModalName=null,this.isClosedSettings=!1)}},methods:Object(a["a"])({},Object(h["c"])(["switchFullscreen"])),beforeMount:function(){var e=this;document.body.addEventListener("click",(function(t){document.body===t.path[0]&&e.isDesktop&&(e.isClosedSettings||(e.isClosedSettings=!0))}))}},K=B,U=(n("5c0b"),Object(S["a"])(K,s,r,!1,null,null,null)),G=U.exports,Q=n("9483");Object(Q["a"])("".concat("/minis/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("a15b");var V=n("0e44"),Z=n("0759"),ee=n.n(Z),te=(n("b64b"),{state:function(){return{minisLang:"ru",minisThemeMain:null,minisThemeSpecial:null,themesJSON:{},translateJSON:{},minisJSON:{}}},getters:{themeMain:function(e){var t,n,i=e.themesJSON,s=e.minisThemeMain,r=null===i||void 0===i||null===(t=i.main)||void 0===t?void 0:t[s];return r?i.main[s]:null===i||void 0===i||null===(n=i.main)||void 0===n?void 0:n.dark},themeSpecialName:function(e){var t,n,i,s=e.themesJSON,r=e.minisThemeSpecial,a=null===s||void 0===s||null===(t=s.special)||void 0===t||null===(n=t.colors)||void 0===n?void 0:n[r];return a?r:null===s||void 0===s||null===(i=s.special)||void 0===i?void 0:i.default},themeSpecial:function(e,t){var n,i,s=e.themesJSON,r=t.themeSpecialName;return null===s||void 0===s||null===(n=s.special)||void 0===n||null===(i=n.colors)||void 0===i?void 0:i[r]}}});te.mutations={switchTheme:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"main",n="main"==t?"minisThemeMain":"minisThemeSpecial",s="main"==t?e.themesJSON.main:e.themesJSON.special.colors,r=Object.keys(s),a=r.indexOf(e[n]),o=(a+1)%r.length;i["a"].set(e,n,r[o])},switchLang:function(e){var t=Object.keys(e.translateJSON),n=t.indexOf(e.minisLang),s=(n+1)%t.length;i["a"].set(e,"minisLang",t[s])},initMinis:function(e,t){var n=t.translateJSON,s=t.minisJSON,r=t.themesJSON;i["a"].set(e,"minisJSON",s),i["a"].set(e,"translateJSON",n),i["a"].set(e,"themesJSON",r)}};var ne=te,ie="minis-home",se={};i["a"].use(h["a"]),se.state=function(){return{isFullscreen:!1,projectKey:ie.split("-").slice(1).join("-")}},se.mutations={switchFullscreen:function(e){return i["a"].set(e,"isFullscreen",!e.isFullscreen)}};var re=["minis.minisThemeMain","minis.minisThemeSpecial","minis.minisLang","minis.themesJSON","minis.translateJSON","minis.minisJSON"],ae=[];se.modules={minis:ne},se.plugins=[ee()({predicate:function(){return[].concat(re,ae)}}),Object(V["a"])({paths:re,key:"minis"}),Object(V["a"])({paths:ae,key:ie})];var oe=new h["a"].Store(se);i["a"].config.productionTip=!1,new i["a"]({store:oe,render:function(e){return e(G)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"5ee2":function(e,t,n){"use strict";n("bd94")},"72b7":function(e,t,n){"use strict";n("b357")},9731:function(e,t,n){"use strict";n("015b")},"9c0c":function(e,t,n){},b357:function(e,t,n){},bd94:function(e,t,n){},e3aa:function(e,t,n){},e509:function(e,t,n){},e59a:function(e,t,n){"use strict";n("e3aa")},f937:function(e,t,n){"use strict";n("e509")}});
//# sourceMappingURL=app.354e41c8.js.map