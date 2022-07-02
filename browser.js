// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,f=n.__lookupSetter__,l=t,c=function(e,r,t){var l,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(a.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,r,t.get),_&&u&&u.call(e,r,t.set),e},p=r()?l:c,_=function(e,r,t){p(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=Math.floor;function s(e,r,t,n){var o,i,u,a,f,l,c,p,_,b,y,v,m;if(e<=0)return 0;if(1===e||0===t)return r[n];if(o=n,e<8){for(y=0,m=0;m<e;m++)y+=r[o],o+=t;return y}if(e<=128){for(i=r[o],u=r[o+t],a=r[o+2*t],f=r[o+3*t],l=r[o+4*t],c=r[o+5*t],p=r[o+6*t],_=r[o+7*t],o+=8*t,b=e%8,m=8;m<e-b;m+=8)i+=r[o],u+=r[o+t],a+=r[o+2*t],f+=r[o+3*t],l+=r[o+4*t],c+=r[o+5*t],p+=r[o+6*t],_+=r[o+7*t],o+=8*t;for(y=i+u+(a+f)+(l+c+(p+_));m<e;m++)y+=r[o],o+=t;return y}return v=d(e/2),s(v-=v%8,r,t,o)+s(e-v,r,t,o+v*t)}function b(e,r,t){var n,o,i;if(e<=0)return 0;if(1===e||0===t)return r[0];if(n=t<0?(1-e)*t:0,e<8){for(o=0,i=0;i<e;i++)o+=r[n],n+=t;return o}return s(e,r,t,n)}return _(b,"ndarray",s),b},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dssumpw=r();
//# sourceMappingURL=browser.js.map
