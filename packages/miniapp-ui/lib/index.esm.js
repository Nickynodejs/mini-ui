import e from"react";import{View as t}from"@tarojs/components";import r from"@tarojs/taro";const o=()=>e.createElement(t,{className:"demo"},e.createElement(t,{className:"demo-text"},"11111222"));
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
***************************************************************************** */function s(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=s(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}const a=o=>{const{prefixCls:a="zc-switch",className:n,size:i="24",disabled:c,type:l="block"}=o,d=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(r[o[s]]=e[o[s]])}return r}(o,["prefixCls","className","size","disabled","type"]),[f,m]=e.useState(o.checked);e.useEffect((()=>{m(!!o.checked)}),[o.checked]);const h=(e,t,o)=>`${r.pxTransform((parseInt(String(e))-o)*t)}`,p=e.useMemo((()=>"block"===l?{width:h(i,4,0),height:h(i,2,0),borderRadius:3}:{width:h(i,4,0),height:h(i,2,0),borderRadius:h(i,2,0)}),[i,l]),b=e.useMemo((()=>"block"===l?f?{width:h(i,2,1),height:h(i,2,1),transform:`translateX(${r.pxTransform(2*parseInt(String(i)))})`,borderRadius:3}:{width:h(i,2,1),height:h(i,2,1),borderRadius:3}:{width:h(i,2,1),height:h(i,2,1)}),[i,f,l]),u=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=s(e))&&(o&&(o+=" "),o+=t);return o}(a,n,{[`${a}-checked`]:f,disabled:c});return e.createElement(t,Object.assign({className:u,onClick:()=>{return e=f,void(c||(m(!e),null===(t=null==o?void 0:o.onChange)||void 0===t||t.call(o,!e)));var e,t}},{style:p},d),e.createElement(t,Object.assign({className:`${a}-box`},{style:b})))};export{o as Demo,a as Switch};
//# sourceMappingURL=index.esm.js.map
