"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "./store/AuthContext";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  const pathname = usePathname();

  const { userId } = useAuth();

  const router = useRouter();
  const handleChattingRoom = () => {
    if (!userId) {
      alert("로그인이 필요한 서비스입니다.");
    } else {
      router.push("/chat");
    }
  };
  return (
    <footer
      className={`flex w-[390px] p-[8px 16px 0px 16px] justify-between items-center border-t border-solid border-[1px] border-[#F2F2F2] bg-[#fff] ${
        className || ""
      }`}
    >
      <div className="flex justify-around w-full">
        <Link href="/">
          <div className="flex w-[48px] h-[48px] flex-col justify-center items-center flex-shrink-0">
            <img
              src={pathname === "/" ? "/asset/Bottom nav_Button_Home.png" : "/asset/Bottom nav_Button_Home_Default.png"}
              alt="Bottom nav_Button_Home_Defaul"
              width={48}
              height={48}
            />
          </div>
        </Link>
        <Link href="/search">
          <div className="flex w-[48px] h-[48px] flex-col justify-center items-center flex-shrink-0">
            <img
              src={
                pathname === "/search"
                  ? "/asset/Bottom nav_Button_Search.png"
                  : "/asset/Bottom nav_Button_Search_Default.png"
              }
              alt="Bottom nav_Button_Search_Default"
              width={48}
              height={48}
            />
          </div>
        </Link>
        <Link href="/club">
          <div className="flex w-[48px] h-[48px] flex-col justify-center items-center flex-shrink-0">
            <img
              src={
                pathname === "/club"
                  ? "/asset/Bottom nav_Button__My gathering.png"
                  : "/asset/Bottom nav_Button__My gathering_Default.png"
              }
              alt="Bottom nav_Button__My gathering_Default"
              width={48}
              height={48}
            />
          </div>
        </Link>
        <button onClick={handleChattingRoom}>
          <div className="flex w-[48px] h-[48px] flex-col justify-center items-center flex-shrink-0">
            <img
              src={
                pathname === "/chat"
                  ? "/asset/Bottom nav_Button_My chat.png"
                  : "/asset/Bottom nav_Button_My chat_Default.png"
              }
              alt="Bottom nav_Button_My chat_Default"
              width={48}
              height={48}
            />
          </div>
        </button>
        <Link href="/mypage">
          <div className="flex w-[48px] h-[48px] flex-col justify-center items-center flex-shrink-0">
            <img
              src={
                pathname === "/mypage"
                  ? "/asset/Bottom nav_Button_My page.png"
                  : "/asset/Bottom nav_Button_My page_Default.png"
              }
              alt="Bottom nav_Button_My page_Default"
              width={48}
              height={48}
            />
          </div>
        </Link>
      </div>
    </footer>
  );
}