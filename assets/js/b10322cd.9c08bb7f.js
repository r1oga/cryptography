"use strict";(self.webpackChunkcryptography=self.webpackChunkcryptography||[]).push([[2159],{9613:(e,t,r)=>{r.d(t,{Zo:()=>y,kt:()=>h});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},y=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,y=c(e,["components","mdxType","originalType","parentName"]),l=s(r),d=a,h=l["".concat(p,".").concat(d)]||l[d]||u[d]||o;return r?n.createElement(h,i(i({ref:t},y),{},{components:r})):n.createElement(h,i({ref:t},y))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5408:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(1163),a=(r(9496),r(9613));const o={sidebar_position:5},i="ChaCha20-Poly1305",c={unversionedId:"primitives/authenticated-encryption/chacha20-poy1305",id:"primitives/authenticated-encryption/chacha20-poy1305",title:"ChaCha20-Poly1305",description:"",source:"@site/docs/primitives/authenticated-encryption/chacha20-poy1305.md",sourceDirName:"primitives/authenticated-encryption",slug:"/primitives/authenticated-encryption/chacha20-poy1305",permalink:"/cryptography/docs/primitives/authenticated-encryption/chacha20-poy1305",draft:!1,editUrl:"https://github.com/r1oga/cryptography/tree/main/docs/docs/primitives/authenticated-encryption/chacha20-poy1305.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Advanced Encryption Standard with Galois/Counter Mode (AES-GCM)",permalink:"/cryptography/docs/primitives/authenticated-encryption/aes-gcm-aead"},next:{title:"Key Exchanges",permalink:"/cryptography/docs/category/key-exchanges"}},p={},s=[],y={toc:s},l="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chacha20-poly1305"},"ChaCha20-Poly1305"))}u.isMDXComponent=!0}}]);