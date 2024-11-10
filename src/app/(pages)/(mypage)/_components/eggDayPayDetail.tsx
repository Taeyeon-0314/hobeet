"use client";

import { addHours, format, parseISO } from "date-fns";
import { getEggDayPayList } from "../_api/supabase";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { LocationIcon } from "@/components/uiComponents/icon/icons";

const EggDayPayDetail = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["eggDayPayData"],
    queryFn: getEggDayPayList
  });

  const customAddress = (address: string) => {
    const withoutNumber = address?.replace(/\[\d+\]\s*/, "");
    const parts = withoutNumber?.split(" ");
    return parts?.slice(0, 2).join(" ");
  };

  const customDateFormat = (dateString: string | null | undefined) => {
    if (!dateString) {
      return "날짜 정보 없음";
    }

    try {
      const parsedDate = parseISO(dateString);
      return format(parsedDate, "yyyy. MM. dd");
    } catch (error) {
      console.error("날짜 포멧팅 실패:", dateString, error);
      return "유효하지 않은 날짜 형식";
    }
  };

  const customDate = (dateString: string | null | undefined) => {
    if (!dateString) {
      return "날짜 정보 없음";
    }

    try {
      const parsedDate = parseISO(dateString);
      const adjustedDate = addHours(parsedDate, 9);
      return format(adjustedDate, "MM월 dd일 HH:mm");
    } catch (error) {
      console.error("날짜 포멧팅 실패:", dateString, error);
      return "유효하지 않은 날짜 형식";
    }
  };

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="egg-day-pay-list">
      {data?.map((notification, index) => (
        <Link
          href={`/club/regular-club-sub/${notification.egg_club_id}/create/${notification.egg_day_id.egg_day_id}`}
          key={index}
        >
          <div key={index} className="notification-card my-4">
            <div className="h-[35px] py-2 justify-start items-center gap-2.5 inline-flex">
              <div className="text-black text-sm font-semibold font-['Pretendard'] leading-[18.90px]">
                {customDateFormat(notification.egg_day_kakaopay_create_at)}
              </div>
            </div>

            <div className="w-[358px] h-[88px] justify-start items-center gap-2 inline-flex">
              {/* <div className="w-[88px] h-[88px] relative bg-[#d9d9d9] rounded-xl" /> */}
              <Image
                src={notification.egg_day_id.egg_day_image}
                alt="payList"
                width={88}
                height={88}
                className="w-[88px] h-[88px] relative bg-[#d9d9d9] rounded-xl"
              />
              <div className="w-[248px] py-0.5 flex-col justify-start items-start gap-0.5 inline-flex">
                <div className="px-2 py-0.5 bg-[#ffe399] rounded-[124px] justify-center items-center inline-flex">
                  <div className="text-[#0c0c0c] text-[10px] font-normal font-['Pretendard'] leading-[14.50px]">
                    에그데이
                  </div>
                </div>
                <div className="self-stretch text-[#0c0c0c] text-sm font-semibold font-['Pretendard'] leading-[18.90px]">
                  {notification.egg_day_id.egg_day_name}
                </div>
                <div className="pt-[3px] justify-start items-center gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="w-4 h-4 justify-center items-center flex">
                      {/* <div className="w-4 h-4 relative flex-col justify-start items-start flex" /> */}
                      <LocationIcon />
                    </div>
                    <div className="text-[#8c8c8c] text-sm font-medium font-['Pretendard'] leading-tight">
                      {customAddress(notification.egg_day_id.egg_day_location)}
                    </div>
                  </div>
                  <div className="text-[#8c8c8c] text-sm font-medium font-['Pretendard'] leading-tight">
                    {customDate(notification.egg_day_id.egg_day_date_time)}
                  </div>
                </div>
              </div>
            </div>
            {/* <div>
              <div className="notification-image">
                <Image src={notification.egg_day_id.egg_day_image} alt="payList" width={100} height={100} />
              </div>
              <div className="notification-content">
                <div className=" bg-gray-900 text-white text-xs px-2 py-1 rounded-full w-16 mt-2">에그데이</div>
                <h3 className="notification-title">{notification.egg_day_id.egg_day_name}</h3>
                <p className="notification-location">{customAddress(notification.egg_day_id.egg_day_location)}</p>
                <p className="notification-date">{customDate(notification.egg_day_id.egg_day_date_time)}</p>
              </div>
            </div> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default EggDayPayDetail;
