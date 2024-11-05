import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

type Category = {
  s_c_id: number;
  m_c_id: number;
  s_c_name: string;
};

export const getSubCategory = async (m_c_id: number) => {
  try {
    const { data, error } = await supabase.from("sub_category").select("*").eq("main_category_id", m_c_id);

    if (error) {
      throw new Error("데이터를 가져오는 중 오류가 발생했습니다.");
    }
    // console.log(data);

    return data as Category[];
  } catch (error) {
    console.error("getSubCategory 함수 에러:", error);
    throw error;
  }
};

export const getCategoryList = async (m_c_id: number, s_c_id: number) => {
  try {
    const { data, error } = await supabase
      .from("egg_club")
      .select(`*, user_id("user_profile_img", "user_name") , egg_club_member(count), wish_list(count)`)
      .eq("main_category_id", m_c_id)
      .eq(s_c_id === 0 ? "main_category_id" : "sub_category_id", s_c_id === 0 ? m_c_id : s_c_id);

    if (error) {
      throw new Error("데이터를 가져오는 중 오류가 발생했습니다.");
    }

    return data;
  } catch (error) {
    console.error("getCategoryList 함수 에러:", error);
    throw error;
  }
};
