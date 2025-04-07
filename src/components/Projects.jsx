import Image from "next/image";
import React from "react";

export default function Projects() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="font-content text-[30px] font-bold">Project</h2>
      <p>개인 또는 팀 프로젝트 입니다.</p>
      <ul className="projects grid grid-cols-3 gap-2 mt-6">
        <li className="project w-[250px] rounded-lg overflow-hidden relative">
          <a href="https://github.com/heerokj/my-portfolio.git" target="_blank">
            <Image
              src="/images/heerok-character.png"
              width={100}
              height={100}
              alt="프로필 사진"
              className="w-[100%]"
            />
            <div className="project_metadata absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-0 hover:opacity-80  text-white flex flex-col items-center justify-center transition-all duration-200 ease-in translate-y-[-10px] hover:translate-y-0">
              <p className="project_title text-2xl">나의 포트폴리오</p>
              <p className="project_title">개인 프로젝트</p>
              <p>Nextjs</p>
            </div>
          </a>
        </li>
        <li className="project  rounded-lg overflow-hidden ">
          <a
            href="https://github.com/heerokj/my-portfolio.git"
            target="_blank"
            className="relative"
          >
            <Image
              src="/images/heerok-character.png"
              width={100}
              height={100}
              alt="프로필 사진"
              className=" w-[100%]"
            />
            <div className="project_metadata absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-0 hover:opacity-80   text-white flex flex-col items-center justify-center transition-all duration-200 ease-in translate-y-[-10px] hover:translate-y-0">
              <p className="project_title text-2xl">Bookkki</p>
              <p className="project_title">개인 프로젝트</p>
              <p>Nextjs, TypeScript</p>
            </div>
          </a>
        </li>
        <li className="project  rounded-lg overflow-hidden ">
          <a
            href="https://github.com/heerokj/my-portfolio.git"
            target="_blank"
            className="relative"
          >
            <Image
              src="/images/heerok-character.png"
              width={100}
              height={100}
              alt="프로필 사진"
              className=" w-[100%]"
            />
            <div className="project_metadata absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-0 hover:opacity-80   text-white flex flex-col items-center justify-center transition-all duration-200 ease-in translate-y-[-10px] hover:translate-y-0">
              <p className="project_title text-2xl">달고나</p>
              <p className="project_title">팀 프로젝트</p>
              <p>Nextjs, TypeScript</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
