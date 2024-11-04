"use client";

import { useEffect, useState } from "react";
import { getAllOneTimeClub } from "../../_api/supabase";
import Link from "next/link";
import Image from "next/image";
import { CustomAddress } from "@/utils/CustomAddress";
import { CustomDate } from "@/utils/CustomDate";

interface User {
  user_id: string;
  user_name: string;
  user_profile_img: string;
}

interface OTCMember {
  count: number;
}

interface OneTimeClub {
  one_time_club_id: string;
  one_time_club_name: string;
  one_time_image: string;
  one_time_club_location: string;
  one_time_club_date_time: string;
  one_time_people_limited: number;
  user_id: User;
  o_t_c_member: OTCMember[];
  created_at: string;
  updated_at: string;
}

const AllOneTimeClubListPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [allOneTimeClubList, setAllOneTimeClubList] = useState<OneTimeClub[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchAllRegularClubList = async () => {
      try {
        setLoading(true);
        const res = await getAllOneTimeClub();
        if (res) {
          setAllOneTimeClubList(res as OneTimeClub[]);
        } else {
          setError("정기적 모임리스트를 불러오지 못했습니다.");
        }
      } catch (error) {
        setError(`API 호출 중 오류가 발생했습니다. ${error instanceof Error ? error.message : String(error)}`);
      } finally {
        setLoading(false);
      }
    };
    fetchAllRegularClubList();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center w-full h-36">로딩 중...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center w-full h-36 text-red-500">{error}</div>;
  }

  return (
    <div>
      <div className="flex w-[390px] py-2 px-4 items-center gap-[10px]">
        <p className="text-[14px] font-[500px] leading-[145%]">총 {allOneTimeClubList?.length}개</p>
      </div>
      {allOneTimeClubList.map((club: OneTimeClub) => (
        <div key={club.one_time_club_id} className="flex items-start gap-2 self-stretch mb-4">
          <Link
            href={`/club/one-time-club-sub/${club.one_time_club_id}`}
            className="w-[358px] h-[102px] flex items-center gap-[8px] mx-4"
          >
            <div className="w-[358px] h-[102px] flex items-center gap-[8px] mx-4">
              <div className="w-[88px] h-[88px] rounded-[12px] flex-shrink-0 overflow-hidden">
                <Image
                  width={102}
                  height={102}
                  src={club.one_time_image}
                  alt={club.one_time_club_name}
                  className="w-[102px] h-[102px] object-cover"
                />
              </div>
              <div className="flex w-[248px] h-[87px] flex-col items-start gap-[4px]">
                <div
                  className="flex py-[2px] px-[8px] justify-center items-center
                rounded-[128px] bg-[#fdb800]"
                >
                  <p className="font-pretendard text-[10px] not-italic leading-[14.5px] font-normal">에그팝</p>
                </div>
                <div className="w-[160px]">
                  <p
                    className="font-pretendard text-[14px] font-[600] overflow-hidden text-overflow-ellipsis"
                    style={
                      {
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        alignSelf: "stretch",
                        color: "var(--Gray-scale-900, #0D0D0D)",
                        lineHeight: "135%"
                      } as React.CSSProperties
                    }
                  >
                    {club.one_time_club_name}
                  </p>
                </div>
                <div className="flex pt-[2px] items-center gap-[2px]">
                  <Image src="/asset/Icon/Icon-Location.png" alt="LocationIcon" width={16} height={16} />
                  <p className="text-[12px] font-[400px] leading-[145%]">
                    {CustomAddress(club.one_time_club_location)}
                  </p>
                  <div className="flex items-center gap-2 w-[125px] h-[20px]">
                    <p className="text-[12px] font-[400px] leading-[145%]">
                      {CustomDate(club.one_time_club_date_time)}
                    </p>
                  </div>
                </div>

                <div className="flex max-w-[160px] items-center gap-[2px]">
                  <p className="font-pretendard leading-[20.3px] text-[14px] ml-[8px] text-[#8c8c8c] font-[500px]">
                    멤버
                  </p>
                  <p className="font-pretendard leading-[20.3px] text-[14px] ml-[2px] text-[#8c8c8c] font-[500px]">
                    {club.o_t_c_member[0].count} / {club.one_time_people_limited}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllOneTimeClubListPage;