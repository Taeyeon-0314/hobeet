"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getRegularMember } from "../../../_api/supabase";
import { useAuth } from "@/app/store/AuthContext";
import FullScreenModal from "./FullScreenModal";

// 멤버 정보 타입 정의
type MemberInfo = {
  memberId: number;
  userId: string;
  userName: string;
  userImage: string;
};

// CrewList 컴포넌트 props 타입
interface CrewListProps {
  crewMembers: MemberInfo[];
  clubId: number;
  // hostInfo: MemberInfo;
  clubHostId: string;
}

const CrewList = ({ crewMembers: initialCrewMembers, clubId, clubHostId }: CrewListProps) => {
  const [crewList, setCrewList] = useState(initialCrewMembers);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { userId } = useAuth();

  useEffect(() => {
    // 데이터 새로고침 함수
    const refreshData = async () => {
      try {
        const data = await getRegularMember(clubId);

        const newCrewMemebers = data.map((member) => ({
          memberId: member.r_c_member_id,
          userId: member.user_id,
          userName: member.user.user_name,
          userImage: member.user.user_profile_img
        }));

        setCrewList(newCrewMemebers);
      } catch (error) {
        console.error("크루인원 가져오는 중 오류:", error);
      }
    };

    console.log("참여크루!!!", crewList);

    // 15분마다 데이터 새로고침
    const intervalid = setInterval(refreshData, 900000);
    refreshData();

    //클린업 함수
    return () => clearInterval(intervalid);
  }, [clubId]);

  // 8개의 고정 슬롯 생성
  const displaySlots = Array(8)
    .fill(null)
    .map((_, index) => {
      const member = crewList[index];
      return member ? (
        // 멤버가 있는 경우
        <div key={member.userId} className="w-[37px]">
          <div className="relative w-[37px] h-[37px] overflow-hidden rounded-full">
            <Image
              src={member.userImage}
              alt={member.userName}
              width={37}
              height={37}
              className="w-full h-full object-cover border-2 border-black"
            />
          </div>
        </div>
      ) : (
        // 빈 슬롯
        <div key={`empty-${index}`} className="w-[37px]">
          <div className="w-[37px] h-[37px] rounded-full border-2 border-gray-200 bg-gray-50"></div>
        </div>
      );
    });

  // 호스트일 때
  const isHost = userId === clubHostId;

  // 가입한 크루일 때
  const isAlreadJoined = crewList.some((member) => member.userId === userId);

  // 버튼 렌더링 함수
  const renderJoinButton = () => {
    if (isHost) {
      return (
        <div className="flex justify-center items-center gap-2">
          <button className="flex-1 bg-yellow-100 h-[50px] rounded-full">{`참여 ${crewList.length}명`}</button>
          <button className="flex-1 bg-yellow-300  h-[50px] rounded-full">에그팝 채팅방</button>
        </div>
      );
    }

    if (isAlreadJoined) {
      return (
        <div className="flex justify-center items-center gap-2">
          <p className="flex-1 h-[50px] pt-4 font-semibold">참여 중인 에그팝이에요</p>
          <button className="flex-1 bg-yellow-300  h-[50px] rounded-full">에그팝 채팅방</button>
        </div>
      );
    }

    return <button className="w-full h-[50px] bg-yellow-300 rounded-full">참여하기</button>;
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="font-extrabold text-[20px]">{`참여중인 크루원 ${crewList.length}명`}</h1>
          <button onClick={() => setIsModalOpen(true)} className="text-gray-600 hover:text-black">
            더보기 ➡️
          </button>
        </div>
        <div className="grid grid-cols-8 grid-flow-col gap-2 w-full">{displaySlots}</div>
      </div>
      {renderJoinButton()}
      <FullScreenModal crewList={crewList} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CrewList;