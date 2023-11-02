"use strict";(self.webpackChunkcryptography=self.webpackChunkcryptography||[]).push([[3325],{461:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7605),a=(n(9496),n(461));const i={sidebar_position:1,title:"MAC"},o="Message Authentication Code (MAC)",s={unversionedId:"primitives/mac/intro",id:"primitives/mac/intro",title:"MAC",description:"A MAC is a keyed checksum of a message that is sent along with the message.",source:"@site/docs/primitives/mac/intro.md",sourceDirName:"primitives/mac",slug:"/primitives/mac/intro",permalink:"/docs/primitives/mac/intro",draft:!1,editUrl:"https://github.com/sripwoud/cryptography/tree/main/docs/docs/primitives/mac/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"MAC"},sidebar:"tutorialSidebar",previous:{title:"Message Authentication Codes",permalink:"/docs/category/message-authentication-codes"},next:{title:"HMAC",permalink:"/docs/primitives/mac/hmac"}},c={},l=[{value:"Example",id:"example",level:2},{value:"Application(s)",id:"applications",level:2},{value:"Security",id:"security",level:2},{value:"Limitations / Caveats",id:"limitations--caveats",level:2}],p={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"message-authentication-code-mac"},"Message Authentication Code (MAC)"),(0,a.kt)("p",null,"A MAC is a keyed ",(0,a.kt)("a",{parentName:"p",href:"../../definitions"},"checksum")," of a message that is sent along with the message.\nIt takes in a fixed-length secret key and an arbitrary-length message, and outputs a fixed-length checksum.",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\nAny change to the message will render the checksum invalid, allowing verifiers (who need to also possess the secret key) to detect any changes to the message content."),(0,a.kt)("mermaid",{value:'graph LR\n\nA([Secret Key <br><em>fixed length</em>]) --\x3eC[MAC]\nB([Message <br><em>arbitrary length</em>]) --\x3eC[MAC]\nC --\x3e F([Authentication Tag<br><em>Fixed length</em><br> <code>d56d54...123</code>])\nB --\x3e concat["\u2795 Concatenate"]\nF --\x3e concat\nconcat --\x3e |send|message(["<code>message|MAC</code>"])\n\nstyle A fill:#f9f,stroke:#333,stroke-width:4px'}),(0,a.kt)("p",null,"The point of the secret key is to avoid tampering with the tag. Indeed, using only a pre-computed (received) hash an authentication proof is  not secure, as the hash function is not a secret:"),(0,a.kt)("mermaid",{value:'graph LR\n\nX([X<br><em>public</em>]) --\x3eHF[Hash Function <br><em>public</em>]\nY([<s>X</s> Y<br><em>public</em>]) --\x3eHF[Hash Function <br><em>public</em>]\nHF --\x3e C1(["Hash(X)"])\nHF --\x3e C2(["Hash(Y)"])\nC1 --\x3e D{=}\nC2 --\x3e D2{=}\nuser1[(Stored Hash for X)] --\x3e D\nuser2[(Stored Hash for Y)] --\x3e D2\nD --\x3e success1{{Authenticated as X}}\nD2 --\x3e success2{{Authenticated as Y}}\n\nstyle Y stroke: red;\nstyle C2 stroke: red;\nstyle user2 stroke: red;\nstyle D2 stroke: red;\nstyle success2 stroke: red;\nlinkStyle 1 stroke:red;\nlinkStyle 3 stroke:red;\nlinkStyle 5 stroke:red;\nlinkStyle 7 stroke:red;\nlinkStyle 9 stroke:red;'}),(0,a.kt)("p",null,"By requiring an additional secret key to compute the authentication tag, we can prevent impersonating another user."),(0,a.kt)("mermaid",{value:'graph LR\n\nX([X<br><em>public</em>]) --\x3eMAC1[MAC<br><em>public</em>]\nY([<s>X</s> Y<br><em>public</em>]) --\x3eMAC2[MAC <br><em>public</em>]\nMAC1 --\x3e C1(["MAC(X, key)"])\nMAC2 --\x3e C2(["MAC(Y, ?)"])\nC1 --\x3e D{=}\nC2 --\x3e D2{!=}\nsecretKey([Key <br><em>secret</em>]) --\x3e MAC1\nsecretKey2([?]) --\x3e MAC2\nuser1[(Stored MAC for X)] --\x3e D\nuser2[(Stored MAC for Y)] --\x3e D2\nD --\x3e success1{{Authenticated as X}}\nD2 --\x3e success2{{Not authenticated as Y}}\n\nstyle secretKey fill:#f9f,stroke:#333,stroke-width:4px\nstyle secretKey2 fill:#f9f,stroke:#333,stroke-width:4px\nstyle Y stroke: red;\nstyle secretKey2 stroke: red;\nstyle MAC2 stroke: red;\nstyle C2 stroke: red;\nstyle user2 stroke: red;\nstyle D2 stroke: red;\nstyle success2 stroke: red;\nlinkStyle 1 stroke:red;\nlinkStyle 3 stroke:red;\nlinkStyle 5 stroke:red;\nlinkStyle 7 stroke:red;\nlinkStyle 9 stroke:red;\nlinkStyle 11 stroke:red;\n'}),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'printf "%s" "value" | openssl sha256 -hmac "key"\n')),(0,a.kt)("h2",{id:"applications"},"Application(s)"),(0,a.kt)("p",null,"MAC can be used to provide a ",(0,a.kt)("strong",{parentName:"p"},"trusted channel"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Especially ",(0,a.kt)("strong",{parentName:"p"},"cookies"),' rely on MACs to provide a (one-way) trusted communication channel from a client towards a server.\nWith cookies, a server can securely authenticate clients and trust the information originating from them as being "authentic".'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Cookies as an authentication mechanism doesn't scale well because the server needs to provide a cookie for each client, and store their reference values in a database to perform the authentication later.")),(0,a.kt)("h2",{id:"security"},"Security"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"resistance against forgery: a valid authentication tag can only be generated by the owner of the secret key.")),(0,a.kt)("h2",{id:"limitations--caveats"},"Limitations / Caveats"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"MACs don't provide confidentiality"),".",(0,a.kt)("br",{parentName:"p"}),"\n","The message sent is not encrypted and can be read by observers.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"MAC verification time should be constant."),(0,a.kt)("br",{parentName:"p"}),"\n","Otherwise, MACs are subject to timing attacks.",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"For the resistance against forgery to hold, the secret key must be long enough."),(0,a.kt)("br",{parentName:"p"}),"\n","At least 16 bytes (128 bits).")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"MACs can be reused"),".",(0,a.kt)("br",{parentName:"p"}),"\n","They don't prevent replays (especially that's why cookies have an expiration date).",(0,a.kt)("br",{parentName:"p"}),"\n","One way to prevent replays is to use a counter or a nonce (a random number that is never reused).")),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},(0,a.kt)("a",{parentName:"li",href:"https://textbook.cs161.org/crypto/macs.html#82-mac-definition"},"https://textbook.cs161.org/crypto/macs.html#82-mac-definition"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Timing_attack"},"https://en.wikipedia.org/wiki/Timing_attack"),(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);