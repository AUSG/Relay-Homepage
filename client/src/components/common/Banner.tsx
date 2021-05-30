import AwsIcons from "@ausg/components/molecules/AwsIcons";
import React from "react";

import BackgroundWaveSVG from "./BackgroundWaveSVG";
import LogoWhiteSVG from "./LogoWhiteSVG";

// TODO: 밑으로 스크롤을 안내하는 아이콘을 넣어주세요 - 다이빙하는 느낌으로 해주는 것도 좋을 듯?

const Banner: React.FC = () => {
  return (
    <div className="">
      <div className="header">
        <div className="inner-header flex flex-col justify-center">
          <LogoWhiteSVG width={200} className="mr-4" />
          <h1 className="text-5xl text-white typography mt-10 mx-20">
            AWSKRUG University Student Group
          </h1>
          <AwsIcons />
        </div>
        <div>
          <BackgroundWaveSVG />
        </div>
      </div>
    </div>
  );
};

export default Banner;
