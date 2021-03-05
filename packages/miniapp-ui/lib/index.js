"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("@tarojs/components"),r=require("@tarojs/taro");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=a(e),s=a(r);function i(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=i(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}exports.Demo=()=>o.default.createElement(t.View,{className:"demo"},o.default.createElement(t.View,{className:"demo-text"},"11111222")),exports.Switch=e=>{const{prefixCls:r="zc-switch",className:a,size:l="24",disabled:n,type:c="block"}=e,d=
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]])}return r}(e,["prefixCls","className","size","disabled","type"]),[u,f]=o.default.useState(e.checked);o.default.useEffect((()=>{f(!!e.checked)}),[e.checked]);const p=(e,t,r)=>`${s.default.pxTransform((parseInt(String(e))-r)*t)}`,h=o.default.useMemo((()=>"block"===c?{width:p(l,4,0),height:p(l,2,0),borderRadius:3}:{width:p(l,4,0),height:p(l,2,0),borderRadius:p(l,2,0)}),[l,c]),b=o.default.useMemo((()=>"block"===c?u?{width:p(l,2,1),height:p(l,2,1),transform:`translateX(${s.default.pxTransform(2*parseInt(String(l)))})`,borderRadius:3}:{width:p(l,2,1),height:p(l,2,1),borderRadius:3}:{width:p(l,2,1),height:p(l,2,1)}),[l,u,c]),m=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}(r,a,{[`${r}-checked`]:u,disabled:n});return o.default.createElement(t.View,Object.assign({className:m,onClick:()=>{return t=u,void(n||(f(!t),null===(r=null==e?void 0:e.onChange)||void 0===r||r.call(e,!t)));var t,r}},{style:h},d),o.default.createElement(t.View,Object.assign({className:`${r}-box`},{style:b})))};
//# sourceMappingURL=index.js.map
