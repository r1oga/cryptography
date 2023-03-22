"use strict";(self.webpackChunkcryptography=self.webpackChunkcryptography||[]).push([[5232],{9613:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var r=n(9496);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},y="mdxType",l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,p=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),y=u(n),d=i,m=y["".concat(p,".").concat(d)]||y[d]||l[d]||o;return n?r.createElement(m,a(a({ref:e},s),{},{components:n})):r.createElement(m,a({ref:e},s))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c[y]="string"==typeof t?t:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},135:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(1163),i=(n(9496),n(9613));const o={sidebar_position:1},a="Authenticated Encryption",c={unversionedId:"primitives/authenticated-encryption/intro",id:"primitives/authenticated-encryption/intro",title:"Authenticated Encryption",description:"Symmetric encryption provides confidentiality, but not authenticity.",source:"@site/docs/primitives/authenticated-encryption/intro.md",sourceDirName:"primitives/authenticated-encryption",slug:"/primitives/authenticated-encryption/intro",permalink:"/cryptography/docs/primitives/authenticated-encryption/intro",draft:!1,editUrl:"https://github.com/r1oga/cryptography/tree/main/docs/docs/primitives/authenticated-encryption/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Authenticated Encryption (AE)",permalink:"/cryptography/docs/category/authenticated-encryption-ae"},next:{title:"AES with Cipher Block Chaining Message Authentication Code (AES-CBC-HMAC)",permalink:"/cryptography/docs/primitives/authenticated-encryption/aes-cbc-hmac"}},p={},u=[],s={toc:u},y="wrapper";function l(t){let{components:e,...n}=t;return(0,i.kt)(y,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authenticated-encryption"},"Authenticated Encryption"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../symmetric-encryption/intro"},"Symmetric encryption")," provides confidentiality, but not authenticity.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"../mac/intro"},"MACs")," provide authenticity, but not confidentiality.",(0,i.kt)("br",{parentName:"p"}),"\n","Authenticated Encryption is about combining both symmetric encryption and MACs primitives to achieve both confidentiality and authenticity. "),(0,i.kt)("p",null,"The encryption of plaintext is done using a symmetric key.\nThe MAC is built using a separate symmetric key. This MAC is used to verify the authenticity of the ciphertext. So the ciphertext is authenticated: authenticated encryption."))}l.isMDXComponent=!0}}]);