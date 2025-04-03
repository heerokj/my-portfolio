import Image from "next/image";
import React from "react";

export default function LinkHub() {
  return (
    <div className="flex gap-6 ml-1">
      <Image src="/icons/tistory.svg" width={25} height={25} alt="블로그" />
      <Image src="/icons/github.svg" width={30} height={30} alt="깃허브" />
      <a
        href="/resume.pdf"
        className="flex gap-2 rounded-full py-3 px-5 bg-[#f16078]"
      >
        Resume
        <Image
          src="/icons/download.svg"
          width={15}
          height={15}
          alt="다운로드"
        />
      </a>
    </div>
  );
}
