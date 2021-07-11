// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import CrewCard from "@ausg/components/people/CrewCard";
import * as CSV from "csv-string";
import React, { useEffect, useState } from "react";

import member5thInfo from "./Member5thInfo";
import memberInfo from "./MemberInfo";

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

  // csv format: 이름 - 사진 유무(O/X) - 기수 역할 - 자기소개(<= 50자) - 마우스 올리면 보이는 캐치프레이즈 (<= 20자) - 이메일 - 링크드인 url - 깃헙 url - 블로그 url - 기타 url
  // csv order : see `./MemberInfo.tsx`
  const crews: Crew[] = CSV.parse(memberInfo, "|").map((crew, idx) => {
    const [
      nickname,
      name,
      hasImage,
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
      url:
        hasImage === "O" ? `/images/people/${nickname}.jpg` : `/images/17.png`,
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

  const newCrews: Crew[] = member5thInfo.map((memberInfo, idx) => {
    return {
      id: idx,
      url:
        memberInfo.hasImage === "O"
          ? `/images/people/${memberInfo.nickname}.jpg`
          : `/images/17.png`,
      name: memberInfo.name,
      role: memberInfo.role,
      introduction: memberInfo.introduction,
      description: memberInfo.description,
      githubURL: memberInfo.githubURL,
      linkedinURL: memberInfo.linkedinURL,
      blogURL: memberInfo.blogURL,
      otherURL: memberInfo.otherURL,
    };
  });

  return (
    <div
      onKeyDown={onKeyDownHandlerForEasterEgg}
      tabIndex={0}
      className="w-full px-10"
    >
      <div className="container mx-auto">
        <h5 className="typography text-2xl mt-10 mb-5 py-1 text-ausgPurple border-t-2 border-b-2 border-ausgPurple">
          AUSG New Crew
        </h5>
        {/* 변수전달(n명의 크루 멤버) 리스트 렌더링. - flex로 wrapping된 컨테이너 박스 */}
        <ul className="lg:flex md:flex xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around pt-10 flex-shrink-0">
          {newCrews.map((crew) => (
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
        </ul>
      </div>

      <div className="container mx-auto">
        <h5 className="typography text-2xl mt-10 mb-5 py-1 text-ausgPurple border-t-2 border-b-2 border-ausgPurple">
          AUSG Old Crew
        </h5>
        {/* 변수전달(n명의 크루 멤버) 리스트 렌더링. - flex로 wrapping된 컨테이너 박스 */}
        <ul className="lg:flex md:flex xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around pt-10 flex-shrink-0">
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
        </ul>
      </div>
    </div>
  );
};

export default Team;
