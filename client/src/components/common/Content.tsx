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

const Content: React.FC = () => (
  <div className="main mx-4 max-w-screen-xl mx-auto">
    <div className="doc_content">
      <div>
        <div className="typography text-4xl mt-10 mb-5 py-1 text-ausgPurple border-t-2 border-b-2 border-ausgPurple">
          AUSG
        </div>
        <div className="px-2">
          <p>
            AUSG는 AWSKRUG University Student Group의 약자로, AWS와 Cloud,
            프로그래밍에 관심있는 대학생들의 모임입니다.
            <br />
            자유로운 분위기에서 다양한 사람을 만나 각자의 경험을 나누고 소통할
            수 있습니다.
          </p>
          <p>
            <a href="https://awskrug.github.io/">
              <strong>AWS 한국사용자모임</strong>
            </a>
            과 함께하고 있어요! 😎
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
              우리는 각자의 경험을 나누고 함께 성장하는 것을 추구합니다. <br />
              막히는 것이 있다면 언제든 편하게 같이 이야기합니다.
              <br />
              각자의 자리에서 가진 고민들을 함께 나누며 발전하고 있습니다.
              <br />
              개발 뿐만 아니라, 즐거운 네트워크 형성도 하고 있습니다!
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
          {/* 행사 목록 */}
          <p>
            이 외에도 아키텍처, 자격증, 기술 서적 등을 기반으로 상시 스터디를
            진행하며 성장을 추구합니다. <br />
            또, 숙명여대 해커톤 클라우드 어시스턴스 참여, AWS re:Invent 참관 등
            많은 활동을 해오고 있습니다.
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
            지식의 나눔. 경험의 공유. 느리더라도 꾸준한 성장. 앞으로 나아가는
            열정.
          </p>
          <p>
            각자 관심있는 주제가 생기면 스터디를 선행하고, 이를 기반으로
            프로젝트를 진행합니다.
          </p>
          <p>
            외부 해커톤 및 각종 세미나에도 스피커, 혹은 서포터로 함께 하고
            있습니다.
          </p>
        </div>
      </div>

      <div>
        <div className="typography text-4xl mt-10 mb-5 py-1 text-ausgPurple border-t-2 border-b-2 border-ausgPurple">
          Welcome New Crew!
        </div>
        <div className="px-2">
          <p className="font-bold text-2xl">AUSG은 이런 사람을 기다립니다</p>
          <br />
          <ul>
            <li>
              {" "}
              AWS를 비롯한 클라우드에 관심이 많은 대한민국 소재 대학 재학생 및
              휴학생{" "}
            </li>
            <li> 지식의 나눔을 추구하며, 적극적으로 활동이 가능한 사람 </li>
            <li> 다양한 개발자들과의 커뮤니케이션을 즐기는 사람 </li>
            <li> 꾸준히 스스로의 발전을 추구하는 사람 </li>
          </ul>
          <br />
          위의 조건에 해당하시는 분은 지원서를 제출하시고 저희와 함께해요!
          <br />
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
