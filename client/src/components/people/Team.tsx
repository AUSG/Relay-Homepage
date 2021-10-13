// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import CrewCard from "@ausg/components/people/CrewCard";
import React, { useEffect, useState } from "react";

import crews from "./CrewInfo";

export interface Crew {
  nickname: string;
  imageUrl: string;
  name: string;
  role: string;
  introduction: string;
  description: string;
  linkedinURL?: string;
  githubURL?: string;
  blogURL?: string;
  otherURL?: string;
  awardList?: string[];
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

  return (
    <div
      onKeyDown={onKeyDownHandlerForEasterEgg}
      tabIndex={0}
      className="w-full px-10"
    >
      {Object.keys(crews).map((generation) => (
        <div key={generation} className="container mx-auto">
          <h5 className="typography text-2xl mt-10 mb-5 py-1 text-ausgPurple border-t-2 border-b-2 border-ausgPurple">
            AUSG {generation}
          </h5>
          <ul className="lg:flex md:flex xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around pt-10 flex-shrink-0">
            {crews[generation].map((crew: Crew) => (
              <CrewCard
                key={crew.nickname}
                imageUrl={crew.imageUrl}
                name={crew.name}
                role={crew.role}
                introduction={crew.introduction}
                description={crew.description}
                githubURL={crew.githubURL}
                linkedinURL={crew.linkedinURL}
                blogURL={crew.blogURL}
                otherURL={crew.otherURL}
                awardList={crew.awardList}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Team;
