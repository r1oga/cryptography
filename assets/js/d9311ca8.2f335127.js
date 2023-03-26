"use strict";(self.webpackChunkcryptography=self.webpackChunkcryptography||[]).push([[9464],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=l(r),m=i,y=h["".concat(a,".").concat(m)]||h[m]||d[m]||o;return r?n.createElement(y,c(c({ref:t},s),{},{components:r})):n.createElement(y,c({ref:t},s))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=m;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p[h]="string"==typeof e?e:i,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2700:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(1163),i=(r(9496),r(9613));const o={sidebar_position:5,title:"CBC"},c="Cipher Block Chaining (CBC)",p={unversionedId:"primitives/symmetric-encryption/cbc",id:"primitives/symmetric-encryption/cbc",title:"CBC",description:"CBC recursively encrypts a plaintext by XORing it with the previous ciphertext block to randomize the encryption (and avoid the pitfall of e.g. the Electronic Codebook mode, see ECB Penguin).",source:"@site/docs/primitives/symmetric-encryption/cbc.md",sourceDirName:"primitives/symmetric-encryption",slug:"/primitives/symmetric-encryption/cbc",permalink:"/cryptography/docs/primitives/symmetric-encryption/cbc",draft:!1,editUrl:"https://github.com/r1oga/cryptography/tree/main/docs/docs/primitives/symmetric-encryption/cbc.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"CBC"},sidebar:"tutorialSidebar",previous:{title:"Block Ciphers",permalink:"/cryptography/docs/primitives/symmetric-encryption/block-ciphers"},next:{title:"Hash Functions",permalink:"/cryptography/docs/category/hash-functions"}},a={},l=[],s={toc:l},h="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cipher-block-chaining-cbc"},"Cipher Block Chaining (CBC)"),(0,i.kt)("p",null,"CBC recursively encrypts a plaintext by XORing it with the previous ciphertext block to randomize the encryption (and avoid the pitfall of e.g. the Electronic Codebook mode, see ",(0,i.kt)("a",{parentName:"p",href:"https://words.filippo.io/the-ecb-penguin/"},"ECB Penguin"),").",(0,i.kt)("br",{parentName:"p"}),"\n","This is done by first encrypting the IV with the key and then XORing the result with the first plaintext block.",(0,i.kt)("br",{parentName:"p"}),"\n","The result is then encrypted with the key and XORed with the second plaintext block.",(0,i.kt)("br",{parentName:"p"}),"\n","This process is repeated until the last plaintext block is reached.",(0,i.kt)("br",{parentName:"p"}),"\n","The last ciphertext block is then the ciphertext."),(0,i.kt)("mermaid",{value:'graph TD\n\npt([Plaintext<br><em>Chunk <code>1</code><br>Length<code>L</code></em>]) --\x3e XOR["\u2295"]\niv([IV<br><em>Length<code>L</code>]) --\x3e XOR\nXOR --\x3e BCE(Block Cipher Encryption)\nSK([Key]) --\x3e BCE\nBCE --\x3e c([Ciphertext <br><em>Chunk <code>1</code></em>])\nc --\x3e XOR2["\u2295"]\npt2([Plaintext<br><em>Chunk<code>2</code></em>]) --\x3e XOR2\nXOR2 --\x3e BCE2(Block Cipher Encryption)\nSK2([Key]) --\x3e BCE2\nBCE2 -.-> c2([Ciphertext <br><em>Chunk <code>N</code></em>])\nc2 -.-> XOR3["\u2295"]\npt3([Plaintext<br><em>Chunk <code>N</code></em>]) -.-> XOR3\nXOR3 -.-> BCE3(Block Cipher Encryption)\nSK3([Key]) --\x3e BCE3\nBCE3 -.-> c3([Ciphertext <br><em>Chunk <code>N</code></em>])\nc --\x3e res(["<code>Ciphertext1|...|Ciphertext N</code>"])\nc2 --\x3e res\nc3 --\x3e res\n\nstyle SK fill:#f9f,stroke:#333,stroke-width:4px\nstyle SK2 fill:#f9f,stroke:#333,stroke-width:4px\nstyle SK3 fill:#f9f,stroke:#333,stroke-width:4px'}),(0,i.kt)("hr",null),(0,i.kt)("mermaid",{value:'graph TD\n\nC1([Ciphertext<br><em>Chunk <code>1</code><br>Length<code>L</code></em>]) --\x3e BCD1(Block Cipher Decryption)\nBCD1 --\x3e XOR1["\u2295"]\nIV([IV<br><em>Length<code>L</code>]) --\x3e XOR1\nSK1([Key]) --\x3e BCD1\nXOR1 --\x3e pt1([Plaintext<br><em>Chunk <code>1</code></em>])\nC2([Ciphertext<br><em>Chunk <code>2</code></em>]) --\x3e BCD2(Block Cipher Decryption)\nBCD2 --\x3e XOR2["\u2295"]\nC1 --\x3e XOR2\nSK2([Key]) --\x3e BCD2\nXOR2 --\x3e pt2([Plaintext<br><em>Chunk <code>2</code></em>])\nSK3([Key]) -.-> BCD3\nC3([Ciphertext<br><em>Chunk <code>N</code></em>]) -.-> BCD3(Block Cipher Decryption)\nBCD3 -.-> XOR3["\u2295"]\nC2 -.-> XOR3\nXOR3 -.-> pt3([Plaintext<br><em>Chunk <code>N</code></em>])\n\npt1 --\x3e res(["<code>Plaintext1|...|Plaintext N</code>"])\npt2 --\x3e res\npt3 --\x3e res\n\nstyle SK1 fill:#f9f,stroke:#333,stroke-width:4px\nstyle SK2 fill:#f9f,stroke:#333,stroke-width:4px\nstyle SK3 fill:#f9f,stroke:#333,stroke-width:4px'}))}d.isMDXComponent=!0}}]);