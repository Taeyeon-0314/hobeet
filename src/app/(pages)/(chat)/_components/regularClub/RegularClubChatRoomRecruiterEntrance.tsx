type clubId = {
  r_c_id: number;
};

type regularClubMember = {
  r_c_id: number;
  r_c_member_id: number;
  r_c_participation_request_id: number;
  user_id: string;
  r_c_n_chatting: Chatting[];
};

type Chatting = {
  admin: boolean;
  r_c_id: number;
  r_c_member_id: number;
  r_c_n_chatting_id: number;
  r_c_n_chatting_room_id: number;
};

// 정기 모임 입장 함수
export async function RegularClubChatRoomRecruiterEntrance(club: clubId) {
  try {
    const response = await fetch(`/api/regularClubChattingRoom?r_c_id=${club.r_c_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("정기 모임 정보를 가져오는 데 실패했습니다.");
    }

    const data: regularClubMember = await response.json();
    // console.log(data);

    const postResponse = await fetch("/api/chatRoomRecruiterEntrance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ regularClubMember: data })
    });

    if (!postResponse.ok) {
      throw new Error("채팅방 입장 처리 중 오류가 발생했습니다.");
    }

    const chatRoomRecruiterEntrance = await postResponse.json();
    console.log(chatRoomRecruiterEntrance);
  } catch (error) {
    console.error("처리 중 오류가 발생했습니다: ", error);
  }
}