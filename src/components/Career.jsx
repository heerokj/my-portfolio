import React from "react";

export default function Career() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="font-content text-[30px] font-bold">Career & Education</h2>
      <p>개발 관련 경력 및 교육 사항입니다.</p>
      <ul className="flex flex-col mt-4">
        <li className="border-l-3 border-rose-500 pb-8 after:content-[''] relative after:absolute after:w-6 after:h-6 after:bg-rose-500 after:rounded-full after:left-[-0.9rem] after:top-0">
          <div className="px-6">
            <p>2024.07 ~ 2024.12</p>
            <ul className="list-disc list-inside marker:text-pink-400">
              <p className="text-xl p-2 font-bold text-rose-700">
                스파르타 코딩클럽 프론트엔드 교육
              </p>
              <li>JavaScript, React, NextJS 등 프론트엔드 교육</li>
              <li>팀 및 개인 프로젝트 진행</li>
            </ul>
          </div>
        </li>

        <li className="border-l-3 border-rose-500 pb-2 after:content-[''] relative after:absolute after:w-6 after:h-6 after:bg-rose-500 after:rounded-full after:left-[-0.9rem] after:top-0">
          <div className="px-6">
            <p>2022.12 ~ 2024.07</p>
            <ul className="list-disc list-inside marker:text-pink-400">
              <p className="text-xl p-2 font-bold text-rose-700">미래엔코어</p>
              <li>롯데케피탈 채권 시스템 구축</li>
              <li>국민카드 자산유동화 정보계 시스템 구축</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
