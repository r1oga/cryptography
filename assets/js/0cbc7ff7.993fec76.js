"use strict";(self.webpackChunkcryptography=self.webpackChunkcryptography||[]).push([[9724],{9613:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=s(r),f=i,u=l["".concat(p,".").concat(f)]||l[f]||y[f]||a;return r?n.createElement(u,o(o({ref:t},m),{},{components:r})):n.createElement(u,o({ref:t},m))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4764:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(1163),i=(r(9496),r(9613));const a={sidebar_position:1},o="Symmetric Encryption (SE)",c={unversionedId:"primitives/symmetric-encryption/intro",id:"primitives/symmetric-encryption/intro",title:"Symmetric Encryption (SE)",description:"Symmetric-key encryption is a family of encryption algorithms that use the same cryptographic key(s) for both the encryption of plaintext and the decryption of ciphertext.",source:"@site/docs/primitives/symmetric-encryption/intro.md",sourceDirName:"primitives/symmetric-encryption",slug:"/primitives/symmetric-encryption/intro",permalink:"/cryptography/docs/primitives/symmetric-encryption/intro",draft:!1,editUrl:"https://github.com/r1oga/cryptography/tree/main/docs/docs/primitives/symmetric-encryption/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Symmetric Encryption (SE)",permalink:"/cryptography/docs/category/symmetric-encryption-se"},next:{title:"Hash Functions",permalink:"/cryptography/docs/category/hash-functions"}},p={},s=[{value:"Application(s)",id:"applications",level:2},{value:"Limitations / Caveats",id:"limitations--caveats",level:2}],m={toc:s},l="wrapper";function y(e){let{components:t,...r}=e;return(0,i.kt)(l,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"symmetric-encryption-se"},"Symmetric Encryption (SE)"),(0,i.kt)("p",null,"Symmetric-key encryption is a family of encryption algorithms that use the ",(0,i.kt)("strong",{parentName:"p"},"same")," cryptographic key(s) for both the encryption of plaintext and the decryption of ciphertext.",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("mermaid",{value:'flowchart LR\n    A(["\ud83d\udcc4"]) --\x3e B[Encrypt]\n    B --\x3e C([Ciphertext<br><em>public</em><br>`0xfac..54c`])\n    D(["\ud83d\udd11<br><em>secret</em>"]) --\x3e B\n\nstyle D fill:#f9f,stroke:#333,stroke-width:4px'}),(0,i.kt)("mermaid",{value:'graph RL\n    A([Ciphertext<br><em>public</em><br>`0xfac..54c`]) --\x3e B[Decrypt]\n    B --\x3e C(["\ud83d\udcc4"])\n    D(["\ud83d\udd11<br><em>secret</em>"]) --\x3e B\n    \nstyle D fill:#f9f,stroke:#333,stroke-width:4px'}),(0,i.kt)("h2",{id:"applications"},"Application(s)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Confidentiality: encrypting data so that only parties knowing the secret key can read it.")),(0,i.kt)("h2",{id:"limitations--caveats"},"Limitations / Caveats"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"A trusted communication channel is required to securely perform the key exchange.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"It doesn't scale well as performing a private and secure key-exchange between each pair of communicating parties is impractical.",(0,i.kt)("br",{parentName:"p"}),"\n","E.g on the web, a situation where scaling matters, ",(0,i.kt)("a",{parentName:"p",href:"../asymmetric-encryption/intro"},"asymmetric encryption")," is rather used, together with ",(0,i.kt)("a",{parentName:"p",href:"#TODO"},"PKI")," to securely exchange keys.")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Symmetric-key_algorithm"},"https://en.wikipedia.org/wiki/Symmetric-key_algorithm"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}y.isMDXComponent=!0}}]);