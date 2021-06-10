import AwsIcons from "@ausg/components/molecules/AwsIcons";
import React from "react";

import BackgroundWaveSVG from "./BackgroundWaveSVG";

// TODO: 밑으로 스크롤을 안내하는 아이콘을 넣어주세요 - 다이빙하는 느낌으로 해주는 것도 좋을 듯?

const Banner: React.FC = () => {
  return (
    <div className="">
      <div className="header">
        <div className="inner-header flex flex-col justify-center items-center">
          <img
            src="/images/logo-white.svg"
            className="2xl:w-96 xl:w-80 lg:w-72 md:w-60 sm:w-48 w-36 mt-12"
            alt="AUSG"
          />
          <h2 className="text-5xl text-white typography mt-10 mx-20">
            AWSKRUG University Student Group
          </h2>
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
