if (!self.define) {
  let e,
    a = {};
  const s = (s, c) => (
    (s = new URL(s + ".js", c).href),
    a[s] ||
      new Promise((a) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = a), document.head.appendChild(e);
        } else (e = s), importScripts(s), a();
      }).then(() => {
        let e = a[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, n) => {
    const t = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (a[t]) return;
    let i = {};
    const p = (e) => s(e, t),
      u = { module: { uri: t }, exports: i, require: p };
    a[t] = Promise.all(c.map((e) => u[e] || p(e))).then((e) => (n(...e), i));
  };
}
define(["./workbox-1bb06f5e"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/_next/app-build-manifest.json", revision: "bf42320a1cf0b065d98210f52c70b8b1" },
        { url: "/_next/static/Op172E_XunfRs5naRFp2R/_buildManifest.js", revision: "d29b786441d34cb8baf3919f3318c86e" },
        { url: "/_next/static/Op172E_XunfRs5naRFp2R/_ssgManifest.js", revision: "b6652df95db52feb4daf4eca35380933" },
        { url: "/_next/static/chunks/0e762574-7bfe9acc3ccf1184.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/0e762574-7bfe9acc3ccf1184.js.map", revision: "87733beb808daf8cb5dcd7ffdf6a9caa" },
        { url: "/_next/static/chunks/1458-637fd2ae1cf5719b.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/1458-637fd2ae1cf5719b.js.map", revision: "21e2cc409a503e7a076c29650d4b631b" },
        { url: "/_next/static/chunks/189-6cfe0e06eb1ab597.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/189-6cfe0e06eb1ab597.js.map", revision: "14aa52e65a005a222ad0a9f92df9943a" },
        { url: "/_next/static/chunks/2298-85e77041e742282a.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/2298-85e77041e742282a.js.map", revision: "189234b331f6fba7cf1d95e7195bcbea" },
        { url: "/_next/static/chunks/2480-85c61f9726578576.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/2480-85c61f9726578576.js.map", revision: "61881e3c69a9a775c81aadfcef354804" },
        { url: "/_next/static/chunks/2842.c8fcaed87c53ea1d.js", revision: "c8fcaed87c53ea1d" },
        { url: "/_next/static/chunks/2842.c8fcaed87c53ea1d.js.map", revision: "d53d732b9c6aca9c79614ffdc37f75d2" },
        { url: "/_next/static/chunks/2867-91d68d791a3585bd.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/2867-91d68d791a3585bd.js.map", revision: "7263b87970c4f4173a8d7a2e085a19cc" },
        { url: "/_next/static/chunks/3445-814a8b70a0bef73e.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/3445-814a8b70a0bef73e.js.map", revision: "5c8eba6f3ceed88c3da2bb840aede007" },
        { url: "/_next/static/chunks/3726-399cc3279d3a48d3.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/3726-399cc3279d3a48d3.js.map", revision: "9a8ada945164b0954de8963405d883b8" },
        { url: "/_next/static/chunks/3728-0587e4440ac0c757.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/3728-0587e4440ac0c757.js.map", revision: "0f64e6a3c5f2503ada9dd55cc23dcfd7" },
        { url: "/_next/static/chunks/3969-027800a3db217644.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/3969-027800a3db217644.js.map", revision: "3fddc8da7b16345742c9aa6cee74f605" },
        { url: "/_next/static/chunks/430-0a7bc1a55ca434b1.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/430-0a7bc1a55ca434b1.js.map", revision: "24efebec0a5f6bd9c78f4912de17cd87" },
        { url: "/_next/static/chunks/4578-5ade994248da8540.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/4578-5ade994248da8540.js.map", revision: "53b9d6b4e4879af1d339cbe5f1a3319b" },
        { url: "/_next/static/chunks/4985-dbb4c29822464671.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/4985-dbb4c29822464671.js.map", revision: "245bab7683f0453958dc3ce569e8c1ac" },
        { url: "/_next/static/chunks/5178-d8e5a2d19b5c9d8e.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/5178-d8e5a2d19b5c9d8e.js.map", revision: "3312582ee2c6ea53db35aa3fb6f1bf7c" },
        { url: "/_next/static/chunks/52774a7f-fdfa31c5107de6e4.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/52774a7f-fdfa31c5107de6e4.js.map", revision: "c1a986515bb657deb094de619c1e7674" },
        { url: "/_next/static/chunks/5381-021d2bafe75a6388.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/5381-021d2bafe75a6388.js.map", revision: "2437687350352b85836ff13c19384ab0" },
        { url: "/_next/static/chunks/53c13509-eea85a4ef9676a96.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/53c13509-eea85a4ef9676a96.js.map", revision: "722c2ee8e219ec21eaa18def769619bc" },
        { url: "/_next/static/chunks/5716-b5222beaa189316c.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/5716-b5222beaa189316c.js.map", revision: "bafafcb0504ac2680b81d5a3c212bd2a" },
        { url: "/_next/static/chunks/5e22fd23-9cb0dd2dfc8cb2ec.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/5e22fd23-9cb0dd2dfc8cb2ec.js.map", revision: "0411ebcc11fedc8c9c1bc916aff70e23" },
        { url: "/_next/static/chunks/6502-4919da720bff05bc.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/6502-4919da720bff05bc.js.map", revision: "03d56c061080e4f7116717078dc35e0b" },
        { url: "/_next/static/chunks/66ec4792-6f924fcd894ca6e9.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/66ec4792-6f924fcd894ca6e9.js.map", revision: "64cbebf88a79e769890de428e5aa77e8" },
        { url: "/_next/static/chunks/6702-201763a7da975411.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/6702-201763a7da975411.js.map", revision: "9d79cb1ae5890f6258398077de7a4d6e" },
        { url: "/_next/static/chunks/7077-e3463ac7cec2820f.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/7077-e3463ac7cec2820f.js.map", revision: "fc21831c57e7b36e5f93d14d8685e1b6" },
        { url: "/_next/static/chunks/7213-560f5829ffc33d61.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/7213-560f5829ffc33d61.js.map", revision: "61e9b3ff13600ae1d278aeeb0466b854" },
        { url: "/_next/static/chunks/7617-c475964475b4dc4f.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/7617-c475964475b4dc4f.js.map", revision: "866628967af4263971038fe23a045c9d" },
        { url: "/_next/static/chunks/7690-dadf7d51e36c2ff7.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/7690-dadf7d51e36c2ff7.js.map", revision: "7820bf9148fbc1d284a38fd1f1b6dfb7" },
        { url: "/_next/static/chunks/786-51a47f745c8cd475.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/786-51a47f745c8cd475.js.map", revision: "59afc4bf8464414c70974189f23e5cd7" },
        { url: "/_next/static/chunks/795d4814-34a4f69c897c9c81.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/807-175a624634263a09.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/807-175a624634263a09.js.map", revision: "049e2405239c594876ae43784c44b0a1" },
        { url: "/_next/static/chunks/8227-d349016d0d969a47.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/8227-d349016d0d969a47.js.map", revision: "6df07cbc62cffd31972339d5331501ef" },
        { url: "/_next/static/chunks/8481-037624d85516981d.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/8481-037624d85516981d.js.map", revision: "9e2b606c3d5d321af0a037ae4e7a49da" },
        { url: "/_next/static/chunks/8593-5dbc0629898730bf.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/8593-5dbc0629898730bf.js.map", revision: "15877a015d3c1581bbdd63214bee57bc" },
        { url: "/_next/static/chunks/8e1d74a4-2de3a548c786cba7.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/8e1d74a4-2de3a548c786cba7.js.map", revision: "b0d13d15604978f36fabc6b5a93db12b" },
        { url: "/_next/static/chunks/9c4e2130-a96704b5b68528c5.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/9c4e2130-a96704b5b68528c5.js.map", revision: "7151a5abd442e9e8853201723d7f35e4" },
        {
          url: "/_next/static/chunks/app/(pages)/(approvemembers)/approvemembers/%5Bid%5D/page-c3bb280003b850e5.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(approvemembers)/approvemembers/%5Bid%5D/page-c3bb280003b850e5.js.map",
          revision: "b0bd48866ee5f8b6029d8253bbb78f3f"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(auth)/auth/callback/InsertUserInfo/page-259387a4bb28e7aa.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(auth)/auth/callback/InsertUserInfo/page-259387a4bb28e7aa.js.map",
          revision: "bba68af41afb73445b51af8a80219624"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(auth)/signin/page-f2b8b991992583cc.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(auth)/signin/page-f2b8b991992583cc.js.map",
          revision: "efbd24504d71dafed17ca7535d6cb785"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(auth)/signupSecond/%5BuserId%5D/page-3b592e7faae24f75.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(auth)/signupSecond/%5BuserId%5D/page-3b592e7faae24f75.js.map",
          revision: "26a94ffb4e188aaf7c5fc4cb4fc1b089"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(categoryList)/category/%5BcategoryId%5D/layout-6fdba335108863ad.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(categoryList)/category/%5BcategoryId%5D/layout-6fdba335108863ad.js.map",
          revision: "ea3f78c07a98dbb9822f2946bbf82697"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(categoryList)/category/%5BcategoryId%5D/page-b2d5b664a41fee0a.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(categoryList)/category/%5BcategoryId%5D/page-b2d5b664a41fee0a.js.map",
          revision: "e6b404bd1b24c585da8dfc2dcdcb4a85"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(chat)/chat/onetimeChat/%5BchatRoomId%5D/layout-8625e1dad25c6433.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(chat)/chat/onetimeChat/%5BchatRoomId%5D/layout-8625e1dad25c6433.js.map",
          revision: "0959cb58f51bbf0b48f066d6c5bdf23a"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(chat)/chat/onetimeChat/%5BchatRoomId%5D/page-ff8688be5f20f0f0.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(chat)/chat/onetimeChat/%5BchatRoomId%5D/page-ff8688be5f20f0f0.js.map",
          revision: "2dc489bc4f78266c63cad3a8a9ac51fd"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(chat)/chat/page-bd9f281754c75af4.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(chat)/chat/page-bd9f281754c75af4.js.map",
          revision: "7cea3cf038b8bfe8833c88386111b048"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(chat)/chat/regularChat/%5BchatRoomId%5D/layout-d3081ac707b58b05.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(chat)/chat/regularChat/%5BchatRoomId%5D/layout-d3081ac707b58b05.js.map",
          revision: "595c4be77bbdab2ae9b68417524b217f"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(chat)/chat/regularChat/%5BchatRoomId%5D/page-f041c6a0754d2ea2.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(chat)/chat/regularChat/%5BchatRoomId%5D/page-f041c6a0754d2ea2.js.map",
          revision: "030cce102926dd1923290953178f8353"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(club)/club/list/onetime/page-6659972c6ab9b393.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(club)/club/list/onetime/page-6659972c6ab9b393.js.map",
          revision: "1a176acb7c27571fe2f01b1c6745a907"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(club)/club/list/regular/page-3aff1e591d40c57b.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(club)/club/list/regular/page-3aff1e591d40c57b.js.map",
          revision: "1490a9a5c0aefc703b4da8e83f259b1b"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(club)/club/one-time-club-sub/%5Bid%5D/page-c7fc47fbbb84c1f6.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(club)/club/one-time-club-sub/%5Bid%5D/page-c7fc47fbbb84c1f6.js.map",
          revision: "3e3f7f163eaf9de869eb0a3db14f71d4"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(club)/club/one-time/page-d7a3f4d3d51b1f6f.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(club)/club/one-time/page-d7a3f4d3d51b1f6f.js.map",
          revision: "18dcf6c59fff318685057e388d6c1145"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(club)/club/page-339fe3d119545d05.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(club)/club/page-339fe3d119545d05.js.map",
          revision: "11441e02e56e4b004f0ce99b21b22f92"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(club)/club/regular-club-sub/%5Bid%5D/create/%5BsubId%5D/page-d21f39e762fd8130.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(club)/club/regular-club-sub/%5Bid%5D/create/%5BsubId%5D/page-d21f39e762fd8130.js.map",
          revision: "44b16782afafc40cab60463eb6c80ec7"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(club)/club/regular-club-sub/%5Bid%5D/create/page-9b3f164e35537a5e.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(club)/club/regular-club-sub/%5Bid%5D/create/page-9b3f164e35537a5e.js.map",
          revision: "b16c6a4c5ed0e1cc5066efe6f20382f7"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(club)/club/regular-club-sub/%5Bid%5D/page-900116133b18c14e.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(club)/club/regular-club-sub/%5Bid%5D/page-900116133b18c14e.js.map",
          revision: "5befd6d035a2ac46ad7a4a7755b9f80f"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(club)/club/regular-time/page-e476023b59ea6e2b.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(club)/club/regular-time/page-e476023b59ea6e2b.js.map",
          revision: "4ff22c1247b7551b9e29e67bdf2bb268"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(kakaopay)/kakaopay/isSuccess/page-83bf6b6f1cc9b105.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(kakaopay)/kakaopay/isSuccess/page-83bf6b6f1cc9b105.js.map",
          revision: "14d8cc7c64cf962a4b52ee9e4cc1df33"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(kakaopay)/kakaopay/paymentConfirm/page-6eaa9b3297c9cfdc.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(kakaopay)/kakaopay/paymentConfirm/page-6eaa9b3297c9cfdc.js.map",
          revision: "58b864dc234dc5fdbf5f8ab11731beb1"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(kakaopay)/kakaopay/success/page-774ea33515467816.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(kakaopay)/kakaopay/success/page-774ea33515467816.js.map",
          revision: "f01fe0442796796f3eeb74ead2d51721"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(myclublist)/myclublist/page-68c7426e6a098371.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(myclublist)/myclublist/page-68c7426e6a098371.js.map",
          revision: "f6c37e606d20beccff66fe916e286138"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(mypage)/mypage/inquiry/page-b4563737590de459.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(mypage)/mypage/inquiry/page-b4563737590de459.js.map",
          revision: "fa65ad7fa0fd17c6a593e6bbd3e2e06d"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(mypage)/mypage/paymentDetails/page-c4e6e973f045b2a2.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(mypage)/mypage/paymentDetails/page-c4e6e973f045b2a2.js.map",
          revision: "6e2339c4b809d5c7c87643d320da3e48"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(mypage)/mypage/profile/page-7631c3d1c1b4c979.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(mypage)/mypage/profile/page-7631c3d1c1b4c979.js.map",
          revision: "801c5279bc689c7001d8db3f2e891ce5"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(mypage)/mypage/profileUpdate/page-5b8c78b25eda0f3e.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(mypage)/mypage/profileUpdate/page-5b8c78b25eda0f3e.js.map",
          revision: "8af002105edac52f3170ce9c016030b7"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(mypage)/mypage/wishClubList/page-d12d625578e4e902.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(mypage)/mypage/wishClubList/page-d12d625578e4e902.js.map",
          revision: "5a63b3c6f91a6003286c399c54f9a78c"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(search)/search/page-c0724632349ddf1b.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/(pages)/(search)/search/page-c0724632349ddf1b.js.map",
          revision: "611179e33498194255ff4c927963dbf5"
        },
        { url: "/_next/static/chunks/app/_not-found/page-81051fcd9d125c24.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/app/error-7f81d54afe2b9f71.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/app/error-7f81d54afe2b9f71.js.map", revision: "61128540d4ab715ed926ffb084c6fd6e" },
        { url: "/_next/static/chunks/app/global-error-2eaa2d053bb6f2fd.js", revision: "Op172E_XunfRs5naRFp2R" },
        {
          url: "/_next/static/chunks/app/global-error-2eaa2d053bb6f2fd.js.map",
          revision: "5115a68bd0725b8149e4ec775b97b3f8"
        },
        { url: "/_next/static/chunks/app/layout-753f8ff125613fb5.js", revision: "Op172E_XunfRs5naRFp2R" },
        {
          url: "/_next/static/chunks/app/layout-753f8ff125613fb5.js.map",
          revision: "46cb1d4175556e6545b407b69b4cce56"
        },
        { url: "/_next/static/chunks/app/loading-54a8f50c51e2cc7c.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/app/not-found-a701a2d1e42fe183.js", revision: "Op172E_XunfRs5naRFp2R" },
        {
          url: "/_next/static/chunks/app/not-found-a701a2d1e42fe183.js.map",
          revision: "27ad7479bea9cd116f574696f7098f20"
        },
        { url: "/_next/static/chunks/app/page-f8c3e7159a51b199.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/app/page-f8c3e7159a51b199.js.map", revision: "592457c4a9066cea212e76adece818f9" },
        {
          url: "/_next/static/chunks/app/sentry-example-page/page-7a5d1f3e0ca2a45a.js",
          revision: "Op172E_XunfRs5naRFp2R"
        },
        {
          url: "/_next/static/chunks/app/sentry-example-page/page-7a5d1f3e0ca2a45a.js.map",
          revision: "8a85a8837cd2a375d1d2bc4627605e6b"
        },
        { url: "/_next/static/chunks/e34aaff9-d466669edc0af201.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/e34aaff9-d466669edc0af201.js.map", revision: "0b440431c6cc99f6e3043dc61ca51bcf" },
        { url: "/_next/static/chunks/e8686b1f-ba6c0a6e461282c4.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/e8686b1f-ba6c0a6e461282c4.js.map", revision: "f1e911d874d400dddd5a21cc30909370" },
        { url: "/_next/static/chunks/fca4dd8b-e035faaa87b09e17.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/fca4dd8b-e035faaa87b09e17.js.map", revision: "7319adc4c77323d7db37fa2b48b40593" },
        { url: "/_next/static/chunks/fd9d1056-d7332b7ccb5edd91.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/fd9d1056-d7332b7ccb5edd91.js.map", revision: "59e9a00c6cc9def6a86e608e62b01ce7" },
        { url: "/_next/static/chunks/framework-1158e7decabd1757.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/framework-1158e7decabd1757.js.map", revision: "59fb28421b7173e9e53b28a25d23f2b4" },
        { url: "/_next/static/chunks/main-612c6d2df7ec54bc.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/main-612c6d2df7ec54bc.js.map", revision: "41927e567392f689dcab6150586bda48" },
        { url: "/_next/static/chunks/main-app-11b8d0e232b3ea91.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/main-app-11b8d0e232b3ea91.js.map", revision: "d808bc3e4405e1b12855ba1ed9036085" },
        { url: "/_next/static/chunks/pages/_app-5478621823e6ffbc.js", revision: "Op172E_XunfRs5naRFp2R" },
        {
          url: "/_next/static/chunks/pages/_app-5478621823e6ffbc.js.map",
          revision: "04b01b1fd949f51ead3ec35e908017ba"
        },
        { url: "/_next/static/chunks/pages/_error-3a45edc5321753b3.js", revision: "Op172E_XunfRs5naRFp2R" },
        {
          url: "/_next/static/chunks/pages/_error-3a45edc5321753b3.js.map",
          revision: "b3427fd7e527107747ca9ec14c718156"
        },
        { url: "/_next/static/chunks/polyfills-42372ed130431b0a.js", revision: "846118c33b2c0e922d7b3a7676f81f6f" },
        { url: "/_next/static/chunks/webpack-dabb175f6c09fdee.js", revision: "Op172E_XunfRs5naRFp2R" },
        { url: "/_next/static/chunks/webpack-dabb175f6c09fdee.js.map", revision: "44656a4e349ac3702429e80a00b47a67" },
        { url: "/_next/static/css/44491df69b1d0570.css", revision: "44491df69b1d0570" },
        { url: "/_next/static/css/44491df69b1d0570.css.map", revision: "4661fb46abb2cc809b94caea7ffca546" },
        { url: "/_next/static/css/e2e5976a7f52bcdd.css", revision: "e2e5976a7f52bcdd" },
        { url: "/_next/static/css/e2e5976a7f52bcdd.css.map", revision: "36d1fd864355f18f6dc59b8dbe22d77a" },
        { url: "/_next/static/media/ff840cfebfb63b0c-s.p.woff2", revision: "302ec55f5b4320354ec6b35a53dead87" },
        { url: "/asset/BellIcon.png", revision: "33dbd2b79fee3a57b68e8afc4c231131" },
        { url: "/asset/Bottom nav_Button_Home.png", revision: "647f3cf50489654544bda860da3b0cc8" },
        { url: "/asset/Bottom nav_Button_Home_Default.png", revision: "f362a57a5d481eae4cb93e6083dc43b2" },
        { url: "/asset/Bottom nav_Button_My chat.png", revision: "a908ff64f1008ee705178606651418f6" },
        { url: "/asset/Bottom nav_Button_My chat_Default.png", revision: "7ece5e8619d6cd6ac961f7f2894b6750" },
        { url: "/asset/Bottom nav_Button_My page.png", revision: "43666f18807809deb538b921fbaaf78d" },
        { url: "/asset/Bottom nav_Button_My page_Default.png", revision: "7d421365b08c2e1c7eb2df53d5507b06" },
        { url: "/asset/Bottom nav_Button_Search.png", revision: "f7a82109af4dd15d3b50b7ac78c8cf59" },
        { url: "/asset/Bottom nav_Button_Search_Default.png", revision: "456ea2d2657423ce6c5da84bfe6cc938" },
        { url: "/asset/Bottom nav_Button__My gathering.png", revision: "d0d02ea4e37ca9bf05bf43881815009d" },
        { url: "/asset/Bottom nav_Button__My gathering_Default.png", revision: "c65b3c33d123d7311e02b00fd47823bd" },
        { url: "/asset/Category icon_airplane.png", revision: "7db31da6ceee71adb24e34342ab3f9bc" },
        { url: "/asset/Category icon_clapper-board.png", revision: "c604e0dc015d6320f8599c44e9f3e1ce" },
        { url: "/asset/Category icon_guitar.png", revision: "4ec66f2842feae251077fb2da9b7fe51" },
        { url: "/asset/Category icon_hot-beverage.png", revision: "cd36589e9e134b459f54fbbb3d580b2d" },
        { url: "/asset/Category icon_tennis.png", revision: "bb775d6d4fcd001853b1f14f250e4ae2" },
        { url: "/asset/Category icon_voltage.png", revision: "94223c71afcc1b8103c28b0dbb58d10e" },
        { url: "/asset/Category icon_woman-dancing.png", revision: "bb4d72358c303708a5aa2a467836af03" },
        { url: "/asset/Egg.png", revision: "58c23ebbfbeac95f991fa7e214615610" },
        { url: "/asset/Frame 2307.png", revision: "827a776893a6aca7960585067e78da7c" },
        { url: "/asset/Icon/Arrow-Right-Outline.png", revision: "559c5f8f6d464469d6870bc0bc5d4ccb" },
        { url: "/asset/Icon/Frame 1000007052.png", revision: "58f598d072c2fb797f8dab84614273ff" },
        { url: "/asset/Icon/Heart-Filled.png", revision: "936704cfa135ab8f86b9bef995d2a477" },
        { url: "/asset/Icon/Heart-Filled.svg", revision: "afbfd7f22c3c297138d8792da3d77569" },
        { url: "/asset/Icon/Heart-Outline.png", revision: "1b0c6908ab89e7a41c1fc421cb2016c0" },
        { url: "/asset/Icon/Heart.png", revision: "258beaea4d804517528c155e25ca8b54" },
        { url: "/asset/Icon/Icon-Heart.png", revision: "bb681282826ab4a4299e956382aef0f6" },
        { url: "/asset/Icon/Icon-Location.png", revision: "840f469c668ea0892f0c098fb60ed8d7" },
        { url: "/asset/Icon/State-filled.png", revision: "d6bc704bfdc594595408902a4a7f43b3" },
        { url: "/asset/Icon/checkbox-default 2.png", revision: "ab09691b05e9ea35fc47790271bfc3ac" },
        { url: "/asset/Icon/checkbox-default.png", revision: "ab09691b05e9ea35fc47790271bfc3ac" },
        { url: "/asset/Icon/checkbox-selected 2.png", revision: "24d5a349fde6f96b6647e27f4a043cdf" },
        { url: "/asset/Icon/checkbox-selected.png", revision: "24d5a349fde6f96b6647e27f4a043cdf" },
        { url: "/asset/Icon/icon-vector.svg", revision: "8b78d6a5f58a0c00c2ddd236c957aa9a" },
        { url: "/asset/MainBanner.jpg", revision: "d095b3814bb177b67b70af54165c7112" },
        { url: "/asset/MainLogo.svg", revision: "69bc5b340dbb90ff041ef5395ee83fa0" },
        { url: "/asset/MenuIcon.png", revision: "367ce1fe65b21d292190fac00a114746" },
        { url: "/asset/Message-Filled.png", revision: "38b3a954941675fae1665f6124bed22d" },
        { url: "/asset/PlusIcon.png", revision: "9339adb461179db5b91c08e01096b0e4" },
        { url: "/asset/Rectangle 20.png", revision: "de9efbf3d7bf6a06fc3ff63fd8ce820d" },
        { url: "/asset/banner.png", revision: "e8a4421f14e1fcf0dfd8cd68531d61c3" },
        { url: "/asset/banner.svg", revision: "ebf0cf0e9beadcd8ea837903c93cf3c5" },
        { url: "/asset/defaultProfileImg.svg", revision: "7a2a8b974937e8437c8badc9cbaad5c9" },
        { url: "/asset/eggsBanner.png", revision: "721aec571c712bbc6ca910e7c0946475" },
        { url: "/asset/icon-google.png", revision: "023aadfe50cc1af7b960750e422dfd63" },
        { url: "/asset/icon-kakao.png", revision: "504847e614f606832d63de9ce76aeae7" },
        { url: "/asset/icon.svg", revision: "2e60a8b4b5cb08a13649bf5caac7eb39" },
        { url: "/asset/smallBanner.svg", revision: "6a8c1ebba47445cac414e06587293702" },
        { url: "/icon512_maskable.png", revision: "235a0410a28a1e87e19841e10322ab59" },
        { url: "/icon512_rounded.png", revision: "12d339cd96fe38e19a18abc75835d25a" },
        { url: "/manifest.json", revision: "b65c33793d976343665140a45507206f" },
        { url: "/manifest.webmanifest", revision: "9b0b00000e260acb04ac7f95bad6ae9b" }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: a, event: s, state: c }) =>
              a && "opaqueredirect" === a.type
                ? new Response(a.body, { status: 200, statusText: "OK", headers: a.headers })
                : a
          }
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })]
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })]
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const a = e.pathname;
        return !a.startsWith("/api/auth/") && !!a.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })]
      }),
      "GET"
    );
});
