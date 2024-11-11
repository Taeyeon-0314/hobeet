import { FC } from "react";
import { getCategoryList, getUserId } from "../_api/supabase";
import { useQuery } from "@tanstack/react-query";
import { EggClubForm } from "@/types/cardlist.types";
import { CategoryListProps } from "@/types/category.types";
import { VerticalContentsListMediumEggClub } from "@/components/uiComponents/VerticalContentsListMedium";


const CategoryList: FC<CategoryListProps> = ({ categoryId, selectedCategory }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categoryList", categoryId, selectedCategory],
    queryFn: () => getCategoryList(categoryId, selectedCategory),
    enabled: !!categoryId
  });

  const {data: userId} = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserId(),
    enabled: true
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

    const isWishedByUser = (club: EggClubForm): boolean => {
      if (!userId) return false;
      return club.wish_list?.some((wish) => wish.user_id === userId) || false;
    };

  return (
    <>
      <div>
        <div className="flex py-2 px-4 gap-[10px] mt-[28px]">
          <p className="text-[14px] font-[500px] leading-[145%]">전체 {data?.length}</p>
        </div>
      </div>
      <div className="flex ml-4 items-start content-start gap-10 self-stretch flex-wrap">
        {data?.map((club) => (
          <div key={club.egg_club_id} className="flex flex-col">
            <VerticalContentsListMediumEggClub
              eggClub={club}
              hostName={club.user_id.user_name}
              hostImage={club.user_id.user_profile_img}
              memberCount={club.egg_club_member[0].count}
              isWished={isWishedByUser(club)}
              wishListCount={club.wish_list.length}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryList;
