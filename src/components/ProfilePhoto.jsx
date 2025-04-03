import Image from "next/image";
import React from "react";

export default function ProfilePhoto() {
  return (
    <>
      <Image
        src="/images/heerok-character.png"
        width={300}
        height={300}
        alt="프로필 사진"
        className="rounded-full"
      />
    </>
  );
}
