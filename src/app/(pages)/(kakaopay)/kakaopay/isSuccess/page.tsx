"use client"; // 클라이언트 컴포넌트로 지정

import { useEffect, useState } from "react";
import { SupabaseClubAPI } from "@/utils/onetimeclubjoin/_api/supabase";
import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestUserId = searchParams.get("requestUserId") || "";
  const clubId = searchParams.get("clubId") || "";
  const clubType = searchParams.get("clubType") || "";
  const [isMemberInserted, setIsMemberInserted] = useState(false);

  useEffect(() => {
    if (isMemberInserted) return;

    const clubApi = new SupabaseClubAPI();

    const insertMember = async () => {
      if (clubType === "true") {
        console.log("너 여기 타면 죽인다 진짜");

        await clubApi.insertMember(clubId, requestUserId);
        setIsMemberInserted(true);

        router.push(
          `http://localhost:3000/kakaopay/success?requestUserId=${requestUserId}&clubId=${clubId}&clubType=${clubType}`
        );
      } else {
        console.log("일단 너 타면 내가 살려줄게");

        await clubApi.eggDayInsertMember(clubId, requestUserId);
        setIsMemberInserted(true);

        router.push(
          `http://localhost:3000/kakaopay/success?requestUserId=${requestUserId}&clubId=${clubId}&clubType=${clubType}`
        );
      }
    };

    insertMember();
  }, [clubId, requestUserId, router, isMemberInserted]);

  return <div>로딩중...</div>;
};

export default Page;
