if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),u={module:{uri:i},exports:c,require:r};s[i]=Promise.all(t.map((e=>u[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"f3d4d0286a8de62de8a41da66e29f150"},{url:"/_next/static/chunks/100-e01536d84c65f6fc.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/117-8193d620f8cbca15.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/207-7d71e25f57743d64.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/223.7b129620ef08658e.js",revision:"7b129620ef08658e"},{url:"/_next/static/chunks/497-dd9f7b66b4e25a00.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/614-ed8b7b2a7d78de00.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/648-3999edc55a5c883e.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/703-c3334accbe20defd.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/763-3d3f4a1ecdc95d4b.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/app/(pages)/(auth)/signin/page-e5236412a0f99fae.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/app/(pages)/(auth)/signupSecond/page-387be44798a2e087.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/%5BchatRoomId%5D/layout-b3a6f497d9b7806c.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/%5BchatRoomId%5D/page-3e6d2d5f77d3a92b.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/page-07f385dfa8eb1163.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/app/(pages)/(club)/club/page-76c612f3742a8644.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/app/(pages)/(club)/club/type-selection/create/one-time/page-6b5d6156cc603452.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/app/(pages)/(club)/club/type-selection/create/regular-time/page-9fe03189ca9a4329.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/app/(pages)/(club)/club/type-selection/page-fd4c2f8a8ed3e772.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/app/_not-found/page-0133c16d143c922e.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/app/layout-07290654456d03fb.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/app/onetimeclubjointest/page-432ccbbd9237b33a.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/app/page-d00ca30e1cc49828.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/app/regularclubjointest/page-9e7c4c52f70d188a.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/e8686b1f-17d7f01918d40a19.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/fd9d1056-1d30cae098fa74d7.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/framework-00a8ba1a63cfdc9e.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/main-65048ebf590d9f91.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/main-app-2b21882a27f15e81.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/pages/_app-15e2daefa259f0b5.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/pages/_error-28b803cb2479b966.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-b09c4b6e19fe9eb2.js",revision:"h4mVMevGOryutvyaxUWOM"},{url:"/_next/static/css/3a24c022f69a36a9.css",revision:"3a24c022f69a36a9"},{url:"/_next/static/css/44491df69b1d0570.css",revision:"44491df69b1d0570"},{url:"/_next/static/css/af4f5b48f7810dc2.css",revision:"af4f5b48f7810dc2"},{url:"/_next/static/h4mVMevGOryutvyaxUWOM/_buildManifest.js",revision:"172e769da91baa11de9b258fb2d92f86"},{url:"/_next/static/h4mVMevGOryutvyaxUWOM/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/icon512_maskable.png",revision:"b2ade9a7addce996ff4ba808988fb5ed"},{url:"/icon512_rounded.png",revision:"dd6bf1cc6b62ccc9251c34395aa4346a"},{url:"/manifest.webmanifest",revision:"f0b64d68329f4e4cdabdd46e9c1c5641"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
