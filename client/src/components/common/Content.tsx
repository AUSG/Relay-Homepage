import "react-responsive-carousel/lib/styles/carousel.min.css";

import styled from "@emotion/styled";
import React from "react";
import { Carousel } from "react-responsive-carousel";

const images = [
  { url: "images/-1.jpg" },
  { url: "images/0.jpg" },
  { url: "images/9.png" },
  { url: "images/18.jpg" },
];

const activityImages = [
  {
    url: "images/activity/2020-1.png",
    caption: "2019년 re:Invent에서 발표된 신기술을 서울에서 발표",
  },
  {
    url: "images/activity/2020-2.png",
    caption: "'코로나와 대학생'이라는 주제로 진행한 프라이빗 온라인 해커톤",
  },
  {
    url: "images/activity/2019-1.png",
    caption: "AWS에 익숙하지 않은 분들을 위한 핸즈온 세션 진행",
  },
  {
    url: "images/activity/2019-2.png",
    caption:
      "남과의 경쟁이 아닌 '자기 자신의 성장'이라는 AUSG의 철학에 맞춘 해커톤 개최",
  },
  {
    url: "images/activity/2018.png",
    caption:
      "LA에서 개최된 2018 re:Invent에 참석해 '한국의 AWS 대학생 그룹'이라는 주제로 스피치",
  },
  {
    url: "images/activity/2017.png",
    caption:
      "도쿄에서 열린 2017 JAWS Day에 참석하여 '대학생 그룹 구축 방안'에 대한 스피치",
  },
];

const Content: React.FC = () => (
  <div className="main mx-4">
    <div className="doc_content">
      <div>
        <div className="typography text-4xl mt-10 mb-5 py-1 text-ausgPurple border-t-2 border-b-2 border-ausgPurple">
          AWSKRUG University Student Group
        </div>
        <div className="px-2">
          <p>
            AUSG는 AWS와 Cloud, 프로그래밍에 열정있는 대학생들이 모여 이와 관련
            주제들로 이야기를 나누고, 함께 성장하며 나아가는 AWSKRUG University
            Student Group 입니다.
          </p>
          <p>
            대학생부터 직장인까지 AUSG에서 다양한 사람들을 만나 자유로운
            분위기에서 각자의 경험을 나누고 소통할 수 있습니다.
          </p>
          <p>
            AWS 한국사용자모임(https://awskrug.github.io/)과 함께하고 있어요! 😎
          </p>
        </div>
      </div>

      <div className="vision_wrapper">
        <div>
          <div className="typography text-4xl mt-10 mb-5 py-1 text-ausgPurple border-t-2 border-b-2 border-ausgPurple">
            Our Vision
          </div>
          <div className="px-2">
            <p>
              우리는 각자의 경험을 나누고 함께 성장하는 것을 추구합니다. 막히는
              것이 있다면 언제든 편하게 같이 이야기합니다. 각자의 자리에서 가진
              고민들을 함께 나누며 발전하고 있습니다. 앗, 물론 개발만이 아니라
              함께 놀기도 합니다!!
            </p>
          </div>
        </div>
        <div className="my-4 flex justify-center">
          <div className="max-w-3xl">
            <Carousel
              // autoPlay
              showArrows
              emulateTouch
              infiniteLoop
              swipeable
              stopOnHover
              showThumbs={false}
              axis="horizontal"
            >
              {images.map((image, idx) => (
                <img
                  key={idx}
                  src={image.url}
                  className="object-cover"
                  style={{ height: "100%", width: "none" }}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div>
        <div className="typography text-4xl mt-10 mb-5 py-1 text-ausgPurple border-t-2 border-b-2 border-ausgPurple">
          Our Activity
        </div>
        <div className="px-2">
          <p>
            우리는 AWS에 대한 각자의 경험을 나누고, 스터디 · 프로젝트 · 세미나 ·
            외부동아리와의 연계 등 다양한 활동을 진행합니다.
          </p>
          <p> 아래는 저희가 경험했던 다양한 행사들입니다. </p>

          <div className="max-w-3xl mx-auto">
            <Carousel
              // autoPlay
              showArrows
              emulateTouch
              infiniteLoop
              swipeable
              stopOnHover
              showThumbs={false}
              axis="horizontal"
            >
              {activityImages.map((image, idx) => (
                <figure>
                  <img
                    key={idx}
                    src={image.url}
                    className="object-cover"
                    style={{ height: "100%", width: "none" }}
                  />
                  <figcaption className="my-8">{image.caption}</figcaption>
                </figure>
              ))}
            </Carousel>
          </div>
          <p>
            이 외에도 아키텍처, 자격증, 기술 서적 등을 기반으로 상시 스터디를
            진행하며 성장을 추구하고 있으며, 숙명여대 해커톤 클라우드 어시스턴스
            참여, AWS re:Invent 참관 등 많은 활동을 해오고 있습니다.
          </p>
        </div>
      </div>

      {/* 행사 목록 컴포넌트로 뺴주세요.. plz */}
      <div></div>

      <div>
        <div className="typography text-4xl mt-10 mb-5 py-1 text-ausgPurple border-t-2 border-b-2 border-ausgPurple">
          What is Next?
        </div>
        <div className="px-2">
          <p>
            지식의 나눔. 경험의 공유. 천천히 하지만 꾸준한 성장. 앞으로 나아가는
            열정.
          </p>
          <p>
            각자 관심있는 주제가 생기면 스터디를 선행하고, 이를 기반으로
            프로젝트를 진행합니다.
          </p>
          <p>
            외부 해커톤 및 각종 세미나에 스피커 또는 서포터로 함께 할 예정이며,
            이번 시즌 저희는
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>SOPT</span>와
            함께합니다.
          </p>
        </div>
      </div>

      <div>
        <div className="typography text-4xl mt-10 mb-5 py-1 text-ausgPurple border-t-2 border-b-2 border-ausgPurple">
          Welcome New Crew
        </div>
        <div className="px-2">
          <p className="font-bold text-2xl">
            이런 분들과 함께 하고자 함께 하고 싶습니다.
          </p>
          <p>
            AWS를 비롯한 클라우드에 관심이 많은 대한민국 소재 대학 재학생 및
            휴학생!
          </p>
          <p> 지식의 나눔을 추구하며, 적극적으로 활동이 가능한 사람! </p>
          <p> 다양한 개발자들과의 커뮤니케이션을 즐기는 사람! </p>
          <p> 꾸준히 스스로의 발전을 추구하는 사람! </p>
          <br />
          <p className="font-bold text-xl">지원서 제출</p>
          <p> 2021.06.20(일) 23:59 까지 </p>
          <p>
            <Button href="http://bit.ly/ausg-5th">5th AUSG 지원하기</Button>
          </p>
          <br />
        </div>
      </div>
    </div>
  </div>
);

const Button = styled.a`
  padding: 0.5rem 1rem;
  background-color: red;
  border-radius: 0.5rem;
  display: inline-block;
  background-color: #e7f5ff;
  color: #1971c2;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  transition: transform 200ms;
  margin-top: 1rem;

  &:hover {
    text-decoration: none;
  }
  &:active {
    transform: scale(0.95);
    background-color: #e7f5ff;
  }
`;

export default Content;
