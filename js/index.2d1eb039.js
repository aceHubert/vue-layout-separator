(function(t){function e(e){for(var n,a,s=e[0],l=e[1],u=e[2],d=0,h=[];d<s.length;d++)a=s[d],r[a]&&h.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,s=1;s<i.length;s++){var l=i[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},r={index:0},o=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-layout-separator/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("983a")},"09fa":function(t,e,i){"use strict";var n=i("8ef3"),r=i.n(n);r.a},"8ef3":function(t,e,i){},"983a":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("separator",[i("separator-item",{staticStyle:{background:"#ddd"},attrs:{width:"200px","min-width":100}},[t._v("\n      LEFT\n      "),i("p",[t._v("min-width:100px")])]),i("separator-item",[i("separator",{attrs:{direction:"vertical"}},[i("separator-item",{staticStyle:{background:"#ddd"},attrs:{height:50}},[t._v("\n          TOP\n          "),i("p",[t._v("height:50px")])]),i("separator-item",{attrs:{"max-height":150}},[t._v("\n          MIDDLE1\n          "),i("p",[t._v("height:auto")]),i("p",[t._v("max-height:150px")])]),i("separator-item",{staticStyle:{background:"#ddd"}},[t._v("\n          MIDDLE2\n          "),i("p",[t._v("height:auto")])]),i("separator-item",[t._v("\n          MIDDLE3\n          "),i("p",[t._v("height:auto")])]),i("separator-item",{staticStyle:{background:"#ddd"},attrs:{height:100,"min-height":100}},[t._v("\n          BOTTOM\n          "),i("p",[t._v("height:100px")]),i("p",[t._v("min-height:100px")])])],1)],1),i("separator-item",{staticStyle:{background:"#ddd"},attrs:{width:200,"max-width":300}},[t._v("\n      RIGTH\n      "),i("p",[t._v("max-width:300px")])])],1)],1)},o=[],a=(i("7f7f"),i("ac6a"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"el-separator-line"},[i("div",{staticClass:"el-separator-line_icon",on:{mousedown:t.handleMouseDown}})])}),s=[],l=(i("6b54"),i("7091")),u=i.n(l),c=i("6bde"),d=(i("a481"),i("c5f6"),n["a"].prototype.$isServer),h=/([\\:\-\\_]+(.))/g,p=/^moz([A-Z])/,f=d?0:Number(document.documentMode),m=function(t){return t.replace(h,function(t,e,i,n){return n?i.toUpperCase():i}).replace(p,"Moz$1")},v=f<9?function(t,e){if(!d){if(!t||!e)return null;e=m(e),"float"===e&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(i){return t.style[e]}}}:function(t,e){if(!d){if(!t||!e)return null;e=m(e),"float"===e&&(e="cssFloat");try{var i=document.defaultView.getComputedStyle(t,"");return t.style[e]||i?i[e]:null}catch(i){return t.style[e]}}},_=function t(e,i,n){if(e&&i)if("object"===Object(c["a"])(i))for(var r in i)i.hasOwnProperty(r)&&t(e,r,i[r]);else i=m(i),"opacity"===i&&f<9?e.style.filter=isNaN(n)?"":"alpha(opacity="+100*n+")":e.style[i]=n},g={name:"SeparatorLine",inject:["rootSeparator"],methods:{handleMouseDown:function(t){t.preventDefault(),t.stopPropagation();var e=this.$el;this.last={left:t.clientX,top:t.clientY},this.totalWidth=e.previousElementSibling.offsetWidth+e.nextElementSibling.offsetWidth,this.totalHeight=e.previousElementSibling.offsetHeight+e.nextElementSibling.offsetHeight,window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseMove:function(t){var e,i,n,r,o,a,s,l,c,d,h=this.$el,p=this.last,f=this.totalWidth,m=this.totalHeight,g=t.clientX,w=t.clientY,y="horizontal"===this.rootSeparator.direction,x=y?f:m;e=h.previousElementSibling,i=y?e.offsetWidth+(g-p.left):e.offsetHeight+(w-p.top),n=this.parseInt(v(e,y?"maxWidth":"maxHeight")),r=this.parseInt(v(e,y?"minWidth":"minHeight")),o={flexGrow:"0"},i<r&&(i=r),a=h.nextElementSibling,s=x-i,l=this.parseInt(v(a,y?"maxWidth":"maxHeight")),c=this.parseInt(v(a,y?"minWidth":"minHeight")),d={flexGrow:"0"},s<c&&(i=x-c,s=c),n?(i=Math.min(i,n),s=x-i,u()(d,y?{maxWidth:"auto"}:{maxHeight:"auto"})):l&&(s=Math.min(s,l),i=x-s,u()(o,y?{maxWidth:"auto"}:{maxHeight:"auto"})),_(e,u()({},o,{flexBasis:i+"px"})),_(a,u()({},d,{flexBasis:s+"px"})),u()(this.last,{left:g,top:w})},handleMouseUp:function(t){window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("mouseup",this.handleMouseUp)},parseInt:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){return"none"===t||"auto"===t?null:parseInt(t)})}},w=g,y=i("2877"),x=Object(y["a"])(w,a,s,!1,null,null,null);x.options.__file="separator-line.vue";var b,S,z=x.exports,E={name:"Separator",components:{SeparatorLine:z},props:{direction:{type:String,default:"horizontal",validator:function(t){return["horizontal","vertical"].indexOf(t)>=0}}},provide:function(){return{rootSeparator:this}},render:function(t){for(var e=this.direction,i=this.$slots.default,n=[],r=t(z,{attrs:{direction:e}}),o=0;o<i.length;o++){var a=i[o];a.componentOptions&&"SeparatorItem"===a.componentOptions.Ctor.extendOptions.componentName&&(0!==o&&n.push(r),n.push(a))}return t("div",{class:{"el-separator":!0,horizontal:"horizontal"===e,vertical:"vertical"===e}},[n])}},L=E,M=(i("e939"),Object(y["a"])(L,b,S,!1,null,null,null));M.options.__file="separator.vue";var H=M.exports;H.install=function(t){t.component(H.name,H)};var O=H,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"el-separator-item",style:t.getStyle},[t._t("default")],2)},T=[],$=(i("28a5"),"undefined"===typeof window),k=function(){if(!$){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return window.setTimeout(t,20)};return function(e){return t(e)}}}(),C=function(){if(!$){var t=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.clearTimeout;return function(e){return t(e)}}}(),N=function(t){var e=t.__resizeTrigger__,i=e.firstElementChild,n=e.lastElementChild,r=i.firstElementChild;n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight,r.style.width=i.offsetWidth+1+"px",r.style.height=i.offsetHeight+1+"px",i.scrollLeft=i.scrollWidth,i.scrollTop=i.scrollHeight},j=function(t){return t.offsetWidth!==t.__resizeLast__.width||t.offsetHeight!==t.__resizeLast__.height},A=function(t){var e=this;N(this),this.__resizeRAF__&&C(this.__resizeRAF__),this.__resizeRAF__=k(function(){j(e)&&(e.__resizeLast__.width=e.offsetWidth,e.__resizeLast__.height=e.offsetHeight,e.__resizeListeners__.forEach(function(i){i.call(e,t)}))})},I=$?{}:document.attachEvent,F="Webkit Moz O ms".split(" "),D="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),P="resizeanim",R=!1,B="",G="animationstart";if(!I&&!$){var U=document.createElement("fakeelement");if(void 0!==U.style.animationName&&(R=!0),!1===R)for(var q="",V=0;V<F.length;V++)if(void 0!==U.style[F[V]+"AnimationName"]){q=F[V],B="-"+q.toLowerCase()+"-",G=D[V],R=!0;break}}var J=!1,X=function(){if(!J&&!$){var t="@".concat(B,"keyframes ").concat(P," { from { opacity: 0 } to { opacity: 0 } } "),e="".concat(B,"animation: 1ms ").concat(P),i="".concat(t,"\n      .resize-triggers { ").concat(e,' visibility: hidden opacity: 0 }\n      .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " " display: block position: absolute top: 0 left: 0 height: 100% width: 100% overflow: hidden }\n      .resize-triggers > div { background: #eee overflow: auto }\n      .contract-trigger:before { width: 200% height: 200% }'),n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",r.styleSheet?r.styleSheet.cssText=i:r.appendChild(document.createTextNode(i)),n.appendChild(r),J=!0}},Y=function(t,e){if(!$)if(I)t.attachEvent("onresize",e);else{if(!t.__resizeTrigger__){"static"===getComputedStyle(t).position&&(t.style.position="relative"),X(),t.__resizeLast__={},t.__resizeListeners__=[];var i=t.__resizeTrigger__=document.createElement("div");i.className="resize-triggers",i.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',t.appendChild(i),N(t),t.addEventListener("scroll",A,!0),G&&i.addEventListener(G,function(e){e.animationName===P&&N(t)})}t.__resizeListeners__.push(e)}},Z=function(t,e){I?t.detachEvent("onresize",e):(t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e),1),t.__resizeListeners__.length||(t.removeEventListener("scroll",A),t.__resizeTrigger__=!t.removeChild(t.__resizeTrigger__)))},K={name:"SeparatorItem",componentName:"SeparatorItem",inject:["rootSeparator"],props:{width:{type:[String,Number],default:"auto",validator:function(t){return/^\d+\.?\d{0,2}%$|\d+$|\d+px$|auto$/.test(t)}},height:{type:[String,Number],default:"auto",validator:function(t){return/^\d+\.?\d{0,2}%|\d+|\d+px$|auto$/.test(t)}},maxWidth:Number,minWidth:{type:Number,default:34},maxHeight:Number,minHeight:{type:Number,default:34}},computed:{getStyle:function(){var t="horizontal"===this.rootSeparator.direction,e=this.width,i=this.height,n=this.minWidth,r=this.minHeight,o=this.maxWidth,a=this.maxHeight,s={};return t?(s.height="100%","auto"===e?s.flexGrow=1:s.flexBasis="number"===typeof e?e+"px":e,o&&(s.maxWidth=o+"px"),n&&(s.minWidth=n+"px")):(s.width="100%","auto"===i?s.flexGrow=1:s.flexBasis="number"===typeof i?i+"px":i,a&&(s.maxHeight=a+"px"),r&&(s.minHeight=r+"px")),s}},methods:{handleResize:function(t){this.$emit("resize",t)}},mounted:function(){Y(this.$el,this.handleResize)},destroyed:function(){Z(this.$el,this.handleResize)}},Q=K,tt=Object(y["a"])(Q,W,T,!1,null,null,null);tt.options.__file="separator-item.vue";var et=tt.exports;et.install=function(t){t.component(et.name,et)};var it=et,nt=[O,it],rt=function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];nt.forEach(function(e){t.component(e.name,e)})};"undefined"!==typeof window&&window.Vue&&rt(window.Vue);nt.reduce(function(t,e){return t[e.name]=e,t});var ot={name:"app",components:{Separator:O,SeparatorItem:it}},at=ot,st=(i("09fa"),Object(y["a"])(at,r,o,!1,null,null,null));st.options.__file="App.vue";var lt=st.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(lt)}}).$mount("#app")},e939:function(t,e,i){"use strict";var n=i("f33c"),r=i.n(n);r.a},f33c:function(t,e,i){}});