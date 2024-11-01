"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { useAuth } from "@/app/store/AuthContext";
import { RegularClubNotification } from "../_types/subCreate";
import { submitRegularClubNotification, uploadImage } from "../../../../_api/supabase";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";

// 동적 임포트(필요한 시점에 불러오기)
const loadDaumPostcodeScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    script.onload = () => resolve(true);
    document.body.appendChild(script);
  });
};

declare global {
  interface Window {
    daum: {
      Postcode: new (config: {
        oncomplete: (data: {
          userSelectedType: string;
          roadAddress: string;
          jibunAddress: string;
          bname: string;
          buildingName: string;
          apartment: string;
          zonecode: string;
        }) => void;
      }) => {
        open: () => void;
      };
    };
  }
}

interface AddressData {
  zonecode: string; // 우편주소
  address: string; // 기본주소
  detailAddress: string; // 상세주소
}

interface DaumPostcodeData {
  userSelectedType: string; // 사용자가 선택한 주소 타입
  roadAddress: string; // 도로명 주소
  jibunAddress: string; // 지번 주소
  bname: string; // 법정동/법정리 이름
  buildingName: string; // 건물명
  apartment: string; // 아파트 여부
  zonecode: string; // 우편번호
}

const NotificationCreate = ({ params }: { params: { id: string } }) => {
  const { userId } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState<RegularClubNotification>({
    user_id: userId,
    r_c_notification_name: "",
    r_c_notification_content: "",
    r_c_notification_date_time: "",
    r_c_notification_location: "",
    r_c_notification_tax: 0,
    r_c_notification_image: "",
    r_c_id: parseInt(params.id)
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const [addressData, setAddressData] = useState<AddressData>({
    zonecode: "",
    address: "",
    detailAddress: ""
  });

  const [showTaxInput, setShowTaxInput] = useState<boolean>(false);
  const [inputError, setInputError] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("폼데이터 =>", formData);
  }, [formData]);

  // 컴포넌트 마운트 시 또는 formData의 이미지가 변경될 때 미리보기 생성
  useEffect(() => {
    if (formData.r_c_notification_image instanceof File) {
      const url = URL.createObjectURL(formData.r_c_notification_image);
      setPreviewUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [formData.r_c_notification_image]);

  // 이미지 선택 시 처리하는 함수
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("파일 크기는 5MB 이하여야 합니다");
        return;
      }
    }

    // el.type.startsWith("image/") <- 이미지 파일인지 체크
    if (!file?.type.startsWith("image/")) {
      alert("이미지 파일만 업로드가 가능합니다");
      return;
    }

    // 이미지 미리보기용 URL 생성
    const previewImageUrl = URL.createObjectURL(file);
    setPreviewUrl(previewImageUrl);

    // formData에 File 객체 저장
    setFormData({ ...formData, r_c_notification_image: file });
  };

  const handleDeleteImage = () => {
    setPreviewUrl(null);
    setFormData({ ...formData, r_c_notification_image: null });

    if (fileInputRef.current) {
      fileInputRef.current.value = ""; //input 값 초기화
    }
  };

  const handleColor = (time: Date) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  // FormData에 선택된 날짜와 시간을 저장
  const handleDateChange = (date: Date | null) => {
    setStartDate(date);

    if (date) {
      const utcDate = new Date(date.getTime());
      setFormData({
        ...formData,
        r_c_notification_date_time: utcDate.toISOString() // toISOString()하면 아홉시간 빠지게 됨
      });
    }
  };

  // 우편 번호 찾을 때 실행되는 함수
  const execDaumPostcode = async () => {
    await loadDaumPostcodeScript();

    if (!window.daum?.Postcode) {
      alert("주소 검색 서비스를 불러오는 중입니다. 잠시만 기다려주세요.");
      return;
    }

    // 카카오 주소 검색 팝업 뜨기
    new window.daum.Postcode({
      oncomplete: function (data: DaumPostcodeData) {
        let addr = "";
        let extraAddr = "";

        // 사용자가 선택한 값에 따라 해당 주소를 가져옴 (도로명, 지번)
        if (data.userSelectedType === "R") {
          addr = data.roadAddress;
        } else {
          addr = data.jibunAddress;
        }

        // 도로명 주소일 때, 참고 항목 처리
        if (data.userSelectedType === "R") {
          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          if (data.buildingName !== "" && data.apartment === "Y") {
            extraAddr += extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
          }
          if (extraAddr !== "") {
            extraAddr = ` (${extraAddr})`;
          }
        }

        // 선택된 주소로 데이터 만들기
        const newAddressData = {
          zonecode: data.zonecode,
          address: addr,
          detailAddress: ""
        };

        // 선택된 주소를 합치기
        const fullAddress = `[${data.zonecode}] ${addr}`;

        setAddressData(newAddressData);
        setFormData({
          ...formData,
          r_c_notification_location: fullAddress
        });
      }
    }).open();
  };

  // 상세 주소 입력 시 실행되는 함수
  const handleDetailAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDetailAddress = e.target.value;
    setAddressData((prev) => ({
      ...prev,
      detailAddress: newDetailAddress
    }));

    // 기본주소가 있을 때만 formData 업데이트
    if (addressData.zonecode && addressData.address) {
      const fullAddress = `[${addressData.zonecode}] ${addressData.address}${
        newDetailAddress ? `, ${newDetailAddress}` : ""
      }`;

      setFormData({
        ...formData,
        r_c_notification_location: fullAddress
      });
    }
  };

  const handleTaxToggle = (hasTax: boolean) => {
    setShowTaxInput(hasTax);
    setInputError("");

    if (!hasTax) {
      setFormData({ ...formData, r_c_notification_tax: 0 });
    } else {
      setFormData({ ...formData, r_c_notification_tax: null });
    }
  };

  const handleTaxAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // 빈 문자열이면 null로 설정
    if (value === "") {
      setFormData({ ...formData, r_c_notification_tax: null });
      setInputError("");
      return;
    }

    // 숫자가 아닌 문자가 포함되어 있는지 검사
    if (!/^\d+$/.test(value)) {
      setInputError("금액에 숫자만 입력해주세요");
      return;
    }

    const numValue = parseInt(value);

    // 음수 검사
    if (numValue < 0) {
      setInputError("0원 이상 입력해주세요");
      return;
    }

    // 최대값 검사
    if (numValue > 1000000) {
      setInputError("100만원 이하로 입력해주세요");
      return;
    }

    setInputError("");
    setFormData({ ...formData, r_c_notification_tax: numValue });
  };

  const handleSubmit = async () => {
    try {
      // 필수값 유효성 검사
      if (!formData.r_c_notification_name.trim()) {
        alert("모임 제목을 입력해주세요");
        return;
      }

      if (!formData.r_c_notification_content.trim()) {
        alert("모임 소개를 입력해주세요");
        return;
      }

      if (!formData.r_c_notification_date_time) {
        alert("날짜와 시간을 선택해주세요");
        return;
      }

      if (!formData.r_c_notification_location) {
        alert("모임 장소를 입력해주세요");
        return;
      }

      if (showTaxInput && formData.r_c_notification_tax === null) {
        alert("참가비를 입력해주세요");
        return;
      }

      if (!formData.r_c_notification_image) {
        alert("모임 대표 이미지를 업로드해주세요");
        return;
      }

      let finalFormData = { ...formData };

      // 이미지 업로드 처리
      if (formData.r_c_notification_image instanceof File) {
        try {
          const imageUrl = await uploadImage(formData.r_c_notification_image);
          finalFormData = {
            ...finalFormData,
            r_c_notification_image: imageUrl
          };
        } catch (error) {
          console.error("이미지 업로드 오류:", error);
          alert("이미지 업로드 중 오류가 발생했습니다");
          return;
        }
      }

      // 5. 데이터 저장
      await submitRegularClubNotification(finalFormData);
      alert("정기모임 안의 공지글을 생성하였습니다");
      router.push(`/club/regular-club-sub/${params.id}`); // 성공 시 이동할 페이지
    } catch (error) {
      console.error("제출 중 오류 발생:", error);
      const errorMessage = error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다";
      alert(`모임 생성 중 오류가 발생했습니다: ${errorMessage}`);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-20 p-2">
        <div>
          <h1 className="mb-4 text-[20px] font-semibold">모임 사진</h1>
          <div className="flex flex-col gap-4">
            <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/png, image/jpeg" />
            {previewUrl && (
              <div>
                <Image src={previewUrl} alt="모임대표이미지" width={300} height={200} />
                <button onClick={handleDeleteImage} className="border-2 border-black p-1 my-2">
                  이미지 삭제
                </button>
              </div>
            )}
          </div>
        </div>

        <div>
          <h1 className="mb-4 text-[20px] font-semibold">모임 제목</h1>

          <input
            type="text"
            placeholder="모임 제목을 작성해주세요"
            value={formData.r_c_notification_name}
            onChange={(e) =>
              setFormData({
                ...formData,
                r_c_notification_name: e.target.value
              })
            }
            className="border-2 border-black mt-4 w-[358px] h-[48px] p-2"
          />
        </div>

        <div>
          <h1 className="text-[20px] font-semibold mb-4">날짜 / 시간</h1>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="시간"
            dateFormat="yyyy/MM/dd h:mm aa"
            minDate={new Date()}
            locale={ko}
            className="border-2 border-black p-2 w-[358px]"
            placeholderText="날짜와 시간을 선택하세요"
            timeClassName={handleColor}
          />
          <br />
          <br />
          {startDate && (
            <div className="flex flex-col gap-4">
              <div className="next-box bg-gray-100">선택된 날짜: {startDate.toLocaleDateString()}</div>
              <div className="next-box bg-gray-100">선택된 시간: {startDate.toLocaleTimeString()}</div>
            </div>
          )}
        </div>

        <div>
          <h1 className="text-[20px] font-semibold mb-4">설명</h1>

          <textarea
            value={formData.r_c_notification_content}
            onChange={(e) => setFormData({ ...formData, r_c_notification_content: e.target.value })}
            className="mt-4 p-2 border-2 border-black w-[358px] h-[218px]"
          />
        </div>

        <div>
          <h1 className="mb-4 text-[20px] font-semibold">참가비</h1>
          <div className="flex justify-center gap-2">
            <button
              onClick={() => handleTaxToggle(true)}
              className={`w-[175px] h-[57px]  ${showTaxInput ? "bg-blue-100" : "bg-gray-100 "}`}
            >
              있음
            </button>
            <button
              onClick={() => handleTaxToggle(false)}
              className={`w-[175px] h-[57px] ${!showTaxInput ? "bg-blue-100" : "bg-gray-100 "}`}
            >
              없음
            </button>
          </div>
          {showTaxInput && (
            <div className="next-box bg-blue-100">
              <input
                type="text"
                value={formData.r_c_notification_tax || ""}
                onChange={handleTaxAmount}
                placeholder="참가비를 입력해주세요"
                className="w-[328px] h-8 rounded-lg p-2"
              />
              {inputError && <div className="text-red-500 text-sm mt-1">{inputError}</div>}

              {formData.r_c_notification_tax !== null && formData.r_c_notification_tax > 0 && !inputError && (
                <div className="py-4 px-1 text-gray-600">{formData.r_c_notification_tax.toLocaleString()}원</div>
              )}
            </div>
          )}
        </div>

        <div>
          <h1 className="mb-4 text-[20px] font-semibold">장소</h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={addressData.zonecode}
                placeholder="우편번호"
                className="border p-2 w-24"
                readOnly
              />
              <button onClick={execDaumPostcode} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                주소 검색
              </button>
            </div>

            <input type="text" value={addressData.address} placeholder="주소" className="border p-2 w-full" readOnly />
            <input
              type="text"
              value={addressData.detailAddress}
              onChange={handleDetailAddressChange}
              placeholder="상세주소를 입력해주세요(선택)"
              className="border p-2 w-full"
            />
          </div>
        </div>

        <button onClick={handleSubmit} className="w-full h-[59px] bg-yellow-200 rounded-full">
          공지글 올리기
        </button>
      </div>
    </div>
  );
};

export default NotificationCreate;
