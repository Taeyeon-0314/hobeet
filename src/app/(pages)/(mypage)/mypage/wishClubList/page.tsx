"use client";

import React, { useEffect, useState } from "react";
import browserClient from "@/utils/supabase/client";
import Image from "next/image";

// 기본 타입 정의
type User = {
  user_name: string;
  user_profile_img: string;
};

// 클럽 정보 타입
type ClubInfo = {
  regular_club_name: string;
  regular_club_image: string;
  regular_club_people_limited: number;
  r_c_member: Array<{ count: number }>;
  wish_list: Array<{ count: number }>;
  user_id: User; // 단일 객체로 변경
};

// Supabase 응답 타입 정의
interface WishListResponse {
  r_c_id: ClubInfo; // 단일 객체로 변경
}

const WishClubListPage = () => {
  const supabase = browserClient;
  const [wishData, setWishData] = useState<WishListResponse[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getWishList = async () => {
      try {
        const { data: userData, error: authError } = await supabase.auth.getUser();

        if (authError) throw new Error("인증 에러가 발생했습니다");
        if (!userData.user?.id) throw new Error("사용자를 찾을 수 없습니다");

        const { data: rawData, error: fetchError } = await supabase
          .from("wish_list")
          .select(
            `egg_club_id(
              egg_club_name,
              egg_club_image, 
              egg_club_people_limited,
              egg_club_member(count),
              wish_list(count),
              user_id(
                user_name, 
                user_profile_img
              )
            )`
          )
          .eq("user_id", userData.user.id);

        if (fetchError) throw fetchError;
        if (!rawData) throw new Error("데이터를 가져올 수 없습니다");

        // console.log("Fetched data:", rawData); // 데이터 구조 확인

        // 타입 안전성을 위해 unknown으로 먼저 변환
        const data = rawData as unknown as WishListResponse[];
        setWishData(data);
        setError(null);
      } catch (err) {
        console.error("찜 목록 가져오기 에러:", err);
        setError(err instanceof Error ? err.message : "알 수 없는 에러가 발생했습니다");
      }
    };

    getWishList();
  }, []);

  if (error) {
    return <div className="p-4 text-red-500 text-center">에러: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-center mb-4">내가 찜한 클럽</h1>
      {wishData.length === 0 ? (
        <p className="text-center text-gray-500">찜한 클럽이 없습니다.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {wishData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 relative">
              <div className="relative">
                <Image
                  src={item.r_c_id.regular_club_image}
                  alt={item.r_c_id.regular_club_name}
                  width={150}
                  height={150}
                  className="w-full h-32 object-cover rounded-md"
                />
                <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded-full w-16 mt-2">에그클럽</div>
              </div>

              <div className="mt-3 text-sm font-semibold text-gray-800 leading-tight">
                {item.r_c_id.regular_club_name}
              </div>

              <div className="flex items-center mt-2">
                <Image
                  src={item.r_c_id.user_id.user_profile_img}
                  alt={item.r_c_id.user_id.user_name}
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded-full mr-2"
                />
                <p className="text-xs text-gray-500">
                  {item.r_c_id.user_id.user_name} 멤버 {item.r_c_id.r_c_member[0]?.count || 0}/
                  {item.r_c_id.regular_club_people_limited}
                </p>
              </div>

              <div className="flex items-center mt-2 text-xs text-gray-500">
                찜수+ {item.r_c_id.wish_list[0]?.count || 0}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishClubListPage;
