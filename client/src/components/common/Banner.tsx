import React from "react";

import LogoWhiteSVG from "./LogoWhiteSVG";

// TODO: 밑으로 스크롤을 안내하는 아이콘을 넣어주세요 - 다이빙하는 느낌으로 해주는 것도 좋을 듯?

const Banner: React.FC = () => {
  return (
    <div className="">
      <div className="header">
        <div className="inner-header flex">
          <LogoWhiteSVG width={120} className="mr-4" />
          {/* <h1 className="text-xl">We Are AUSG!</h1> */}
          <h1 className="text-xl">Deep Dive AUSG!</h1>
        </div>
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;
