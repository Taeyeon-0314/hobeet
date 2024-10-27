// src/app/api/getChatRoom/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  const supabase = createClient();

  try {
    const { userId } = await req.json();

    const { data, error } = await supabase
      .from("r_c_member")
      .select(
        `
        *,
        r_c_n_chatting (
          *,
          r_c_n_chatting_room (*),
          r_c_n_chatting_message (
            r_c_n_chatting_message_content,
            r_c_n_chatting_message_create_at
          )
        ),
        regular_club (*)
      `
      )
      .eq("user_id", userId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "요청을 잘못 보냈습니다" }, { status: 400 });
  }
}
