import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const supabase = createClient();
  // console.log("tlqkdrjtdk 여기타냐?? 타라");

  try {
    const url = new URL(req.url);
    const egg_pop_id = Number(url.searchParams.get("egg_pop_id"));
    // console.log("one_time_club_id", one_time_club_id, "야야야 장성현 채팅방 입장시켜줘라");

    const { data, error } = await supabase
      .from("egg_pop_chatting_room_member")
      .select(`*`)
      .eq("egg_pop_id", egg_pop_id);

    // console.log("data", data, "야야야 장성현 채팅방 입장시켜줘라");

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "요청을 잘못 보냈습니다" }, { status: 400 });
  }
}
