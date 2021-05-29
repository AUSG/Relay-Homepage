// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import React from "react";

interface Crew {
    id: number;
    url: string;
    name: string;
    introduce: string;
}

const teamData: Crew[] = [
    { id: 0, url: "images/2.png", name: "민태", introduce: "5기 organizer" },
    { id: 1, url: "images/2.png", name: "성혁", introduce: "4기 organizer" }
]

interface teamProps { }

const Team: React.FC<teamProps> = () => {
    return (
        <div>
            <div className="container flex justify-center mx-auto pt-16">
                <div>
                    <p className="text-gray-500 text-lg text-center font-normal pb-3">AUSG 5기 크루</p>
                    <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">지금 활동하고 있는 크루들을 소개합니다.</h1>
                </div>
            </div>
            <div className="w-full px-10">
                <div className="container mx-auto">
                    {/* 변수전달(n명의 크루 멤버) 리스트 렌더링. - flex로 wrapping된 컨테이너 박스 */}
                    <div className="lg:flex md:flex xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around pt-10">
                        {teamData.map((crew) => (
                            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
                                <div className="bg-top bg-cover bg-no-repeat h-64">
                                    <img src={crew.url} alt="" className="h-full w-full overflow-hidden object-cover rounded shadow" />
                                </div>
                                <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                                    <p className="text-xl text-center text-gray-800 font-normal mb-1">{crew.name}</p>
                                    <p className="text-center text-base text-gray-600">{crew.introduce}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
};

export default Team;

