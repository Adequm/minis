(function(e){function t(t){for(var o,r,c=t[0],a=t[1],l=t[2],p=0,d=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var a=n[c];0!==s[a]&&(o=!1)}o&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},s={app:0},i=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/minis/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"19f9":function(e,t,n){"use strict";n("5cc6")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",class:{fullscreen:e.isFullscreen},style:{height:e.innerHeight+"px",maxWidth:e.isDesktop?e.containerWidth+"px":"100vw",maxHeight:e.isDesktop?e.containerHeight+"px":"100vh"}},[e.isPageLoad?n("div",{staticClass:"minis__wrapper"},[e.isDesktop?n("SettingsDesktop",{attrs:{themeIcon:e.themeMain.icon},on:{switchTheme:e.switchTheme,switchLang:e.switchLang,switchFullscreen:e.switchFullscreen},model:{value:e.isClosedSettings,callback:function(t){e.isClosedSettings=t},expression:"isClosedSettings"}}):e._e(),n("LayoutContent",{ref:"layoutContent",style:{filter:e.openedModalName?"blur(2px)":"none"},attrs:{isDesktop:e.isDesktop},on:{openModal:function(t){e.openedModalName=t}}}),n("AppModal",{attrs:{isRoundedBorder:e.isWidthMore768&&!e.isFullscreen},model:{value:e.openedModalName,callback:function(t){e.openedModalName=t},expression:"openedModalName"}},["settings"==e.openedModalName?n("SettingsMobile",{attrs:{themeIcon:e.themeMain.icon,isWidthMore768:e.isWidthMore768},on:{switchTheme:e.switchTheme,switchLang:e.switchLang,switchFullscreen:e.switchFullscreen}}):e._e()],1),e.isDesktop?n("div",{staticClass:"resize_button",on:{mousedown:function(t){return t.preventDefault(),e.startResize.apply(null,arguments)},dblclick:function(t){return t.preventDefault(),e.autoResize.apply(null,arguments)}}}):e._e(),e.isDesktop?n("a",{staticClass:"minis",attrs:{href:"#",target:"_blank"},domProps:{textContent:e._s("Minis")}}):e._e()],1):n("AppLoader",{attrs:{size:100,rotate:""}})],1)},i=[],r=n("5530"),c=n("2ef0"),a=n.n(c),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{key:e.hashProjectsIcons,staticClass:"minis__content"},e._l(e.projectsIcons,(function(t,o){return n("svg",{key:o,attrs:{width:"90",height:"90",xmlns:"http://www.w3.org/2000/svg",id:"Layer_"+o,"data-name":"Layer_"+o,viewBox:"0 0 90 90"}},e._l(t,(function(e){return n("path",{key:e,attrs:{d:e}})})),0)})),0)},u=[],p=n("1da1"),d=(n("96cf"),n("4de4"),n("d3b7"),n("ddb0"),n("e9c4"),n("fb6a"),n("ac1f"),n("1276"),n("5319"),n("2f62")),f=n("1c09"),h={name:"LayoutContent",mixins:[f["e"]],data:function(){return{lodash:a.a,projectsIcons:{}}},computed:Object(r["a"])(Object(r["a"])({},Object(d["c"])({minisJSON:function(e){return e.minis.minisJSON}})),{},{projectsList:function(e){return a.a.keys(e.minisJSON).filter((function(e){return"home"!==e}))},hashProjectsIcons:function(e){return JSON.stringify(e.projectsIcons)}}),beforeMount:function(){var e=this;a.a.each(this.projectsList,function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(n){var o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://adequm.github.io/minis-".concat(n,"/icon.svg"));case 2:return o=t.sent,t.next=5,o.text();case 5:s=t.sent,e.projectsIcons[n]=a.a.chain(s).replace(/\s*d=\"/g,"").replace(/\"\s*/g,"").replace(/\/>/g,"").replace("</svg>","").split("<path").slice(1).value();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},m=h,g=(n("19f9"),n("2877")),b=Object(g["a"])(m,l,u,!1,null,"15dfc6da",null),v=b.exports,w=n("b54a"),y={components:{LayoutContent:v,AppModal:w["b"],SettingsDesktop:w["c"],SettingsMobile:w["d"],AppLoader:w["a"]},mixins:[f["b"],f["d"],f["a"],f["e"]],data:function(){return{lodash:a.a,isClosedSettings:!0,openedModalName:null}},watch:{isDesktop:function(e){e&&"settings"==this.openedModalName&&(this.openedModalName=null,this.isClosedSettings=!1)}},methods:Object(r["a"])({},Object(d["b"])(["switchFullscreen"])),beforeMount:function(){var e=this;document.body.addEventListener("click",(function(t){document.body===t.path[0]&&e.isDesktop&&(e.isClosedSettings||(e.isClosedSettings=!0))}))}},j=y,k=(n("5c0b"),Object(g["a"])(j,s,i,!1,null,null,null)),O=k.exports,M=n("9483");Object(M["a"])("".concat("/minis/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var x=n("2909"),_=(n("a15b"),n("99af"),n("0e44")),S=n("0759"),C=n.n(S),N="minis-home",L={};o["a"].use(d["a"]),L.state=function(){return{isFullscreen:!1,projectKey:N.split("-").slice(1).join("-")}},L.mutations={switchFullscreen:function(e){return o["a"].set(e,"isFullscreen",!e.isFullscreen)}};var D=[];L.modules={minis:f["f"]},L.plugins=[C()({predicate:function(){return[].concat(Object(x["a"])(f["c"]),D)}}),Object(_["a"])({paths:f["c"],key:"minis"}),Object(_["a"])({paths:D,key:N})];var F=new d["a"].Store(L);o["a"].config.productionTip=!1,new o["a"]({store:F,render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"5cc6":function(e,t,n){},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.a94839aa.js.map