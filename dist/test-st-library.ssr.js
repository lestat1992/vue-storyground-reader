'use strict';var vue=require('vue');function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}var webfontloader = createCommonjsModule(function (module) {
/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return +new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document;}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild);}function v(a){a.parentNode&&a.parentNode.removeChild(a);}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e]);}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e]);}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"");}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return !0;return !1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null);}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d();},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d();}):setTimeout(function(){e=!0;d();},0);u(a,"head",b);}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f));};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")));},d||5E3);return f}return null}function B(){this.a=0;this.c=null;}function C(a){a.a++;return function(){a.a--;D(a);}}function E(a,b){a.c=b;D(a);}function D(a){0==a.a&&a.c&&(a.c(),a.c=null);}function F(a){this.a=a||"-";}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10));}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d);}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b}function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes;}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading");}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d);}K(a,"inactive");}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]();}function ja(){this.c={};}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c));}return d}function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f);}function N(a){u(a.c,"body",a.a);}function O(a){return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")}function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0;}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25);},function(){e();});}f();}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f);});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a);},function(){b.j(b.a);});};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m);}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10));}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this);};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return !0;return !1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v);}function ma(a){setTimeout(p(function(){U(this);},a),50);}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a);},a),0);}function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c;}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this);};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e);}K(b,"fontinactive",a);na(this);};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a));}function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0;}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a);};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else {b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0;}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r);}for(h=0;h<l.length;h++)l[h].start();}},0);}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c);});}function ra(a,b){this.c=a;this.a=b;}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k));}a(e);}else setTimeout(function(){b();},50);}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b());}).id="__MonotypeAPIScript__"+d;}else a([]);};function sa(a,b){this.c=a;this.a=b;}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f);});};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||"";}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f));}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b}function ya(a){this.f=a;this.a=[];this.c={};}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else {k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("");}}else k="";k&&g.push(k);}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d));}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]));}}function Ea(a,b){this.c=a;this.a=b;}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa);});};function Ga(a,b){this.c=a;this.a=b;}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0});}catch(l){}a(e);}},2E3):a([]);};function Ha(a,b){this.c=a;this.f=b;this.a=[];}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)));}a(d.a);},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([]);})):a([]);};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)};module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());
});

