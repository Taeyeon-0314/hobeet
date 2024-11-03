"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { OneTimeProps } from "../../_types/ClubForm";

const ImageUpload = ({ formData, setFormData }: OneTimeProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 컴포넌트 마운트 시 또는 formData의 이미지가 변경될 때 미리보기 생성
  useEffect(() => {
    if (formData.one_time_image instanceof File) {
      const url = URL.createObjectURL(formData.one_time_image);
      setPreviewUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [formData.one_time_image]);

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
    setFormData({ ...formData, one_time_image: file });
  };

  const handleDeleteImage = () => {
    setPreviewUrl(null);
    setFormData({ ...formData, one_time_image: null });

    if (fileInputRef.current) {
      fileInputRef.current.value = ""; //input 값 초기화
    }
  };

  return (
    <div>
      <h1 className="mb-4">모임을 소개해주세요</h1>
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
      <textarea
        value={formData.one_time_club_introduction}
        maxLength={290}
        onChange={(e) => setFormData({ ...formData, one_time_club_introduction: e.target.value })}
        className="mt-4 p-2 border-2 border-black w-[358px] h-[218px]"
      />
      <div className="text-sm text-gray-500">{formData.one_time_club_introduction.length} / 290</div>
    </div>
  );
};

export default ImageUpload;
