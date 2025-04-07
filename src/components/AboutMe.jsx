import React from "react";
import ProfilePhoto from "./ProfilePhoto";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center w-4/7">
      <h2 className="font-content text-[30px] font-bold">AboutMe</h2>
      <div className="grid grid-cols-3 gap-12 mt-6 w-full h-full overflow-hidden">
        <section className="col-span-1">
          <ProfilePhoto poTo="jungheerok" />
        </section>
        <section className="col-span-2">
          <ul className="flex flex-col mt-8 gap-12">
            <li>
              <p className="text-2xl mb-2">
                [배우면서 성장하는 것을 좋아합니다.]
              </p>
              <p className="text-lg">
                매 프로젝트마다 문제를 해결하기 위해
                <strong> 능동적으로 고민</strong>
                했습니다. 어려웠던 부분을 알게되면서
                <strong> 성장한다는 즐거움</strong>을 얻습니다. 시행착오를 겪는
                과정이 가끔 힘들지만 밑거름이 된다고 생각하면 뿌듯합니다. 저는
                직접 성과를 만들어내는 경험이 가장 큰 동기부여가 됩니다.
              </p>
            </li>
            <li>
              <p className="text-2xl mb-2">
                [좋은 사용자 경험을 제공하는 것에 관심이 많습니다]
              </p>
              <p className="text-lg">
                사용자 입장에서 생각해서 보다
                <strong> 더 나은 사용자 경험을 제공</strong>하려고 합니다.
                디테일을 신경 써 하단 네비게이션 버튼 터치 범위 확대 등 세심한
                부분도 고민하며 개발 중입니다.
              </p>
            </li>
            <li>
              <p className="text-2xl mb-2">[꼼꼼함과 책임감이 있습니다.]</p>
              <p className="text-lg">
                은행 시스템을 운영/유지보수하면서 능동적으로 예외 상황을
                고려해서 <strong> 꼼꼼한 처리</strong>를 하려고 노력했습니다.
                제가 가지고 있는 역량을 프론트엔드 개발자로서 UX/UI 디테일에
                접목시키겠습니다.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
