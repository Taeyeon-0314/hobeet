"use client";

import { useQuery } from "@tanstack/react-query";
import { addHours, format, parseISO } from "date-fns";
import { getEggPopPayList } from "../_api/supabase";
import Image from "next/image";
import Link from "next/link";

const EggPopPayDetail = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["eggPopPayData"],
    queryFn: getEggPopPayList
  });
  console.log(data);

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

  if (isError) {
    return <div>에러 발생</div>;
  }
  // console.log(data);

  return (
    <div className="egg-day-pay-list">
      {data?.map((oneTimeClub) => (
        <Link
          href={`/club/one-time-club-sub/${oneTimeClub.egg_pop_id.egg_pop_id}`}
          key={oneTimeClub.egg_pop_id.egg_pop_id}
        >
          <div key={oneTimeClub.egg_pop_id.egg_pop_id} className="oneTimeClub-card my-4">
            <div>{customDateFormat(oneTimeClub.egg_pop_id.egg_pop_date_time)}</div>

            <div>
              <div className="oneTimeClub-image">
                <Image src={oneTimeClub.egg_pop_id.egg_pop_image} alt="payList" width={100} height={100} />
              </div>
              <div className="oneTimeClub-content">
                <div className=" bg-gray-900 text-white text-xs px-2 py-1 rounded-full w-16 mt-2">에그팝</div>
                <h3 className="oneTimeClub-title">{oneTimeClub.egg_pop_id.egg_pop_name}</h3>
                <p className="oneTimeClub-location">{customAddress(oneTimeClub.egg_pop_id.egg_pop_location)}</p>
                <p className="oneTimeClub-date">{customDate(oneTimeClub.egg_pop_id.egg_pop_date_time)}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default EggPopPayDetail;
