!function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports={Router:({base:e="",routes:t=[]}={})=>({__proto__:new Proxy({},{get:(r,n,s)=>(r,...o)=>t.push([n.toUpperCase(),RegExp(`^${(e+r).replace(/(\/?)\*/g,"($1.*)?").replace(/\/$/,"").replace(/:(\w+)(\?)?(\.)?/g,"$2(?<$1>[^/]+)$2$3").replace(/\.(?=[\w(])/,"\\.").replace(/\)\.\?\(([^\[]+)\[\^/g,"?)\\.?($1(?<=\\.)[^\\.")}/*$`),o])&&s}),routes:t,async handle(e,...r){let n,s,o=new URL(e.url);for(var[a,i,p]of(e.query=Object.fromEntries(o.searchParams),t))if((a===e.method||"ALL"===a)&&(s=o.pathname.match(i)))for(var c of(e.params=s.groups,p))if(void 0!==(n=await c(e.proxy||e,...r)))return n}})}},function(e,t,r){"use strict";r.r(t);var n=r(0);const s=Object(n.Router)(),o={headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*"}},a={headers:{"Content-Type":"text/html","Access-Control-Allow-Origin":"*"}};s.get("/",()=>new Response("why you can find this page")),s.get("/api/News",(async function(){const e="https://api.hypixel.net/skyblock/news?key="+KEY,t=await fetch(e,o),r=JSON.stringify(await t.json());return new Response(r,o)})),s.get("/api/status/:id",async e=>{try{let t="";const r=await fetch("https://api.mojang.com/users/profiles/minecraft/"+e.params.id);t=(await r.json()).id;const n="https://api.hypixel.net/status?key="+KEY+"&uuid="+t,s=await fetch(n,o),a=JSON.stringify(await s.json());return new Response(a,o)}catch(e){return new Response('{"error": true}',o)}}),s.get("/api/status/",async()=>new Response('{"error": true}',o)),s.get("/api/profiles/",async()=>new Response('{"error": true}',o)),s.get("/api/profileslist/",async()=>new Response('{"error": true}',o)),s.get("/api/profiles/:id",async e=>{try{let t="";const r=await fetch("https://api.mojang.com/users/profiles/minecraft/"+e.params.id);t=(await r.json()).id;const n="https://api.hypixel.net/skyblock/profiles?key="+KEY+"&uuid="+t,s=await fetch(n,o),a=JSON.stringify(await s.json());return new Response(a,o)}catch(e){return new Response('{"error": true}',o)}}),s.get("/api/profileslist/:id",async e=>{try{let t="";const r=await fetch("https://api.mojang.com/users/profiles/minecraft/"+e.params.id);t=(await r.json()).id;const n="https://api.hypixel.net/player?key="+KEY+"&uuid="+t,s=await fetch(n,o),a=await s.json(),i=JSON.stringify(a.player.stats.SkyBlock.profiles);return new Response(i,o)}catch(e){return new Response('{"error": true}',o)}}),s.get("/test/:id",async e=>new Response(e.params.id+uuidjson.id,a)),addEventListener("fetch",e=>{e.respondWith(s.handle(e.request))})}]);