if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let i={};const u=e=>s(e,c),r={module:{uri:c},exports:i,require:u};a[c]=Promise.all(n.map((e=>r[e]||u(e)))).then((e=>(t(...e),i)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"721249f36e3e1cead1d0b8944b04ec07"},{url:"/_next/static/FwF9QJeQIuLVlxdvGbYSF/_buildManifest.js",revision:"172e769da91baa11de9b258fb2d92f86"},{url:"/_next/static/FwF9QJeQIuLVlxdvGbYSF/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/117-8193d620f8cbca15.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/223.7b129620ef08658e.js",revision:"7b129620ef08658e"},{url:"/_next/static/chunks/226-cd46815cc8541ffd.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/250-8bad36c638a2a4f3.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/279-1b8dbb3610718b0a.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/593-5d28f36f15528112.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/614-ed8b7b2a7d78de00.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/66-34c937bd3ac9b43b.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/703-c3334accbe20defd.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/972-5b6a2bf5e233d3b5.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(auth)/auth/callback/InsertUserInfo/page-d807c4d51ae2f0eb.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(auth)/signin/page-7854aba936913e73.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(auth)/signupSecond/%5BuserId%5D/page-92b8b541148ddc69.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/onetimeChat/%5BchatRoomId%5D/layout-35807b309346700c.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/onetimeChat/%5BchatRoomId%5D/page-cbcfb51112f963e3.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/page-e3a7b41f2b25d220.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/regularChat/%5BchatRoomId%5D/layout-029ca5823d8af5d8.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/regularChat/%5BchatRoomId%5D/page-e20148be4b1571c2.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(club)/club/one-time-club-sub/%5Bid%5D/page-94da77040281f03f.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(club)/club/one-time/page-fa740453e32776ab.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(club)/club/page-2dbc99de9ae31538.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(club)/club/regular-club-sub/%5Bid%5D/create/layout-f2c278d5e11936ef.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(club)/club/regular-club-sub/%5Bid%5D/create/page-8446fec6ab074297.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(club)/club/regular-club-sub/%5Bid%5D/page-68144893ad18b8d5.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(club)/club/regular-time/page-9d3432d0f7acefa5.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(kakaopay)/kakaopay/paymentConfirm/page-5204fb44369590d5.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(kakaopay)/kakaopay/paymentSummary/page-2802e7dac89083b0.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(kakaopay)/kakaopay/success/page-2e2f31facf089750.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(mypage)/mypage/profile/page-7406c7cc3abe3747.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(mypage)/mypage/profileUpdate/page-19b92df87127f279.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/(pages)/(search)/search/page-049c72f50b18e5d8.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/_not-found/page-0133c16d143c922e.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/approvemembers/page-0b6c60439dc26e18.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/layout-dcbe5baf417d1dd5.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/loading-e5373e2bdc929c19.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/myclublist/page-086b71a1f32f48d6.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/onetimeclubjointest/page-03935ed5838bb4df.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/page-5adb26fa7263a153.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/app/regularclubjointest/page-e73bf4aebca80b3a.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/e8686b1f-17d7f01918d40a19.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/fd9d1056-1d30cae098fa74d7.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/framework-00a8ba1a63cfdc9e.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/main-92a8ee0402746d95.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/main-app-be222cc383df49d2.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/pages/_app-15e2daefa259f0b5.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/pages/_error-28b803cb2479b966.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-d5a32f59832c3373.js",revision:"FwF9QJeQIuLVlxdvGbYSF"},{url:"/_next/static/css/44491df69b1d0570.css",revision:"44491df69b1d0570"},{url:"/_next/static/css/bfe6cc2b055c55e1.css",revision:"bfe6cc2b055c55e1"},{url:"/_next/static/media/ff840cfebfb63b0c-s.p.woff2",revision:"302ec55f5b4320354ec6b35a53dead87"},{url:"/asset/BellIcon.png",revision:"33dbd2b79fee3a57b68e8afc4c231131"},{url:"/asset/Bottom nav_Button_Home.png",revision:"647f3cf50489654544bda860da3b0cc8"},{url:"/asset/Bottom nav_Button_Home_Default.png",revision:"f362a57a5d481eae4cb93e6083dc43b2"},{url:"/asset/Bottom nav_Button_My chat.png",revision:"a908ff64f1008ee705178606651418f6"},{url:"/asset/Bottom nav_Button_My chat_Default.png",revision:"7ece5e8619d6cd6ac961f7f2894b6750"},{url:"/asset/Bottom nav_Button_My page.png",revision:"43666f18807809deb538b921fbaaf78d"},{url:"/asset/Bottom nav_Button_My page_Default.png",revision:"7d421365b08c2e1c7eb2df53d5507b06"},{url:"/asset/Bottom nav_Button_Search.png",revision:"5be80543b6533a3c654814246144c588"},{url:"/asset/Bottom nav_Button_Search_Default.png",revision:"c236d00b4dcda59b6ef10f706702f77e"},{url:"/asset/Bottom nav_Button__My gathering.png",revision:"d0d02ea4e37ca9bf05bf43881815009d"},{url:"/asset/Bottom nav_Button__My gathering_Default.png",revision:"c65b3c33d123d7311e02b00fd47823bd"},{url:"/asset/Category icon_airplane.png",revision:"d6d438b7ba632301c3a4894159eaa4cb"},{url:"/asset/Category icon_clapper-board.png",revision:"5833dfa0f53563d4b63e384ee8a5d1ea"},{url:"/asset/Category icon_guitar.png",revision:"4ec66f2842feae251077fb2da9b7fe51"},{url:"/asset/Category icon_hot-beverage.png",revision:"cd36589e9e134b459f54fbbb3d580b2d"},{url:"/asset/Category icon_tennis.png",revision:"bb775d6d4fcd001853b1f14f250e4ae2"},{url:"/asset/Category icon_voltage.png",revision:"94223c71afcc1b8103c28b0dbb58d10e"},{url:"/asset/Category icon_woman-dancing.png",revision:"bb4d72358c303708a5aa2a467836af03"},{url:"/asset/Frame 2307.png",revision:"827a776893a6aca7960585067e78da7c"},{url:"/asset/Icon/Arrow-Right-Outline.png",revision:"559c5f8f6d464469d6870bc0bc5d4ccb"},{url:"/asset/Icon/Heart.png",revision:"258beaea4d804517528c155e25ca8b54"},{url:"/asset/Icon/Icon-Heart.png",revision:"bb681282826ab4a4299e956382aef0f6"},{url:"/asset/Icon/Icon-Location.png",revision:"840f469c668ea0892f0c098fb60ed8d7"},{url:"/asset/MainBanner.jpg",revision:"d095b3814bb177b67b70af54165c7112"},{url:"/asset/MainLogo.svg",revision:"69bc5b340dbb90ff041ef5395ee83fa0"},{url:"/asset/MenuIcon.png",revision:"367ce1fe65b21d292190fac00a114746"},{url:"/asset/PlusIcon.png",revision:"9339adb461179db5b91c08e01096b0e4"},{url:"/asset/Rectangle 20.png",revision:"de9efbf3d7bf6a06fc3ff63fd8ce820d"},{url:"/asset/icon.svg",revision:"2e60a8b4b5cb08a13649bf5caac7eb39"},{url:"/icon512_maskable.png",revision:"235a0410a28a1e87e19841e10322ab59"},{url:"/icon512_rounded.png",revision:"12d339cd96fe38e19a18abc75835d25a"},{url:"/manifest.json",revision:"b65c33793d976343665140a45507206f"},{url:"/manifest.webmanifest",revision:"9b0b00000e260acb04ac7f95bad6ae9b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
