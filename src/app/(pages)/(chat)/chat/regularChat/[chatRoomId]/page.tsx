"use client";
import { useEffect, useRef } from "react";
import { createClient } from "@/utils/supabase/client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type User = {
  user_id: string;
  user_name: string;
  user_profile_img: string;
};

type Message = {
  r_c_n_chatting_message_id: number;
  r_c_n_chatting_id: number;
  r_c_n_chatting_room_id: number;
  r_c_member_id: number;
  r_c_id: number;
  user: User;
  user_id: string;
  r_c_n_chatting_message_content: string;
  r_c_n_chatting_message_create_at: string;
};

type ChatInfo = {
  r_c_n_chatting_id: number;
  r_c_member_id: number;
  r_c_id: number;
  chat_room_entry_time: string;
};

const supabase = createClient();

const ChatPage: React.FC = () => {
  const params = useParams();
  const roomId = params.chatRoomId;
  const [newMessage, setNewMessage] = useState<string>("");
  const queryClient = useQueryClient();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 현재 사용자 정보 조회
  const { data: currentUser, isSuccess: isUserFetched } = useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      return user;
    }
  });

  // r_c_id 조회
  const { data: rec, isSuccess: isRecFetched } = useQuery({
    queryKey: ["r_c_id", roomId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("r_c_n_chatting")
        .select("r_c_id")
        .eq("r_c_n_chatting_room_id", roomId)
        .limit(1);
      if (error) throw error;
      return data ? data[0] : null;
    },
    enabled: !!roomId && isUserFetched
  });

  // r_c_member_id 조회
  const { data: memberData } = useQuery({
    queryKey: ["memberData", currentUser?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("r_c_member")
        .select("r_c_member_id")
        .eq("user_id", currentUser?.id)
        .eq("r_c_id", rec?.r_c_id)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!currentUser?.id && isRecFetched
  });

  // 채팅방 정보 조회
  const { data: chatInfo } = useQuery<ChatInfo>({
    queryKey: ["chatInfo", roomId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("r_c_n_chatting")
        .select(`*, r_c_n_chatting_room (*)`)
        .eq("r_c_n_chatting_room_id", roomId)
        .eq("r_c_member_id", memberData?.r_c_member_id)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!roomId && !!memberData
  });
  // console.log(chatInfo?.chat_room_entry_time);

  // 메시지 목록 조회
  const { data: messages = [], isLoading: isLoadingMessages } = useQuery<Message[]>({
    queryKey: ["messages", roomId, chatInfo?.chat_room_entry_time],
    queryFn: async () => {
      if (!chatInfo?.chat_room_entry_time) {
        throw new Error("채팅방 입장 시간이 없습니다.");
      }

      const { data, error } = await supabase
        .from("r_c_n_chatting_message")
        .select(`*, user:user_id(*)`)
        .eq("r_c_n_chatting_room_id", roomId)
        .gte("r_c_n_chatting_message_create_at", chatInfo.chat_room_entry_time)
        .order("r_c_n_chatting_message_create_at", { ascending: true });

      if (error) throw error;
      return data || [];
    },
    enabled: !!roomId && !!chatInfo?.chat_room_entry_time
  });

  // 스크롤을 맨 아래로 이동시키는 함수
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 새 메시지가 추가될 때마다 스크롤 맨 아래로 이동
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 메시지 전송 무테이션
  const sendMessageMutation = useMutation({
    mutationFn: async (messageContent: string) => {
      if (!chatInfo || !currentUser) throw new Error("전송실패실패실패");

      const { error } = await supabase.from("r_c_n_chatting_message").insert([
        {
          r_c_n_chatting_room_id: roomId,
          user_id: currentUser.id,
          r_c_n_chatting_id: chatInfo.r_c_n_chatting_id,
          r_c_member_id: chatInfo.r_c_member_id,
          r_c_id: chatInfo.r_c_id,
          r_c_n_chatting_message_content: messageContent
        }
      ]);

      if (error) throw error;
    },
    onSuccess: () => {
      setNewMessage("");
      queryClient.invalidateQueries({ queryKey: ["messages", roomId] });
    }
  });

  // 실시간 구독 설정
  useEffect(() => {
    if (!roomId) return;

    const subscription = supabase
      .channel("chatting")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "r_c_n_chatting_message",
          filter: `r_c_n_chatting_room_id=eq.${roomId}`
        },
        () => {
          queryClient.invalidateQueries({ queryKey: ["messages", roomId] });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [roomId, queryClient]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const scrollHeight = textarea.scrollHeight;
      textarea.style.height = Math.min(scrollHeight, 120) + "px";
    }
  }, [newMessage]);

  const groupMessagesByDate = (messages: Message[]) => {
    return messages.reduce((acc: { [date: string]: Message[] }, message) => {
      const date = new Date(message.r_c_n_chatting_message_create_at);
      const dateString = date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long"
      });

      if (!acc[dateString]) {
        acc[dateString] = [];
      }

      acc[dateString].push(message);
      return acc;
    }, {});
  };

  const groupedMessages = groupMessagesByDate(messages);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    sendMessageMutation.mutate(newMessage);
  };

  if (isLoadingMessages) {
    return <div className="p-4 text-center">메시지를 불러오는 중...</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      {/* 메시지 출력 */}
      <div className="flex-grow overflow-y-auto" style={{ paddingBottom: "80px", paddingTop: "55px" }}>
        <div className="p-4">
          {Object.keys(groupedMessages).length > 0 ? (
            Object.keys(groupedMessages).map((dateString) => (
              <div key={dateString} className="mb-6">
                <div className="text-[10px] mb-2 text-center">{dateString}</div>
                {groupedMessages[dateString].map((message: Message) => {
                  const date = new Date(message.r_c_n_chatting_message_create_at);
                  const isCurrentUser = message.user.user_id === currentUser?.id;

                  return (
                    <div
                      key={message.r_c_n_chatting_message_id}
                      className={`flex items-start mb-4 ${isCurrentUser ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`flex flex-col ${isCurrentUser ? "items-end" : "items-start"}`}>
                        {!isCurrentUser && (
                          <span className="text-sm text-gray-600 block mb-1 ml-[60px]">{message.user.user_name}</span>
                        )}
                        <div className="flex items-center">
                          {!isCurrentUser && (
                            <div className="flex items-center mr-2 border-solid border-[1px] rounded-full w-[40px] h-[40px]">
                              <Image
                                src={message.user.user_profile_img}
                                alt={`${message.user.user_name}의 프로필 이미지`}
                                width={40}
                                height={40}
                                className="rounded-full"
                              />
                            </div>
                          )}
                          {isCurrentUser && (
                            <span className="text-xs text-gray-500 block self-end	mr-1">
                              {date.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: false
                              })}
                            </span>
                          )}

                          <div
                            className={`max-w-xs break-words p-3 rounded-[16px] ${
                              isCurrentUser ? "bg-[#ffe399]" : "bg-[#f2f2f2]"
                            } text-gray-900`}
                          >
                            <p className="max-w-[150px]">{message.r_c_n_chatting_message_content}</p>
                          </div>
                          {!isCurrentUser && (
                            <span className="text-xs text-gray-500 block self-end ml-1	">
                              {date.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: false
                              })}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))
          ) : (
            <div className="text-center">메시지가 없습니다.</div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* 채팅 입력 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="p-4">
          <div className="flex items-center">
            <textarea
              ref={textareaRef}
              value={newMessage}
              onChange={(e) => {
                const lines = e.target.value.split("\n");
                if (lines.length <= 5) {
                  setNewMessage(e.target.value);
                }
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              rows={1}
              maxLength={100}
              className="flex-grow p-2 border border-gray-300 bg-[#d9d9d9] rounded-[20px] focus:outline-none focus:ring-2 transition duration-200 min-h-[48px] max-h-[120px] resize-none overflow-y-auto"
              placeholder="메시지를 입력하세요..."
              style={{
                lineHeight: "1.5"
              }}
            />
            <button
              type="button"
              onClick={handleSendMessage}
              className="ml-4 bg-[#69c3b0] text-white rounded-lg px-4 py-2"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;