var WebFont = webfontloader;var wrongTabsId = {
	en: "wrong tabs id",
	it: "id tabs sbagliato"
};
var noData = {
	en: "No data appears to be present at the moment",
	it: "Al momento non sembra essere presente alcun dato"
};
var noStart = {
	en: "A node has not been selected to start the story from",
	it: "Non è stato selezionato un nodo da cui iniziare la storia"
};
var noEnd = {
	en: "an end node has not been inserted",
	it: "non è stato inserito un nodo finale"
};
var nodeBadMix = {
	it: "La lista di nodi risultanti non è corretta (id nodi da scollegare:",
	en: "the resulting list of nodes is incorrect (id nodes to be disconnected:"
};
var expressionIncoplete = {
	it: "l'espressione usata è incopleta",
	en: "the expression used is incomplete"
};
var linkNodeEmpty = {
	it: "Il nodo link è vuoto",
	en: "The link node is empty"
};
var redirectError = {
	it: "Non sono stati specificati alcuni nodi di destinazione",
	en: "Some target nodes were not specified"
};
var urlRedirect = {
	it: "Reindirizzamento a",
	en: "Redirect to"
};
var defaultStrings = {
	wrongTabsId: wrongTabsId,
	noData: noData,
	noStart: noStart,
	noEnd: noEnd,
	nodeBadMix: nodeBadMix,
	expressionIncoplete: expressionIncoplete,
	linkNodeEmpty: linkNodeEmpty,
	redirectError: redirectError,
	urlRedirect: urlRedirect
};var postInfo = {
	title: "John",
	lenghtDescriptionsNode: 600,
	lenghtChoseNode: 1000,
	selectedWorkSpace: 1,
	langList: [
		"en"
	],
	selectedExample: false,
	templateSelected: "White"
};
var erorList = {
	noStart: false
};
var MaxId = 250;
var levels = [
];
var achievements = [
];
var items = [
];
var stats = [
	{
		id: 63,
		name: {
			en: "THE CLUB"
		},
		max: 1,
		slug: "THE CLUB",
		active: true
	},
	{
		id: 73,
		name: {
			en: "sign"
		},
		max: 1,
		slug: "sign",
		active: true
	},
	{
		id: 100,
		name: {
			en: "slingshot"
		},
		max: 1,
		slug: "slingshot",
		active: true
	},
	{
		id: 101,
		name: {
			en: "invisibility cape"
		},
		max: 1,
		slug: "invisibility cape",
		active: true
	},
	{
		id: 102,
		name: {
			en: "follower"
		},
		max: 1,
		slug: "follower",
		active: true
	},
	{
		id: 170,
		name: {
			en: "HP"
		},
		max: 3,
		slug: "HP",
		active: true
	}
];
var story = {
	tabs: [
		{
			id: 1,
			humanName: {
				"default": "start"
			},
			level: 0,
			name: "Maximilian the Magical Knight",
			type: "start",
			gameStart: true,
			levelStart: true,
			x: 342,
			y: 9
		},
		{
			id: 2,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions0",
			text: {
				en: "Maximilian, the Magical Knight, stretched his back and loudly yawned, scratching his butt clad in his heart-patterned boxers. He reached for his coffee mug that said “World's #1 Magical Knight” (that he had bought himself) and poured himself some of the dark liquid.\rAfter that he:"
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 344,
			y: 121
		},
		{
			id: 4,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose0",
			text: {
				en: "Decided it was not worth adventuring that day and went back to sleep"
			},
			type: "chose",
			textRevision: false,
			x: 233,
			y: 257
		},
		{
			id: 6,
			humanName: {
				"default": "game over"
			},
			level: 0,
			name: "game over0",
			type: "game over",
			text: {
				en: "He shrugged, realised somebody else would take care of his knightly duties, and climbed back onto his bed, hugging his stuffed knight. Your adventure ends here."
			},
			img: false,
			textRevision: false,
			x: 231,
			y: 340
		},
		{
			id: 8,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose1",
			text: {
				en: "Reached for the newspaper"
			},
			type: "chose",
			textRevision: false,
			x: 433,
			y: 257
		},
		{
			id: 10,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions1",
			text: {
				en: "He leafed through “Ye Magicale Newspapere (nowe withe extra Es!)” and found what he was looking for: the jobs listings. Being a magical knight was usually very profitable, but sometimes he found himself struggling lightly, so he had to get a one off job, usually escorting some nobles or slaying a mighty beast. His attention was caught by two offers:\r"
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 435,
			y: 340
		},
		{
			id: 12,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose2",
			text: {
				en: "MAGICAL KNIGHT WANTED: WE ARE IN NEED OF A STRONG MAGICAL KNIGHT THAT CAN RID US OF THE EVIL SORCERER GREB-HAN, WHO HAUNTS OUR VILLAGE"
			},
			type: "chose",
			textRevision: false,
			x: 335,
			y: 481
		},
		{
			id: 13,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose3",
			text: {
				en: "EVIL CORPORATION INC. IS LOOKING FOR A YOUNG, DYNAMIC RESOURCE TO JOIN OUR FAMILY-LIKE TEAM! WE ARE SEARCHING FOR A PRO-ACTIVE YOUNG MAN OR WOMAN WHO'S WILLING TO BE A TEAMPLAYER FOR THE COMPANY (DID WE MENTION THAT IT'S LIKE A FAMILY?) FOR A FULL TIME POSITION! SALARY: UNPAID INTERNSHIP"
			},
			type: "chose",
			textRevision: false,
			x: 544,
			y: 483
		},
		{
			id: 16,
			humanName: {
				"default": "game over"
			},
			level: 0,
			name: "game over1",
			type: "game over",
			text: {
				en: "With the eagerness of somebody who has never been scammed in their life before, Maximilian clicked on the link and applied for the job, even though he wasn't seeing the ad on a computer; such was his wonder at this offer. To this day, he's still working there as an unpaid intern. Your adventure ends here."
			},
			img: false,
			textRevision: false,
			x: 546,
			y: 589
		},
		{
			id: 18,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions2",
			text: {
				en: "Sensing that an offer aimed at magical knight would be suitable for a magical knight like himself (as he was, in fact, a magical knight), Maximilian called the number listed on it on his trusty magical phone."
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 334,
			y: 590
		},
		{
			id: 20,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions3",
			text: {
				en: "The woman on the other end of the line gave him an approximate idea of her village's location and in a few minutes he donned his magical armor and was ready to depart.\rHe mounted his trusty mare, Raila, and headed East, where the village was located. "
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 333,
			y: 728
		},
		{
			id: 23,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions4",
			text: {
				en: "After a few minutes he noticed a cave adorned with crushed skulls of all shapes and sizes. He immediately recognised the cave as a den of bonkers, a completely insane subspecies of goblins who vanquished their enemies by hitting them on the head with wooden clubs wielded with inhuman strength. He:"
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 548,
			y: 732
		},
		{
			id: 25,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose4",
			text: {
				en: "Decided to enter the cave"
			},
			type: "chose",
			textRevision: false,
			x: 330,
			y: 878
		},
		{
			id: 26,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose5",
			text: {
				en: "Left the cave alone"
			},
			type: "chose",
			textRevision: false,
			x: 547,
			y: 877
		},
		{
			id: 27,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose6",
			text: {
				en: "Put up a sign to warn less experienced adventurers"
			},
			type: "chose",
			textRevision: false,
			x: 759,
			y: 878
		},
		{
			id: 31,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions5",
			text: {
				en: "Maximilian decided that he couldn't bear the thought of all those goblins going unslayed, so he dismounted his horse and approached the entrance of the bonkers den...\rIn the dim light of the cave, he could sometimes hear the noise of skulls getting shattered, the main form of entertainment of the bonkers."
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 83,
			y: 981
		},
		{
			id: 33,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions6",
			text: {
				en: "He would show them: he would destroy them all with his magical sword, denying them the glorious end every bonker wishes for (getting bonked on the head while trying to bonk some other creature). Bonked helmets of long-gone warriors cluttered the floor, as Maximilian reached the main chamber of the cave and saw three bonkers engaged in their favourite activity. He:"
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 310,
			y: 980
		},
		{
			id: 35,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions7",
			text: {
				en: "Knowing full well the horrors of a full pack of bonkers, Maximilian decided that his quest was more important than a few mad goblins and steered clear of the cave\r"
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 535,
			y: 979
		},
		{
			id: 37,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions8",
			text: {
				en: "Knowing full well the horrors of a full pack of bonkers, Maximilian nonetheless realised that not all adventurers were as familiar with them as he was, so he decided to warn them by hanging up a sign that said “DON'T BONKERS OPEN INSIDE”, referencing a popular TV show he liked."
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 751,
			y: 976
		},
		{
			id: 39,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose7",
			text: {
				en: "Confronted them head on"
			},
			type: "chose",
			textRevision: false,
			x: 91,
			y: 1149
		},
		{
			id: 41,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose8",
			text: {
				en: "Sneaked past them"
			},
			type: "chose",
			textRevision: false,
			x: 313,
			y: 1148
		},
		{
			id: 43,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions9",
			text: {
				en: "Enraged by the savagery of the head-obsessed creatures, Maximilian let out a powerful “cowaBONKa!” as he descended on the three unsuspecting monsters and managed to cut two down before the third had time to react. The third being raised its club, and in response Maximilian:"
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 37,
			y: 1249
		},
		{
			id: 45,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose9",
			text: {
				en: "Tried to parry the blow"
			},
			type: "chose",
			textRevision: false,
			x: 18,
			y: 1391
		},
		{
			id: 47,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose10",
			text: {
				en: "Tried to cast a defensive spell"
			},
			type: "chose",
			textRevision: false,
			x: 231,
			y: 1390
		},
		{
			id: 49,
			humanName: {
				"default": "game over"
			},
			level: 0,
			name: "game over2",
			type: "game over",
			text: {
				en: "Maximilian instinctively raised his sword to parry the bludgeon, but that week the bonker had been training extra hard at the gym, so the hit still went through. Maximilian fell, the last words he heard “ONKA BONKA!” as his adventure was ended prematurely by the creature's +5 wooden club.\r"
			},
			img: false,
			textRevision: false,
			x: 7,
			y: 1479
		},
		{
			id: 51,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions10",
			text: {
				en: "In a moment he quickly muttered the magic words and, before the club hit his helmeted noggin, the spell of unbonkability was active and the monster's weapon simply missed its mark. “Don't you know that diamond is unbonkable?”, he quipped, and the creature was vanquished by the sheer stupidity of the one-liner before Maximilian had the chance to finish it himself. "
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 226,
			y: 1475
		},
		{
			id: 53,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions11",
			text: {
				en: "Maximilian took a moment to recover and thought with some pride that his nerdy schoolmates had said a spell of unbonkability was a stupid idea. “Who's the stupid now, Steve?” he thought as he recognised his former's schoolmate's helmet among the monsters' loot, thouroughly bonked."
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 435,
			y: 1400
		},
		{
			id: 55,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions12",
			text: {
				en: "Being cautious of their bonkable prowess, Maximilian thought the best course of action would be to sneak past the monsters, and he reached what years of playing online videogames taught him to be the treasure room. "
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 316,
			y: 1237
		},
		{
			id: 57,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions13",
			text: {
				en: "In a large chest he found the bonkers' most prized possession: THE CLUB, spelt in all caps. THE CLUB, a truly legendary instrument of bonkage, would certainly aid him in his fight against the evil sorcerer. “Ah yes, truly one of the clubs ever wielded”, he reflected.\r"
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 648,
			y: 1404
		},
		{
			id: 60,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions14",
			text: {
				en: "Maximilian kept heading towards Greb-Han's fortress, as he started smelling a really unusual smell coming from a nearby building. It seemed out of place in his fantasy world, as the door had a very cyberpunk feeling to it. \rMaximilian:"
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 905,
			y: 1237
		},
		{
			id: 62,
			humanName: {
				"default": "set variable"
			},
			level: 0,
			type: "set stat",
			idStat: 63,
			operator: "+",
			ammount: 1,
			x: 557,
			y: 1232,
			name: "set stat0"
		},
		{
			id: 66,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose11",
			text: {
				en: "Entered the building"
			},
			type: "chose",
			textRevision: false,
			x: 871,
			y: 1388
		},
		{
			id: 69,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions15",
			text: {
				en: "Immediately after entering the strange building, he got a tutorial notification from his magical helmet explaining to him what lurked inside the cave. “Crap, I thought I disabled those”, he muttered, as the message informed him that the cave dwellers were skeletrons. He immediately assumed the message had a typo in it, but it was actually the monsters' name. Skeletrons were born out of a fantasy author making a spelling mistake while writing his novel. "
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 869,
			y: 1473
		},
		{
			id: 71,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions16",
			text: {
				en: "The added R in their name would prove fruitful, though, as it would change the nature of the skeletons and give them the abilities and features of robots.\rThe neon lights made the building very hard to get lost into, and it wasn't very intricate anyway, but standing between Maximilian and what seemed to be a treasure chest was a gigantic skeletron. It looked like a human skeleton, but it was made of metal and its eye sockets were filled with a strange, seemingly artificial glow. Maximilian:"
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 433,
			y: 1533
		},
		{
			id: 78,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose12",
			text: {
				en: "Approached the titan"
			},
			type: "chose",
			textRevision: false,
			x: 22,
			y: 1628
		},
		{
			id: 79,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose13",
			text: {
				en: "Circled around the titan"
			},
			type: "chose",
			textRevision: false,
			x: 228,
			y: 1628
		},
		{
			id: 82,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions17",
			text: {
				en: "The robot didn't seem to be active, but Maximilian was suspicious. He approached it and:\r"
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 22,
			y: 1717
		},
		{
			id: 84,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose14",
			text: {
				en: "Gave the building a wide berth"
			},
			type: "chose",
			textRevision: false,
			x: 1099,
			y: 1394
		},
		{
			id: 86,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions18",
			text: {
				en: "Maximilian was largely suspicious of this out of place location and its curious smell of brand new car, so he thought his best bet would be to leave the dungeon be and didn't even bother considering a sign, this time. "
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 1087,
			y: 1476
		},
		{
			id: 88,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose15",
			text: {
				en: "Talked to it"
			},
			type: "chose",
			textRevision: false,
			x: 20,
			y: 1861
		},
		{
			id: 89,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose16",
			text: {
				en: "Hit it as hard as he could with his sword"
			},
			type: "chose",
			textRevision: false,
			x: 242,
			y: 1801
		},
		{
			id: 92,
			humanName: {
				"default": "game over"
			},
			level: 0,
			name: "game over3",
			type: "game over",
			text: {
				en: "Noticing the creature's gargantuan size, Maximilian decided ignoring it would be wiser than fighting it. It didn't seem to be active anyway. As soon as he started opening the chest and turned away from it, though, the giant swung at him, said “-PLAYER NAME-:YOUR ADVENTURE ENDS HERE” and sent Maximilian back to the beginning of the game. Your adventure ends here, but you probably figured that out already."
			},
			img: false,
			textRevision: false,
			x: 235,
			y: 1723
		},
		{
			id: 94,
			humanName: {
				"default": "game over"
			},
			level: 0,
			name: "game over4",
			type: "game over",
			text: {
				en: "Maximilian readied his mighty sword, swung at the robot with all his might and the blade simply bounced off. The skeletron picked him up effortlessly, yelled “-PLAYER NAME-:YOUR ADVENTURE ENDS HERE” and sent Maximilian back to the beginning of the game. Your adventure ends here.\r"
			},
			img: false,
			textRevision: false,
			x: 241,
			y: 1885
		},
		{
			id: 96,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions19",
			text: {
				en: "Sensing that the construct was probably aware, and simply waiting for him to do something first, Maximilian started talking to it. The towering creature asked: “WHAT ARE YOUR ORDERS?”"
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 25,
			y: 1947
		},
		{
			id: 98,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions20",
			text: {
				en: "Maximilian, eyeing the treasure chest while drooling slightly at the prospect of a powerful item, responded:\r“Allow me to loot the building”. \r“AS YOU ORDER”, replied the skeletron, and left Maximilian free to do what he wanted to.\nMaximilian opened the chest while the skeletron kept watching over the entrance, and inside found a slingshot and some ammo for it.\n“Did I just risk getting bodied by a giant robot skeleton for this!?” he thought, cursing the fact he was just a character in a story."
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 238,
			y: 1966
		},
		{
			id: 103,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions21",
			text: {
				en: "The village was getting closer and closer and Maximilian was starting to sense Greb-Han's presence in the surrounding area. Before meeting the sorcerer, however, he decided he needed to explore the area in case some servant of his enemy was lurking around. "
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 685,
			y: 1629
		},
		{
			id: 105,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions22",
			text: {
				en: "He saw a small, isolated hut which was clearly inhabited by somebody who was up to something, so he approached the tiny house. He knocked on the door, and an old lady welcomed him. She seemed innocent enough, so Maximilian wasn't sure whether he should trust his instincts. \rThe lady invited him for a drink and he accepted. She presented him with a chalice containing a bubbling liquid, and Maximilian:"
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 447,
			y: 1813
		},
		{
			id: 107,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose17",
			text: {
				en: "Downed the beverage"
			},
			type: "chose",
			textRevision: false,
			x: 446,
			y: 1955
		},
		{
			id: 109,
			humanName: {
				"default": "game over"
			},
			level: 0,
			name: "game over5",
			type: "game over",
			text: {
				en: "Thirst was too much of a burden for the weary magical knight, so Maximilian gulped down the content of the chalice in a moment. Unfortunately, letting his guard down would prove his undoing, as the malicious old lady had filled the liquid with a powerful laxative, so Maximilian had to spend the rest of his adventure using the restroom. Your adventure ends here"
			},
			img: false,
			textRevision: false,
			x: 446,
			y: 2043
		},
		{
			id: 111,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose18",
			text: {
				en: "Exerted caution"
			},
			type: "chose",
			textRevision: false,
			x: 659,
			y: 1958
		},
		{
			id: 113,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions23",
			text: {
				en: "Maximilian had read too many comic books to trust an apparently innocent old lady offering him a steaming hot liquid, so he knew what to do: he waited for the old woman to turn around and then emptied the content of his cup in a nearby houseplant. He tried not to think too hard about the fact it immediately withered and confronted the old lady.\r"
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 666,
			y: 2046
		},
		{
			id: 115,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions24",
			text: {
				en: "She admitted to being a servant of Greb-Han's, but didn't hide her distaste for that man, as indicated by her words: “I don't hide my distaste for that man”. “She doesn't hide her distaste for that man”, Maximilian noticed thoughtfully. She then offered her help if Maximilian would forgive her for her action. Maximilian had to make a choice:"
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 232,
			y: 2161
		},
		{
			id: 117,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose19",
			text: {
				en: "He would forgive her. She had only tried to poison him, after all"
			},
			type: "chose",
			textRevision: false,
			x: 63,
			y: 2303
		},
		{
			id: 118,
			humanName: {
				"default": "choice"
			},
			level: 0,
			name: "chose20",
			text: {
				en: "He would leave her alone, but wouldn't accept her help"
			},
			type: "chose",
			textRevision: false,
			x: 286,
			y: 2304
		},
		{
			id: 121,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions25",
			text: {
				en: "Well, what the heck! The old lady had only poisoned him, he was used to much worse pranks at the magical knight academy. He agreed to forgive the lady, who thanked him and handed him what looked like a an old cape. Maximilian cast a spell of detection on it and immediately understood that it was enchanted so to make the wearer invisible temporarily. He reached the village."
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 61,
			y: 2401
		},
		{
			id: 123,
			humanName: {
				"default": "set variable"
			},
			level: 0,
			type: "set stat",
			idStat: 101,
			operator: "+",
			ammount: 1,
			x: 61,
			y: 2546,
			name: "set stat1"
		},
		{
			id: 125,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions26",
			text: {
				en: "Offended by the old lady's attempt at thwarting his mission, Maximilian spat on the floor and refused to be helped by her, knowing too well that she may be trying to trick him. He left the tiny hut without turning back and headed towards the nearby village.\r"
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 286,
			y: 2398
		},
		{
			id: 127,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions27",
			text: {
				en: "At the village, Maximilian saw a few people gathering in the town square, and as he got closer, the people started cheering for him and celebrating the arrival of the magical knight. \rAs his heart was filled with pride, Maximilian asked them to tell him all they could about the evil Greb-Han. \rThe same woman he had spoken to welcomed him in her house and explained the lore of Greb-Han. The sorcerer had taken residence in an ancient castle not too far from the village, and he had cast a very powerful spell that prevented them all from leaving, sort of like a barrier."
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 283,
			y: 2550
		},
		{
			id: 130,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions28",
			text: {
				en: "Unfortunately, now that Maximilian was inside the village, he was also stuck in the village until Greb-Han was defeated. He liked to terrorise the villagers by taking away their supplies and what few gold coins they had and occasionally got from other people who unknowingly entered the barrier.\rMax cracked his knuckles, cracked his neck, cracked every other crackable bone he had and got ready to fight."
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 283,
			y: 2683
		},
		{
			id: 132,
			humanName: {
				"default": "if stat"
			},
			level: 0,
			type: "if stat",
			idStat: 73,
			operator: ">=",
			ammount: 1,
			trueId: [
				134
			],
			falseId: [
				136
			],
			x: 283,
			y: 2823,
			name: "if stat0"
		},
		{
			id: 134,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions29",
			text: {
				en: "Before leaving for the castle, which was conveniently placed inside the barrier so that Greb-Han had a way to reach the people to exact his tribute, Maximilian met a young girl, dressed in what looked like a slightly less advanced armor than his, but magical and powerful nonetheless.\rShe approached Maximilian and explained that she had found herself here during her travels, and that she was mercifully saved from a pack of bonkers by a sign somebody had put outside their den. She was deathly afraid of bonkers, so fighting them would have proven too much for her."
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 62,
			y: 2942
		},
		{
			id: 136,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions30",
			text: {
				en: "Maximilian reached the castle, cracked his gauntleted knuckles again and prepared to enter. He was soon greeted by the sorcerer, who stood at a high balcony and taunted him saying that he would have to face his gauntlet before being able to lay a finger on him. Maximilian looked at his armored glove, confused, Greb-Han sighed and disappeared in the depths of the castle.\rMaximilian found himself in a room with three doors, one of which was unlocked. As he opened it, he was teleported in a strange arena with an armored figure more than twice his size, with a blue armor and a bright red helmet.\r"
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 409,
			y: 2927
		},
		{
			id: 140,
			humanName: {
				"default": "set variable"
			},
			level: 0,
			type: "set stat",
			idStat: 73,
			operator: "+",
			ammount: 1,
			x: 901,
			y: 1114,
			name: "set stat2"
		},
		{
			id: 145,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions31",
			text: {
				en: "Remembering the absolute power of the bonkers, Maximilian channelled their bonkness in the mythical artefact he had found in their lair: THE CLUB (in all caps). He leaped in the air, despite his heavy armor, and delivered an immensely powerful bonking to the giant, who just disappeared in a white mist. Max beat his chest like a crazed gorilla and was teleported back to the room with the three doors. The second one was now open."
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 97,
			y: 3267
		},
		{
			id: 155,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions33",
			text: {
				en: "Maximilian cursed in a kid-friendly way and got ready to fight against this behemoth. He was an incredibly skilled swordsman, and had he had a strong weapon capable of bonking the creature, he would have been victorious pretty easily. Luckily, though, the young nameless girl from the village who had survived the bonkers thanks to his indirect intervention was there to assist. She distracted the monster long enough for Maximilian to defeat it, though in doing so she suffered some wounds. She was ok, but wouldn't be able to assist with further trials."
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 337,
			y: 3281
		},
		{
			id: 157,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions34",
			text: {
				en: "Maximilian entered the second room, and immediately found himself in a room with eyes painted on every wall. Creepiness aside, he knew this was probably another trial, so he advanced carefully. As soon as he entered the peripheral vision of one of the eyes, it shot an arrow towards him. He was quick enough to avoid it, but without magical assistance, it would be hard to reach the end of the room unscathed. On the other end of it was, he was sure of this, the way forward."
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 238,
			y: 3482
		},
		{
			id: 161,
			humanName: {
				"default": "set variable"
			},
			level: 0,
			type: "set stat",
			idStat: 100,
			operator: "+",
			ammount: 1,
			x: 14,
			y: 2105,
			name: "set stat4"
		},
		{
			id: 164,
			humanName: {
				"default": "if stat"
			},
			level: 0,
			type: "if stat",
			idStat: 101,
			operator: ">=",
			ammount: 1,
			trueId: [
				166
			],
			falseId: [
				167
			],
			x: 127,
			y: 3660,
			name: "if stat3"
		},
		{
			id: 166,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions35",
			text: {
				en: "He donned the cape of invisibility that the old lady had given him, knowing that if it was a trap, it couldn't possibly make this situation any worse. He took a timid step, ready to back off in case the cape proved to attract even more arrows or something, but to his surprise, the eyes seemed actually unable to see him when he was wearing it. Undisturbed by them, he reached the opposite side of the room and was once again teleported in the now familiar room with the three doors. The last one was open...\r"
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 74,
			y: 3808
		},
		{
			id: 167,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions36",
			text: {
				en: "Maximilian knew he was going to get hit at least a couple of times, so he meditated for a second, adjusted his breath and then broke into a mad dash waving his arms like a lunatic, hoping that by sheer luck the arrows would miss him. He arrived at the end of the room, but he did take one arrow to the knee, though the outdated reference to pop culture hurt much more than the wound. He was once again teleported in the now familiar room with the three doors. The last one was open..."
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 363,
			y: 3767
		},
		{
			id: 171,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions37",
			text: {
				en: "He entered the final door and was greeted by Greb-Han himself, grinning on top of a staircase, menacingly. “Welcome to the true test, magical dork!”, he taunted Maximilian, and chugged a potion whose label said “potion of infinite mana, keep away from children and wizards”. It said that in the sense that it spoke words... look, it's magic, ok? Anyway, Greb-Han started throwing fireball after fireball at the main character, who did his best to climb the staircase while dodging them.\r"
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 188,
			y: 3962
		},
		{
			id: 174,
			humanName: {
				"default": "if stat"
			},
			level: 0,
			type: "if stat",
			idStat: 100,
			operator: ">=",
			ammount: 1,
			trueId: [
				178
			],
			falseId: [
				176
			],
			x: 186,
			y: 4113,
			name: "if stat4"
		},
		{
			id: 176,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions38",
			text: {
				en: "Maximilian did his best to try and avoid the fireballs, but he was bound to be hit by some."
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 364,
			y: 4218
		},
		{
			id: 178,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions39",
			text: {
				en: "Channeling his inner spiky-haired yellow boy, Maximilian pulled out his non-magical slingshot which he thought would be useless and started shooting at the sorcerer.\r“Yo, dude, cut it out!”, the evil old man cried, as he was hit square in the forehead. Maximilian took advantage of his lapse in concentration to be upon him and knocked him out with one single punch. \rHe then convinced the sorcerer, under the threat of a big bonk, to leave the village alone."
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 54,
			y: 4227
		},
		{
			id: 216,
			humanName: {
				"default": "sentence",
				textImage: "sentence & image"
			},
			level: 0,
			name: "descriptions39",
			text: {
				en: "Maximilian cursed in a kid-friendly way and got ready to fight against this behemoth. He was an incredibly skilled swordsman, and had he had a strong weapon capable of bonking the creature, he would have been victorious pretty easily, but as it was, he had to rely on his magical sword alone. The giant was very capable as well, and before Maximilian was able to defeat him, he suffered a couple bruises. Still, when the opponent was vanquished and disappeared in a white mist as a result, the knight was back to the room with the three doors. The second one was now open\r"
			},
			type: "descriptions",
			img: false,
			textRevision: false,
			x: 583,
			y: 3300
		},
		{
			id: 219,
			humanName: {
				"default": "end"
			},
			level: 0,
			name: "end0",
			type: "end",
			text: {
				en: "Congratulations! You have completed Maximilian's story, the village is now free and he got payed. Everyone wins! Except Greb-Han, but he's evil, so it's fine."
			},
			img: false,
			textRevision: false,
			openNewPage: false,
			url: {
				en: ""
			},
			x: 127,
			y: 4655
		},
		{
			id: 222,
			humanName: {
				"default": "if variable"
			},
			level: 0,
			type: "if stat",
			idStat: 63,
			operator: ">=",
			ammount: 1,
			trueId: [
				145
			],
			falseId: [
				226
			],
			x: 222,
			y: 3137,
			name: "if stat3"
		},
		{
			id: 226,
			humanName: {
				"default": "if variable"
			},
			level: 0,
			type: "if stat",
			idStat: 102,
			operator: ">=",
			ammount: 1,
			trueId: [
				155
			],
			falseId: [
				216
			],
			x: 508,
			y: 3177,
			name: "if stat4"
		},
		{
			id: 232,
			humanName: {
				"default": "set variable"
			},
			level: 0,
			type: "set stat",
			idStat: 102,
			operator: "+",
			ammount: 1,
			x: 14,
			y: 3089,
			name: "set stat4"
		},
		{
			id: 235,
			humanName: {
				"default": "set variable"
			},
			level: 0,
			type: "set stat",
			idStat: 170,
			operator: "=",
			ammount: 3,
			x: 588,
			y: 97,
			name: "set stat5"
		},
		{
			id: 238,
			humanName: {
				"default": "set variable"
			},
			level: 0,
			type: "set stat",
			idStat: 170,
			operator: "-",
			ammount: 1,
			x: 479,
			y: 3453,
			name: "set stat6"
		},
		{
			id: 241,
			humanName: {
				"default": "set variable"
			},
			level: 0,
			type: "set stat",
			idStat: 170,
			operator: "-",
			ammount: 1,
			x: 493,
			y: 3918,
			name: "set stat7"
		},
		{
			id: 244,
			humanName: {
				"default": "set variable"
			},
			level: 0,
			type: "set stat",
			idStat: 170,
			operator: "-",
			ammount: 1,
			x: 341,
			y: 4369,
			name: "set stat8"
		},
		{
			id: 246,
			humanName: {
				"default": "if variable"
			},
			level: 0,
			type: "if stat",
			idStat: 170,
			operator: ">",
			ammount: 0,
			trueId: [
				219
			],
			falseId: [
				249
			],
			x: 323,
			y: 4493,
			name: "if stat5"
		},
		{
			id: 249,
			humanName: {
				"default": "game over"
			},
			level: 0,
			name: "game over6",
			type: "game over",
			text: {
				en: "Unfortunately, all the wounds Maximilian had suffered throughout the gauntlet proved to be too much, and he wasn't able to defeat Greb-Han... if only he had gathered some magical items, or at the very least a sidekick... your adventure ends here."
			},
			img: "",
			textRevision: false,
			x: 590,
			y: 4632
		}
	],
	beams: [
		{
			id: 5,
			from: 2,
			to: 4
		},
		{
			id: 7,
			from: 4,
			to: 6
		},
		{
			id: 9,
			from: 2,
			to: 8
		},
		{
			id: 11,
			from: 8,
			to: 10
		},
		{
			id: 14,
			from: 10,
			to: 12
		},
		{
			id: 15,
			from: 10,
			to: 13
		},
		{
			id: 17,
			from: 13,
			to: 16
		},
		{
			id: 19,
			from: 12,
			to: 18
		},
		{
			id: 21,
			from: 18,
			to: 20
		},
		{
			id: 24,
			from: 20,
			to: 23
		},
		{
			id: 28,
			from: 23,
			to: 25
		},
		{
			id: 29,
			from: 23,
			to: 26
		},
		{
			id: 30,
			from: 23,
			to: 27
		},
		{
			id: 32,
			from: 25,
			to: 31
		},
		{
			id: 34,
			from: 31,
			to: 33
		},
		{
			id: 36,
			from: 26,
			to: 35
		},
		{
			id: 38,
			from: 27,
			to: 37
		},
		{
			id: 40,
			from: 33,
			to: 39
		},
		{
			id: 42,
			from: 33,
			to: 41
		},
		{
			id: 44,
			from: 39,
			to: 43
		},
		{
			id: 46,
			from: 43,
			to: 45
		},
		{
			id: 48,
			from: 43,
			to: 47
		},
		{
			id: 50,
			from: 45,
			to: 49
		},
		{
			id: 52,
			from: 47,
			to: 51
		},
		{
			id: 54,
			from: 51,
			to: 53
		},
		{
			id: 56,
			from: 41,
			to: 55
		},
		{
			id: 58,
			from: 55,
			to: 57
		},
		{
			id: 59,
			from: 53,
			to: 57
		},
		{
			id: 61,
			from: 35,
			to: 60
		},
		{
			id: 64,
			from: 57,
			to: 62
		},
		{
			id: 65,
			from: 62,
			to: 60
		},
		{
			id: 67,
			from: 60,
			to: 66
		},
		{
			id: 70,
			from: 66,
			to: 69
		},
		{
			id: 72,
			from: 69,
			to: 71
		},
		{
			id: 80,
			from: 71,
			to: 78
		},
		{
			id: 81,
			from: 71,
			to: 79
		},
		{
			id: 83,
			from: 78,
			to: 82
		},
		{
			id: 85,
			from: 60,
			to: 84
		},
		{
			id: 87,
			from: 84,
			to: 86
		},
		{
			id: 90,
			from: 82,
			to: 88
		},
		{
			id: 91,
			from: 82,
			to: 89
		},
		{
			id: 93,
			from: 79,
			to: 92
		},
		{
			id: 95,
			from: 89,
			to: 94
		},
		{
			id: 97,
			from: 88,
			to: 96
		},
		{
			id: 99,
			from: 96,
			to: 98
		},
		{
			id: 106,
			from: 103,
			to: 105
		},
		{
			id: 108,
			from: 105,
			to: 107
		},
		{
			id: 110,
			from: 107,
			to: 109
		},
		{
			id: 112,
			from: 105,
			to: 111
		},
		{
			id: 114,
			from: 111,
			to: 113
		},
		{
			id: 116,
			from: 113,
			to: 115
		},
		{
			id: 119,
			from: 115,
			to: 117
		},
		{
			id: 120,
			from: 115,
			to: 118
		},
		{
			id: 122,
			from: 117,
			to: 121
		},
		{
			id: 124,
			from: 121,
			to: 123
		},
		{
			id: 126,
			from: 118,
			to: 125
		},
		{
			id: 128,
			from: 123,
			to: 127
		},
		{
			id: 129,
			from: 125,
			to: 127
		},
		{
			id: 131,
			from: 127,
			to: 130
		},
		{
			id: 133,
			from: 130,
			to: 132
		},
		{
			id: 135,
			from: 132,
			to: 134,
			use: "if"
		},
		{
			id: 137,
			from: 132,
			to: 136,
			use: "else"
		},
		{
			id: 139,
			from: 86,
			to: 103
		},
		{
			id: 141,
			from: 37,
			to: 140
		},
		{
			id: 142,
			from: 140,
			to: 60
		},
		{
			id: 158,
			from: 145,
			to: 157
		},
		{
			id: 162,
			from: 98,
			to: 161
		},
		{
			id: 163,
			from: 161,
			to: 103
		},
		{
			id: 165,
			from: 157,
			to: 164
		},
		{
			id: 168,
			from: 164,
			to: 166,
			use: "if"
		},
		{
			id: 169,
			from: 164,
			to: 167,
			use: "else"
		},
		{
			id: 172,
			from: 166,
			to: 171
		},
		{
			id: 175,
			from: 171,
			to: 174
		},
		{
			id: 177,
			from: 174,
			to: 176,
			use: "else"
		},
		{
			id: 179,
			from: 174,
			to: 178,
			use: "if"
		},
		{
			id: 220,
			from: 178,
			to: 219
		},
		{
			id: 223,
			from: 136,
			to: 222
		},
		{
			id: 224,
			from: 222,
			to: 145,
			use: "if"
		},
		{
			id: 227,
			from: 222,
			to: 226,
			use: "else"
		},
		{
			id: 228,
			from: 155,
			to: 157
		},
		{
			id: 230,
			from: 226,
			to: 155,
			use: "if"
		},
		{
			id: 231,
			from: 226,
			to: 216,
			use: "else"
		},
		{
			id: 233,
			from: 134,
			to: 232
		},
		{
			id: 234,
			from: 232,
			to: 136
		},
		{
			id: 236,
			from: 1,
			to: 235
		},
		{
			id: 237,
			from: 235,
			to: 2
		},
		{
			id: 239,
			from: 216,
			to: 238
		},
		{
			id: 240,
			from: 238,
			to: 157
		},
		{
			id: 242,
			from: 167,
			to: 241
		},
		{
			id: 243,
			from: 241,
			to: 171
		},
		{
			id: 245,
			from: 176,
			to: 244
		},
		{
			id: 247,
			from: 244,
			to: 246
		},
		{
			id: 248,
			from: 246,
			to: 219,
			use: "if"
		},
		{
			id: 250,
			from: 246,
			to: 249,
			use: "else"
		}
	]
};
var style = {
	"font-family": "Montserrat",
	"font-weight": [
		100,
		200,
		300,
		400,
		500,
		600
	],
	"font-weight-selected": 500,
	"img-sizes": [
		{
			width: 800,
			height: 600
		},
		{
			width: 1200,
			height: 992
		},
		{
			width: 1920,
			height: 1080
		}
	],
	"bg-color": "#ffffff",
	"bg-type": "minimal2",
	color: "#282828",
	"icon-single-arrow": {
		type: "minimal2",
		size: "35px",
		color: "#282828"
	},
	"icon-multiple-arrow": {
		type: "minimal1",
		size: "12px",
		color: "#282828"
	},
	desktop: {
		"font-size-1": "20px",
		margin: "50px",
		"box-text-padding": "25px",
		"layout-type": "a1f8"
	},
	mobile: {
		"font-size-1": "18px",
		margin: "100px",
		"box-text-padding": "5vw",
		"layout-type": "a1f8"
	}
};
var defaultStory = {
	postInfo: postInfo,
	erorList: erorList,
	MaxId: MaxId,
	levels: levels,
	achievements: achievements,
	items: items,
	stats: stats,
	story: story,
	style: style
};var defaultIndexMedia = [
	{
		Id: 1315,
		name: "29695f55c408397b6eeb453fb59d40d9_img-1"
	}
];var boxIllustration = {
  name: "boxIllustration",
  props: {
    illustration: {},
    editorUsage: {},
    indexMedia: {},
    pathMediaDir: {},
    style: {},
    stylesObj: {}
  },
  methods: {},
  computed: {
    imgPathPart: function imgPathPart() {
      var _this = this;
      var name = this.indexMedia.find(function (el) {
        return el.Id == _this.illustration.ID;
      }).name;
      return this.pathMediaDir + "/" + name;
    },
    responsiveImages: function responsiveImages() {
      var _this2 = this;
      var data = {
        srcset: "",
        sizes: ""
      };
      this["style"]["img-sizes"].forEach(function (el, index) {
        data.srcset = data.srcset + _this2.imgPathPart + "-" + el.width + "x" + el.height + ".jpg " + el.width + "w";
        if (index + 1 != _this2["style"]["img-sizes"].length) {
          data.srcset = data.srcset + ",";
        }
        if (index + 1 != _this2["style"]["img-sizes"].length) {
          data.sizes = data.sizes + "( max-width:" + el.width + "px ) " + el.width + "px, ";
        } else {
          data.sizes = data.sizes + el.width + "px";
        }
      });
      return data;
    }
  }
};
var script$b = boxIllustration;var _hoisted_1$a = {
  class: "sg1-inner-box"
};
var _hoisted_2$a = ["src"];
var _hoisted_3$6 = ["src", "srcset", "sizes"];
function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: "sg1-box-illustration",
    style: vue.normalizeStyle(_ctx.stylesObj.boxIllustration)
  }, [vue.createElementVNode("div", _hoisted_1$a, [_ctx.editorUsage ? (vue.openBlock(), vue.createElementBlock("img", {
    key: 0,
    class: "sg1-box-img",
    src: _ctx.illustration.srcFull[0]
  }, null, 8, _hoisted_2$a)) : (vue.openBlock(), vue.createElementBlock("img", {
    key: 1,
    src: _ctx.imgPathPart + '-' + _ctx.style['img-sizes'][_ctx.style['img-sizes'].length - 1]['width'] + 'x' + _ctx.style['img-sizes'][_ctx.style['img-sizes'].length - 1]['height'] + '.jpg',
    srcset: _ctx.responsiveImages.srcset,
    sizes: _ctx.responsiveImages.sizes
  }, null, 8, _hoisted_3$6))])], 4);
}function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z$c = "\n.sg1-game-gridnot:not(.sg1-no-theme) .sg1-box-illustration {\r\n  grid-column-start: 2;\r\n  grid-column-end: 3;\r\n  grid-row-start: 2;\r\n  grid-row-end: 3;\n}\n.sg1-inner-box {\r\n  width: 100%;\r\n  height: 100%;\n}\n.sg1-inner-box img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  object-position: center;\r\n  display: block;\n}\r\n";
styleInject(css_248z$c);script$b.render = render$b;var nextTabSketch$1 = "\n<svg version=\"1.1\" id=\"Livello_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 100 100\" style=\"enable-background:new 0 0 100 100;\" xml:space=\"preserve\">\n<g>\n\t<path style=\"fill:#7F7F7F;\" d=\"M53.4,71.1c-1.1,1.3-1.9,2.3-2.6,3.3c-2.4,0-4.9,0.5-7.1-0.1c-2.8-0.8-4.6-3.2-4.4-6.3\n\t\tc0.1-2.6-1-4-3.1-5.2c-4.8-2.7-9.6-5.2-14.1-8.4c-4.4-3.1-8.3-6.8-12.4-10.2c-0.4-0.3-0.7-0.9-1.1-1c-3.8-0.4-5.4-3.6-7.5-6.1\n\t\tc-0.7-0.8-1.3-2.4-0.9-3c0.9-1.3,2.4-3,3.6-2.9c3.1,0.1,4.6-0.9,5.2-3.9c0.1-0.6,1-1.1,1.6-1.8c2.9,2.5,5.4,5.1,8.3,7\n\t\tc3.9,2.6,8.3,4.5,12.2,7c1.9,1.2,3.2,3.2,5.1,4.4c5.7,3.5,11.6,6.7,17.4,10c0.8,0.4,1.5,0.9,2.9,1.9c2.7-2.7,5.4-5.6,8.2-8.5\n\t\tc2.6-2.7,5.2-5.5,7.9-8.2c2.2-2.2,3.8-5,7.4-6c4.9-1.2,9.6-3.5,14.5-4.9c1.2-0.3,3.1,0.8,4.4,1.6c0.7,0.5,0.9,1.8,1.3,2.8\n\t\tc-0.9,0.2-2.2,0-2.8,0.6c-2.3,2-6.2,4.1-6.3,6.3c-0.1,6.7-4.5,9.9-8.8,13.2c-5,3.9-10.6,7.1-15.9,10.8C65,64.5,64,66,63.3,66.8\n\t\tc-2.9,2.4-5.5,4.5-8.2,6.7C54.5,72.7,54.1,72.1,53.4,71.1z\"/>\n</g>\n</svg>\n";
var nextTabSketch$2 = nextTabSketch$1;var nextTabMinimal1 = "\n<svg version=\"1.1\" id=\"Livello_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 100 100\" style=\"enable-background:new 0 0 100 100;\" xml:space=\"preserve\">\n<polygon style=\"fill:#7F7F7F;\" points=\"100,27.4 100,35.5 50,72.6 0,35.5 0,27.4 7.2,32.7 50,64.5 92.8,32.7 \"/>\n</svg>";
var nextTabMinimal1$1 = nextTabMinimal1;var nextTabMinimal2 = "\n<svg version=\"1.1\" id=\"Livello_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 100 100\" style=\"enable-background:new 0 0 100 100;\" xml:space=\"preserve\">\n<polygon style=\"fill:#7F7F7F;\" points=\"50,74.6 100,25.4 0,25.4 \"/>\n</svg>";
var nextTabMinimal2$1 = nextTabMinimal2;function svgColorChange(stringSvg, color) {
  var primaryColor = "#7F7F7F";
  var primaryColorReplace = color;
  return stringSvg.replace(primaryColor, primaryColorReplace);
}var NextTab$1 = {
  name: "boxNarration",
  components: {},
  props: {
    stylesObj: {}
  },
  data: function data() {
    return {
      svgData: false,
      animation: false,
      svgShadow: false
    };
  },
  watch: {
    stylesObj: {
      handler: function handler() {
        this.initSvg();
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.initSvg();
  },
  methods: {
    initSvg: function initSvg() {
      var stringName = this.stylesObj.iconSingleArrow["type"];
      var svgString;
      switch (stringName) {
        case "sketch":
          svgString = nextTabSketch$2;
          this.animation = "shining";
          break;
        case "minimal2":
          svgString = nextTabMinimal2$1;
          this.animation = "scroll-down";
          this.svgShadow = true;
          break;
        default:
          svgString = nextTabMinimal1$1;
          this.animation = "scroll-down";
          this.svgShadow = true;
          break;
      }
      this.svgData = svgColorChange(svgString, this.stylesObj.iconSingleArrow["color"]);
    }
  }
};
var script$a = NextTab$1;var _hoisted_1$9 = ["innerHTML"];
var _hoisted_2$9 = ["innerHTML"];
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.svgData ? (vue.openBlock(), vue.createElementBlock("div", {
    key: 0,
    class: vue.normalizeClass(['sg1-' + _ctx.stylesObj.iconSingleArrow['type'] + ' sg1-animation-' + _ctx.animation, "sg1-next-tab-wrapper"])
  }, [vue.createElementVNode("div", {
    class: "sg1-svg-wraper",
    style: vue.normalizeStyle({
      width: _ctx.stylesObj.iconSingleArrow['size']
    }),
    innerHTML: _ctx.svgData
  }, null, 12, _hoisted_1$9), vue.createElementVNode("div", {
    class: "sg1-svg-shadow",
    style: vue.normalizeStyle({
      width: _ctx.stylesObj.iconSingleArrow['size']
    }),
    innerHTML: _ctx.svgData
  }, null, 12, _hoisted_2$9)], 2)) : vue.createCommentVNode("", true);
}var css_248z$b = "\n.sg1-next-tab-wrapper[data-v-07a96db8] {\r\n\t\twidth: auto;\r\n\t\tdisplay: inline-flex;\r\n\t\tcursor: pointer;\r\n\t\tposition: relative;\r\n\t\ttransition: opacity 0.35s;\r\n\t\ttransition-timing-function: ease-out;\n}\n.sg1-next-tab-wrapper[data-v-07a96db8]:hover {\r\n\t\topacity: 0.75;\n}\n.sg1-next-tab-wrapper:hover .sg1-svg-shadow[data-v-07a96db8] {\r\n\t\topacity: 0;\r\n\t\tanimation: none;\n}\n.sg1-svg-shadow[data-v-07a96db8] {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttransition: opacity 0.35s;\r\n\t\ttransition-timing-function: ease-out;\n}\r\n\r\n\t/* scroll-down */\n.sg1-animation-scroll-down .sg1-svg-shadow[data-v-07a96db8] {\r\n\t\tanimation: sg1-scroll-down-07a96db8 2s infinite;\r\n\t\tanimation-timing-function: ease-out;\n}\n.sg1-animation-scroll-down[data-v-07a96db8] {\r\n\t\ttransition: transform 0.35s;\r\n\t\ttransition-timing-function: ease-out;\r\n\t\ttransform: translateY(0) scale(0.95);\n}\n.sg1-animation-scroll-down[data-v-07a96db8]:hover {\r\n\t\ttransform: translateY(10%) scale(1);\n}\n@keyframes sg1-scroll-down-07a96db8 {\n0% {\r\n\t\t\ttransform: translateY(0);\r\n\t\t\topacity: 0.5;\n}\n100% {\r\n\t\t\ttransform: translateY(35%);\r\n\t\t\topacity: 0;\n}\n}\r\n\r\n\t/* shining */\n.sg1-animation-shining[data-v-07a96db8] {\r\n\t\ttransition: transform 0.35s;\r\n\t\ttransition-timing-function: ease-out;\r\n\t\ttransform: translateY(0) scale(0.95);\r\n\t\tanimation: sg1-shining-07a96db8 1s infinite;\r\n\t\tanimation-timing-function: ease-out;\n}\n.sg1-animation-shining[data-v-07a96db8]:hover {\r\n\t\ttransform: translateY(10%) scale(1);\r\n\t\tanimation: none;\n}\n@keyframes sg1-shining-07a96db8 {\n0% {\r\n\t\t\topacity: 1;\r\n\t\t\ttransform: translateY(0) scale(1);\n}\n50% {\r\n\t\t\topacity: 0.5;\r\n\t\t\ttransform: translateY(0) scale(0.95);\n}\n100% {\r\n\t\t\topacity: 1;\r\n\t\t\ttransform: translateY(0) scale(1);\n}\n}\r\n";
styleInject(css_248z$b);script$a.render = render$a;
script$a.__scopeId = "data-v-07a96db8";var choseTabHexagon = "\n<svg version=\"1.1\" id=\"Livello_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 100 100\" style=\"enable-background:new 0 0 100 100;\" xml:space=\"preserve\">\n<g>\n\t<path style=\"fill:#7F7F7F;\" d=\"M75,6.7H25L0,50l25,43.3h50L100,50L75,6.7z M67.8,80.8H32.2L14.4,50l17.8-30.8h35.6L85.6,50\n\t\tL67.8,80.8z\"/>\n</g>\n</svg>\n";
var choseTabHexagon$1 = choseTabHexagon;var nextTabSketch = "\n<svg version=\"1.1\" id=\"Livello_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 100 100\" style=\"enable-background:new 0 0 100 100;\" xml:space=\"preserve\">\n<polygon style=\"fill:#7F7F7F;\" points=\"75,6.7 25,6.7 0,50 25,93.3 75,93.3 100,50 \"/>\n</svg>\n";
var choseTabHexagonActive = nextTabSketch;var choseTabSketch1 = "\n<svg version=\"1.1\" id=\"Livello_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 100 100\" style=\"enable-background:new 0 0 100 100;\" xml:space=\"preserve\">\n<g>\n\t<path style=\"fill:#7F7F7F;\" d=\"M70.8,19.8c2.3-2.6,5.6-4.6,5.1-8.7c2.2-0.7,4.4-1.3,6.6-2c0.4-0.5,0.8-1.1,1.2-1.6\n\t\tc1.2,2.8,2.3,5.7,3.5,8.5c0.5-0.6,1-1.1,1.5-1.7c0.5,2.1,0.9,4.2,1.4,6.4c0.3-0.1,0.5-0.1,0.8-0.2c-0.7,2-1.2,4.2-2.1,6.1\n\t\tc-0.6,1.2-1.9,2-2.8,3.1c-1.9,2.1-3.8,4.2-5.5,6.4c-2.4,3.2-4.5,6.6-7.1,10.4c4.2,3.7,8,7.4,12.3,10.5c1.9,1.4,4.8,1.4,7.3,1.9\n\t\tc3.3,0.8,5.5,2.6,6.6,5.8c-0.3,0.1-0.6,0.2-0.9,0.2c0.3,1.7,0.7,3.4,1,5.1c0.2,1,0.3,2.1,0.4,3.1c-1.7,0.1-3.8,0.9-4.9,0.2\n\t\tc-4.5-3-8.9-6.3-13-9.9c-2.6-2.3-4.5-5.3-6.8-7.8c-1.3-1.4-2.9-2.5-5-4.3c1,3,1.7,5.2,2.5,7.4c0.2-0.1,0.3-0.2,0.5-0.4\n\t\tc4.1,6.7,8.2,13.5,12.3,20.2c-1.5,1.3-2.2,2-3.1,2.7c0.2,0.5,0.5,0.9,0.4,1.4c-0.2,1.4,0,3.4-0.8,4.1c-0.8,0.7-2.9,0.4-4.1-0.2\n\t\tc-2.4-1.1-4.5-2.8-6.7-4.2c-0.3,0.4-0.6,0.7-0.9,1.1c2.4,2.1,4.8,4.1,7.5,6.4c-3.5,3-2.9,6-1.2,9c-3.1,2.4-5-0.2-7-1.4\n\t\tc-2.4-1.4-4.7-3-6.9-4.7c-1.4-1.1-2.5-2.7-3.9-4c-3.4-3.3-6.9-6.5-10.4-9.6c-0.2-0.2-0.8-0.1-1.2-0.1C46.7,85.1,44,89.4,39,92.1\n\t\tc-2.6,2.1-4.9,4.2-7.6,5.7c-0.7,0.4-2.8-0.7-3.6-1.6c-0.8-1-1.1-2.8-0.8-4c0.4-1.6,1.6-2.9,2.6-4.5c-1.7-1.8-3.4-3.6-5.1-5.5\n\t\tc0.6-1,1.1-1.9,1.7-2.7c1.7-2.4,1.8-4.3-1.1-5.9c-1-0.6-1.4-2.1-2.2-3.1c-0.5-0.7-0.8-1.5-1.4-2c-3-2.4-4.6-5.3-2.6-8.3\n\t\tc2.1-3,1.6-5.3-1.3-8c-4.3-4-7.9-8.8-11.8-13.2c-1.2-1.3-2.6-2.5-4-3.6C0.1,34-0.7,32,0.8,30.3C2,29,4,28.2,5.8,27.8\n\t\tc1.1-0.2,2.4,0.6,3.5,1c0,1.5,0,2.8,0,4.4c1.3-0.5,2-0.9,2.8-1.2c5.1,5,9.2,11,16.9,12.5c-0.2-0.5-0.2-1.3-0.5-1.7\n\t\tc-3.7-4.8-7.3-9.6-11.1-14.3C14.6,25,11.5,21.8,9,18.2C8.3,17.3,8.5,15,9.3,14c1-1.4,3-2.2,4.9-3.5c0.8,1.4,1.5,2.4,2.1,3.5\n\t\tc1.4,2.5,4.3,3.7,7.1,2.6c2.8-1.1,4.7,0.4,6.6,2.2c2.5,2.4,5.1,4.8,7.8,7c0.7,0.6,1.9,0.5,2.9,0.7c0-1.1,0.6-2.5,0.1-3.3\n\t\tc-1.4-2.3-3.2-4.4-5-6.5c-2.4-2.7-4.9-5.3-7.3-7.9c-0.5-0.5-0.8-1.2-1-1.8c-1.4-3-0.1-5.1,2.2-7C34,0.9,46,12.6,47.4,17.9\n\t\tc0.8-1.2,1.3-2.1,1.9-2.8c3.1-3.7,6-7.6,9.4-11.1c0.9-0.9,2.9-0.9,4.4-0.9c0.3,0,0.7,1.8,0.9,2.8c0.5,1.9,0.3,4.8,5,2.4\n\t\tc-1.6,3.5-2.7,5.8-3.9,8.3c1.7,0.9,3.6,1.8,5.4,2.7c-0.4,0.4-0.7,0.8-1.1,1.2c0.2,0.1,0.4,0.3,0.5,0.4\n\t\tC70.2,20.6,70.5,20.2,70.8,19.8z M41.9,70.8c-4.1,1.2-5.6,3.7-4.5,6.3C39,75,40.4,72.9,41.9,70.8z M27.7,29c-0.3,0.3-0.6,0.7-1,1\n\t\tc0.5,0.6,1,1.3,1.5,1.9c0.4-0.4,0.8-0.8,1.2-1.2C28.8,30.1,28.3,29.6,27.7,29z M66.7,35.5c0.3,0.2,0.5,0.3,0.8,0.5\n\t\tc0.2-0.5,0.4-1,0.6-1.4c-0.2-0.1-0.4-0.2-0.6-0.3C67.3,34.6,67,35.1,66.7,35.5z M65.3,58.2c-0.1,0.2-0.2,0.4-0.4,0.7\n\t\tc0.4,0.4,0.9,0.7,1.3,1.1c0.2-0.4,0.4-0.8,0.6-1.2C66.4,58.5,65.9,58.3,65.3,58.2z M69.8,30.4c-0.3,0.5-0.6,0.8-0.7,1.1\n\t\tc0,0.1,0.5,0.6,0.6,0.5c0.3-0.2,0.6-0.4,0.7-0.7C70.4,31.1,70.1,30.8,69.8,30.4z\"/>\n</g>\n</svg>\n";
var choseTabSketch5 = choseTabSketch1;var choseTabSketchActive = "\n<svg version=\"1.1\" id=\"Livello_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 100 100\" style=\"enable-background:new 0 0 100 100;\" xml:space=\"preserve\">\n<g>\n\t<path style=\"fill:#7F7F7F;\" d=\"M87.2,12.2c0.8-0.4,1.6-0.8,1.8-0.9c1.4,2.2,2.8,4.2,4,6.3c1.8,3.2,4.4,6.4,5.1,9.9\n\t\tc1.9,8.9,2.9,17.9,0.7,27c-1.2,5-2.1,10-3.1,15c-1.1,5.7-5.4,9-10,12c-3.4,2.2-7.1,3.9-10.4,6.2c-1.5,1-2.2,3.2-3.7,4.3\n\t\tc-5.5,3.9-12,5.7-18.6,7.5c-0.7,0.2-1.6,0-2.4-0.2c-3.4-0.5-6.9-0.6-10-1.7c-2.7-1-5.1-3-7.3-4.9c-6.2-5.3-10.7-11.8-15.8-17.9\n\t\tc-4.9-5.8-5.2-12.3-8-18.4c-0.5-1.2-1.9-2-2.2-3.2C5.5,46-0.7,40.6,0.1,32.4c0.5-5.6,3.5-9.1,7.5-12.4c3-2.5,6.2-4.9,9.7-6.6\n\t\tc5-2.4,9.3-6.3,14.5-7.9c9.2-2.9,18.7-5.8,28.8-3.8c4.4,0.9,8.9,1.3,13.4,1.7C78.4,3.9,84.9,8,87.2,12.2z M80.9,42.8\n\t\tc-0.7,2-0.9,3.1-1.5,4c-1.2,1.9-2.4,3.8-3.9,5.4c-1.6,1.7-3.3,3.5-5.3,4.7c-3.5,2-7.1,4.6-10.9,4.8c-4.6,0.3-9.5-1.2-12.5-5.5\n\t\tc-0.8-1.1-1.8-2-2.7-3c-3.5,3.8-4.1,6.7-0.8,9.9c3,2.9,6.9,5,10.4,7.4c1.3,0.9,2.9,1.4,4,2.5c1.7,1.6,9.1,2.6,10.7,0.9\n\t\tc4.8-4.7,10.2-9,12.6-15.4C83,53.7,84.1,48.9,80.9,42.8z M35.2,40.7c2.5-1.6,5-3.2,7.5-4.8c3-1.8,5.9-4.6,9.2-5.2\n\t\tc6.3-1.2,12.9-1.1,19.3-1.7c1.1-0.1,3.1-1.4,3-1.7c-0.7-2.3-1.4-4.7-2.8-6.7c-0.5-0.7-2.9-0.7-4.2-0.3C60.9,22,54.7,23.8,48.7,26\n\t\tc-4.1,1.4-8,3.2-11.8,5.2C33.2,33.2,32.7,36.5,35.2,40.7z M18.7,24.2c-7.6,0.7-12.6,15.3-7.4,22.3c0.5-1.1,0.9-1.9,1.3-2.7\n\t\tc1.2-2.5,1.9-5.5,3.7-7.5C19.6,32.5,18.5,28.4,18.7,24.2z M91.2,49.6c0.1-0.5,0.4-1.2,0.4-1.9c0.1-8.3-2.7-16-6.2-23.4\n\t\tc-1-2.2-1.7-6.5-6.3-5C83.2,29.4,87.2,39.4,91.2,49.6z M37,81.7c3.2,2.2,4.9,4.1,7,4.6c4.4,1.3,9.1,2,13.7,2.6\n\t\tc0.7,0.1,1.8-1.4,2.4-2.4c0.2-0.3-0.9-1.8-1.4-1.8c-6.3,0.6-11.8-1.4-17.2-4.2C40.7,80.1,39.1,81.1,37,81.7z M65,46.8\n\t\tc0,0,0.3,0.3,0.6,0.3c2.7-0.3,6.8-5.7,6-8.3c-0.2-0.7-1.7-1.9-2-1.7c-1.3,0.7-3,1.5-3.5,2.7C65.3,41.9,65.3,44.3,65,46.8z\n\t\t M86.9,62.4c0.6,0.1,1.2,0.3,1.7,0.4c0.5-1.8,1-3.6,1.5-5.3c-0.6-0.1-1.1-0.3-1.7-0.4C87.9,58.9,87.4,60.7,86.9,62.4z M57.5,14.4\n\t\tc-0.2-0.2-0.4-0.5-0.4-0.5c-0.3,0.1-0.5,0.3-0.7,0.4c0.1,0.2,0.3,0.5,0.3,0.4C57,14.7,57.3,14.5,57.5,14.4z M80.9,73.5\n\t\tc0.5-0.5,1-0.8,1-1.1c0-0.3-0.4-0.6-0.7-0.9c-0.4,0.3-0.9,0.5-1,0.8C80.2,72.6,80.6,73,80.9,73.5z M83.6,68.9\n\t\tc0.2,0.1,0.5,0.2,0.7,0.3c0.3-0.5,0.5-1,0.8-1.4c-0.2-0.1-0.5-0.2-0.7-0.3C84.1,68,83.8,68.5,83.6,68.9z M53.8,79.6\n\t\tc0.2-0.3,0.5-0.6,0.4-0.8c0-0.2-0.4-0.4-0.6-0.6c-0.2,0.3-0.5,0.6-0.7,0.8C53.2,79.3,53.5,79.4,53.8,79.6z\"/>\n</g>\n</svg>\n";
var choseTabSketchActive$1 = choseTabSketchActive;var choseTabMinimal = "\n<svg version=\"1.1\" id=\"Livello_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 100 100\" style=\"enable-background:new 0 0 100 100;\" xml:space=\"preserve\">\n<style type=\"text/css\">\n\t.st0{fill:#7F7F7F;}\n</style>\n<polygon class=\"st0\" points=\"85.2,50 45.3,89.1 14.8,89.1 14.8,10.9 45.3,10.9 \"/>\n</svg>\n";
var choseTabMinimal$1 = choseTabMinimal;var NextTab = {
  name: "boxNarration",
  components: {},
  props: {
    stylesObj: {},
    index: {},
    text: {}
  },
  data: function data() {
    return {
      svgData: false,
      svgDataActive: false,
      indexListText: false
    };
  },
  watch: {
    stylesObj: {
      handler: function handler() {
        this.init();
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function init() {
      if (this.stylesObj) {
        if (this.stylesObj.iconMultipleArrow["type"]) {
          var stringName = this.stylesObj.iconMultipleArrow["type"];
          if (stringName == "letter" || stringName == "number") {
            this.svgData = false;
            this.svgDataActive = false;
            if (stringName == "letter") {
              var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
              this.indexListText = alphabet[this.index];
            } else {
              this.indexListText = this.index + 1 + ".";
            }
          } else {
            this.indexListText = false;
            this.initSvg();
          }
        }
      }
    },
    initSvg: function initSvg() {
      this.svgDataActive = false;
      var stringName = this.stylesObj.iconMultipleArrow["type"];
      var svgString;
      var listElement;
      switch (stringName) {
        case "sketch":
          listElement = [choseTabSketch5, choseTabSketch5, choseTabSketch5, choseTabSketch5, choseTabSketch5];
          this.initSvgActive(choseTabSketchActive$1);
          break;
        case "hexagon":
          listElement = [choseTabHexagon$1];
          this.initSvgActive(choseTabHexagonActive);
          break;
        case "minimal1":
          listElement = [choseTabMinimal$1];
          this.initSvgActive(false);
      }
      svgString = listElement[Math.floor(Math.random() * listElement.length)];
      this.svgData = svgColorChange(svgString, this.stylesObj.iconMultipleArrow["color"]);
    },
    initSvgActive: function initSvgActive(activeSvgString) {
      if (activeSvgString) {
        this.svgDataActive = svgColorChange(activeSvgString, this.stylesObj.iconMultipleArrow["color"]);
      } else {
        this.svgDataActive = false;
      }
    }
  }
};
var script$9 = NextTab;var _withScopeId$1 = function _withScopeId(n) {
  return vue.pushScopeId("data-v-68d5b6a0"), n = n(), vue.popScopeId(), n;
};
var _hoisted_1$8 = {
  key: 0,
  style: {
    "dispaly": "contents"
  }
};
var _hoisted_2$8 = ["innerHTML"];
var _hoisted_3$5 = ["innerHTML"];
var _hoisted_4$3 = ["innerHTML"];
var _hoisted_5$3 = ["innerHTML"];
var _hoisted_6$2 = {
  key: 1,
  class: "sg1-chose-item"
};
var _hoisted_7$1 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("div", {
    class: "list-item"
  }, null, -1);
});
var _hoisted_8$1 = ["innerHTML"];
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.stylesObj ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$8, [_ctx.stylesObj.iconMultipleArrow['type'] ? (vue.openBlock(), vue.createElementBlock("div", {
    key: 0,
    class: vue.normalizeClass([{
      'use-active-item': _ctx.svgDataActive
    }, "sg1-chose-item"]),
    style: vue.normalizeStyle(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, _ctx.stylesObj.commonFontFamily), _ctx.stylesObj.fontWeightListSelected), _ctx.stylesObj.fontColor), _ctx.stylesObj.fontSize1))
  }, [_ctx.svgData ? (vue.openBlock(), vue.createElementBlock("div", {
    key: 0,
    class: vue.normalizeClass(['type-' + _ctx.stylesObj.iconMultipleArrow['type'], "sg1-icon-wrapper"]),
    style: vue.normalizeStyle(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, _ctx.stylesObj.commonFontFamily), _ctx.stylesObj.fontWeightListSelected), _ctx.stylesObj.fontColor), _ctx.stylesObj.fontSize1))
  }, [vue.createElementVNode("div", {
    class: "sg1-svg-wraper",
    style: vue.normalizeStyle({
      minWidth: _ctx.stylesObj.iconMultipleArrow['size']
    }),
    innerHTML: _ctx.svgData
  }, null, 12, _hoisted_2$8), _ctx.svgDataActive ? (vue.openBlock(), vue.createElementBlock("div", {
    key: 0,
    class: "sg1-svg-hover-wraper",
    style: vue.normalizeStyle({
      minWidth: _ctx.stylesObj.iconMultipleArrow['size']
    }),
    innerHTML: _ctx.svgDataActive
  }, null, 12, _hoisted_3$5)) : vue.createCommentVNode("", true)], 6)) : (vue.openBlock(), vue.createElementBlock("div", {
    key: 1,
    class: vue.normalizeClass('sg1-type-' + _ctx.stylesObj.iconMultipleArrow['type']),
    style: vue.normalizeStyle(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, _ctx.stylesObj.commonFontFamily), _ctx.stylesObj.fontWeightListSelected), _ctx.stylesObj.fontColor), _ctx.stylesObj.fontSize1))
  }, vue.toDisplayString(_ctx.indexListText), 7)), vue.createElementVNode("span", {
    innerHTML: _ctx.text
  }, null, 8, _hoisted_4$3)], 6)) : (vue.openBlock(), vue.createElementBlock("div", {
    key: 1,
    class: "sg1-chose-item",
    style: vue.normalizeStyle(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, _ctx.stylesObj.commonFontFamily), _ctx.stylesObj.fontWeightListSelected), _ctx.stylesObj.fontColor), _ctx.stylesObj.fontSize1))
  }, [vue.createElementVNode("span", {
    innerHTML: _ctx.text
  }, null, 8, _hoisted_5$3)], 4))])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$2, [_hoisted_7$1, vue.createElementVNode("span", {
    innerHTML: _ctx.text
  }, null, 8, _hoisted_8$1)]));
}var css_248z$a = "\n.sg1-chose-item[data-v-68d5b6a0] {\r\n  display: inline-flex;\r\n  margin-bottom: 1em;\r\n  max-width: 100%;\r\n  width: auto;\r\n  cursor: pointer;\n}\n.sg1-icon-wrapper[data-v-68d5b6a0] {\r\n  margin-right: 0.5em;\r\n  position: relative;\n}\n.sg1-svg-hover-wraper[data-v-68d5b6a0] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0;\n}\n.sg1-chose-item[data-v-68d5b6a0] {\r\n  font-size: inherit;\r\n  font-family: inherit;\n}\n.sg1-chose-item[data-v-68d5b6a0],\r\n.sg1-svg-wraper[data-v-68d5b6a0],\r\n.sg1-svg-hover-wraper[data-v-68d5b6a0] {\r\n  transition: opacity 0.35s;\r\n  transition-timing-function: ease-out;\n}\n.sg1-chose-item[data-v-68d5b6a0]:hover {\r\n  opacity: 0.75;\n}\n.sg1-chose-item:hover .sg1-svg-hover-wraper[data-v-68d5b6a0] {\r\n  opacity: 1;\n}\n.sg1-chose-item.use-active-item:hover .sg1-svg-wraper[data-v-68d5b6a0] {\r\n  opacity: 0;\n}\n.sg1-type-number[data-v-68d5b6a0],\r\n.sg1-type-letter[data-v-68d5b6a0] {\r\n  margin-right: 0.5em;\n}\r\n";
styleInject(css_248z$a);script$9.render = render$9;
script$9.__scopeId = "data-v-68d5b6a0";//returns a copy of the object
function deepCopy(obj) {
  var rv;
  switch (_typeof(obj)) {
    case "object":
      if (obj === null) {
        // null => null
        rv = null;
      } else {
        switch (toString.call(obj)) {
          case "[object Array]":
            // It's an array, create a new array with
            // deep copies of the entries
            rv = obj.map(deepCopy);
            break;
          case "[object Date]":
            // Clone the date
            rv = new Date(obj);
            break;
          case "[object RegExp]":
            // Clone the RegExp
            rv = new RegExp(obj);
            break;
          // ...probably a few others
          default:
            // Some other kind of object, deep-copy its
            // properties into a new object
            rv = Object.keys(obj).reduce(function (prev, key) {
              prev[key] = deepCopy(obj[key]);
              return prev;
            }, {});
            break;
        }
      }
      break;
    default:
      // It's a primitive, copy via assignment
      rv = obj;
      break;
  }
  return rv;
}function fixText(stingText) {
  var textString = JSON.stringify(stingText);

  //let res = textString.replace(/(?:\\[rn])+/g, "<br>");
  var res = textString.replace(/(\\r\\)+/g, "<br>\\");
  res = res.replace(/(\\r)+/g, "<br>");
  return JSON.parse(res);

  /*
  let str = JSON.stringify(stingText);
   String.prototype.fakeReplace = function (str, newstr) {
    return this.split(str).join(newstr);
  };
   str = str.fakeReplace("MOSTRO/ANIMALE", "<br>");
   return str;
  */
}function sortChose(currentTabs) {
  if (currentTabs.length == 1) {
    return currentTabs;
  } else {
    var newOrder = [];
    var orderList = [];
    currentTabs.forEach(function (el) {
      orderList.push(el.x);
    });
    orderList.sort(function (a, b) {
      return a - b;
    });
    orderList.forEach(function (el1) {
      currentTabs.forEach(function (el2) {
        if (el1 == el2.x) {
          newOrder.push(el2);
        }
      });
    });
    return newOrder;
  }
}
var boxNarration = {
  name: "boxNarration",
  components: {
    NextTab: script$a,
    ChooseTab: script$9
  },
  props: {
    currentTabs: {},
    nextTabsChose: {},
    lang: {},
    stylesObj: {}
  },
  emits: ["emitReedBeams2"],
  computed: {
    currentTabsReordered: function currentTabsReordered() {
      var listIds = [];
      var newList = [];
      sortChose(this.currentTabs).forEach(function (el) {
        if (!listIds.includes(el.id)) {
          listIds.push(el.id);
          newList.push(el);
        }
      });
      return newList;
    },
    nextTabsChoseReordered: function nextTabsChoseReordered() {
      var listIds = [];
      var newList = [];
      sortChose(this.nextTabsChose).forEach(function (el) {
        if (!listIds.includes(el.id)) {
          listIds.push(el.id);
          newList.push(el);
        }
      });
      return newList;
    }
  },
  methods: {
    emitReedBeams3: function emitReedBeams3(id) {
      this.$emit("emitReedBeams2", id);
    },
    fixText: function fixText$1(text) {
      return fixText(text);
    }
  }
};
var script$8 = boxNarration;var _hoisted_1$7 = {
  class: "sg1-box-narration"
};
var _hoisted_2$7 = ["innerHTML"];
var _hoisted_3$4 = {
  key: 0
};
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ChooseTab = vue.resolveComponent("ChooseTab");
  var _component_NextTab = vue.resolveComponent("NextTab");
  return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [vue.createElementVNode("div", _hoisted_1$7, [vue.createElementVNode("div", {
    class: "sg1-tab-results",
    style: vue.normalizeStyle(_ctx.stylesObj.tabResultsMaxHeight)
  }, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.currentTabsReordered, function (tab, index) {
    return vue.openBlock(), vue.createElementBlock("div", {
      key: tab.id,
      class: vue.normalizeClass(_ctx.currentTabs.length == 1 ? 'sg1-label-description' : 'sg1-label-multiple-chose')
    }, [_ctx.currentTabs.length == 1 ? (vue.openBlock(), vue.createElementBlock("div", {
      key: 0,
      style: vue.normalizeStyle(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, _ctx.stylesObj.commonFontFamily), _ctx.stylesObj.fontWeightListSelected), _ctx.stylesObj.fontColor), _ctx.stylesObj.fontSize1), _ctx.stylesObj.paddingBottomNextTab)),
      innerHTML: _ctx.fixText(tab.text[_ctx.lang])
    }, null, 12, _hoisted_2$7)) : (vue.openBlock(), vue.createElementBlock("div", {
      key: 1,
      style: vue.normalizeStyle(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, _ctx.stylesObj.commonFontFamily), _ctx.stylesObj.fontWeightListSelected), _ctx.stylesObj.fontColor), _ctx.stylesObj.fontSize1))
    }, [vue.createVNode(_component_ChooseTab, {
      index: index,
      text: _ctx.fixText(tab.text[_ctx.lang]),
      stylesObj: _ctx.stylesObj,
      onClick: function onClick($event) {
        return _ctx.emitReedBeams3(tab.id);
      }
    }, null, 8, ["index", "text", "stylesObj", "onClick"])], 4))], 2);
  }), 128)), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.nextTabsChoseReordered, function (tab, index) {
    return vue.openBlock(), vue.createElementBlock("div", {
      key: tab.id,
      class: vue.normalizeClass(_ctx.nextTabsChose.length == 1 ? 'sg1-label-description' : 'sg1-label-multiple-chose')
    }, [tab.id ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$4, [vue.createVNode(_component_ChooseTab, {
      index: index,
      text: _ctx.fixText(tab.text[_ctx.lang]),
      stylesObj: _ctx.stylesObj,
      onClick: function onClick($event) {
        return _ctx.emitReedBeams3(tab.id);
      }
    }, null, 8, ["index", "text", "stylesObj", "onClick"])])) : vue.createCommentVNode("", true)], 2);
  }), 128))], 4)]), _ctx.currentTabs.length == 1 && _ctx.nextTabsChose.length == 0 ? (vue.openBlock(), vue.createElementBlock("div", {
    key: 0,
    class: "sg1-single-beem-foward-box",
    style: vue.normalizeStyle(_ctx.stylesObj.paddingTopNextTab)
  }, [_ctx.stylesObj ? (vue.openBlock(), vue.createBlock(_component_NextTab, {
    key: 0,
    stylesObj: _ctx.stylesObj,
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.emitReedBeams3(_ctx.currentTabs[0].id);
    })
  }, null, 8, ["stylesObj"])) : (vue.openBlock(), vue.createElementBlock("div", {
    key: 1,
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.emitReedBeams3(_ctx.currentTabs[0].id);
    }),
    class: "sg1-single-beem-icon"
  }))], 4)) : vue.createCommentVNode("", true)], 64);
}var css_248z$9 = "\n.sg1-tab-results[data-v-066ddc8e] {\r\n  flex-grow: 1;\r\n  overflow: auto;\n}\n.sg1-single-beem-foward-box[data-v-066ddc8e] {\r\n  display: flex;\r\n  justify-content: center;\n}\n.sg1-box-narration[data-v-066ddc8e] {\r\n  position: relative;\r\n  z-index: 10;\r\n  max-height: inherit;\r\n  min-height: inherit;\r\n  overflow-y: auto;\r\n  flex-grow: 1;\n}\r\n";
styleInject(css_248z$9);script$8.render = render$8;
script$8.__scopeId = "data-v-066ddc8e";var boxNarrationGameEnd = {
  name: "boxNarrationGameEnd",
  props: {
    currentTabs: {},
    lang: {},
    reedbeams: {},
    stylesObj: {}
  },
  mounted: function mounted() {
    if (this.currentTabs[0].openNewPage) {
      window.open(this.currentTabs[0].url[this.lang], "_self");
    }
  },
  methods: {
    reedBeams: function reedBeams(id) {
      this.$emit("reedbeams", id);
    },
    fixText: function fixText$1(text) {
      return fixText(text);
    }
  }
};
var script$7 = boxNarrationGameEnd;var _hoisted_1$6 = {
  class: "sg1-box-narration"
};
var _hoisted_2$6 = ["innerHTML"];
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$6, [vue.createElementVNode("div", {
    class: "sg1-tab-results",
    style: vue.normalizeStyle(_ctx.stylesObj.tabResultsMaxHeight)
  }, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.currentTabs, function (tab, index) {
    return vue.openBlock(), vue.createElementBlock("div", {
      key: tab.id,
      class: vue.normalizeClass(_ctx.currentTabs.length == 1 ? 'sg1-label-description' : 'sg1-label-multiple-chose')
    }, [_ctx.currentTabs.length == 1 ? (vue.openBlock(), vue.createElementBlock("div", {
      key: 0,
      style: vue.normalizeStyle(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, _ctx.stylesObj.commonFontFamily), _ctx.stylesObj.fontWeightListSelected), _ctx.stylesObj.fontColor), _ctx.stylesObj.fontSize1)),
      innerHTML: _ctx.fixText(tab.text[_ctx.lang])
    }, null, 12, _hoisted_2$6)) : vue.createCommentVNode("", true)], 2);
  }), 128))], 4)]);
}var css_248z$8 = "\n.sg1-tab-results[data-v-9c79f44c] {\n\t\tflex-grow: 1;\n\t\toverflow: auto;\n}\n.sg1-box-narration[data-v-9c79f44c] {\n\t\tposition: relative;\n\t\tmax-height: initial;\n\t\tmin-height: inherit;\n\t\tz-index: 10;\n\t\tflex-grow: 1;\n}\n";
styleInject(css_248z$8);script$7.render = render$7;
script$7.__scopeId = "data-v-9c79f44c";var boxNarrationGameOver = {
  name: "boxNarrationGameOver",
  props: {
    currentTabs: {},
    lang: {},
    reedbeams: {},
    stylesObj: {},
    gameIntentLoad3: {}
  },
  methods: {
    reedBeams: function reedBeams(id) {
      this.$emit("reedbeams", id);
    },
    fixText: function fixText$1(text) {
      return fixText(text);
    },
    gameIntentLoad4: function gameIntentLoad4() {
      this.$emit("gameIntentLoad3");
    }
  }
};
var script$6 = boxNarrationGameOver;var _hoisted_1$5 = {
  class: "sg1-box-narration"
};
var _hoisted_2$5 = ["innerHTML"];
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [vue.createElementVNode("div", {
    class: "sg1-tab-results",
    style: vue.normalizeStyle(_ctx.stylesObj.tabResultsMaxHeight)
  }, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.currentTabs, function (tab, index) {
    return vue.openBlock(), vue.createElementBlock("div", {
      key: tab.id,
      class: vue.normalizeClass(_ctx.currentTabs.length == 1 ? 'sg1-label-description' : 'sg1-label-multiple-chose')
    }, [_ctx.currentTabs.length == 1 ? (vue.openBlock(), vue.createElementBlock("div", {
      key: 0,
      onClick: _cache[0] || (_cache[0] = function ($event) {
        return _ctx.gameIntentLoad4();
      }),
      style: vue.normalizeStyle(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, _ctx.stylesObj.commonFontFamily), _ctx.stylesObj.fontWeightListSelected), _ctx.stylesObj.fontColor), _ctx.stylesObj.fontSize1)),
      innerHTML: _ctx.fixText(tab.text[_ctx.lang]),
      class: "sg1-replay-link"
    }, null, 12, _hoisted_2$5)) : vue.createCommentVNode("", true)], 2);
  }), 128))], 4)]);
}var css_248z$7 = "\n.sg1-tab-results[data-v-3117e596] {\n\t\tflex-grow: 1;\n\t\toverflow: auto;\n}\n.sg1-box-narration[data-v-3117e596] {\n\t\tposition: relative;\n\t\tmax-height: initial;\n\t\tmin-height: inherit;\n\t\tz-index: 10;\n\t\tflex-grow: 1;\n}\n.sg1-replay-link[data-v-3117e596] {\n\t\ttext-decoration: underline;\n\t\tcursor: pointer;\n}\n";
styleInject(css_248z$7);script$6.render = render$6;
script$6.__scopeId = "data-v-3117e596";var bgSketch = "\n<svg version=\"1.1\" id=\"Livello_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 133.3 133.3\" style=\"enable-background:new 0 0 133.3 133.3;\" xml:space=\"preserve\">\n<g>\n\t<path style=\"fill:#7F7F7F;\" d=\"M132.6,99.6c-0.2,0.2-0.4,0.3-0.6,0.5c0.3,0.3,0,0.5-0.1,0.7c0,0.2,0.1,0.3,0.1,0.4\n\t\tc-0.1,0.6,0,1.3,0.3,1.8c0.1,0.1,0.1,0.3,0.1,0.4c-0.1,0.5-0.2,1-0.3,1.4c-0.1,0.4-0.2,0.7,0,1c-0.1,0.3-0.2,0.5-0.2,0.7\n\t\tc0,0.6,0,1.1,0,1.7c0,0.4,0,0.8-0.3,1.1c0,0.1,0,0.1-0.1,0.2c0.2,0.1,0.3,0.2,0.4,0.3c-0.1,0.3-0.3,0.5-0.3,0.8\n\t\tc0.1,0.6,0.3,1.1,0.4,1.7c-0.1,0.4-0.2,0.8-0.3,1.2c0,0.2,0.1,0.3,0.1,0.5c0,0.1,0.1,0.2,0.2,0.3c-0.2,0.4-0.5,0.8-0.7,1.2\n\t\tc-0.3,0.6-0.5,0.7,0.2,1.2c0,0,0,0.1,0.1,0.1c0,0.1,0,0.2,0,0.2c-0.1,0.4-0.1,0.7,0.2,1c0.1,0.1,0.1,0.2,0.1,0.4c0,0.5,0,1-0.1,1.5\n\t\tc-0.1,0.3-0.2,0.5-0.1,0.9c0,0.1,0,0.3-0.1,0.3c-0.3,0.4-0.3,0.8,0,1.2c-0.8,1.4-0.4,2.7,0.4,4.1c-0.1,0.2-0.3,0.3-0.4,0.5\n\t\tc-0.1,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.6,0.2,1c0.1,0.3,0.3,0.7,0.4,1c-0.3,0.6-0.3,1.4-0.9,1.8c-0.2,0-0.5,0-0.8,0\n\t\tc-0.2,0.2,0.1,0.7-0.4,0.5c-0.2-0.1-0.5,0-0.8,0.1c-0.3,0.1-0.5,0.2-0.9,0.1c-0.4-0.1-0.8-0.2-1.2,0c-0.3,0.1-0.5,0.1-0.8,0\n\t\tc-0.2-0.1-0.4-0.1-0.6-0.1c-0.3,0.1-0.6,0-0.9-0.1c-0.2-0.1-0.6-0.3-0.8-0.2c-0.6,0.2-1.1,0.1-1.7,0.2c-0.1,0-0.2,0-0.2,0\n\t\tc-0.8,0.3-1.7,0.1-2.5,0.1c-0.6,0-1.3,0.1-1.9,0c-0.1,0-0.2,0-0.2,0c-0.3,0.2-0.7,0.1-1,0.1c-0.6,0-1.2-0.1-1.8-0.1\n\t\tc-0.2,0-0.3,0-0.5,0c-0.4,0.2-0.8,0.2-1.2,0c-0.2-0.1-0.4,0-0.6,0c-0.5,0-0.9,0.3-1.4,0.1c-0.5-0.2-1-0.2-1.5,0\n\t\tc-0.3,0-0.6-0.1-0.8-0.1s-0.4,0-0.6-0.1c-0.6-0.1-1.2-0.2-1.8-0.3c-0.2,0-0.3,0.1-0.5,0.2c-0.1,0-0.2,0.1-0.4,0.2\n\t\tc0-0.5-0.3-0.4-0.6-0.4c-0.6-0.1-1.2,0.2-1.7,0.5c-0.2,0.2-0.4,0.2-0.7,0.1c-0.2-0.1-0.4-0.1-0.6,0c-0.4,0-0.8,0.1-1.2,0.2\n\t\tc-0.1,0-0.3,0-0.4-0.1c-0.5-0.3-1.1-0.2-1.6-0.5c-0.1,0-0.2,0-0.3,0c-0.2,0-0.3,0.1-0.5,0.1c-0.1,0-0.1-0.1-0.2-0.1\n\t\tc-0.7-0.4-0.7-0.4-1.4,0c-0.3,0.2-0.7,0.3-1.1,0.3c-0.5,0-1-0.1-1.4,0.1c-0.3-0.2-0.6-0.4-0.9-0.4c-0.6,0-1.3-0.2-1.9,0.1\n\t\tc-0.2,0.1-0.4,0.2-0.5,0.1c-0.3-0.2-0.6-0.1-0.9-0.2c-0.5-0.3-0.9-0.4-1.4-0.1c-0.6-0.2-1.1,0-1.6,0.2c-0.5,0.2-1,0.3-1.5,0.3\n\t\tc-0.5,0-1,0.1-1.5-0.2c-0.1,0-0.2-0.1-0.2-0.1c-0.3-0.2-0.7-0.3-1.1,0c-0.1,0-0.2,0-0.3,0c-0.7,0-1.4,0.1-2,0.4\n\t\tc-0.5-0.2-1-0.7-1.6-0.3c-0.1,0-0.2,0-0.3,0c-0.1,0-0.3-0.1-0.3-0.1c-0.3,0.2-0.5,0-0.8,0c-0.4,0-0.8-0.2-1.2,0.3\n\t\tc-0.3,0.4-0.5,0.4-0.9,0.1c-0.2-0.2-0.4-0.4-0.6-0.5c-0.3,0-0.6,0-0.8,0c-0.5,0.2-0.9,0.2-1.2-0.1c-0.4,0-0.8,0-1.1,0\n\t\tc-0.1,0-0.2,0-0.3,0c-0.4,0.3-0.9,0.2-1.3,0.4c-0.1,0-0.2,0-0.4,0c-0.3-0.1-0.6-0.2-0.9-0.3c-0.3-0.1-0.5-0.1-0.8,0\n\t\tc-0.6,0.2-1.2,0.3-1.7,0.4c-0.3-0.2-0.6-0.3-0.9-0.5c-0.5-0.3-0.9-0.3-1.4,0c-0.6,0.3-1.2,0.4-1.8,0.2c-0.3-0.1-0.6-0.1-0.9,0\n\t\tc-0.1,0.1-0.4,0.1-0.4,0c-0.3-0.3-0.7-0.2-0.9-0.2c-0.4,0-0.7,0-1.1-0.1c-0.2,0.1-0.3,0.2-0.5,0.3c-0.2,0.2-0.4,0.2-0.6,0\n\t\tc-0.4-0.3-0.7-0.2-1.1,0.1c-0.8-0.5-1.4-0.4-2,0.2c-0.2,0-0.3-0.1-0.5-0.1c-0.1,0-0.3,0-0.4,0c-0.1-0.1-0.1-0.1-0.1-0.1\n\t\tc0-0.1-0.1-0.1-0.1-0.2c-0.3-0.5-0.3-0.5-0.8-0.3c-0.1,0-0.2,0-0.3,0c-0.4,0-0.9,0.1-1.3-0.2c-0.1-0.1-0.3,0-0.5,0\n\t\tc-0.3,0-0.7,0.1-1,0.2c-0.1,0-0.3,0-0.3,0c-0.4-0.4-0.9,0.1-1.3,0c-0.3,0.3-0.7,0.2-1,0.2c-0.7,0-1.3-0.2-2-0.2\n\t\tc-0.1,0-0.2-0.1-0.2-0.1c-0.2,0.1-0.3,0.2-0.4,0.3c-0.8-0.4-1.5-0.4-2.2,0c-0.2,0-0.4-0.1-0.6,0c-0.4,0.1-0.7,0-1.1-0.2\n\t\tc-0.2-0.1-0.5-0.1-0.7,0.1c-0.3,0.3-0.8,0.2-1.1,0.2c-0.4,0-0.8-0.1-1.2-0.1c-0.3-0.1-0.6-0.1-0.8,0.1c-0.2-0.1-0.3-0.2-0.6-0.3\n\t\tc-0.1,0.2-0.2,0.3-0.3,0.5c-0.4-0.5-0.8-0.4-1.3-0.2c-0.3,0.1-0.6,0.3-0.9,0.4c-0.2-0.2-0.3-0.4-0.5-0.6c-0.3,0.3-0.5,0-0.7-0.1\n\t\tc-0.2,0-0.3,0.1-0.5,0.1c-0.6-0.1-1.3,0-1.8,0.3c-0.1,0.1-0.3,0.1-0.4,0.1c-0.5-0.1-1-0.2-1.4-0.3c-0.4-0.1-0.7-0.2-1,0\n\t\tc-0.3-0.1-0.5-0.2-0.7-0.2c-0.6,0-1.1,0.1-1.7,0.1c-0.4,0-0.8-0.1-1.1-0.3c-0.1-0.1-0.1-0.1-0.2-0.1c-0.1,0.2-0.2,0.3-0.3,0.4\n\t\tc-0.3-0.1-0.5-0.3-0.7-0.3c-0.6,0.1-1.1,0.3-1.7,0.4c-0.4-0.1-0.8-0.2-1.2-0.3c-0.2,0-0.3,0.1-0.5,0.2c-0.1,0-0.2,0.1-0.3,0.2\n\t\tc-0.4-0.2-0.8-0.5-1.2-0.7c-0.6-0.3-0.7-0.5-1.1,0.2c0,0-0.1,0-0.1,0.1c0,0-0.1,0-0.2,0c-0.4-0.1-0.7-0.1-1,0.2\n\t\tc-0.1,0.1-0.3,0.2-0.4,0.2c-0.5,0-1,0-1.5-0.1c-0.3-0.1-0.5-0.2-0.9-0.1c-0.1,0-0.2,0-0.3-0.1c-0.4-0.3-0.8-0.3-1.2,0\n\t\tc-1.4-0.8-2.7-0.4-4.1,0.4c-0.2-0.1-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.3-0.6-0.3c-0.3,0-0.7,0.1-1,0.2c-0.3,0.1-0.7,0.3-1,0.4\n\t\tc-0.6-0.3-1.3-0.3-1.8-0.9c0-0.1-0.8-0.2-0.8-0.3c-0.1-0.5-0.3-1.1-0.1-1.6c0.1-0.2,0-0.6-0.1-0.8c-0.1-0.3-0.2-0.5-0.1-0.9\n\t\tc0.2-0.4,0.2-0.8,0-1.2c-0.1-0.3-0.1-0.6,0-0.8c0.1-0.2,0.1-0.4,0.1-0.6c-0.1-0.3,0-0.6,0.1-0.9c0.1-0.2,0.3-0.6,0.2-0.8\n\t\tc-0.2-0.6-0.1-1.1-0.2-1.7c0-0.1,0-0.2,0-0.2c-0.4-0.8-0.1-1.6-0.1-2.5c0-0.6-0.1-1.3,0-1.9c0-0.1,0-0.2,0-0.2\n\t\tc-0.2-0.3-0.1-0.7-0.1-1c0-0.6,0.1-1.2,0.1-1.8c0-0.2,0-0.3,0-0.5c-0.2-0.4-0.1-0.8,0-1.2c0.1-0.2,0-0.4,0-0.6\n\t\tc0-0.5-0.3-0.9-0.1-1.4c0.2-0.5,0.2-1.1,0-1.5c0-0.3,0.1-0.6,0.1-0.8c0-0.2,0-0.4,0.1-0.6c0.1-0.6,0.2-1.2,0.3-1.7\n\t\tc0-0.2-0.1-0.3-0.2-0.5c0-0.1-0.1-0.2-0.2-0.4c0.4,0,0.4-0.3,0.4-0.6c0.1-0.6-0.1-1.2-0.5-1.7c-0.2-0.2-0.2-0.4-0.1-0.6\n\t\tc0.1-0.2,0.1-0.4,0-0.6c0-0.4-0.1-0.8-0.2-1.2c0-0.1,0-0.3,0.1-0.4c0.3-0.5,0.2-1.1,0.5-1.6c0-0.1,0-0.2,0-0.3\n\t\tc0-0.2-0.1-0.3-0.1-0.4c0-0.1,0.1-0.1,0.1-0.2c0.4-0.7,0.4-0.7,0-1.3c-0.2-0.3-0.3-0.7-0.3-1.1c0-0.5,0.1-1-0.1-1.4\n\t\tc0.2-0.3,0.4-0.6,0.4-0.9c0-0.6,0.1-1.3-0.1-1.9c-0.1-0.2-0.2-0.4-0.1-0.5c0.2-0.3,0.1-0.6,0.2-0.9c0.2-0.5,0.4-0.9,0.1-1.4\n\t\tc0.2-0.6,0-1.1-0.2-1.6c-0.1-0.5-0.3-1-0.3-1.5c0-0.5-0.1-1,0.2-1.5c0-0.1,0.1-0.1,0.1-0.2c0.2-0.4,0.3-0.7,0-1.1\n\t\tc0-0.1,0-0.2,0-0.3c0-0.7-0.1-1.4-0.4-2c0.2-0.5,0.7-1,0.3-1.6c0-0.1,0-0.2,0-0.3c0-0.1,0.1-0.3,0-0.3c-0.2-0.3,0-0.5,0-0.7\n\t\tc0-0.4,0.2-0.8-0.3-1.1c-0.4-0.3-0.4-0.5-0.1-0.9c0.2-0.2,0.4-0.4,0.5-0.6c0-0.3,0-0.6-0.1-0.8c-0.2-0.5-0.2-0.9,0.1-1.2\n\t\tc0-0.5,0-0.8,0-1.1c0-0.1,0-0.2,0-0.3c-0.3-0.4-0.2-0.9-0.4-1.3c0-0.1,0-0.2,0-0.3c0.1-0.3,0.2-0.6,0.3-0.9c0.1-0.3,0.1-0.5,0-0.8\n\t\tc-0.2-0.6-0.3-1.1-0.4-1.7c0.2-0.3,0.3-0.6,0.5-0.8c0.3-0.5,0.3-0.9,0-1.4c-0.3-0.6-0.4-1.2-0.2-1.9c0.1-0.3,0.1-0.6,0-0.8\n\t\tc-0.1-0.1-0.1-0.4,0-0.5c0.3-0.3,0.2-0.7,0.2-1c0-0.4,0-0.7,0.1-1c-0.1-0.2-0.2-0.3-0.3-0.5c-0.2-0.2-0.2-0.4,0-0.6\n\t\tc0.3-0.4,0.2-0.7-0.2-1.1c0.5-0.8,0.4-1.4-0.2-2c0-0.2,0.1-0.3,0.1-0.4c0-0.1,0-0.3,0-0.4C1,53.3,1,53.3,1,53.3\n\t\tc0,0,0.1-0.1,0.2-0.1c0.5-0.3,0.5-0.3,0.3-0.8c0-0.1,0-0.2,0-0.3c0-0.5-0.1-0.9,0.2-1.3c0.1-0.1,0-0.3,0-0.5c0-0.3-0.1-0.7-0.2-1\n\t\tc0-0.1,0-0.3,0-0.3c0.4-0.4-0.1-0.8,0-1.3c-0.3-0.3-0.2-0.7-0.2-1c0-0.7,0.2-1.3,0.2-1.9c0-0.1,0-0.2,0.1-0.2\n\t\tc-0.1-0.2-0.2-0.3-0.3-0.4c0.4-0.8,0.4-1.5,0-2.2c0-0.2,0.1-0.4,0-0.6c-0.1-0.4,0-0.7,0.2-1.1c0.1-0.2,0.1-0.5-0.1-0.7\n\t\tc-0.3-0.3-0.3-0.8-0.2-1.2c0-0.4,0.1-0.8,0.1-1.2c0.1-0.3,0.1-0.6-0.1-0.8c0.1-0.2,0.2-0.3,0.3-0.6c-0.2-0.1-0.3-0.2-0.5-0.3\n\t\tc0.5-0.4,0.4-0.8,0.2-1.3c-0.2-0.3-0.3-0.6-0.5-0.9c0.2-0.2,0.3-0.3,0.6-0.5c-0.3-0.3,0-0.5,0.2-0.7c0-0.2-0.1-0.3-0.1-0.4\n\t\tc0.1-0.7,0-1.3-0.3-1.8c-0.1-0.1-0.1-0.3-0.1-0.4c0.1-0.5,0.2-1,0.3-1.4c0.1-0.4,0.2-0.7,0-1c0.1-0.3,0.2-0.5,0.2-0.7\n\t\tc0-0.6,0-1.1,0-1.7c0-0.4,0-0.8,0.3-1.1c0,0,0.1-0.1,0.1-0.2c-0.2-0.1-0.3-0.2-0.4-0.3c0.1-0.3,0.3-0.5,0.3-0.8\n\t\tc-0.1-0.6-0.3-1.1-0.4-1.7c0.1-0.4,0.2-0.8,0.3-1.2c0-0.2-0.1-0.3-0.2-0.5c0-0.1-0.1-0.2-0.2-0.3c0.2-0.4,0.5-0.8,0.7-1.2\n\t\tc0.3-0.6,0.5-0.7-0.2-1.2c0,0,0-0.1-0.1-0.1c0-0.1,0-0.1,0-0.2c0.2-0.4,0.1-0.7-0.2-1c-0.1-0.1-0.2-0.2-0.1-0.4c0-0.5,0-1,0.1-1.4\n\t\tc0.1-0.3,0.2-0.6,0.1-0.9c0-0.1,0-0.3,0.1-0.3c0.3-0.4,0.3-0.8,0-1.2C2.2,9.2,1.8,7.9,1,6.5C1.2,6.4,1.3,6.2,1.5,6s0.3-0.4,0.3-0.6\n\t\tc0-0.3-0.1-0.6-0.2-1c-0.1-0.3-0.3-0.7-0.4-1C1.4,2.8,1.4,2.1,2,1.7c0.1,0,0.2,0,0.3,0v0l0.2,0c0.5-0.1,1.1-0.3,1.6-0.1\n\t\tc0.2,0.1,0.6,0,0.8-0.1c0.3-0.1,0.5-0.2,0.8-0.1c0.4,0.1,0.8,0.2,1.2,0c0.3-0.1,0.6-0.1,0.8,0c0.2,0.1,0.4,0.1,0.6,0.1\n\t\tc0.3-0.1,0.6,0,0.9,0.1c0.1,0.1,0.3,0.1,0.4,0.2c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.6-0.2,1.1-0.2,1.7-0.2c0.1,0,0.2,0,0.2,0\n\t\tc0.8-0.4,1.7-0.1,2.5-0.1c0.6,0,1.3-0.1,1.9,0c0.1,0,0.2,0,0.2,0c0.3-0.2,0.7-0.1,1-0.1c0.6,0,1.2,0.1,1.8,0.1c0.2,0,0.3,0,0.5,0\n\t\tc0.4-0.2,0.8-0.2,1.2,0c0.2,0.1,0.4,0,0.6,0c0.5,0,0.9-0.3,1.4-0.1c0.5,0.2,1.1,0.2,1.5,0c0.3,0,0.6,0.1,0.8,0.1c0.2,0,0.4,0,0.6,0\n\t\tc0.6,0.1,1.2,0.2,1.7,0.3c0.2,0,0.3-0.1,0.5-0.2c0.1,0,0.2-0.1,0.4-0.2c0,0.4,0.3,0.4,0.6,0.4c0.6,0.1,1.2-0.1,1.7-0.5\n\t\tc0.2-0.2,0.4-0.2,0.6-0.1C31.7,1,32,1,32.2,1c0.4,0,0.8-0.1,1.2-0.2c0.1,0,0.3,0,0.4,0.1c0.5,0.3,1.1,0.2,1.6,0.5\n\t\tc0.1,0,0.2,0,0.3,0c0.2,0,0.3-0.1,0.4-0.1c0.1,0,0.1,0.1,0.2,0.1c0.7,0.4,0.7,0.4,1.4,0c0.3-0.2,0.7-0.3,1-0.3c0.5,0,1,0.1,1.4-0.1\n\t\tc0.3,0.2,0.6,0.4,0.9,0.4c0.6,0,1.3,0.1,1.9-0.1c0.2-0.1,0.4-0.1,0.5-0.1c0.3,0.1,0.6,0.1,0.9,0.2c0.5,0.3,0.9,0.4,1.4,0.1\n\t\tc0.6,0.2,1.1,0,1.6-0.2c0.5-0.2,1-0.3,1.5-0.3c0.5,0,1-0.1,1.5,0.2c0.1,0,0.1,0.1,0.2,0.1c0.4,0.1,0.7,0.3,1.1,0\n\t\tc0.1-0.1,0.2,0,0.3,0c0.7,0,1.4-0.1,2-0.4c0.5,0.2,1,0.7,1.6,0.3c0.1,0,0.2,0,0.3,0c0.1,0,0.3,0.1,0.3,0c0.3-0.2,0.5,0,0.7,0\n\t\tc0.4,0,0.8,0.2,1.2-0.3c0.3-0.4,0.5-0.4,0.9-0.1c0.2,0.2,0.4,0.4,0.6,0.5c0.3,0,0.6,0,0.8-0.1c0.5-0.2,0.9-0.2,1.2,0.1\n\t\tc0.5,0,0.8,0,1.1,0c0.1,0,0.2,0,0.3,0c0.4-0.3,0.9-0.2,1.3-0.4c0.1,0,0.2,0,0.3,0c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.1,0.5,0.1,0.8,0\n\t\tc0.6-0.2,1.1-0.3,1.7-0.4c0.3,0.2,0.6,0.3,0.8,0.5c0.5,0.3,0.9,0.3,1.4,0c0.6-0.4,1.2-0.4,1.8-0.2c0.3,0.1,0.6,0.1,0.8,0\n\t\tc0.1-0.1,0.4-0.1,0.5,0c0.3,0.3,0.7,0.2,1,0.2c0.4,0,0.7,0,1,0.1c0.2-0.1,0.3-0.2,0.5-0.3c0.2-0.2,0.4-0.2,0.6,0\n\t\tc0.4,0.3,0.7,0.2,1.1-0.1c0.8,0.5,1.4,0.4,2-0.2c0.2,0,0.3,0.1,0.5,0.1c0.1,0,0.3,0,0.4,0C80.3,1,80.3,1,80.3,1\n\t\tc0,0,0.1,0.1,0.1,0.1c0.3,0.5,0.3,0.5,0.8,0.3c0.1,0,0.2,0,0.3,0c0.5,0,0.9-0.1,1.3,0.2c0.1,0.1,0.3,0,0.5,0c0.3-0.1,0.7-0.1,1-0.2\n\t\tc0.1,0,0.3,0,0.3,0c0.4,0.4,0.8-0.1,1.3,0c0.3-0.3,0.7-0.2,1-0.2c0.7,0,1.3,0.2,1.9,0.2c0.1,0,0.2,0.1,0.2,0.1\n\t\tc0.2-0.1,0.3-0.2,0.4-0.3c0.8,0.4,1.5,0.4,2.2,0c0.2,0,0.4,0.1,0.6,0c0.4-0.1,0.7,0,1.1,0.2c0.2,0.1,0.5,0.1,0.7-0.1\n\t\tc0.3-0.3,0.8-0.3,1.2-0.2c0.4,0,0.8,0.1,1.2,0.1c0.3,0.1,0.6,0.1,0.8-0.1c0.2,0.1,0.3,0.2,0.6,0.3C98,1.4,98.1,1.2,98.2,1\n\t\tc0.4,0.5,0.8,0.4,1.3,0.2c0.3-0.2,0.6-0.3,0.9-0.5c0.2,0.2,0.3,0.3,0.5,0.6c0.3-0.3,0.5,0,0.7,0.1c0.2,0,0.3-0.1,0.4-0.1\n\t\tc0.7,0.1,1.3,0,1.8-0.3c0.1-0.1,0.3-0.1,0.4-0.1c0.5,0.1,1,0.2,1.5,0.3c0.3,0.1,0.7,0.2,1-0.1c0.3,0.1,0.5,0.2,0.7,0.2\n\t\tc0.6,0,1.1,0,1.7,0c0.4,0,0.8,0,1.1,0.3c0,0,0.1,0.1,0.2,0.1c0.1-0.2,0.2-0.3,0.3-0.4c0.3,0.1,0.5,0.3,0.8,0.3\n\t\tc0.6-0.1,1.1-0.3,1.7-0.4c0.4,0.1,0.8,0.2,1.2,0.3c0.2,0,0.3-0.1,0.5-0.2c0.1,0,0.2-0.1,0.3-0.2c0.4,0.2,0.8,0.5,1.2,0.7\n\t\tc0.6,0.3,0.7,0.5,1.1-0.2c0,0,0.1,0,0.1-0.1c0.1,0,0.1,0,0.2,0c0.4,0.2,0.7,0.1,1-0.2c0.1-0.1,0.2-0.1,0.4-0.1c0.5,0,1,0,1.5,0.1\n\t\tc0.3,0.1,0.5,0.2,0.9,0.1c0.1,0,0.3,0,0.3,0.1c0.4,0.3,0.8,0.3,1.2,0c0.2,0.1,0.3,0.2,0.5,0.2c0.8,0.3,1.6,0.3,2.4,0\n\t\tc0.4-0.1,0.8-0.4,1.2-0.6c0.2,0.1,0.3,0.3,0.5,0.4c0.1,0.1,0.2,0.1,0.3,0.2h0c0.1,0.1,0.2,0.1,0.3,0.1c0.2,0,0.4,0,0.5-0.1\n\t\tc0.1,0,0.3-0.1,0.4-0.1c0.3-0.1,0.7-0.3,1-0.4c0.6,0.3,1.3,0.3,1.8,0.9c0,0.2,0,0.4-0.1,0.6c0,0.3,0,0.6-0.1,0.9\n\t\tc-0.1,0.2,0,0.6,0.1,0.8c0.1,0.3,0.2,0.5,0.1,0.8c-0.2,0.4-0.2,0.8,0,1.2c0.1,0.3,0.1,0.5,0,0.8c-0.1,0.2-0.1,0.4-0.1,0.6\n\t\tc0.1,0.3,0,0.6-0.1,0.9c-0.1,0.2-0.3,0.6-0.2,0.8c0.2,0.6,0.2,1.1,0.2,1.7c0,0.1,0,0.2,0,0.2c0.4,0.8,0.1,1.7,0.1,2.5\n\t\tc0,0.6,0.1,1.3,0,1.9c0,0.1,0,0.2,0,0.2c0.2,0.3,0.1,0.7,0.1,1c0,0.6-0.1,1.2-0.1,1.8c0,0.1,0,0.3,0,0.5c0.2,0.4,0.1,0.8,0,1.2\n\t\tc-0.1,0.2,0,0.4,0,0.6c0,0.5,0.3,0.9,0.1,1.4c-0.2,0.5-0.2,1.1,0,1.5c0,0.3-0.1,0.6-0.1,0.8c0,0.2,0,0.4-0.1,0.6\n\t\tc-0.1,0.6-0.2,1.2-0.3,1.7c0,0.2,0.1,0.3,0.2,0.5c0,0.1,0.1,0.2,0.2,0.4c-0.4,0-0.4,0.3-0.4,0.6c-0.1,0.6,0.1,1.2,0.5,1.7\n\t\tc0.2,0.2,0.2,0.4,0.1,0.6c-0.1,0.2-0.1,0.4,0,0.6c0,0.4,0.1,0.8,0.2,1.2c0,0.1,0,0.3-0.1,0.4c-0.3,0.5-0.2,1.1-0.5,1.6\n\t\tc0,0.1,0,0.2,0,0.3c0,0.2,0.1,0.3,0.1,0.4c0,0.1-0.1,0.1-0.1,0.2c-0.4,0.7-0.4,0.7,0,1.4c0.2,0.3,0.3,0.7,0.3,1.1\n\t\tc0,0.5-0.1,1,0.1,1.4c-0.2,0.3-0.4,0.6-0.4,0.9c0,0.6-0.1,1.3,0.1,1.9c0.1,0.2,0.2,0.4,0.1,0.5c-0.1,0.3-0.1,0.6-0.2,0.9\n\t\tc-0.2,0.5-0.4,0.9-0.1,1.4c-0.2,0.6,0,1.1,0.2,1.6c0.2,0.5,0.3,1,0.3,1.5c0,0.5,0.1,1-0.2,1.5c0,0.1-0.1,0.1-0.1,0.2\n\t\tc-0.2,0.4-0.3,0.7,0,1.1c0,0.1,0,0.2,0,0.3c0,0.7,0.1,1.4,0.4,2c-0.2,0.5-0.7,1-0.3,1.6c0,0.1,0,0.2,0,0.3c0,0.1-0.1,0.3,0,0.3\n\t\tc0.2,0.3,0,0.5,0,0.7c0,0.4-0.2,0.8,0.3,1.2c0.4,0.3,0.4,0.5,0.1,0.9c-0.2,0.2-0.4,0.4-0.5,0.6c0,0.3,0,0.6,0.1,0.8\n\t\tc0.2,0.5,0.1,0.9-0.1,1.2c0,0.4,0,0.8,0,1.1c0,0.1,0,0.2,0,0.3c0.3,0.4,0.2,0.9,0.4,1.3c0.1,0.1,0,0.2,0,0.3\n\t\tc-0.1,0.3-0.2,0.6-0.3,0.9c-0.1,0.3-0.1,0.5,0,0.8c0.2,0.6,0.3,1.2,0.4,1.7c-0.2,0.3-0.3,0.6-0.5,0.8c-0.3,0.5-0.3,0.9,0,1.4\n\t\tc0.3,0.6,0.4,1.2,0.2,1.8c-0.1,0.3-0.1,0.6,0,0.9c0.1,0.1,0.1,0.4,0,0.4c-0.3,0.3-0.2,0.7-0.2,0.9c0.1,0.4,0,0.7-0.1,1.1\n\t\tc0.1,0.2,0.2,0.3,0.3,0.5c0.2,0.2,0.2,0.4,0,0.6c-0.3,0.4-0.2,0.7,0.2,1.1c-0.5,0.8-0.4,1.4,0.2,2c0,0.2-0.1,0.3-0.1,0.5\n\t\tc0,0.1,0,0.3,0,0.3c-0.1,0.1-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.2,0.1c-0.5,0.3-0.5,0.3-0.3,0.8c0,0.1,0,0.2,0,0.3\n\t\tc0,0.4,0.1,0.9-0.2,1.3c-0.1,0.1,0,0.3,0,0.5c0,0.3,0.1,0.7,0.2,1c0,0.1,0,0.3,0,0.3c-0.4,0.4,0.1,0.8,0,1.3c0.3,0.3,0.2,0.7,0.2,1\n\t\tc0,0.7-0.2,1.3-0.2,1.9c0,0.1,0,0.2-0.1,0.2c0.1,0.2,0.2,0.3,0.3,0.4c-0.4,0.8-0.4,1.5,0,2.2c0,0.2-0.1,0.4,0,0.6\n\t\tc0.1,0.4,0,0.7-0.2,1.1c-0.1,0.2-0.1,0.5,0.1,0.7c0.3,0.4,0.3,0.8,0.2,1.2c0,0.4-0.1,0.8-0.1,1.2c-0.1,0.3-0.1,0.6,0.1,0.8\n\t\tc-0.1,0.2-0.2,0.3-0.3,0.6c0.2,0.1,0.3,0.2,0.5,0.3c-0.5,0.4-0.4,0.8-0.2,1.3C132.3,99,132.4,99.3,132.6,99.6z\"/>\n</g>\n</svg>";
var bgSketch$1 = bgSketch;function drawCanvasBg(dimension, bgStyle, layoutID) {
  var canvas = document.getElementById("st-canvas-bg");
  var context = canvas.getContext("2d");
  var svgString = svgColorChange(bgSketch$1, bgStyle.bgColor);
  var maxSizeTexture = 400;
  var NTexture = Math.ceil(dimension.height / maxSizeTexture);
  for (var index = 0; index < NTexture; index++) {
    // crea un meccanismo tipo space betweeen
    var x = 0;
    var y = index * maxSizeTexture;
    createTexture(svgString, x, y, maxSizeTexture, maxSizeTexture);
  }
  function createTexture(string, x, y, w, h) {
    var img1 = new Image();
    img1.onload = function () {
      context.save();
      context.drawImage(img1, x, y, w, h);
    };
    img1.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(string);
    context.fillStyle = "pink";
    context.fillRect(0, 0, 100, 100);
    context.restore();
  }
  /* */
}var BgBoxText = {
  name: "BgBoxText",
  components: {},
  props: {
    stylesObj: {}
  },
  data: function data() {
    return {
      isCanvas: false,
      canvasTypeArray: ["sketch"],
      borderRadiousLayout: ["d3e6", "b3c6", "b2e3", "b2e4", "b6e7", "b5e7", "e2e7", "b2b7"],
      width: 0,
      height: 0,
      styleStBg: {}
    };
  },
  mounted: function mounted() {
    this.init();
    window.addEventListener("resize", this.init);
  },
  destroyed: function destroyed() {
    window.removeEventListener("resize", this.init);
  },
  methods: {
    init: function init() {
      var _this = this;
      /* constrollo se il box test è attaccato ai bordi */
      var canUseRadious = false;
      if (this.borderRadiousLayout.includes(this.stylesObj.layoutID)) {
        canUseRadious = true;
      }

      /* controllo se è un canvas */
      if (this.canvasTypeArray.includes(this.stylesObj.bgStyle.bgType)) {
        this.isCanvas = true;
        this.width = document.getElementsByClassName("bg-wrapper")[0].clientWidth;
        this.height = document.getElementsByClassName("bg-wrapper")[0].clientHeight;
        setTimeout(function () {
          drawCanvasBg({
            width: _this.width,
            height: _this.height
          }, _this.stylesObj.bgStyle, _this.stylesObj.layoutID);
        }, 100);
      } else {
        this.isCanvas = false;
        if (this.stylesObj.bgStyle.bgType == "minimal1") {
          this.styleStBg = {
            backgroundColor: this.stylesObj.bgStyle.bgColor,
            boxShadow: "0 0 4px 2px rgba(14,14,14,0.45)"
          };
          if (canUseRadious) {
            this.styleStBg.borderRadius = "20px";
          }
        } else {
          this.styleStBg = {
            backgroundColor: this.stylesObj.bgStyle.bgColor
          };
        }
      }
    }
  }
};
var script$5 = BgBoxText;var _hoisted_1$4 = {
  class: "sg1-bg-wrapper"
};
var _hoisted_2$4 = ["width", "height"];
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [_ctx.isCanvas ? (vue.openBlock(), vue.createElementBlock("canvas", {
    key: 0,
    width: _ctx.width,
    height: _ctx.height,
    id: "sg1-st-canvas-bg"
  }, null, 8, _hoisted_2$4)) : (vue.openBlock(), vue.createElementBlock("div", {
    key: 1,
    class: "sg1-st-bg",
    style: vue.normalizeStyle(_ctx.styleStBg)
  }, null, 4))]);
}var css_248z$6 = "\n.sg1-bg-wrapper[data-v-25293889] {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n}\n.sg1-st-bg[data-v-25293889] {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n}\n";
styleInject(css_248z$6);script$5.render = render$5;
script$5.__scopeId = "data-v-25293889";var boxText = {
  name: "boxText",
  components: {
    boxnarration: script$8,
    gameEnd: script$7,
    gameOver: script$6,
    BgBoxText: script$5
  },
  props: {
    narrationBox: {},
    lang: {},
    currentTabs: {},
    nextTabsChose: {},
    reedBeams: {},
    stylesObj: {},
    gameIntentLoad: {}
  },
  methods: {
    emitReedBeams1: function emitReedBeams1(id) {
      this.$emit("reedBeams", id);
    },
    gameIntentLoad2: function gameIntentLoad2() {
      this.$emit("gameIntentLoad");
    }
  }
};
var script$4 = boxText;function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_BgBoxText = vue.resolveComponent("BgBoxText");
  var _component_boxnarration = vue.resolveComponent("boxnarration");
  var _component_gameEnd = vue.resolveComponent("gameEnd");
  var _component_gameOver = vue.resolveComponent("gameOver");
  return vue.openBlock(), vue.createElementBlock("div", {
    class: "sg1-wrapper-box-text",
    style: vue.normalizeStyle(_objectSpread2(_objectSpread2({}, _ctx.stylesObj.boxText), _ctx.stylesObj.boxTextPadding))
  }, [_ctx.stylesObj ? (vue.openBlock(), vue.createBlock(_component_BgBoxText, {
    key: 0,
    stylesObj: _ctx.stylesObj
  }, null, 8, ["stylesObj"])) : vue.createCommentVNode("", true), _ctx.narrationBox == 'default' || _ctx.narrationBox == 'descriptions' || _ctx.narrationBox == 'chose' ? (vue.openBlock(), vue.createBlock(_component_boxnarration, {
    key: 1,
    lang: _ctx.lang,
    "current-tabs": _ctx.currentTabs,
    nextTabsChose: _ctx.nextTabsChose,
    stylesObj: _ctx.stylesObj,
    onEmitReedBeams2: _ctx.emitReedBeams1
  }, null, 8, ["lang", "current-tabs", "nextTabsChose", "stylesObj", "onEmitReedBeams2"])) : vue.createCommentVNode("", true), _ctx.narrationBox == 'end' ? (vue.openBlock(), vue.createBlock(_component_gameEnd, {
    key: 2,
    lang: _ctx.lang,
    "current-tabs": _ctx.currentTabs,
    stylesObj: _ctx.stylesObj,
    onEmitReedBeams2: _ctx.emitReedBeams1
  }, null, 8, ["lang", "current-tabs", "stylesObj", "onEmitReedBeams2"])) : vue.createCommentVNode("", true), _ctx.narrationBox == 'game over' ? (vue.openBlock(), vue.createBlock(_component_gameOver, {
    key: 3,
    lang: _ctx.lang,
    "current-tabs": _ctx.currentTabs,
    stylesObj: _ctx.stylesObj,
    onEmitReedBeams2: _ctx.emitReedBeams1,
    onGameIntentLoad3: _ctx.gameIntentLoad2
  }, null, 8, ["lang", "current-tabs", "stylesObj", "onEmitReedBeams2", "onGameIntentLoad3"])) : vue.createCommentVNode("", true)], 4);
}var css_248z$5 = "\n.sg1-wrapper-box-text[data-v-34060e5e] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: relative;\r\n  flex-grow: 1;\r\n  height: auto;\n}\r\n";
styleInject(css_248z$5);script$4.render = render$4;
script$4.__scopeId = "data-v-34060e5e";var PreCachedImg = {
  name: "PreCachedImg",
  props: {
    preCachedImgList: {},
    editorUsage: {},
    setImgsLoaded: {}
  },
  data: function data() {
    return {
      imgsLoaded: 0
    };
  },
  watch: {
    imgsLoaded: function imgsLoaded() {
      if (this.imgsLoaded == this.preCachedImgList.length) {
        this.$emit("setImgsLoaded");
      }
    }
  }
};
var script$3 = PreCachedImg;var _hoisted_1$3 = {
  class: "sg1-pre-cached-img-wrapper"
};
var _hoisted_2$3 = {
  key: 0
};
var _hoisted_3$3 = ["src"];
var _hoisted_4$2 = {
  key: 1
};
var _hoisted_5$2 = ["src", "srcset", "sizes"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [_ctx.editorUsage ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$3, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.preCachedImgList, function (el, index) {
    return vue.openBlock(), vue.createElementBlock("img", {
      key: index,
      class: "sg1-box-img",
      src: el,
      onLoad: _cache[0] || (_cache[0] = function ($event) {
        return _ctx.imgsLoaded++;
      })
    }, null, 40, _hoisted_3$3);
  }), 128))])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$2, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.preCachedImgList, function (el, index) {
    return vue.openBlock(), vue.createElementBlock("img", {
      key: index,
      src: el.src,
      srcset: el.srcset,
      sizes: el.sizes,
      onLoad: _cache[1] || (_cache[1] = function ($event) {
        return _ctx.imgsLoaded++;
      })
    }, null, 40, _hoisted_5$2);
  }), 128))]))]);
}var css_248z$4 = "\n.sg1-pre-cached-img-wrapper[data-v-50ed9ac2] {\n\t\tposition: fixed;\n\t\tmax-height: 0;\n\t\tmax-width: 0;\n\t\toverflow: hidden;\n\t\tvisibility: hidden;\n}\n";
styleInject(css_248z$4);script$3.render = render$3;
script$3.__scopeId = "data-v-50ed9ac2";var spinnerBox = {
  name: "Spinner"
};
var script$2 = spinnerBox;var _withScopeId = function _withScopeId(n) {
  return vue.pushScopeId("data-v-141b4ae7"), n = n(), vue.popScopeId(), n;
};
var _hoisted_1$2 = {
  class: "sg1-spinner-box-media"
};
var _hoisted_2$2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/vue.createElementVNode("div", {
    class: "sg1-spinner sg1-pulse-container"
  }, [/*#__PURE__*/vue.createElementVNode("div", {
    class: "sg1-pulse-bubble sg1-pulse-bubble-1"
  }), /*#__PURE__*/vue.createElementVNode("div", {
    class: "sg1-pulse-bubble sg1-pulse-bubble-2"
  }), /*#__PURE__*/vue.createElementVNode("div", {
    class: "sg1-pulse-bubble sg1-pulse-bubble-3"
  })], -1);
});
var _hoisted_3$2 = [_hoisted_2$2];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, _hoisted_3$2);
}var css_248z$3 = "\n.sg1-spinner-box-media[data-v-141b4ae7] {\n\t\tbackground-color: #464646;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tanimation-name: sg1-fadein-141b4ae7;\n\t\tanimation-duration: 0.4s;\n\t\tanimation-timing-function: ease-out;\n}\n@keyframes sg1-fadein-141b4ae7 {\n0% {\n\t\t\topacity: 0;\n}\n100% {\n\t\t\topacity: 1;\n}\n}\n\n\t/* PULSE BUBBLES */\n.sg1-pulse-container[data-v-141b4ae7] {\n\t\twidth: 3em;\n\t\tfont-size: rem(15px);\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n}\n.sg1-pulse-bubble[data-v-141b4ae7] {\n\t\tfont-size: 1em;\n\t\twidth: 0.6em;\n\t\theight: 3em;\n\t\tbackground-color: #ffffff;\n}\n.sg1-pulse-bubble-1[data-v-141b4ae7] {\n\t\tanimation: sg1-pulse-141b4ae7 0.6s ease 0s infinite alternate;\n}\n.sg1-pulse-bubble-2[data-v-141b4ae7] {\n\t\tanimation: sg1-pulse-141b4ae7 0.6s ease 0.15s infinite alternate;\n}\n.sg1-pulse-bubble-3[data-v-141b4ae7] {\n\t\tanimation: sg1-pulse-141b4ae7 0.6s ease 0.3s infinite alternate;\n}\n\n\t/* KEYFRAMES */\n@keyframes sg1-pulse-141b4ae7 {\nfrom {\n\t\t\topacity: 1;\n\t\t\ttransform: scale(1);\n}\nto {\n\t\t\topacity: 0.5;\n\t\t\ttransform: scale(0.8);\n}\n}\n";
styleInject(css_248z$3);script$2.render = render$2;
script$2.__scopeId = "data-v-141b4ae7";var ToastContainer = {
  name: "ToastContainer",
  data: function data() {
    return {
      idToSet: 0,
      toasts: [],
      toastsFiltered: [],
      tostToSee: 3
    };
  },
  methods: {
    addToast: function addToast(params) {
      this.idToSet = this.idToSet + 1;
      var newToast = {
        id: this.idToSet,
        type: params.type,
        title: params.title,
        expanded: false,
        content: params.content,
        isUnmountening: false
      };
      this.toasts.push(newToast);
    },
    removeToast: function removeToast(id) {
      var _this = this;
      this.toasts.find(function (el) {
        return el.id == id;
      }).isUnmountening = true;
      setTimeout(function () {
        _this.toasts = _this.toasts.filter(function (el) {
          return el.id !== id;
        });
      }, 1000);
    },
    expandToast: function expandToast(id) {
      this.toasts.forEach(function (el) {
        if (el.id == id) {
          el.expanded = !el.expanded;
        }
      });
    }
  }
};
var script$1 = ToastContainer;var _hoisted_1$1 = {
  key: 0,
  class: "sg1-toast-container"
};
var _hoisted_2$1 = ["cose"];
var _hoisted_3$1 = {
  class: "sg1-head"
};
var _hoisted_4$1 = ["innerHTML"];
var _hoisted_5$1 = ["onClick"];
var _hoisted_6$1 = ["onClick"];
var _hoisted_7 = {
  class: "sg1-content"
};
var _hoisted_8 = {
  class: "sg1-wrapper-pre"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.toasts.length ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.toasts, function (toast, index) {
    return vue.openBlock(), vue.createElementBlock("div", {
      key: toast.id,
      class: vue.normalizeClass([{
        'sg1-active': toast.expanded,
        'sg1-toast-faded-1': _ctx.toasts.length - index > _ctx.tostToSee,
        'sg1-toast-faded-2': _ctx.toasts.length - index > _ctx.tostToSee + 1,
        'sg1-toast-faded-3': _ctx.toasts.length - index > _ctx.tostToSee + 2,
        'sg1-toast-fade-out': toast.isUnmountening
      }, "sg1-toast"]),
      cose: _ctx.toasts.length - index
    }, [vue.createElementVNode("div", _hoisted_3$1, [vue.createElementVNode("span", {
      class: "sg1-title",
      innerHTML: toast.title
    }, null, 8, _hoisted_4$1), vue.createElementVNode("div", {
      onClick: function onClick($event) {
        return _ctx.expandToast(toast.id);
      },
      class: "sg1-expand"
    }, null, 8, _hoisted_5$1), vue.createElementVNode("div", {
      onClick: function onClick($event) {
        return _ctx.removeToast(toast.id);
      },
      class: "sg1-close-btn"
    }, null, 8, _hoisted_6$1)]), vue.createElementVNode("div", _hoisted_7, [vue.createElementVNode("div", _hoisted_8, [vue.createElementVNode("pre", null, vue.toDisplayString(toast.content), 1)])])], 10, _hoisted_2$1);
  }), 128))])) : vue.createCommentVNode("", true);
}var css_248z$2 = "\n.sg1-toast-container {\r\n  --sg1ToastColor1: rgb(49, 49, 49);\r\n  --sg1ToastColor2: rgb(82, 82, 82);\r\n  --sg1ToastColor3: rgb(231, 231, 231);\r\n  --sg1ToastColor4: rgb(0, 0, 0);\r\n\r\n  --sg1ToastBg: 10px;\r\n  --sg1ToastColorText: var(--sg1ToastColor3);\r\n  --sg1ToastPaddingVertical: 10px;\r\n  --sg1ToastPaddingHorizontal: 10px;\r\n  --sg1ToastMargin: 10px;\r\n  --sg1ToastSizeIconLine: 2px;\r\n\r\n  --sg1toastWidth: 300px;\r\n  --maxToastHeight: 600px;\r\n\r\n  --sg1toastFontFamily: monospace;\r\n\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: var(--sg1ToastMargin);\r\n  height: 100%;\r\n  transform: translate(100%);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  z-index: 100;\n}\n.sg1-toast-container * {\r\n  box-sizing: border-box;\n}\n.sg1-toast {\r\n  min-width: var(--sg1toastWidth);\r\n  max-width: var(--sg1toastWidth);\r\n  margin-bottom: var(--sg1ToastMargin);\r\n  transform: translateX(-100%);\r\n  border-radius: 4px;\r\n  background-color: var(--sg1ToastColor1);\r\n  box-shadow: 0 0 0 1px white;\r\n  animation-name: sg1-fadein;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-out;\r\n  transition: 0.35s opacity;\r\n  transition-timing-function: ease-out;\n}\n@keyframes sg1-fadein {\n0% {\r\n    opacity: 0;\r\n    transform: translate(100%);\r\n    max-height: 0;\n}\n85% {\r\n    opacity: 1;\r\n    transform: translateX(-110%);\r\n    max-height: var(--maxToastHeight);\n}\n100% {\r\n    transform: translateX(-100%);\n}\n}\n.sg1-toast .sg1-head {\r\n  padding: var(--sg1ToastPaddingVertical) var(--sg1ToastPaddingHorizontal);\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\n}\n.sg1-toast .sg1-head .sg1-title {\r\n  font-size: 14px;\r\n  font-family: var(--sg1toastFontFamily);\r\n  color: var(--sg1ToastColorText);\n}\n.sg1-toast .sg1-head .title .sg1-id {\r\n  font-weight: 700;\n}\n.sg1-toast .sg1-content {\r\n  max-height: 0;\r\n  overflow: hidden;\r\n  padding: 0 var(--sg1ToastPaddingHorizontal);\r\n  position: relative;\n}\n.sg1-toast.sg1-active .sg1-content {\r\n  padding: var(--sg1ToastPaddingVertical) var(--sg1ToastPaddingHorizontal);\r\n  max-height: var(--maxToastHeight);\r\n  transition-timing-function: ease-out;\r\n  transition: 1s max-height, 0.5s padding;\n}\n.sg1-toast .sg1-content:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 1px;\r\n  width: 100%;\r\n  background-color: var(--sg1ToastColor2);\n}\n.sg1-wrapper-pre {\r\n  width: 100%;\r\n  padding: calc(var(--sg1ToastPaddingVertical) / 2)\r\n    calc(var(--sg1ToastPaddingHorizontal) / 2);\r\n  background-color: var(--sg1ToastColor4);\r\n  border-radius: 4px;\n}\n.sg1-toast .sg1-content pre {\r\n  width: 100%;\r\n  background-color: var(--sg1ToastColor4);\r\n  font-size: 12px;\r\n  font-family: var(--sg1toastFontFamily);\r\n  color: var(--sg1ToastColorText);\r\n\r\n  margin-top: 0;\r\n  margin-bottom: 0;\n}\n.sg1-toast .sg1-close-btn,\r\n.sg1-toast .sg1-expand {\r\n  font-size: 16px;\r\n  min-width: 1em;\r\n  height: 1em;\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\n}\n.sg1-toast .sg1-close-btn:after,\r\n.sg1-toast .sg1-close-btn:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: block;\r\n  height: var(--sg1ToastSizeIconLine);\r\n  width: 100%;\r\n  background-color: var(--sg1ToastColor3);\n}\n.sg1-toast .sg1-close-btn:after {\r\n  transform: rotate(45%);\n}\n.sg1-toast .sg1-close-btn:before {\r\n  transform: rotate(-45%);\n}\n.sg1-toast .sg1-close-btn:before {\r\n  transform: translate(-50%, -50%) rotate(45deg);\r\n  top: 50%;\r\n  left: 50%;\n}\n.sg1-toast .sg1-close-btn:after {\r\n  transform: translate(-50%, -50%) rotate(-45deg);\r\n  top: 50%;\r\n  left: 50%;\n}\n.sg1-toast .sg1-expand {\r\n  margin-left: auto;\n}\n.sg1-toast .sg1-expand:after {\r\n  content: \"\";\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  transform: rotate(45deg) scale(0.5);\r\n  border-top: calc(var(--sg1ToastSizeIconLine) * 2) solid var(--sg1ToastColor3);\r\n  border-right: calc(var(--sg1ToastSizeIconLine) * 2) solid\r\n    var(--sg1ToastColor3);\n}\n.sg1-toast.sg1-active .sg1-expand:after {\r\n  transform: rotate(135deg) scale(0.5);\n}\n.sg1-toast-faded-1 {\r\n  opacity: 0.5;\r\n  pointer-events: none;\n}\n.sg1-toast-faded-2 {\r\n  opacity: 0.25;\n}\n.sg1-toast-faded-3 {\r\n  opacity: 0;\n}\n.sg1-toast.sg1-toast-fade-out {\r\n  animation-name: sg1-fadeout;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-out;\n}\n@keyframes sg1-fadeout {\n0% {\r\n    transform: translateX(-100%);\r\n    max-height: var(--maxToastHeight);\n}\n100% {\r\n    opacity: 0;\r\n    transform: translate(100%);\r\n    max-height: 0;\n}\n}\r\n";
styleInject(css_248z$2);script$1.render = render$1;function gridLayout(id) {
  var boxIllustration;
  var boxText;
  switch (id) {
    case "a6f8":
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 6
      };
      boxText = {
        gridRowStart: 1,
        gridColumnStart: 6,
        gridRowEnd: 7,
        gridColumnEnd: 9
      };
      break;
    case "a5f8":
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 5
      };
      boxText = {
        gridRowStart: 1,
        gridColumnStart: 5,
        gridRowEnd: 7,
        gridColumnEnd: 9
      };
      break;
    case "a1f3":
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 4,
        gridRowEnd: 7,
        gridColumnEnd: 9
      };
      boxText = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 4
      };
      break;
    case "a1f4":
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 5,
        gridRowEnd: 7,
        gridColumnEnd: 9
      };
      boxText = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 5
      };
      break;
    case "d3e6":
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9
      };
      boxText = {
        gridRowStart: 4,
        gridColumnStart: 3,
        gridRowEnd: 6,
        gridColumnEnd: 7
      };
      break;
    case "b3c6":
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9
      };
      boxText = {
        gridRowStart: 2,
        gridColumnStart: 3,
        gridRowEnd: 4,
        gridColumnEnd: 7
      };
      break;
    /* all screen */
    case "a1f8":
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9
      };
      boxText = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9
      };
      break;
    case "b2e3":
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9
      };
      boxText = {
        gridRowStart: 2,
        gridColumnStart: 2,
        gridRowEnd: 6,
        gridColumnEnd: 4
      };
      break;
    case "b2e4":
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9
      };
      boxText = {
        gridRowStart: 2,
        gridColumnStart: 2,
        gridRowEnd: 6,
        gridColumnEnd: 5
      };
      break;
    case "b6e7":
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9
      };
      boxText = {
        gridRowStart: 2,
        gridColumnStart: 6,
        gridRowEnd: 6,
        gridColumnEnd: 8
      };
      break;
    case "b5e7":
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9
      };
      boxText = {
        gridRowStart: 2,
        gridColumnStart: 5,
        gridRowEnd: 6,
        gridColumnEnd: 8
      };
      break;
    case "e2e7":
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9
      };
      boxText = {
        gridRowStart: 5,
        gridColumnStart: 2,
        gridRowEnd: 6,
        gridColumnEnd: 8
      };
      break;
    case "b2b7":
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9
      };
      boxText = {
        gridRowStart: 2,
        gridColumnStart: 2,
        gridRowEnd: 3,
        gridColumnEnd: 8
      };
      break;
    case "d2e7":
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9
      };
      boxText = {
        gridRowStart: 4,
        gridColumnStart: 2,
        gridRowEnd: 6,
        gridColumnEnd: 8
      };
      break;
    /* mobile */
    case "d1f8":
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 4,
        gridColumnEnd: 9
      };
      boxText = {
        gridRowStart: 4,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9
      };
      break;
  }
  return {
    boxIllustration: boxIllustration,
    boxText: boxText
  };
}function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var script = /*#__PURE__*/vue.defineComponent({
  name: "game",
  components: {
    boxillustration: script$b,
    boxText: script$4,
    PreCachedImg: script$3,
    Spinner: script$2,
    ToastContainer: script$1
  },
  props: {
    idStory: {
      type: Number,
      default: 0
    },
    editorUsage: {
      type: Boolean,
      default: true
    },
    disableIlustration: {
      type: Boolean,
      default: true
    },
    langStory: {
      type: String,
      default: "null-lang"
    },
    langEditor: {
      type: String,
      default: "en"
    },
    strings: {
      type: Object,
      default: defaultStrings
    },
    gameData: {
      type: Object,
      default: defaultStory
    },
    indexMedia: {
      type: Object,
      default: defaultIndexMedia
    },
    pathMediaDir: {
      type: String,
      default: "http://your-website/media"
    },
    width: {
      type: String,
      default: "100vw"
    },
    height: {
      type: String,
      default: "100vh"
    },
    stopLink: {
      type: Boolean,
      default: false
    },
    //
    useTheme: {
      type: Boolean,
      default: false
    },
    canEmit: {
      type: Boolean,
      default: true
    },
    showToast: {
      type: Boolean,
      default: false
    }
  },
  emits: ["emitByNodes", "onInit", "beforeNavigation", "afterNavigation"],
  data: function data() {
    return {
      idRendered: false,
      initialized: false,
      stepToInit: {
        font: false,
        img: false
      },
      preCachedImgList: [],
      lang: false,
      textualTabs: ["descriptions", "chose", "game over"],
      playerState: "playing",
      player: {
        item: []
      },
      playerSimulation: {},
      currentTabs: [],
      nextTabsChose: [],
      illustration: false,
      onRunError: [],
      listBadMixId: "",
      isBadNodeMixForCose: [],
      gameLoaded: false,
      device: false,
      goToLink: false,
      urlToShow: false
    };
  },
  watch: {
    narrationBox: function narrationBox(val) {
      if (val == "node-bad-mix") {
        this.setListBadMixId();
      }
    },
    stepToInit: {
      handler: function handler() {
        if (this.stepToInit.font && this.stepToInit.img) {
          this.initialized = true;
          this.$emit("onInit");
        } else {
          this.initialized = false;
        }
      },
      deep: true
    },
    gameData: {
      handler: function handler() {
        this.LoadFont();
      },
      deep: true
    },
    playerState: function playerState(val) {
      if (val == "game end" && this.goToLink) {
        this.initialized = false;
      }
    },
    currentTabs: {
      handler: function handler() {
        this.$emit("afterNavigation");
      },
      deep: true
    }
  },
  computed: {
    narrationBox: function narrationBox() {
      if (this.onRunError.length > 0) {
        return "false";
      } else {
        if (this.currentTabs.length > 0) {
          if (this.currentTabs.length == 1) {
            return this.currentTabs[0].type;
          } else {
            var allowed = ["chose"];
            var listTypeCheck = this.currentTabs.filter(function (element) {
              return allowed.includes(element.type);
            });
            if (listTypeCheck.length == this.currentTabs.length) {
              return "default";
            } else {
              return "node-bad-mix";
            }
          }
        } else {
          return false;
        }
      }
    },
    /* Style */
    stylesObj: function stylesObj() {
      if (this.useTheme) {
        if (this.device) {
          var gameGrid = {
            width: this.width,
            height: this.height,
            gridTemplateColumns: this.gameData.style[this.device].margin + " repeat(6, 1fr) " + this.gameData.style[this.device].margin,
            gridTemplateRows: this.gameData.style[this.device].margin + " repeat(4, 1fr) " + this.gameData.style[this.device].margin
          };
          var gridLayoutItem;
          if (this.disableIlustration == true) {
            gridLayoutItem = gridLayout("a1f8");
          } else {
            gridLayoutItem = gridLayout(this.gameData.style[this.device]["layout-type"]);
          }
          var _boxIllustration = _objectSpread2({}, gridLayoutItem.boxIllustration);
          var _boxText = _objectSpread2({}, gridLayoutItem.boxText);
          var boxTextPadding = {
            padding: this.gameData.style[this.device]["box-text-padding"]
          };
          var currentBoxHeight;
          if (_boxText.gridRowEnd != 7 && _boxText.gridRowStart != 1) {
            currentBoxHeight = "(( " + this.height + " - " + "(" + this.gameData.style[this.device].margin + "+" + this.gameData.style[this.device].margin + "))/" + 4 + ") * (" + _boxText.gridRowEnd + " - " + _boxText.gridRowStart + ")";
          } else {
            //boxText.gridRowEnd == 7 && boxText.gridRowStart == 1
            currentBoxHeight = this.height;
          }
          var heightCalc = "calc( " + currentBoxHeight + " - " + this.gameData.style[this.device]["box-text-padding"] + " - " + this.gameData.style[this.device]["box-text-padding"] + " - (" + " + " + this.gameData.style[this.device]["box-text-padding"] + " + " + this.gameData.style["icon-single-arrow"]["size"] + "))";
          var tabResultsMaxHeight = {
            maxHeight: heightCalc,
            minHeight: heightCalc
          };

          /* FONT */

          var fontName = this.gameData.style["font-family"];
          var commonFontFamily = {
            fontFamily: this.gameData.style["font-family"]
          };
          var fontWeightList = this.gameData.style["font-weight"];
          var fontWeightListSelected = {
            fontWeight: this.gameData.style["font-weight-selected"]
          };
          var fontColor = {
            color: this.gameData.style["color"]
          };
          var fontSize1 = {
            fontSize: this.gameData.style[this.device]["font-size-1"]
          };

          /* single arrow next */
          var iconSingleArrow = this.gameData.style["icon-single-arrow"];

          /* multiple arrow next */
          var iconMultipleArrow = this.gameData.style["icon-multiple-arrow"];
          var paddingTopNextTab = {
            paddingTop: this.gameData.style[this.device]["box-text-padding"]
          };
          var paddingBottomNextTab = {
            paddingBottom: this.gameData.style[this.device]["box-text-padding"]
          };
          /* bg text box */
          var bgStyle = {
            bgType: this.gameData.style["bg-type"],
            bgColor: this.gameData.style["bg-color"]
          };
          return {
            gameGrid: gameGrid,
            layoutID: this.gameData.style[this.device]["layout-type"],
            boxIllustration: _boxIllustration,
            boxText: _boxText,
            fontName: fontName,
            commonFontFamily: commonFontFamily,
            boxTextPadding: boxTextPadding,
            fontWeightList: fontWeightList,
            fontWeightListSelected: fontWeightListSelected,
            fontColor: fontColor,
            fontSize1: fontSize1,
            iconSingleArrow: iconSingleArrow,
            iconMultipleArrow: iconMultipleArrow,
            paddingTopNextTab: paddingTopNextTab,
            paddingBottomNextTab: paddingBottomNextTab,
            tabResultsMaxHeight: tabResultsMaxHeight,
            bgStyle: bgStyle
          };
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    logMessage: function logMessage() {
      if (this.narrationBox == "false" || this.narrationBox == "node-bad-mix" || this.urlToShow) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    if (this.langStory !== "null-lang") {
      this.lang = this.langStory;
    } else {
      this.lang = this.gameData.postInfo.langList[0];
    }
    this.gameIntentLoad();

    /* |||||||||||||||||||| EVENTS |||||||||||||||||||||| */

    window.addEventListener("getPlayerValues" + this.idRendered, function (event) {
      localStorage.setItem("sg1Storage" + _this.idRendered, JSON.stringify(_this.getPlayerValues()));
    });
    window.addEventListener("getCurrentNodesValues" + this.idRendered, function (event) {
      localStorage.setItem("sg1Storage" + _this.idRendered, JSON.stringify(_this.getCurrentNodesValues()));
    });
    window.addEventListener("setStartNode" + this.idRendered, function (event) {
      var value = JSON.parse(localStorage["sg1Storage" + _this.idRendered]);
      localStorage.removeItem("sg1Storage" + _this.idRendered);
      _this.setStartNode(value);
    });
    window.addEventListener("setPlayerValues" + this.idRendered, function (event) {
      var value = JSON.parse(localStorage["sg1Storage" + _this.idRendered]);
      localStorage.removeItem("sg1Storage" + _this.idRendered);
      _this.setPlayerValues(value);
    });
  },
  created: function created() {
    this.init();
    if (this.idStory) {
      this.idRendered = this.idStory;
    } else if (this.gameData.id) {
      this.idRendered = this.gameData.id;
    } else {
      this.idRendered = 0;
    }
    window.addEventListener("resize", this.setDevice);
  },
  destroyed: function destroyed() {
    window.removeEventListener("resize", this.setDevice);
  },
  methods: {
    /* |||||||||||||||||||| GAME CORE |||||||||||||||||||||| */gameIntentLoad: function gameIntentLoad() {
      var _this2 = this;
      this.playerState = "playing";
      this.player = {
        stats: [],
        item: []
      };

      /* carico liste statistiche con livello preimpostato a 0 se non presenti nella whitelist */
      if (this.gameData.stats) {
        this.gameData.stats.forEach(function (stats) {
          var newStats = deepCopy(stats);
          newStats.level = 0;
          _this2.player.stats.push(newStats);
        });
      }

      //creo lista oggetti da visualizzare
      this.setPlayerItemFiltered();

      /* apro la tab di inizio */
      var startPointArray = [];
      var startPointId = this.gameData.story.tabs.find(function (element) {
        return element.gameStart;
      });
      if (startPointId) {
        startPointArray.push(startPointId.id);
        this.navigation(startPointArray);
      } else {
        var error = this.strings.noStart[this.langEditor];
        this.onRunError.push(error);
      }
    },
    /* stabilisco tabs da vedere */navigation: function navigation(newIdArray) {
      var _this3 = this;
      this.$emit("beforeNavigation");
      var tabs = this.gameData.story.tabs.filter(function (el) {
        return newIdArray.includes(el.id);
      });
      var tabsToNavigate = this.ResoveTabsList(tabs);
      if (tabsToNavigate.length == 0 && this.playerState != "game end") {
        var error = this.strings.wrongTabsId[this.langEditor];
        this.onRunError.push(error);

        //setto nextTabsChose
        this.nextTabsChose = [];
      } else {
        if (tabsToNavigate.length == 1) {
          this.singleBeemFoward = true;

          //setto nextTabsChose ---------------------------

          /* trovo nodi successivi */
          var tabToAdd = [];
          var _error = false;
          var single = false;
          this.gameData.story.beams.forEach(function (el) {
            if (tabsToNavigate[0].id == el.from) {
              var newEl = _this3.gameData.story.tabs.find(function (el2) {
                return el2.id == el.to;
              });
              tabToAdd.push(newEl);
            }
          });
          this.isBadNodeMixForCose = [];
          var testNextTabsChose = this.ResoveTabsList(tabToAdd, true);
          if (testNextTabsChose.length == 1) {
            if (testNextTabsChose[0].type == "descriptions" || testNextTabsChose[0].type == "game over") {
              single = true;
            }
          } else {
            //controllo se sono tutti chose
            testNextTabsChose.forEach(function (el) {
              if (el.type != "chose") {
                _error = true;
              }
            });
          }
          if (single) {
            this.nextTabsChose = [];
          } else {
            if (_error) {
              //errore
              this.narrationBox = "node-bad-mix";
              this.setListBadMixId();
              this.nextTabsChose = [];
            } else {
              this.nextTabsChose = testNextTabsChose;
            }
          }

          //-------------------------------------

          //setto immagine
          if (tabsToNavigate[0].img) {
            this.setImage(tabsToNavigate[0].img);
          }

          //salvo dati
          if (tabsToNavigate[0].save == true) {
            this.saveData();
          }
        } else {
          this.singleBeemFoward = false;

          /* controllo se tab to add sono tutti chose */
          var allChose = true;
          tabsToNavigate.forEach(function (el) {
            if (el.type != "chose") {
              allChose = false;
            }
          });
          if (allChose) {
            this.nextTabsChose = [];
          }
        }
        this.currentTabs = tabsToNavigate;
      }
    },
    //------------------------------------------------------
    ResoveTabsList: function ResoveTabsList(tabs) {
      var _this4 = this;
      var isNext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var stop = false;
      var n = 0;
      var textualTabs = this.textualTabs;
      var collectionOfTextualTabs = tabs;
      var _loop = function _loop() {
        n++;
        var allTextual = true;
        var newCollection = [];

        //controllo chi è testuale e chi no
        collectionOfTextualTabs.forEach(function (el) {
          if (!textualTabs.includes(el.type)) {
            allTextual = false;

            //creo clone nel caso si tratti di isNext
            if (isNext) {
              _this4.playerSimulation = deepCopy(_this4.player);
            }
            newCollection = [].concat(_toConsumableArray(newCollection), _toConsumableArray(_this4.ResoveTab(el, isNext)));
          } else {
            var procedeToNewCollection = true;
            if (isNext) {
              if (_this4.playerState != "playing") {
                procedeToNewCollection = false;
              }
            }
            if (procedeToNewCollection) {
              newCollection.push(el);
            }
          }
        });
        collectionOfTextualTabs = newCollection;
        if (allTextual == true || n >= 100) {
          stop = true;
        }
      };
      while (stop == false) {
        _loop();
      }
      return collectionOfTextualTabs;
    },
    /* risolvo singole tab logiche tab e passo a quelle successive il risultato è un'array di tab */ResoveTab: function ResoveTab(tab, isNext) {
      var _this5 = this;
      function operatorResolve(dn1, operator, dn2) {
        var n1 = parseInt(dn1);
        var n2 = parseInt(dn2);
        switch (operator) {
          case ">":
            if (n1 > n2) {
              return true;
            } else {
              return false;
            }
          case ">=":
            if (n1 >= n2) {
              return true;
            } else {
              return false;
            }
          case "<":
            if (n1 < n2) {
              return true;
            } else {
              return false;
            }
          case "<=":
            if (n1 <= n2) {
              return true;
            } else {
              return false;
            }
          case "==":
            if (n1 == n2) {
              return true;
            } else {
              return false;
            }
        }
      }
      var tabToAdd = [];
      var stop = false;
      var currentTab;
      if (_typeof(tab) === "object") {
        currentTab = tab;
      } else {
        /* si tratta di una inizializzazione (è l'id di un nodo start) */
        currentTab = this.gameData.story.tabs.find(function (el) {
          return el.id == tab;
        });
      }
      switch (currentTab.type) {
        case "start":
          break;
        case "descriptions":
          tabToAdd.push(currentTab);
          stop = true;
          break;
        case "chose":
          tabToAdd.push(currentTab);
          stop = true;
          break;
        case "game over":
          if (!isNext) {
            this.playerState = "game over";
            tabToAdd.push(currentTab);
          } else {
            stop = true;
            //MODIFICATO11111
          }

          stop = true;
          break;
        case "end":
          if (!isNext) {
            this.playerState = "game end";
            if (currentTab.openNewPage) {
              this.goToLink = true;
              if (this.stopLink) {
                this.urlToShow = this.strings.urlRedirect[this.langEditor] + ": " + currentTab.url[this.lang];
              } else {
                window.open(currentTab.url[this.lang], "_self");
              }
            } else {
              tabToAdd.push(currentTab);
              stop = true;
            }
          } else {
            stop = true;
            //MODIFICATO11111
          }

          break;
        case "redirect":
          var errorRedirect = false;
          if (currentTab.listRedirectId.length > 0) {
            currentTab.listRedirectId.forEach(function (el) {
              if (!el) {
                errorRedirect = true;
              }
            });
          } else {
            errorRedirect = this.strings.linkNodeEmpty[this.langEditor] + " ( ID: " + currentTab.id + " )";
          }
          if (errorRedirect == false) {
            var idRedirect;
            if (currentTab.listRedirectId.length == 1) {
              idRedirect = currentTab.listRedirectId[0];
            } else {
              var indexRandom = randomNum(0, currentTab.listRedirectId.length - 1);
              idRedirect = currentTab.listRedirectId[indexRandom];
            }
            var tabToRedirect = this.gameData.story.tabs.find(function (element) {
              return element.id == idRedirect;
            });
            currentTab = tabToRedirect;
          } else {
            var error = this.strings.redirectError[this.langEditor] + " ( ID: " + currentTab.id + " )";
            this.onRunError.push(error);
            stop = true;
          }
          if (errorRedirect) {
            this.onRunError.push(errorRedirect);
            stop = true;
          }
          break;
        case "set stat":
          var itemExist3 = this.gameData.stats.find(function (el) {
            return el.id == currentTab.idStat;
          });
          if (itemExist3) {
            if (itemExist3.length == 0 || currentTab.operator == false) {
              var _error2 = this.strings.expressionIncoplete[this.langEditor] + " ( ID: " + currentTab.id + " )";
              this.onRunError.push(_error2);
              stop = true;
            } else {
              this.modifyStat(currentTab.idStat, currentTab.operator, currentTab.ammount, isNext);
            }
          } else {
            var _error3 = this.strings.expressionIncoplete[this.langEditor] + " ( ID: " + currentTab.id + " )";
            this.onRunError.push(_error3);
            stop = true;
          }
          break;
        case "set object":
          var itemExist2 = this.gameData.items.find(function (el) {
            return el.id == currentTab.idObject;
          });
          if (itemExist2) {
            if (itemExist2.length == 0 || currentTab.operator == false) {
              var _error4 = this.strings.expressionIncoplete[this.langEditor] + " ( ID: " + currentTab.id + " )";
              this.onRunError.push(_error4);
              stop = true;
            } else {
              this.modifyItem(currentTab.idObject, currentTab.operator, currentTab.ammount, isNext);
            }
          } else {
            var _error5 = this.strings.expressionIncoplete[this.langEditor] + " ( ID: " + currentTab.id + " )";
            this.onRunError.push(_error5);
            stop = true;
          }
          break;
        case "if stat":
          var statToCheck;
          if (!isNext) {
            statToCheck = this.player.stats.find(function (element) {
              return element.id == currentTab.idStat;
            });
          } else {
            statToCheck = this.playerSimulation.stats.find(function (element) {
              return element.id == currentTab.idStat;
            });
          }
          if (statToCheck) {
            /* controllo che non siano presenti errori nella espressione */

            if (currentTab.ammount === false || currentTab.ammount == undefined || currentTab.operator == false) {
              var _error6 = this.strings.expressionIncoplete[this.langEditor] + " ( ID: " + currentTab.id + " )";
              this.onRunError.push(_error6);
              stop = true;
            } else {
              var status = operatorResolve(statToCheck.level, currentTab.operator, currentTab.ammount);
              if (status) {
                var tabsTrue = this.gameData.story.tabs.filter(function (element) {
                  return currentTab.trueId.includes(element.id);
                });
                tabToAdd = tabsTrue;
                stop = true;
              } else {
                var tabsFalse = this.gameData.story.tabs.filter(function (element) {
                  return currentTab.falseId.includes(element.id);
                });
                tabToAdd = tabsFalse;
                stop = true;
              }
            }
          } else {
            var _error7 = this.strings.expressionIncoplete[this.langEditor] + " ( ID: " + currentTab.id + " )";
            this.onRunError.push(_error7);
            stop = true;
          }
          break;
        case "if item":
          var itemToCheck;
          if (!isNext) {
            itemToCheck = this.player.item.filter(function (element) {
              return element.id == currentTab.idObject;
            }).length;
          } else {
            itemToCheck = this.playerSimulation.item.filter(function (element) {
              return element.id == currentTab.idObject;
            }).length;
          }

          /* controllo che non siano presenti errori nella espressione */

          //controllo se esiste l'oggetto
          var itemExist = this.gameData.items.find(function (el) {
            return el.id == currentTab.idObject;
          });
          if (itemExist) {
            if (itemExist.length == 0 || currentTab.operator == false) {
              var _error8 = this.strings.expressionIncoplete[this.langEditor] + " ( ID: " + currentTab.id + " )";
              this.onRunError.push(_error8);
              stop = true;
            } else {
              var status2 = operatorResolve(itemToCheck, currentTab.operator, currentTab.ammount);
              if (status2) {
                var _tabsTrue = this.gameData.story.tabs.filter(function (element) {
                  return currentTab.trueId.includes(element.id);
                });
                tabToAdd = _tabsTrue;
                stop = true;
              } else {
                var _tabsFalse = this.gameData.story.tabs.filter(function (element) {
                  return currentTab.falseId.includes(element.id);
                });
                tabToAdd = _tabsFalse;
                stop = true;
              }
            }
          } else {
            var _error9 = this.strings.expressionIncoplete[this.langEditor] + " ( ID: " + currentTab.id + " )";
            this.onRunError.push(_error9);
            stop = true;
          }
          break;
        case "image":
          if (!isNext) {
            this.setImage(currentTab.img);
          }
          break;
        case "emit_function":
          if (!isNext) {
            var objToEmitComputed = {};
            currentTab.objToEmit.forEach(function (emitId) {
              _this5.player.stats.forEach(function (vars) {
                if (emitId == vars.id) {
                  objToEmitComputed[vars.name.en] = vars.level;
                }
              });
            });
            if (this.canEmit) {
              this.$emit("emitByNodes", objToEmitComputed);
            }
            if (this.showToast) {
              this.$refs.ToastContainerRef.addToast({
                type: currentTab.type.replaceAll(" ", "_"),
                title: currentTab.humanName.default + ' <span class="sg1-id">ID: ' + currentTab.id + "</span>",
                content: objToEmitComputed
              });
            }
          }
          break;
      }
      if (stop == false) {
        /* trovo nodi successivi perchè il corrente nodo non si può visualizzare */
        this.gameData.story.beams.forEach(function (el) {
          if (currentTab.id == el.from) {
            tabToAdd.push(el.to);
          }
        });
        stop = true;
      }
      return tabToAdd;
    },
    /* modify stat */modifyStat: function modifyStat(idStat, operator, ammount) {
      var isNext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var chosenStat = this.gameData.stats.find(function (element) {
        return element.id == idStat;
      });
      var playerStat;
      if (!isNext) {
        playerStat = this.player.stats.find(function (element) {
          return element.id == idStat;
        });
      } else {
        playerStat = this.playerSimulation.stats.find(function (element) {
          return element.id == idStat;
        });
      }
      var resultAmmount;
      var use;
      switch (operator) {
        case "+":
          resultAmmount = ammount;
          use = 1;
          break;
        case "-":
          resultAmmount = ammount;
          use = 2;
          break;
        case "*":
          resultAmmount = parseInt(playerStat.level) * parseInt(ammount);
          use = 1;
          break;
        case "/":
          resultAmmount = Math.floor(parseInt(playerStat.level) / parseInt(ammount));
          use = 2;
          break;
        case "=":
          resultAmmount = ammount;
          use = 5;
          break;
      }

      //  + *
      if (use == 1) {
        /* controllo se giocatore ha statistica */
        playerStat.level = parseInt(playerStat.level) + parseInt(resultAmmount);
      }

      //  - /
      if (use == 2) {
        /* controllo se giocatore ha statistica */
        playerStat.level = parseInt(playerStat.level) - parseInt(resultAmmount);
      }

      //  =
      if (use == 5) {
        playerStat.level = resultAmmount;
      }

      //CORREZIONI VALORE ---------------------
      if (playerStat.level > chosenStat.max) {
        playerStat.level = chosenStat.max;
      }
      if (playerStat.level < 0 && !isNaN(playerStat.level)) {
        playerStat.level = 0;
      }
      //---------------------------------------
    },
    /* modify item */modifyItem: function modifyItem(idObject, operator, ammount) {
      var isNext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      //elemento da usare
      var chosenItem = this.gameData.items.find(function (element) {
        return element.id == idObject;
      });
      var nItemPlayer;
      if (!isNext) {
        nItemPlayer = this.player.item.filter(function (el) {
          return el.id == chosenItem.id;
        }).length;
      } else {
        nItemPlayer = this.playerSimulation.item.filter(function (el) {
          return el.id == chosenItem.id;
        }).length;
      }
      var resultAmmount;
      var use;

      //resolve
      switch (operator) {
        case "+":
          resultAmmount = ammount;
          use = 1;
          break;
        case "-":
          resultAmmount = ammount;
          use = 2;
          break;
        case "*":
          resultAmmount = parseInt(nItemPlayer) * parseInt(ammount);
          use = 1;
          break;
        case "/":
          resultAmmount = parseInt(nItemPlayer) - Math.floor(parseInt(nItemPlayer) / parseInt(ammount));
          use = 2;
          break;
        case "=":
          if (ammount < nItemPlayer) {
            resultAmmount = nItemPlayer - ammount;
            use = 2;
          } else {
            resultAmmount = ammount - nItemPlayer;
            use = 1;
          }
          break;
      }
      if (use == 1) {
        for (var index = 0; index < resultAmmount; index++) {
          this.player.item.push(chosenItem);
        }
      }
      if (use == 2) {
        var newArray = [];
        var nPushed = 0;
        this.player.item.forEach(function (element) {
          if (chosenItem.id == element.id) {
            nPushed++;
            if (nPushed <= nItemPlayer - resultAmmount) {
              newArray.push(element);
            }
          } else {
            newArray.push(element);
          }
        });
        this.player.item = newArray;
      }

      //setto lista oggetti
      //this.player.item = totalResult

      //rifaccio lista oggetti da visualizzare
      this.setPlayerItemFiltered();
    },
    //------------------------------------------------------
    /* leggo beem da punto di inizio a punto di fine */
    reedBeams: function reedBeams(fromId) {
      var newIdArray = [];
      this.gameData.story.beams.forEach(function (beam) {
        if (fromId == beam.from) {
          newIdArray.push(beam.to);
        }
      });
      this.navigation(newIdArray);
    },
    saveData: function saveData() {},
    setImage: function setImage(imageName) {
      this.illustration = imageName;
    },
    /* ||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
    /* animazione selettore */
    animatePaperSelector: function animatePaperSelector() {
      var _this6 = this;
      if (this.hoveCharacterSheet == true) {
        if (this.subTabCharacterSheet == "stats") {
          this.player.stats.forEach(function (element) {
            if (element.id == _this6.seletedItem) {
              element.active = 2;
            } else {
              if (element.active != 0) {
                element.active = 1;
              }
            }
          });
        } else {
          this.playerItemFiltered.forEach(function (element) {
            if (element.id == _this6.seletedItem) {
              element.active = 2;
            } else {
              if (element.active != 0) {
                element.active = 1;
              }
            }
          });
        }
      }
    },
    clearAnimatePaperSelector: function clearAnimatePaperSelector() {
      this.player.stats.forEach(function (element) {
        element.active = 0;
      });
      this.player.item.forEach(function (element) {
        element.active = 0;
      });
    },
    /* setto paper */setDescriptionPaper: function setDescriptionPaper(item) {
      var _this7 = this;
      this.seletedItem = item.id;
      this.animatePaperSelector();
      this.descriptionPaperName = item.name[this.lang];
      this.descriptionPaperDescription = item.description[this.lang];
      this.oldItemTap = this.itemTap; //Object.assign({},this.itemTap)
      this.itemTap = this.itemTap + 1; //Object.assign({},this.itemTap) + 1
      setTimeout(function () {
        if (_this7.itemTap == 0) {
          _this7.seletedItem = false;
          _this7.animatePaperSelector();
        }
      }, 4000);
    },
    /* setto lista oggetti da esporre  */setPlayerItemFiltered: function setPlayerItemFiltered() {
      var _this8 = this;
      var listItems = [];
      this.player.item.forEach(function (item) {
        var found = listItems.find(function (element) {
          return element.id == item.id;
        });
        if (found == undefined) {
          var nCopy = _this8.player.item.filter(function (element) {
            return element.id == item.id;
          }).length;
          var newItem = Object.assign({}, item);
          newItem.amount = nCopy;
          listItems.push(newItem);
        }
      });
      this.playerItemFiltered = listItems;
    },
    /* lista nodi badMix */setListBadMixId: function setListBadMixId() {
      var BadMixList = "";
      var allDescription = this.currentTabs.filter(function (el) {
        return el.type == "descriptions";
      });
      allDescription.forEach(function (el, index) {
        BadMixList = BadMixList + el.id;
        if (index + 1 < allDescription.length) BadMixList = BadMixList + ", ";
      });
      this.listBadMixId = BadMixList;
    },
    /* PROJECT X ------------------------------------- */activateDemo: function activateDemo() {
      //full screen
      function requestFullScreen(element) {
        // Supports most browsers and their versions.
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
        if (requestMethod) {
          // Native full screen.
          requestMethod.call(element);
        } else if (typeof window.ActiveXObject !== "undefined") {
          // Older IE.
          var wscript = new ActiveXObject("WScript.Shell");
          if (wscript !== null) {
            wscript.SendKeys("{F11}");
          }
        }
      }
      var elem = document.body; // Make the body go full screen.
      requestFullScreen(elem);
    },
    /* STYLE ---------------------------------------- */init: function init() {
      if (this.useTheme) {
        this.setDevice();
        this.LoadFont();
      } else {
        this.stepToInit.font = true;
      }
      this.setPreCacheImgList();
      if (this.preCachedImgList.length == 0) {
        this.stepToInit.img = true;
      }
    },
    LoadFont: function LoadFont() {
      var _this9 = this;
      this.stepToInit.font = false;
      WebFont.load({
        google: {
          families: [this.stylesObj.fontName + ":" + this.stylesObj.fontWeightList.join()]
        },
        active: function active() {
          _this9.stepToInit.font = true;
        },
        inactive: function inactive() {
          _this9.stepToInit.font = true;
        }
      });
    },
    setPreCacheImgList: function setPreCacheImgList() {
      var _this10 = this;
      this.gameData.story.tabs.forEach(function (el) {
        if (el.img) {
          if (!_this10.editorUsage) {
            var data = {};
            var name = _this10.indexMedia.find(function (el2) {
              return el2.Id == el.img.ID;
            }).name;
            var imgPathPart = _this10.pathMediaDir + "/" + name;
            var imgSize = _this10.gameData.style["img-sizes"];

            /* list of srcset rules */
            imgSize.forEach(function (elImg, index) {
              data.srcset = data.srcset + imgPathPart + "-" + elImg.width + "x" + elImg.height + ".jpg " + elImg.width + "w";
              if (index + 1 != imgSize.length) {
                data.srcset = data.srcset + ",";
              }
              if (index + 1 != imgSize.length) {
                data.sizes = data.sizes + "( max-width:" + elImg.width + "px ) " + elImg.width + "px, ";
              } else {
                data.sizes = data.sizes + elImg.width + "px";
              }
              /* fallback src */
              data.src = imgPathPart + "-" + imgSize[imgSize.length - 1]["width"] + "x" + imgSize[imgSize.length - 1]["height"] + ".jpg";
            });
            _this10.preCachedImgList.push(data);
          } else {
            _this10.preCachedImgList.push(el.img.srcFull[0]);
          }
        }
      });
    },
    setImgsLoaded: function setImgsLoaded() {
      this.stepToInit.img = true;
    },
    /* dom method handler */setDevice: function setDevice() {
      if (window.innerWidth > 992) {
        this.device = "desktop";
      } else {
        this.device = "mobile";
      }
    },
    /* data retriving & other feature----------------------------------------*/getPlayerValues: function getPlayerValues() {
      return this.player.stats;
    },
    getCurrentNodesValues: function getCurrentNodesValues() {
      return this.currentTabs;
    },
    setStartNode: function setStartNode(value) {
      var newStart;
      if (typeof value === "string") {
        newStart = this.gameData.story.tabs.find(function (el) {
          return el.name == value;
        });
      } else {
        newStart = this.gameData.story.tabs.find(function (el) {
          return el.id == value;
        });
      }
      if (newStart) {
        this.navigation([newStart.id]);
      }
    },
    setPlayerValues: function setPlayerValues(value) {
      this.player.stats = value;
    }
  }
});var _hoisted_1 = ["sg1-id-stroy"];
var _hoisted_2 = {
  key: 2,
  class: "sg1-log-app"
};
var _hoisted_3 = {
  key: 0,
  class: "sg1-game-error sg1-e-1"
};
var _hoisted_4 = {
  key: 1,
  class: "sg1-game-error sg1-e-3"
};
var _hoisted_5 = {
  key: 2,
  class: "sg1-game-message sg1-e-4"
};
var _hoisted_6 = {
  key: 5,
  class: "sg1-load-screen"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_boxillustration = vue.resolveComponent("boxillustration");
  var _component_boxText = vue.resolveComponent("boxText");
  var _component_ToastContainer = vue.resolveComponent("ToastContainer");
  var _component_PreCachedImg = vue.resolveComponent("PreCachedImg");
  var _component_Spinner = vue.resolveComponent("Spinner");
  return _ctx.stylesObj || _ctx.useTheme == false ? (vue.openBlock(), vue.createElementBlock("div", {
    key: 0,
    "sg1-id-stroy": _ctx.idStory,
    style: vue.normalizeStyle(_ctx.stylesObj.gameGrid),
    class: vue.normalizeClass([{
      'sg1-no-theme': !_ctx.stylesObj,
      'sg1-no-illustration': _ctx.disableIlustration == false || !_ctx.illustration,
      'sg1-toast-wrapper': _ctx.showToast
    }, "sg1-game-grid sg1-game"])
  }, [_ctx.disableIlustration == false && _ctx.illustration && _ctx.initialized && !_ctx.logMessage ? (vue.openBlock(), vue.createBlock(_component_boxillustration, {
    key: 0,
    editorUsage: _ctx.editorUsage,
    illustration: _ctx.illustration,
    indexMedia: _ctx.indexMedia,
    pathMediaDir: _ctx.pathMediaDir,
    style: vue.normalizeStyle(_ctx.gameData.style),
    stylesObj: _ctx.stylesObj
  }, null, 8, ["editorUsage", "illustration", "indexMedia", "pathMediaDir", "style", "stylesObj"])) : vue.createCommentVNode("", true), _ctx.initialized && _ctx.narrationBox !== false && _ctx.narrationBox !== 'node-bad-mix' && !_ctx.logMessage ? (vue.openBlock(), vue.createBlock(_component_boxText, {
    key: 1,
    narrationBox: _ctx.narrationBox,
    lang: _ctx.lang,
    "current-tabs": _ctx.currentTabs,
    nextTabsChose: _ctx.nextTabsChose,
    stylesObj: _ctx.stylesObj,
    onReedBeams: _ctx.reedBeams,
    onGameIntentLoad: _ctx.gameIntentLoad
  }, null, 8, ["narrationBox", "lang", "current-tabs", "nextTabsChose", "stylesObj", "onReedBeams", "onGameIntentLoad"])) : vue.createCommentVNode("", true), _ctx.logMessage ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [_ctx.narrationBox == false && _ctx.onRunError.length == 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, vue.toDisplayString(_ctx.strings.noEnd[_ctx.langEditor]), 1)) : vue.createCommentVNode("", true), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.onRunError, function (el, index) {
    return vue.openBlock(), vue.createElementBlock("div", {
      key: index,
      class: "sg1-game-error sg1-e-2"
    }, vue.toDisplayString(el), 1);
  }), 128)), _ctx.narrationBox == 'node-bad-mix' ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, vue.toDisplayString(_ctx.strings.nodeBadMix[_ctx.langEditor]) + " " + vue.toDisplayString(_ctx.listBadMixId) + " ) ", 1)) : vue.createCommentVNode("", true), _ctx.urlToShow ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5, vue.toDisplayString(_ctx.urlToShow), 1)) : vue.createCommentVNode("", true)])) : vue.createCommentVNode("", true), _ctx.showToast ? (vue.openBlock(), vue.createBlock(_component_ToastContainer, {
    key: 3,
    ref: "ToastContainerRef"
  }, null, 512)) : vue.createCommentVNode("", true), _ctx.preCachedImgList ? (vue.openBlock(), vue.createBlock(_component_PreCachedImg, {
    key: 4,
    editorUsage: _ctx.editorUsage,
    preCachedImgList: _ctx.preCachedImgList,
    onSetImgsLoaded: _ctx.setImgsLoaded
  }, null, 8, ["editorUsage", "preCachedImgList", "onSetImgsLoaded"])) : vue.createCommentVNode("", true), !_ctx.initialized ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6, [vue.createVNode(_component_Spinner)])) : vue.createCommentVNode("", true)], 14, _hoisted_1)) : vue.createCommentVNode("", true);
}var css_248z$1 = "\nbody {\n\t\tmargin: 0;\n}\n.sg1-no-theme :where(.sg1-label-description) {\n\t\tmargin-bottom: 30px;\n}\n.sg1-no-theme :where(.sg1-wrapper-box-text) {\n\t\tgrid-row: 1/3;\n\t\tpadding: 20px;\n\t\tbackground-color: whitesmoke;\n\t\toverflow: auto;\n\t\theight: 100%;\n}\n.sg1-no-theme :where(.sg1-box-illustration) + :where(.sg1-wrapper-box-text) {\n\t\tgrid-column: 1/3;\n\t\tgrid-row: 2;\n}\n.sg1-no-theme :where(.sg1-tab-results) {\n\t\tfont-family: monospace;\n\t\tfont-size: 16px;\n\t\tcolor: grey;\n}\n.sg1-no-theme:is(.sg1-game-grid) {\n\t\tmax-width: calc(100% - 50px);\n\t\tmax-width: 992px;\n\t\taspect-ratio: 1/1;\n\t\tmax-height: calc(100vh - 50px);\n\t\tmargin-top: 25px;\n\t\tmargin-right: auto;\n\t\tmargin-left: auto;\n\t\tdisplay: grid;\n\t\tgrid-template-rows: 70% 30%;\n\t\tbox-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);\n}\n.sg1-no-theme:is(.sg1-game-grid):is(.sg1-no-illustration) {\n\t\tgrid-template-rows: 2fr 1fr;\n}\n.sg1-no-theme :where(.sg1-label-multiple-chose) {\n\t\tmax-width: calc(100% - 25px);\n\t\tmargin-left: 25px;\n}\n.sg1-no-theme :where(.list-item):before {\n\t\tcontent: \"◆\";\n\t\tdisplay: inline-block;\n\t\tmargin-right: 10px;\n}\n.sg1-no-theme :where(.sg1-single-beem-icon) {\n\t\tcursor: pointer;\n\t\tfont-size: 12px;\n\t\twidth: 2em;\n\t\theight: 2em;\n\t\tposition: relative;\n}\n.sg1-no-theme :where(.sg1-single-beem-icon):before {\n\t\tcontent: \"\";\n\t\twidth: 0;\n\t\theight: 0;\n\t\tborder-style: solid;\n\t\tborder-width: 1em 1em 0 1em;\n\t\tborder-color: grey transparent transparent transparent;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n}\n.sg1-no-theme :where(.sg1-box-illustration) {\n\t\tgrid-column: 1/3;\n\t\tgrid-row: 1/1;\n}\n.sg1-no-theme :where(img) {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tobject-fit: cover;\n\t\tobject-position: center;\n}\n.sg1-game-grid:is(.sg1-toast-wrapper) {\n\t\tposition: relative;\n\t\toverflow: hidden;\n}\n";
styleInject(css_248z$1);var css_248z = "\n.sg1-game-grid[data-v-19e2190c]:not(.sg1-no-theme) {\n\t\tdisplay: grid;\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tposition: relative;\n\t\tbackground-color: #282828;\n}\n.sg1-load-screen[data-v-19e2190c] {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n}\n.sg1-log-app[data-v-19e2190c] {\n\t\tgrid-row-start: 1;\n\t\tgrid-column-start: 1;\n\t\tgrid-row-end: 7;\n\t\tgrid-column-end: 9;\n\t\tflex-direction: column;\n\t\tmax-width: 100% !important;\n\t\toverflow: hidden;\n\n\t\tbackground-color: #282828;\n\t\tz-index: 100;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n}\n.sg1-log-app > *[data-v-19e2190c] {\n\t\tfont-size: 15px;\n\t\tmax-width: 100%;\n\t\tpadding-right: 20px;\n\t\tpadding-left: 20px;\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t\tfont-family: monospace;\n}\n.sg1-game-error[data-v-19e2190c] {\n\t\tcolor: #ed6767;\n}\n.sg1-game-message[data-v-19e2190c] {\n\t\tcolor: #67ed72;\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-19e2190c";/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,game:script});// install function executed by Vue.use()
var install = function installTestStLibrary(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];
    app.component(componentName, component);
  });
};var components=/*#__PURE__*/Object.freeze({__proto__:null,'default':install,game:script});// Attach named exports directly to plugin. IIFE/CJS will
// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)
Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    componentName = _ref2[0],
    component = _ref2[1];
  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;