"use strict";(self.webpackChunkcryptography=self.webpackChunkcryptography||[]).push([[5544],{9613:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>f});var n=t(9496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=s(t),y=o,f=l["".concat(p,".").concat(y)]||l[y]||u[y]||a;return t?n.createElement(f,i(i({ref:r},m),{},{components:t})):n.createElement(f,i({ref:r},m))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2312:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(1163),o=(t(9496),t(9613));const a={sidebar_position:3},i="GMAC",c={unversionedId:"primitives/mac/gmac",id:"primitives/mac/gmac",title:"GMAC",description:"",source:"@site/docs/primitives/mac/gmac.md",sourceDirName:"primitives/mac",slug:"/primitives/mac/gmac",permalink:"/cryptography/docs/primitives/mac/gmac",draft:!1,editUrl:"https://github.com/r1oga/cryptography/tree/main/docs/docs/primitives/mac/gmac.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"HMAC",permalink:"/cryptography/docs/primitives/mac/hmac"},next:{title:"Key Exchanges",permalink:"/cryptography/docs/category/key-exchanges"}},p={},s=[],m={toc:s},l="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(l,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gmac"},"GMAC"))}u.isMDXComponent=!0}}]);