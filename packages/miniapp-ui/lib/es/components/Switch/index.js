import{__rest as e}from"tslib";import t from"react";import s from"@tarojs/taro";import r from"clsx";import{View as i}from"@tarojs/components";import"./index.css";export default o=>{const{prefixCls:a="zc-switch",className:c,size:d="24",disabled:l,type:n="block"}=o,m=e(o,["prefixCls","className","size","disabled","type"]),[h,p]=t.useState(o.checked);t.useEffect((()=>{p(!!o.checked)}),[o.checked]);const b=(e,t,r)=>`${s.pxTransform((parseInt(String(e))-r)*t)}`,f=t.useMemo((()=>"block"===n?{width:b(d,4,0),height:b(d,2,0),borderRadius:3}:{width:b(d,4,0),height:b(d,2,0),borderRadius:b(d,2,0)}),[d,n]),u=t.useMemo((()=>"block"===n?h?{width:b(d,2,1),height:b(d,2,1),transform:`translateX(${s.pxTransform(2*parseInt(String(d)))})`,borderRadius:3}:{width:b(d,2,1),height:b(d,2,1),borderRadius:3}:{width:b(d,2,1),height:b(d,2,1)}),[d,h,n]),g=r(a,c,{[`${a}-checked`]:h,disabled:l});return t.createElement(i,Object.assign({className:g,onClick:()=>{return e=h,void(l||(p(!e),null===(t=null==o?void 0:o.onChange)||void 0===t||t.call(o,!e)));var e,t}},{style:f},m),t.createElement(i,Object.assign({className:`${a}-box`},{style:u})))};