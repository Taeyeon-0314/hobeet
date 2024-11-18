import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/store/AuthContext";
import { fetchEggPopChatRoomWithMembers } from "@/app/(pages)/(chat)/_api/onetime";
import { queryKeys } from "./utils/queryKeys";

export const useOneTimeChat = (roomId: string) => {
  const { userId } = useAuth();

  return useQuery({
    queryKey: [queryKeys.oneTimeChat, roomId, userId],
    queryFn: async () => {
      try {
        const { roomData, chatMember, chattingData } = await fetchEggPopChatRoomWithMembers(roomId, userId!);

        return {
          ...roomData,
          egg_pop_chatting_room_member_id: chattingData.egg_pop_chatting_room_member_id,
          egg_pop_member_id: chatMember.egg_pop_member_id
        };
      } catch (error) {
        console.error("Error fetching chat data: ", error);
        throw error;
      }
    },
    enabled: !!roomId && !!userId
  });
};