if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const u=e=>a(e,i),r={module:{uri:i},exports:c,require:u};s[i]=Promise.all(t.map((e=>r[e]||u(e)))).then((e=>(n(...e),c)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"56e1c24622a6ac10b105dd117ad66a1c"},{url:"/_next/static/E-LSC7y8bWputBPmDHse8/_buildManifest.js",revision:"6310079bf1ae7bebeb6a2135896e4564"},{url:"/_next/static/E-LSC7y8bWputBPmDHse8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/2117-e529af58cfec7b1b.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/3145-808017896d57dd51.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/4004-638cd38a3187caf6.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/4065-68ac105059380be0.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/5223.af0288258eb3edbb.js",revision:"af0288258eb3edbb"},{url:"/_next/static/chunks/6066-12c3f24de37e7a35.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/6593-a88d38d3ff766d2d.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/6614-5ba613f59249eaf5.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/676-544f198496985c3b.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/7648-7d0b9929a20e3579.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/8250-e79c4cd05b71040f.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/9763-b4cb408f8298ed4d.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(auth)/auth/callback/InsertUserInfo/page-933b8e4c969c6026.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(auth)/signin/page-35906b10018d684d.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(auth)/signupSecond/%5BuserId%5D/page-f70624ec9584c8d5.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(categoryList)/category/%5BcategoryId%5D/page-507baed087caae0e.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/onetimeChat/%5BchatRoomId%5D/layout-55fd2e51c12ce303.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/onetimeChat/%5BchatRoomId%5D/page-25d0683c5aca705c.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/page-c289e9eb89b709f6.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/regularChat/%5BchatRoomId%5D/layout-886bf9aa729dcb4a.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(chat)/chat/regularChat/%5BchatRoomId%5D/page-1fbf29fc51544810.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(club)/club/list/onetime/page-f0de582d6058f6ea.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(club)/club/list/regular/page-e1e42418d8c4b601.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(club)/club/one-time-club-sub/%5Bid%5D/page-0d2ef999f6580448.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(club)/club/one-time/page-a3edd12a2d717bae.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(club)/club/page-7f18a144015eb21c.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(club)/club/regular-club-sub/%5Bid%5D/create/%5BsubId%5D/page-87bb86b54a09229d.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(club)/club/regular-club-sub/%5Bid%5D/create/page-e7164fc71bd030ff.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(club)/club/regular-club-sub/%5Bid%5D/page-cda09c559113e85b.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(club)/club/regular-time/page-681d17e8dbefc1c5.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(kakaopay)/kakaopay/isSuccess/page-9e5dfeb3f7bd15ed.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(kakaopay)/kakaopay/paymentConfirm/page-bda63139fb73bf36.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(kakaopay)/kakaopay/success/page-8c616a14d22d98fb.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(mypage)/mypage/paymentDetails/page-f45fe873aa363763.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(mypage)/mypage/profile/page-4c1640d1e7d90db4.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(mypage)/mypage/profileUpdate/page-e0264e0234b69971.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(mypage)/mypage/wishClubList/page-52ca4aba7b696635.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/(pages)/(search)/search/page-5840e5016351ce44.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/_not-found/page-4509339c6e15ec40.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/approvemembers/%5Bid%5D/page-dc26223201c996ec.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/layout-0a67d14fa7d16747.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/loading-a73b3f84c466e9a3.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/myclublist/page-160a0b410d9d4975.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/onetimeclubjointest/page-6aa587a787187c40.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/page-d0af7fb168942892.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/app/regularclubjointest/page-ae56e018f7d1ab71.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/e8686b1f-4e310147df71a331.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/fd9d1056-5b1be66c41da6169.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/main-41513deac22a13ac.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/main-app-f444d3ac6114b66e.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/pages/_app-3c9ca398d360b709.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/pages/_error-cf5ca766ac8f493f.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-38dfdff1ef4356e9.js",revision:"E-LSC7y8bWputBPmDHse8"},{url:"/_next/static/css/44491df69b1d0570.css",revision:"44491df69b1d0570"},{url:"/_next/static/css/db52e46aa6483df8.css",revision:"db52e46aa6483df8"},{url:"/_next/static/media/ff840cfebfb63b0c-s.p.woff2",revision:"302ec55f5b4320354ec6b35a53dead87"},{url:"/asset/BellIcon.png",revision:"33dbd2b79fee3a57b68e8afc4c231131"},{url:"/asset/Bottom nav_Button_Home.png",revision:"647f3cf50489654544bda860da3b0cc8"},{url:"/asset/Bottom nav_Button_Home_Default.png",revision:"f362a57a5d481eae4cb93e6083dc43b2"},{url:"/asset/Bottom nav_Button_My chat.png",revision:"a908ff64f1008ee705178606651418f6"},{url:"/asset/Bottom nav_Button_My chat_Default.png",revision:"7ece5e8619d6cd6ac961f7f2894b6750"},{url:"/asset/Bottom nav_Button_My page.png",revision:"43666f18807809deb538b921fbaaf78d"},{url:"/asset/Bottom nav_Button_My page_Default.png",revision:"7d421365b08c2e1c7eb2df53d5507b06"},{url:"/asset/Bottom nav_Button_Search.png",revision:"5be80543b6533a3c654814246144c588"},{url:"/asset/Bottom nav_Button_Search_Default.png",revision:"c236d00b4dcda59b6ef10f706702f77e"},{url:"/asset/Bottom nav_Button__My gathering.png",revision:"d0d02ea4e37ca9bf05bf43881815009d"},{url:"/asset/Bottom nav_Button__My gathering_Default.png",revision:"c65b3c33d123d7311e02b00fd47823bd"},{url:"/asset/Category icon_airplane.png",revision:"d6d438b7ba632301c3a4894159eaa4cb"},{url:"/asset/Category icon_clapper-board.png",revision:"5833dfa0f53563d4b63e384ee8a5d1ea"},{url:"/asset/Category icon_guitar.png",revision:"4ec66f2842feae251077fb2da9b7fe51"},{url:"/asset/Category icon_hot-beverage.png",revision:"cd36589e9e134b459f54fbbb3d580b2d"},{url:"/asset/Category icon_tennis.png",revision:"bb775d6d4fcd001853b1f14f250e4ae2"},{url:"/asset/Category icon_voltage.png",revision:"94223c71afcc1b8103c28b0dbb58d10e"},{url:"/asset/Category icon_woman-dancing.png",revision:"bb4d72358c303708a5aa2a467836af03"},{url:"/asset/Frame 2307.png",revision:"827a776893a6aca7960585067e78da7c"},{url:"/asset/Icon/Arrow-Right-Outline.png",revision:"559c5f8f6d464469d6870bc0bc5d4ccb"},{url:"/asset/Icon/Frame 1000007052.png",revision:"58f598d072c2fb797f8dab84614273ff"},{url:"/asset/Icon/Heart-Outline.png",revision:"1b0c6908ab89e7a41c1fc421cb2016c0"},{url:"/asset/Icon/Heart.png",revision:"258beaea4d804517528c155e25ca8b54"},{url:"/asset/Icon/Icon-Heart.png",revision:"bb681282826ab4a4299e956382aef0f6"},{url:"/asset/Icon/Icon-Location.png",revision:"840f469c668ea0892f0c098fb60ed8d7"},{url:"/asset/MainBanner.jpg",revision:"d095b3814bb177b67b70af54165c7112"},{url:"/asset/MainLogo.svg",revision:"69bc5b340dbb90ff041ef5395ee83fa0"},{url:"/asset/MenuIcon.png",revision:"367ce1fe65b21d292190fac00a114746"},{url:"/asset/Message-Filled.png",revision:"38b3a954941675fae1665f6124bed22d"},{url:"/asset/PlusIcon.png",revision:"9339adb461179db5b91c08e01096b0e4"},{url:"/asset/Rectangle 20.png",revision:"de9efbf3d7bf6a06fc3ff63fd8ce820d"},{url:"/asset/icon-google.png",revision:"023aadfe50cc1af7b960750e422dfd63"},{url:"/asset/icon-kakao.png",revision:"504847e614f606832d63de9ce76aeae7"},{url:"/asset/icon.svg",revision:"2e60a8b4b5cb08a13649bf5caac7eb39"},{url:"/icon512_maskable.png",revision:"235a0410a28a1e87e19841e10322ab59"},{url:"/icon512_rounded.png",revision:"12d339cd96fe38e19a18abc75835d25a"},{url:"/manifest.json",revision:"b65c33793d976343665140a45507206f"},{url:"/manifest.webmanifest",revision:"9b0b00000e260acb04ac7f95bad6ae9b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
