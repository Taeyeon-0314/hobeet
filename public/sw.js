if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let i={};const o=e=>s(e,c),r={module:{uri:c},exports:i,require:o};a[c]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(t(...e),i)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"a43aacea95539262708532b5d0ac6f4d"},{url:"/_next/static/chunks/2117-e529af58cfec7b1b.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/3145-808017896d57dd51.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/4004-638cd38a3187caf6.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/4065-68ac105059380be0.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/5223.af0288258eb3edbb.js",revision:"af0288258eb3edbb"},{url:"/_next/static/chunks/6066-12c3f24de37e7a35.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/6593-a88d38d3ff766d2d.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/6614-5ba613f59249eaf5.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/676-544f198496985c3b.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/7648-7d0b9929a20e3579.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/8250-e79c4cd05b71040f.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/9763-b4cb408f8298ed4d.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(auth)/auth/callback/InsertUserInfo/page-5461ab10efe15a0c.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(auth)/signin/page-8068326d5c95cbda.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(auth)/signupSecond/%5BuserId%5D/page-5f7fbab0a3a5c035.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(categoryList)/category/%5BcategoryId%5D/page-b9061ec10d1d82ac.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/onetimeChat/%5BchatRoomId%5D/layout-e5feeedb5022c860.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/onetimeChat/%5BchatRoomId%5D/page-980b2d7a012390de.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/page-8cbfb2c5c1e3d66b.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/regularChat/%5BchatRoomId%5D/layout-c9903e19138b1f41.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/regularChat/%5BchatRoomId%5D/page-873891458f426f99.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(club)/club/list/onetime/page-69b6a4d5bc829e47.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(club)/club/list/regular/page-a135cde12560cd21.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(club)/club/one-time-club-sub/%5Bid%5D/page-8442f0a5cfc0a4b3.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(club)/club/one-time/page-a713125b0ceddd09.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(club)/club/page-86bc24a0f596d74b.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(club)/club/regular-club-sub/%5Bid%5D/create/%5BsubId%5D/page-e0959dade985888d.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(club)/club/regular-club-sub/%5Bid%5D/create/page-fb0925a42d007abb.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(club)/club/regular-club-sub/%5Bid%5D/page-5609f8a5b8c31d39.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(club)/club/regular-time/page-11fdbfb0c3b6ec5e.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(kakaopay)/kakaopay/isSuccess/page-e40520ec16913932.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(kakaopay)/kakaopay/paymentConfirm/page-23df7918d449d8bd.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(kakaopay)/kakaopay/success/page-217ccc556d36d9db.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(mypage)/mypage/paymentDetails/page-f6065d54fd7d88c4.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(mypage)/mypage/profile/page-5f1874444aa87b8a.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(mypage)/mypage/profileUpdate/page-8d1fcfe9b5933dda.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(mypage)/mypage/wishClubList/page-d585b05d9ce8af05.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/(pages)/(search)/search/page-e6dca02c2a1f0a18.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/_not-found/page-4509339c6e15ec40.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/approvemembers/%5Bid%5D/page-fafa6315acc47992.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/layout-f7f76489ff11cd13.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/loading-a73b3f84c466e9a3.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/myclublist/page-7d7be3a412ae3c2f.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/onetimeclubjointest/page-52f9b2ce11454ee9.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/page-5be5d476fa5c8204.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/app/regularclubjointest/page-d4ed275714b14836.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/e8686b1f-4e310147df71a331.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/fd9d1056-5b1be66c41da6169.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/main-672b96fe26c5137d.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/main-app-6ec019a320a71d79.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/pages/_app-3c9ca398d360b709.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/pages/_error-cf5ca766ac8f493f.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-c54e261e800cb615.js",revision:"yhbxlQDOXfhWvodbpRY-9"},{url:"/_next/static/css/44491df69b1d0570.css",revision:"44491df69b1d0570"},{url:"/_next/static/css/f45190733aac24f7.css",revision:"f45190733aac24f7"},{url:"/_next/static/media/ff840cfebfb63b0c-s.p.woff2",revision:"302ec55f5b4320354ec6b35a53dead87"},{url:"/_next/static/yhbxlQDOXfhWvodbpRY-9/_buildManifest.js",revision:"6310079bf1ae7bebeb6a2135896e4564"},{url:"/_next/static/yhbxlQDOXfhWvodbpRY-9/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/asset/BellIcon.png",revision:"33dbd2b79fee3a57b68e8afc4c231131"},{url:"/asset/Bottom nav_Button_Home.png",revision:"647f3cf50489654544bda860da3b0cc8"},{url:"/asset/Bottom nav_Button_Home_Default.png",revision:"f362a57a5d481eae4cb93e6083dc43b2"},{url:"/asset/Bottom nav_Button_My chat.png",revision:"a908ff64f1008ee705178606651418f6"},{url:"/asset/Bottom nav_Button_My chat_Default.png",revision:"7ece5e8619d6cd6ac961f7f2894b6750"},{url:"/asset/Bottom nav_Button_My page.png",revision:"43666f18807809deb538b921fbaaf78d"},{url:"/asset/Bottom nav_Button_My page_Default.png",revision:"7d421365b08c2e1c7eb2df53d5507b06"},{url:"/asset/Bottom nav_Button_Search.png",revision:"5be80543b6533a3c654814246144c588"},{url:"/asset/Bottom nav_Button_Search_Default.png",revision:"c236d00b4dcda59b6ef10f706702f77e"},{url:"/asset/Bottom nav_Button__My gathering.png",revision:"d0d02ea4e37ca9bf05bf43881815009d"},{url:"/asset/Bottom nav_Button__My gathering_Default.png",revision:"c65b3c33d123d7311e02b00fd47823bd"},{url:"/asset/Category icon_airplane.png",revision:"d6d438b7ba632301c3a4894159eaa4cb"},{url:"/asset/Category icon_clapper-board.png",revision:"5833dfa0f53563d4b63e384ee8a5d1ea"},{url:"/asset/Category icon_guitar.png",revision:"4ec66f2842feae251077fb2da9b7fe51"},{url:"/asset/Category icon_hot-beverage.png",revision:"cd36589e9e134b459f54fbbb3d580b2d"},{url:"/asset/Category icon_tennis.png",revision:"bb775d6d4fcd001853b1f14f250e4ae2"},{url:"/asset/Category icon_voltage.png",revision:"94223c71afcc1b8103c28b0dbb58d10e"},{url:"/asset/Category icon_woman-dancing.png",revision:"bb4d72358c303708a5aa2a467836af03"},{url:"/asset/Frame 2307.png",revision:"827a776893a6aca7960585067e78da7c"},{url:"/asset/Icon/Arrow-Right-Outline.png",revision:"559c5f8f6d464469d6870bc0bc5d4ccb"},{url:"/asset/Icon/Frame 1000007052.png",revision:"58f598d072c2fb797f8dab84614273ff"},{url:"/asset/Icon/Heart-Outline.png",revision:"1b0c6908ab89e7a41c1fc421cb2016c0"},{url:"/asset/Icon/Heart.png",revision:"258beaea4d804517528c155e25ca8b54"},{url:"/asset/Icon/Icon-Heart.png",revision:"bb681282826ab4a4299e956382aef0f6"},{url:"/asset/Icon/Icon-Location.png",revision:"840f469c668ea0892f0c098fb60ed8d7"},{url:"/asset/MainBanner.jpg",revision:"d095b3814bb177b67b70af54165c7112"},{url:"/asset/MainLogo.svg",revision:"2a1549275c9c15212366ec64692d22b5"},{url:"/asset/MenuIcon.png",revision:"367ce1fe65b21d292190fac00a114746"},{url:"/asset/Message-Filled.png",revision:"38b3a954941675fae1665f6124bed22d"},{url:"/asset/PlusIcon.png",revision:"9339adb461179db5b91c08e01096b0e4"},{url:"/asset/Rectangle 20.png",revision:"de9efbf3d7bf6a06fc3ff63fd8ce820d"},{url:"/asset/icon-google.png",revision:"023aadfe50cc1af7b960750e422dfd63"},{url:"/asset/icon-kakao.png",revision:"504847e614f606832d63de9ce76aeae7"},{url:"/asset/icon.svg",revision:"5ffefbdc707fd07965bbb33742e5f554"},{url:"/icon512_maskable.png",revision:"235a0410a28a1e87e19841e10322ab59"},{url:"/icon512_rounded.png",revision:"12d339cd96fe38e19a18abc75835d25a"},{url:"/manifest.json",revision:"b65c33793d976343665140a45507206f"},{url:"/manifest.webmanifest",revision:"6f61d66bd325e5e18cfae9c15164dd10"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
