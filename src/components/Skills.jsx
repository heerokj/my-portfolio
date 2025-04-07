import React from "react";

export default function Skills() {
  return (
    <div className="flex flex-col items-center gap-2 w-3/7 h-[530px]">
      <h2 className="font-content text-[30px] font-bold">Skills</h2>
      <p>이하 기술을 사용해보았습니다.</p>

      <div className="grid grid-cols-10 gap-6 mt-4 w-full h-full overflow-hidden">
        {/* 왼쪽: Front-end */}
        <div className="skills_front col-span-6 bg-gray-100 p-6 rounded shadow-lg hover:-translate-y-1">
          <p className="font-bold mb-4 text-2xl">Front-end</p>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center">
              <img
                src="/images/skills/html.png"
                alt="html"
                className="w-11 h-11 rounded-full border-1 border-b-cyan-700"
              />
              <p className="ml-4">기본적인 html 문법을 사용할 수 있습니다.</p>
            </li>
            <li className="flex items-center">
              <img
                src="/images/skills/css.png"
                alt="css"
                className="w-11 h-11 rounded-full border-1 border-b-cyan-700"
              />
              <p className="ml-4">css로 스타일 작업을 했습니다.</p>
            </li>
            <li className="flex items-center">
              <img
                src="/images/skills/javascript.png"
                alt="javascript"
                className="w-11 h-11 rounded-full border-1 border-b-cyan-700"
              />
              <p className="ml-4">
                ES6+ 문법을 활용하여 코드를 작성했습니다. 현재도 꾸준히 공부
                중입니다.
              </p>
            </li>
            <li className="flex items-center">
              <img
                src="/images/skills/typescript.png"
                alt="typescript"
                className="w-11 h-11 rounded-full border-1 border-b-cyan-700"
              />
              <p className="ml-4">
                프로젝트에서 사용했습니다. 현재도 꾸준히 공부 중입니다.
              </p>
            </li>
            <li className="flex items-center">
              <img
                src="/images/skills/react.svg"
                alt="react"
                className="w-11 h-11 rounded-full border-1 border-b-cyan-700"
              />
              <p className="ml-4">
                리액트로 프로젝트를 만들어본 적 있습니다.
                <br /> ContextAPI, useState, useMemo, Suspense를 활용 할 수
                있습니다.
              </p>
            </li>
            <li className="flex items-center">
              <img
                src="/images/skills/next.png"
                alt="Nextjs"
                className="w-11 h-11 rounded-full border-1 border-b-cyan-700"
              />
              <p className="ml-4">
                SSR, CSR를 상황에 맞게 활용해서 개인 또는 팀 프로젝트에
                적용했습니다.
                <br /> API 라우터를 활용해서 외부 API 연동 등 구현할 수
                있습니다.
              </p>
            </li>
            <li className="flex items-center">
              <img
                src="/images/skills/tailwindcss.svg"
                alt="TailwindCSS"
                className="w-11 h-11 rounded-full border-1 border-b-cyan-700"
              />
              <p className="ml-4">개인 또는 팀 프로젝트에서 사용했습니다.</p>
            </li>
            <li className="flex items-center">
              <img
                src="/images/skills/reactQuery.png"
                alt="TanstackQuery"
                className="w-11 h-11 rounded-full border-1 border-b-cyan-700"
              />
              <p className="ml-4">
                API 호출한 데이터 캐싱, 로딩, 에러 처리를 관리하기 위해
                사용했습니다.
                <br /> useInfiniteQuery을 활용할 수 있습니다.
              </p>
            </li>
          </ul>
        </div>

        {/* 오른쪽: Back-end + Tools */}
        <div className="col-span-4 flex flex-col gap-4 ">
          <div className="skills_Back bg-gray-100 p-6 rounded h-1/2 shadow-lg hover:-translate-y-1">
            <p className="font-bold mb-4 text-2xl">Back-end & Database</p>
            <ul>
              <li className="flex">
                <img
                  src="/images/skills/Mysql.svg"
                  alt="Mysql"
                  className="w-11 h-11 rounded-full border-1 border-b-cyan-700"
                />
                <p className="ml-4">
                  MySQL을 조회·삽입·수정·삭제 작업을 수행할 수 있으며 JOIN,
                  GROUP BY, 서브쿼리를 사용해 간단한 쿼리를 작성할 수 있습니다.
                </p>
              </li>
            </ul>
          </div>
          <div className="skills_etc bg-gray-100 p-6 rounded h-1/2 shadow-lg hover:-translate-y-1">
            <p className="font-bold mb-4 text-2xl">Tools & Etc</p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center">
                <img
                  src="/images/skills/git.png"
                  alt="Git"
                  className="w-11 h-11 rounded-full border-1 border-b-cyan-700"
                />
                <p className="ml-4">형상 관리를 위해 사용했습니다.</p>
                <p></p>
              </li>
              <li className="flex items-center">
                <img
                  src="/images/skills/github.svg"
                  alt="Github"
                  className="w-11 h-11 rounded-full border-1 border-b-cyan-700"
                />
                <p className="ml-4">팀 프로젝트 협업으로 사용했습니다.</p>
              </li>
              <li className="flex items-center">
                <img
                  src="/images/skills/vercel.svg"
                  alt="Vercel"
                  className="w-11 h-11 rounded-full border-1 border-b-cyan-700"
                />
                <p className="ml-4">
                  NextJS 프로젝트를 배포해 본 경험이 있습니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
