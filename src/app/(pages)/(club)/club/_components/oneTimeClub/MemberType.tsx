"use client";

import NumberSpinner from "@/components/uiComponents/Input/NumberSpinner";
import Text from "@/components/uiComponents/Text/Text";
import { MemeberTypeProps } from "@/types/eggpop.types";
import { useState } from "react";

const MemberType = ({
  formData,
  setFormData,
  selectedGender,
  setSelectedGender,
  selectedAge,
  setSelectedAge
}: MemeberTypeProps) => {
  // 인원수 입력값을 관리할 state 추가
  const [peopleLimit, setPeopleLimit] = useState<string>("");

  const gender = ["누구나", "여자만", "남자만"];
  const age = ["누구나", "10대", "20대", "30대", "40대", "50대 이상"];

  // 성별 선택 핸들러
  const handleGender = (e: React.MouseEvent, gender: string) => {
    e.stopPropagation();

    setSelectedGender(gender);

    if (gender === "누구나") {
      setFormData({ ...formData, egg_pop_gender: null });
    } else if (gender === "여자만") {
      setFormData({ ...formData, egg_pop_gender: "여성" });
    } else if (gender === "남자만") {
      setFormData({ ...formData, egg_pop_gender: "남성" });
    }
  };

  // 나이 선택 핸들러
  const handleAge = (e: React.MouseEvent, age: string) => {
    e.stopPropagation();
    setSelectedAge(age);

    if (age === "누구나") {
      setFormData({ ...formData, egg_pop_age: 100 });
    } else if (age === "10대") {
      setFormData({ ...formData, egg_pop_age: 19 });
    } else if (age === "20대") {
      setFormData({ ...formData, egg_pop_age: 29 });
    } else if (age === "30대") {
      setFormData({ ...formData, egg_pop_age: 39 });
    } else if (age === "40대") {
      setFormData({ ...formData, egg_pop_age: 49 });
    } else if (age === "50대 이상") {
      setFormData({ ...formData, egg_pop_age: 50 });
    }
  };

  const handlePeopleLimit = (value: number) => {
    setPeopleLimit(String(value));

    // formData 업데이트
    setFormData({
      ...formData,
      egg_pop_people_limited: value === 0 ? 100 : value
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 소수점(.) 입력 방지
    if (e.key === ".") {
      e.preventDefault();
    }
  };

  return (
    <div>
      <Text variant="header-18" className="flex items-center mb-6 h-11">
        어떤 맴버와 함께하고 싶나요?
      </Text>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Text variant="body_medium-16">성별</Text>
          <div className="grid grid-cols-3 gap-3">
            {gender.map((element) => (
              <button
                key={element}
                onClick={(e) => handleGender(e, element)}
                className={`w-[111px] h-12 rounded-xl border  justify-center items-center inline-flex ${
                  selectedGender === element ? "border-primary-500 border-2" : "border-gray-50"
                }`}
              >
                <div
                  className={`text-subtitle-14 leading-[18.90px] ${
                    !selectedGender
                      ? "text-primary-900"
                      : selectedGender === element
                      ? "text-primary-500"
                      : "text-gray-300"
                  }`}
                >
                  {element}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Text variant="body_medium-16">나이</Text>
          <div className="grid grid-cols-3 gap-x-3 gap-y-2">
            {age.map((element) => (
              <button
                key={element}
                onClick={(e) => handleAge(e, element)}
                className={`w-[111px] h-12 rounded-xl border  justify-center items-center inline-flex ${
                  selectedAge === element ? "border-primary-500 border-2" : "border-gray-50"
                }`}
              >
                <div
                  className={`text-subtitle-14 ${
                    !selectedAge ? "text-primary-900" : selectedAge === element ? "text-primary-500" : "text-gray-300"
                  }`}
                >
                  {element}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* <div onClick={() => setGenderToggle((prev) => !prev)} className="next-box bg-gray-100 cursor-pointer">
          성별
          <div className="flex flex-row justify-center flex-wrap gap-1 m-2" onClick={(e) => e.stopPropagation()}>
            {genderToggle &&
              gender.map((element) => (
                <button
                  key={element}
                  onClick={(e) => handleGender(e, element)}
                  className={`border-2 border-black p-1 rounded-lg ${
                    selectedGender === element ? "bg-blue-200" : "bg-white"
                  }`}
                >
                  {element}
                </button>
              ))}
          </div>
        </div>

        <div onClick={() => setAgeToggle((prev) => !prev)} className="next-box bg-gray-100 cursor-pointer">
          나이
          <div className="flex flex-row justify-center flex-wrap gap-1 m-2" onClick={(e) => e.stopPropagation()}>
            {ageToggle &&
              age.map((element) => (
                <button
                  key={element}
                  onClick={(e) => handleAge(e, element)}
                  className={`border-2 border-black p-1 rounded-lg ${
                    selectedAge === element ? "bg-blue-200" : "bg-white"
                  }`}
                >
                  {element}
                </button>
              ))}
          </div>
        </div> */}

        <div className="flex flex-col gap-2">
          <Text variant="body_medium-16">최대 인원</Text>
          <NumberSpinner value={Number(peopleLimit)} onChange={handlePeopleLimit} max={100} min={0} />
        </div>

        {/* <div className="next-box bg-gray-100 flex flex-col gap-4">
          <h1>최대인원수</h1>
          <input
            type="number"
            placeholder="인원수를 적지 않으면 인원제한 없이 생성됩니다"
            className="w-[328px] h-8 rounded-lg p-2"
            value={peopleLimit}
            onChange={handlePeopleLimit}
            onKeyDown={handleKeyDown}
            min="0"
            step="1"
          />
        </div> */}
      </div>
    </div>
  );
};

export default MemberType;
