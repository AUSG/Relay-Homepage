// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import CrewCard from "@ausg/components/people/CrewCard";
import React, { useState } from "react";

export interface Crew {
  id: number;
  url: string;
  name: string;
  role: string;
  introduction: string;
  description: string;
}

const Team: React.FC = () => {
  const [crews] = useState<Crew[]>([
    {
      id: 0,
      url: "images/2.png",
      name: "김민태",
      role: "5기 organizer",
      introduction:
        "비록 내일 지구의 종말이 온다 하더라도 나는 오늘 한 줄의 코드를 작성하겠다.",
      description: "열정! 열정! 열정!!!",
    },
    {
      id: 1,
      url: "images/2.png",
      name: "문성혁",
      role: "4기 organizer",
      introduction:
        "비록 내일 지구의 종말이 온다 하더라도 나는 오늘 한 줄의 코드를 작성하겠다.",
      description: "열정! 열정! 열정!!!",
    },
    {
      id: 2,
      url: "images/2.png",
      name: "우수연",
      role: "5기 운영진",
      introduction:
        "비록 내일 지구의 종말이 온다 하더라도 나는 오늘 한 줄의 코드를 작성하겠다.",
      description: "열정! 열정! 열정!!!",
    },
    {
      id: 3,
      url: "images/2.png",
      name: "권주희",
      role: "5기 운영진",
      introduction:
        "비록 내일 지구의 종말이 온다 하더라도 나는 오늘 한 줄의 코드를 작성하겠다.",
      description: "열정! 열정! 열정!!!",
    },
    {
      id: 4,
      url: "images/2.png",
      name: "김은수",
      role: "5기 운영진",
      introduction:
        "비록 내일 지구의 종말이 온다 하더라도 나는 오늘 한 줄의 코드를 작성하겠다.",
      description: "열정! 열정! 열정!!!",
    },
    {
      id: 5,
      url: "images/2.png",
      name: "김성익",
      role: "5기 운영진",
      introduction:
        "비록 내일 지구의 종말이 온다 하더라도 나는 오늘 한 줄의 코드를 작성하겠다.",
      description: "열정! 열정! 열정!!!",
    },
  ]);

  return (
    <div>
      <div className="container flex justify-center mx-auto">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            AUSG 5기 크루
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            지금 활동하고 있는 크루들을 소개합니다.
          </h1>
        </div>
      </div>
      <div className="w-full px-10">
        <div className="container mx-auto">
          {/* 변수전달(n명의 크루 멤버) 리스트 렌더링. - flex로 wrapping된 컨테이너 박스 */}
          <div className="lg:flex md:flex xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around pt-10 flex-shrink-0">
            {crews.map((crew) => (
              <CrewCard
                key={crew.id}
                url={crew.url}
                name={crew.name}
                role={crew.role}
                introduction={crew.introduction}
                description={crew.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
