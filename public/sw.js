if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const o={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return o;default:return e(s)}}))).then((e=>{const s=c(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-e1834b40"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about.html",revision:"cffdf8cc26f15a2ebc2f09d397bc1f00"},{url:"images/icon-192x192.png",revision:"bb922e9f3b391fb62a526e16d6c2dba4"},{url:"images/icon-256x256.png",revision:"4328d1db88c6362692117490862d55c6"},{url:"images/icon-384x384.png",revision:"39bc8a744714f39790c60c793ad31eaf"},{url:"images/icon-512x512.png",revision:"b8461b6112a034d3db948b39767bb842"},{url:"images/logo-square_512x512.png",revision:"1a049adbb04968156c74f007c250dc97"},{url:"images/logo-square.png",revision:"ecbc13e7275dbb9e86b7680fe31225c2"},{url:"images/logo.png",revision:"798e029316ed43e226415f3559c2f81c"},{url:"index.html",revision:"2b53f3cb7f77bf110f1ca09d273bcf81"},{url:"posts/make-your-own-cdn.html",revision:"c957034b95fdf2ab34ececf2b36ba649"},{url:"styles/mvp.css",revision:"22b233d9cd00caa8773953ee342c450e"},{url:"styles/seangoescoding.css",revision:"65d881c6480902b2d2005c8a535e60fc"}],{})}));
//# sourceMappingURL=sw.js.map
