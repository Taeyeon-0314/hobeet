if(!self.define){let e,a={};const s=(s,c)=>(s=new URL(s+".js",c).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let i={};const r=e=>s(e,t),o={module:{uri:t},exports:i,require:r};a[t]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(n(...e),i)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"e1491fded8a90cc0bd9aca0a005ce6f5"},{url:"/_next/static/chunks/2117-e529af58cfec7b1b.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/3145-808017896d57dd51.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/4004-638cd38a3187caf6.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/4065-68ac105059380be0.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/5223.af0288258eb3edbb.js",revision:"af0288258eb3edbb"},{url:"/_next/static/chunks/6066-12c3f24de37e7a35.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/6593-a88d38d3ff766d2d.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/6614-5ba613f59249eaf5.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/676-544f198496985c3b.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/7648-7d0b9929a20e3579.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/8250-e79c4cd05b71040f.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/9763-b4cb408f8298ed4d.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(auth)/auth/callback/InsertUserInfo/page-69fd43a50e8c6bbc.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(auth)/signin/page-ce98abf76029dfbe.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(auth)/signupSecond/%5BuserId%5D/page-079b8185978332c5.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(categoryList)/category/%5BcategoryId%5D/page-ff745ccacbcb7a7f.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/onetimeChat/%5BchatRoomId%5D/layout-8479f52eb8983537.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/onetimeChat/%5BchatRoomId%5D/page-22255cb74c7b278b.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/page-211c592525027c72.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/regularChat/%5BchatRoomId%5D/layout-9644f37eee77d658.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/regularChat/%5BchatRoomId%5D/page-b64fccf0731b02b6.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(club)/club/list/onetime/page-2924b94ad41a8776.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(club)/club/list/regular/page-a6c7b78ddfb8ede0.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(club)/club/one-time-club-sub/%5Bid%5D/page-25641131a0bb95a1.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(club)/club/one-time/page-af3478ed21004efd.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(club)/club/page-7118fea148e655f8.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(club)/club/regular-club-sub/%5Bid%5D/create/%5BsubId%5D/page-9c135770008d4386.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(club)/club/regular-club-sub/%5Bid%5D/create/page-486b39146652a3b7.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(club)/club/regular-club-sub/%5Bid%5D/page-7f7553a09899f8f9.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(club)/club/regular-time/page-0ce97c8f35ffcd68.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(kakaopay)/kakaopay/isSuccess/page-77ad917d9e288743.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(kakaopay)/kakaopay/paymentConfirm/page-a6a1df420a7ec236.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(kakaopay)/kakaopay/success/page-894b563625bcccab.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(mypage)/mypage/paymentDetails/page-5a82d2c00d6af1bb.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(mypage)/mypage/profile/page-9cd8559ce3fd878a.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(mypage)/mypage/profileUpdate/page-b8ebba900c66f9ae.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(mypage)/mypage/wishClubList/page-108fa0b151617ff2.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/(pages)/(search)/search/page-ef46c6036a3b468a.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/_not-found/page-4509339c6e15ec40.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/approvemembers/%5Bid%5D/page-7f1caf0f873f95a0.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/layout-d1e926ec1e05e599.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/loading-a73b3f84c466e9a3.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/myclublist/page-e3619a876803a551.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/onetimeclubjointest/page-fd2a815e6abd7c2d.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/page-2abae89f72f7f9aa.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/app/regularclubjointest/page-733b8feb7f8f0be8.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/e8686b1f-4e310147df71a331.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/fd9d1056-5b1be66c41da6169.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/main-41513deac22a13ac.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/main-app-83737c7ba9d68efb.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/pages/_app-3c9ca398d360b709.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/pages/_error-cf5ca766ac8f493f.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-38dfdff1ef4356e9.js",revision:"qy2wcGhN38p37a_Qef6Qg"},{url:"/_next/static/css/44491df69b1d0570.css",revision:"44491df69b1d0570"},{url:"/_next/static/css/e16abfc97d8aec74.css",revision:"e16abfc97d8aec74"},{url:"/_next/static/media/ff840cfebfb63b0c-s.p.woff2",revision:"302ec55f5b4320354ec6b35a53dead87"},{url:"/_next/static/qy2wcGhN38p37a_Qef6Qg/_buildManifest.js",revision:"6310079bf1ae7bebeb6a2135896e4564"},{url:"/_next/static/qy2wcGhN38p37a_Qef6Qg/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/asset/BellIcon.png",revision:"33dbd2b79fee3a57b68e8afc4c231131"},{url:"/asset/Bottom nav_Button_Home.png",revision:"647f3cf50489654544bda860da3b0cc8"},{url:"/asset/Bottom nav_Button_Home_Default.png",revision:"f362a57a5d481eae4cb93e6083dc43b2"},{url:"/asset/Bottom nav_Button_My chat.png",revision:"a908ff64f1008ee705178606651418f6"},{url:"/asset/Bottom nav_Button_My chat_Default.png",revision:"7ece5e8619d6cd6ac961f7f2894b6750"},{url:"/asset/Bottom nav_Button_My page.png",revision:"43666f18807809deb538b921fbaaf78d"},{url:"/asset/Bottom nav_Button_My page_Default.png",revision:"7d421365b08c2e1c7eb2df53d5507b06"},{url:"/asset/Bottom nav_Button_Search.png",revision:"5be80543b6533a3c654814246144c588"},{url:"/asset/Bottom nav_Button_Search_Default.png",revision:"c236d00b4dcda59b6ef10f706702f77e"},{url:"/asset/Bottom nav_Button__My gathering.png",revision:"d0d02ea4e37ca9bf05bf43881815009d"},{url:"/asset/Bottom nav_Button__My gathering_Default.png",revision:"c65b3c33d123d7311e02b00fd47823bd"},{url:"/asset/Category icon_airplane.png",revision:"d6d438b7ba632301c3a4894159eaa4cb"},{url:"/asset/Category icon_clapper-board.png",revision:"5833dfa0f53563d4b63e384ee8a5d1ea"},{url:"/asset/Category icon_guitar.png",revision:"4ec66f2842feae251077fb2da9b7fe51"},{url:"/asset/Category icon_hot-beverage.png",revision:"cd36589e9e134b459f54fbbb3d580b2d"},{url:"/asset/Category icon_tennis.png",revision:"bb775d6d4fcd001853b1f14f250e4ae2"},{url:"/asset/Category icon_voltage.png",revision:"94223c71afcc1b8103c28b0dbb58d10e"},{url:"/asset/Category icon_woman-dancing.png",revision:"bb4d72358c303708a5aa2a467836af03"},{url:"/asset/Frame 2307.png",revision:"827a776893a6aca7960585067e78da7c"},{url:"/asset/Icon/Arrow-Right-Outline.png",revision:"559c5f8f6d464469d6870bc0bc5d4ccb"},{url:"/asset/Icon/Frame 1000007052.png",revision:"58f598d072c2fb797f8dab84614273ff"},{url:"/asset/Icon/Heart-Outline.png",revision:"1b0c6908ab89e7a41c1fc421cb2016c0"},{url:"/asset/Icon/Heart.png",revision:"258beaea4d804517528c155e25ca8b54"},{url:"/asset/Icon/Icon-Heart.png",revision:"bb681282826ab4a4299e956382aef0f6"},{url:"/asset/Icon/Icon-Location.png",revision:"840f469c668ea0892f0c098fb60ed8d7"},{url:"/asset/MainBanner.jpg",revision:"d095b3814bb177b67b70af54165c7112"},{url:"/asset/MainLogo.svg",revision:"69bc5b340dbb90ff041ef5395ee83fa0"},{url:"/asset/MenuIcon.png",revision:"367ce1fe65b21d292190fac00a114746"},{url:"/asset/Message-Filled.png",revision:"38b3a954941675fae1665f6124bed22d"},{url:"/asset/PlusIcon.png",revision:"9339adb461179db5b91c08e01096b0e4"},{url:"/asset/Rectangle 20.png",revision:"de9efbf3d7bf6a06fc3ff63fd8ce820d"},{url:"/asset/icon-google.png",revision:"023aadfe50cc1af7b960750e422dfd63"},{url:"/asset/icon-kakao.png",revision:"504847e614f606832d63de9ce76aeae7"},{url:"/asset/icon.svg",revision:"2e60a8b4b5cb08a13649bf5caac7eb39"},{url:"/icon512_maskable.png",revision:"235a0410a28a1e87e19841e10322ab59"},{url:"/icon512_rounded.png",revision:"12d339cd96fe38e19a18abc75835d25a"},{url:"/manifest.json",revision:"b65c33793d976343665140a45507206f"},{url:"/manifest.webmanifest",revision:"9b0b00000e260acb04ac7f95bad6ae9b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
