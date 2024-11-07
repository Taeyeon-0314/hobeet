"use client";

import { useState } from "react";
import { format, parseISO } from "date-fns";
import ClubCard from "./ClubCard";
import { ko } from "date-fns/locale";
import { NotificationListProps } from "@/types/eggclub.types";
import { InSertEggDay } from "@/types/eggday.types";

const NotificationList = ({ notificationData, crewMembers }: NotificationListProps) => {
  const [selectedDate, setSelectedDate] = useState("all");

  // 날짜별로 그룹화하는 함수
  const groupDate = (notifications: InSertEggDay[]) => {
    return notifications.reduce((groups: { [key: string]: InSertEggDay[] }, notification) => {
      // 날짜는 "MM.dd" 형식으로 변환
      const date = format(parseISO(notification.egg_day_date_time), "MM.dd");

      // 해당 날짜와 그 그룹이 없으면 새로 만든다
      if (!groups[date]) {
        groups[date] = [];
      }

      // 해당 날짜 그룹에 공지를 추가
      groups[date].push(notification);
      return groups;
    }, {});
  };

  // 날짜별로 그룹화한 데이터
  const groupedNotifications = groupDate(notificationData);
  const dates = Object.keys(groupedNotifications).sort();

  // 필터링 된 모임 리스트 가져오기
  const filteredNotification = () => {
    if (selectedDate === "all") {
      // 모든 날짜의 모임을 하나의 배열로 합침
      return dates.map((date) => groupedNotifications[date]).flat();
    }
    return groupedNotifications[selectedDate] || [];
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">모임 일정</h2>

      {/* 날짜 필터 버튼들 */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => setSelectedDate("all")}
          className={`px-6 py-2 rounded-full border-2 ${
            selectedDate === "all" ? "border-black bg-black text-white" : "border-gray-300"
          }`}
        >
          전체
        </button>

        {dates.map((date) => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            className={`px-4 py-2 rounded-full border ${
              selectedDate === date ? "border-black bg-black text-white" : "border-gray-300"
            }`}
          >
            {date}
            {format(parseISO(groupedNotifications[date][0].egg_day_date_time), "eee", { locale: ko })}
          </button>
        ))}
      </div>

      {/* 모임 카드 목록 */}
      <div className="grid gap-4">
        {filteredNotification().map((notification) => (
          <ClubCard key={notification.egg_day_id} notification={notification} crewMembers={crewMembers} />
        ))}
      </div>
    </div>
  );
};

export default NotificationList;
