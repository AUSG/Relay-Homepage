// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import CrewCard from "@ausg/components/people/CrewCard";
import * as CSV from "csv-string";
import React, { useEffect, useState } from "react";

import memberInfo from "./memberInfo";

export interface Crew {
  id: number;
  url: string; // imageUrl
  name: string;
  role: string;
  introduction: string;
  description: string;
  linkedinURL?: string;
  githubURL?: string;
  blogURL?: string;
  otherURL?: string;
}

const Team: React.FC = () => {
  // Easter egg ~ (발동 조건 : People 탭에서 Team 컴포넌트 영역을 좌클릭 후 ausg 타이핑)
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    if (!input.toLowerCase().includes("ausg")) return;
    alert("AUSG, truly AWS masters... Anyway here's an egg. 🥚");
    setInput("");
  }, [input]);

  const onKeyDownHandlerForEasterEgg = (e) => {
    const ch = e.key as string;
    if (!ch) return;
    else if (ch < "A" || ch > "z") return;
    setInput(input + ch);
  };
  // ~ Easter egg

  // csv format: 이름 - 기수 역할 - 자기소개(<= 50자) - 마우스 올리면 보이는 캐치프레이즈 (<= 20자) - 이메일 - 링크드인 url - 깃헙 url - 블로그 url - 기타 url
  // csv order : see `./memberInfo.tsx`
  const crews: Crew[] = CSV.parse(memberInfo, "|").map((crew, idx) => {
    const [
      name,
      role,
      introduction,
      description,
      _email,
      linkedinURL,
      githubURL,
      blogURL,
      otherURL,
    ] = crew;

    return {
      id: idx,
      url: `/images/people/${name}.jpg`,
      name,
      role,
      introduction,
      description,
      githubURL,
      linkedinURL,
      blogURL,
      otherURL,
    };
  });

  return (
    <div onKeyDown={onKeyDownHandlerForEasterEgg} tabIndex={0}>
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
                githubURL={crew.githubURL}
                linkedinURL={crew.linkedinURL}
                blogURL={crew.blogURL}
                otherURL={crew.otherURL}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
