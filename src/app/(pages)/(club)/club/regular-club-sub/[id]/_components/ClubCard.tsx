"use client";
import Image from "next/image";
import { InSertRegularClubNotification } from "../create/_types/subCreate";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/store/AuthContext";

type ClubCardProps = { notification: InSertRegularClubNotification };

const ClubCard = ({ notification }: ClubCardProps) => {
  const router = useRouter();
  const { userId } = useAuth();
  // 날짜와 시간 커스텀
  const DateTimeCustom = (dateTime: string) => {
    const date = new Date(dateTime);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${month}월 ${day}일 ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  };

  // 주소 커스텀
  const addressCustom = (address: string) => {
    const shortAddress = address.split(" ").slice(1, 3).join(" ");

    return shortAddress;
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!userId) {
      alert("로그인이 필요한 서비스입니다");
      router.push("/signin");
    } else {
      router.push(`/club/regular-club-sub/${notification.r_c_id}/create/${notification.r_c_notification_id}`);
    }
  };

  return (
    <div onClick={handleClick} className="flex m-4 bg-yellow-200 rounded-lg p-4 gap-4">
      <Image
        src={notification.r_c_notification_image}
        alt={notification.r_c_notification_name}
        width={80}
        height={80}
      />

      <div>
        <p>에그데이</p>
        <p>{notification.r_c_notification_name}</p>

        <div>
          <p>{addressCustom(notification.r_c_notification_location)}</p>
          <p>{DateTimeCustom(notification.r_c_notification_date_time)}</p>
        </div>
        <p>맴버 {notification.r_c_notification_member[0].count}명</p>
      </div>
    </div>
  );
};

export default ClubCard;
