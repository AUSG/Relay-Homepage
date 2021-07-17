import React from "react";

/**
 * 주석 친 부분의 색깔을 바꾸면 로켓과 글씨 부분의 색이 바뀝니다
 */
const LogoWhiteSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 331.2 98.8" {...props}>
      <path
        d="M137.8 68.7v-4.5h-.2c-.2.3-.6.8-1 1.2-.5.5-1.2 1.1-2.2 1.9-1 .8-2.3 1.4-4 1.9-1.7.5-3.6.8-5.6.8-5.3 0-9.3-1.3-12-3.8-2.7-2.5-4-5.7-4-9.4 0-3.9 1.2-6.8 3.5-8.9 2.3-2 6-3.7 11.3-5l1.6-.4c4.5-1.1 7.4-2.1 8.8-2.9 1.5-.8 2.3-2 2.3-3.6 0-1.5-.7-2.8-2.1-3.8-1.4-1-3.5-1.5-6.2-1.5-3.1 0-5.4.7-6.9 2.1-1.5 1.4-2.5 3.4-3.2 5.8l-8.3-3.2c1-3.9 3-7 6.1-9.5 3.1-2.4 7.1-3.7 12.1-3.7 5.5 0 9.9 1.4 13.3 4.2 3.4 2.8 5.1 7.1 5.1 13.1v29.3h-8.4zm-11.7-19.1c-3.2.8-5.3 1.7-6.4 2.7s-1.6 2.3-1.6 3.8c0 3.6 2.5 5.5 7.5 5.5 3.7 0 6.4-.7 8.3-2.2 1.9-1.5 2.8-3.3 2.8-5.4v-9h-.2c-.2.5-.5.9-.9 1.2-.4.3-1.3.8-2.9 1.5-1.6.5-3.8 1.2-6.6 1.9zm31.6 3.2V23.5h9.8v28.2c0 3.4.6 5.7 1.8 7 1.2 1.3 3.3 2 6.1 2s5.1-.8 6.8-2.4 2.5-4 2.5-7.3V23.5h9.8v45.2h-9.4v-4.4h-.2c-2.7 3.8-6.6 5.6-11.7 5.6-5.2 0-9.1-1.5-11.7-4.5s-3.8-7.2-3.8-12.6zm46.2.8l8.9-2.1c.8 6.9 4.5 10.3 11 10.3 3 0 5.4-.5 7.1-1.6 1.7-1.1 2.5-2.5 2.5-4.2 0-1.7-.8-3-2.3-3.8-1.5-.8-4.7-1.9-9.7-3.3l-.5-.1c-5.3-1.5-9.2-3.2-11.6-5.2-2.4-2-3.6-4.7-3.6-8 0-3.6 1.5-6.8 4.5-9.4 3-2.6 7.1-4 12.3-4 10 0 16.2 4.4 18.6 13.2l-8.2 2.4c-1.7-5-5.2-7.5-10.4-7.5-2.5 0-4.4.5-5.7 1.5-1.4 1-2.1 2.1-2.1 3.4 0 1.5.8 2.6 2.3 3.4l.3.1c1.6.7 4.8 1.8 9.8 3.2l1 .3c5.5 1.5 9.2 3.4 11.3 5.5 2 2.2 3 5 3 8.4 0 3.6-1.5 6.8-4.6 9.6-3.1 2.8-7.6 4.2-13.5 4.2-6.2 0-11-1.6-14.3-4.7-3.5-3.1-5.4-7-6.1-11.6zm65-31.4c5.3 0 9.4 1.9 12.3 5.6h.2v-4.4h9.4V69c0 6.5-1.8 11.6-5.5 15-3.7 3.5-8.5 5.2-14.4 5.2-4.7 0-8.6-1.1-11.8-3.2-3.2-2.1-5.5-4.9-6.9-8.4l7.5-4.8c1.2 2.6 2.7 4.6 4.4 5.9 1.7 1.3 4 2 6.9 2 3.1 0 5.6-.9 7.5-2.6 1.8-1.7 2.7-4.3 2.7-7.8v-5.8h-.2c-1 1.5-2.6 2.8-4.6 3.8-2.1 1.1-4.4 1.6-7.1 1.6-5.9 0-10.8-2.1-14.6-6.4-3.9-4.3-5.8-10.1-5.8-17.5 0-7.3 2-13.1 6-17.4 3.7-4.2 8.4-6.4 14-6.4zm1.6 8.8c-3.7 0-6.6 1.3-8.8 3.9-2.2 2.6-3.3 6.3-3.3 11.2 0 4.8 1.1 8.6 3.3 11.2 2.2 2.6 5.1 3.9 8.8 3.9 3.1 0 5.6-.9 7.5-2.8s2.9-4.1 2.9-6.7V40.8c0-2.7-1-5-2.9-6.9-1.8-1.9-4.4-2.9-7.5-2.9zM7.4 3.9c-.9.2-1.8 1.1-2 2.1-1.2 5.5-1.2 9.8-1.2 14 0 17.4 9.1 27.9 21.2 35.8v17c0 2.7 2 6 4.4 7.2l16.4 8.3c.5.2 1.3.4 1.8.4 2.1 0 3.9-1.7 4-3.8V69.1l3.6 1.8c.6.3 1.7.6 2.3.6 1.2 0 2.9-.7 3.7-1.6l8.9-9c.9-.9 1.6-2.6 1.6-3.8 0-.7-.2-1.7-.5-2.4l-1.8-3.6h15.4c2.2 0 4-1.8 4-4 0-.5-.2-1.3-.4-1.8l-8.2-16.6c-1.2-2.4-4.2-4.3-6.8-4.4H56.6l-.6-.9C48.5 11.7 38.3 3 21.9 2.7h-.6c-4.2 0-8.4 0-13.9 1.2zm39.3 62.6v16l-14.5-7.3c-.8-.4-1.5-1.5-1.5-2.4V58.5l16 8zm26.8-36.9c.9 0 2 .7 2.4 1.5l7.2 14.6H67.2l-7.9-16.1h14.2zm-21.3-2.4l5.4 11.1c3.4 6.8 7.1 14.5 9.2 18.8l-8.9 9-29.6-14.8C15.3 42.9 9.5 33.2 9.5 20v-1.4c0-3.1.1-6.2.7-9.8 4.1-.7 7.5-.7 11.1-.7 13 0 22.5 5.9 30.9 19.1zm-34.7-.3c0 5.9 4.8 10.8 10.6 10.8s10.6-4.8 10.6-10.8c0-5.9-4.8-10.8-10.6-10.8-5.8.1-10.6 4.9-10.6 10.8zm15.9 0c0 3-2.4 5.4-5.3 5.4s-5.3-2.4-5.3-5.4c0-3 2.4-5.4 5.3-5.4s5.3 2.5 5.3 5.4z"
        // stroke="#FFFFFF"
        // fill="#FFFFFF"
      />
      <path
        d="M268.9 21.2c3.5 0 7.5 2.2 11.9 6.5l-.2 9.3c-.4-1.5-1.3-2.9-2.5-4.1-1.9-1.9-4.4-2.9-7.6-2.9-3.6 0-6.6 1.3-8.7 3.9s-3.3 6.4-3.3 11.2c0 4.9 1.1 8.6 3.2 11.2 2.2 2.6 5.1 3.9 8.8 3.9 3.1 0 5.6-.9 7.5-2.8.9-.8 1.6-1.8 2-2.8l-.2 9.3c-1 1.5-1.6 2.4-3.7 3.5-2 1.1-4.4 1.6-7.1 1.6-5.9 0-10.7-2.1-14.5-6.4-3.8-4.3-5.8-10.1-5.8-17.6 0-7.3 2-13.1 5.9-17.5 4-4.1 8.7-6.3 14.3-6.3z"
        // stroke="#FFFFFF"
        // fill="#FFFFFF"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M71.7 71.2c12 12 77.9 44.1 168.7-7.1s103.6-6.2 64.3 5.1"
        fill="none"
        stroke="#3b5bdb"
        strokeWidth={7}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LogoWhiteSVG;
