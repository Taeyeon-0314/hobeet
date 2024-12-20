import Image from "next/image";
import CrewList from "./CrewList";
import Text from "@/components/uiComponents/atoms/text/Text";
import { ProfileImageLarge } from "@/components/uiComponents/molecules/Images/ProfileImageLarge";
import Tag from "@/components/uiComponents/atoms/tags/Tag";
import WishListHeart from "./WishListHeart";
import { formatterAge, formatterGender, formatterPeopleLimit } from "../../../_utils/formatter";
import { EggClub } from "@/types/features/commerce/cardlist.types";
import { MemberInfo } from "@/types/features/user/user.types";
import { EggDayWithEggDayMember } from "@/types/features/club/eggday.types";

interface HomeContentProps {
  clubInfo: EggClub;
  hostInfo: MemberInfo | undefined;
  crewMembers: MemberInfo[];
  egg_club_id: number;
  notificationData: EggDayWithEggDayMember[];
  stringCategory: string | undefined;
}

const HomeContent = ({
  clubInfo,
  hostInfo,
  crewMembers,
  egg_club_id,
  notificationData,
  stringCategory
}: HomeContentProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex overflow-hidden w-[390px] h-[332px] relative bg-gray-100 mb-6">
        <Image
          src={clubInfo.egg_club_image}
          alt={clubInfo.egg_club_name}
          width={390}
          height={332}
          className="w-[390px] h-[332px] object-cover"
        />
      </div>

      <div className="w-full flex-col justify-start items-start gap-8 px-4 inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-1 flex">
            <div className="px-2 py-0.5 bg-neutral-800 rounded-[124px] justify-center items-center inline-flex">
              <Text variant="body-10" className="text-white">
                {stringCategory}
              </Text>
            </div>
            <div className="w-full justify-between items-center gap-1.5 inline-flex">
              <Text variant="subtitle-20"> {clubInfo.egg_club_name}</Text>
              <div className="w-8 h-8 justify-center items-center flex">
                <WishListHeart egg_club_id={clubInfo.egg_club_id} />
              </div>
            </div>
          </div>
          <div className="w-[252px] justify-start items-center gap-3 inline-flex">
            <ProfileImageLarge image={hostInfo?.userImage} />
            <div className="w-[133px] flex-col justify-start items-start gap-1 inline-flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <Text variant="subtitle-16">{hostInfo?.userName}</Text>
                <Tag tagName="eggmaster" variant="black" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[0px] border border-solid border-gray-50"></div>
        <div className="self-stretch h-[116px] flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch h-6 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <Text variant="subtitle-18">상세 정보</Text>
            </div>
          </div>
          <div className="self-stretch h-40 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <Text variant="subtitle-14">나이</Text>
              <Text variant="body-14">{formatterAge(clubInfo.egg_club_age)}</Text>
            </div>
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <Text variant="subtitle-14">성별</Text>
              <Text variant="body-14"> {formatterGender(clubInfo.egg_club_gender)}</Text>
            </div>
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <Text variant="subtitle-14">인원</Text>
              <Text variant="body-14">{formatterPeopleLimit(clubInfo.egg_club_people_limited)}</Text>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[0px] border border-solid border-gray-50"></div>

        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch h-6 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <Text variant="subtitle-18">모임 소개</Text>
            </div>
          </div>

          <Text variant="body-14" className="self-stretch text-gray-800">
            {clubInfo.egg_club_introduction}
          </Text>
        </div>

        <div className="self-stretch h-[0px] border border-solid border-gray-50"></div>

        <CrewList
          crewMembers={crewMembers}
          clubId={egg_club_id}
          clubHostId={clubInfo.user_id}
          notificationData={notificationData}
        />
      </div>
    </div>
  );
};

export default HomeContent;
