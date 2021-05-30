import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from "react";
import { Carousel } from "react-responsive-carousel";

const images = [
  { url: "images/-1.jpg" },
  { url: "images/0.jpg" },
  { url: "images/9.png" },
  { url: "images/18.jpg" },
];

const Content: React.FC = () => (
  <div className="main">
    <div className="doc_content">
      <div>
        <div className="title">
          <strong> AWSKRUG University Student Group </strong>
        </div>
        <div className="description">
          <ul>
            <li> AUSG는 AWS와 Cloud, 프로그래밍에 열정있는 대학생들이 모여 </li>
            <li> 이와 관련 주제들로 이야기를 나누고, 함께 성장하며 나아가는</li>
            <li> AWSKRUG University Student Group 입니다. </li>
          </ul>
          <ul>
            <li> AUSG에서는 대학생부터 현업에서 근무하는 개발자까지 </li>
            <li>
              {" "}
              다양한 사람들을 만나 자유로운 분위기에서 각자의 경험을 나누고
              소통할 수 있습니다.{" "}
            </li>
          </ul>
          <ul>
            <li>
              AWS 한국사용자모임(https://awskrug.github.io/)과 함께하고 있어요!
              😎
            </li>
          </ul>
        </div>
      </div>

      <div className="vision_wrapper">
        <div>
          <div className="title">
            <strong> Our Vision </strong>
          </div>
          <ul className="square_list_type">
            <li>
              {" "}
              우리는 각자의 경험을 나누고 함께 성장하는 것을 추구합니다.{" "}
            </li>
            <li> 막히는 것이 있다면 언제든 편하게 같이 이야기합니다. </li>
            <li>
              {" "}
              각자의 자리에서 가진 고민들을 함께 나누며 발전하고 있습니다.{" "}
            </li>
            <li> 앗, 물론 개발만이 아니라 함께 놀기도 합니다!! </li>
          </ul>
        </div>
        <div className="carousel">
          <Carousel
            autoPlay
            showArrows
            emulateTouch
            infiniteLoop
            swipeable
            stopOnHover
            showThumbs={false}
            axis="horizontal"
            width={450}
          >
            {images.map((image) => (
              <div key={image.url} style={{ height: "100%" }}>
                <img src={image.url} style={{ height: "100%" }} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div>
        <div className="title">
          <strong> Our Activity </strong>
        </div>
        <div className="description">
          <ul>
            <li> 우리는 AWS에 대한 각자의 경험을 나누고, </li>
            <li>
              {" "}
              스터디 · 프로젝트 · 세미나 · 외부동아리와의 연계 등 다양한 활동을
              진행합니다.{" "}
            </li>
            <li> 아래는 저희가 경험했던 다양한 행사들입니다. </li>
            <li>
              {" "}
              이 외에도 아키텍처, 자격증, 기술 서적 등을 기반으로 상시 스터디를
              진행하며 성장을 추구하고 있으며,{" "}
            </li>
            <li>
              {" "}
              숙명여대 해커톤 클라우드 어시스턴스 참여, AWS re:Invent 참관 등
              많은 활동을 해오고 있습니다.
            </li>
          </ul>
        </div>
      </div>

      {/* 행사 목록 컴포넌트로 뺴주세요.. plz */}
      <div></div>

      <div>
        <div className="title">
          <strong>What is Next?</strong>
        </div>
        <div className="description">
          <ul>
            <li>
              {" "}
              지식의 나눔. 경험의 공유. 천천히 하지만 꾸준한 성장. 앞으로
              나아가는 열정.{" "}
            </li>
            <li> . </li>
            <li>
              {" "}
              각자 관심있는 주제가 생기면 스터디를 선행하고, 이를 기반으로
              프로젝트를 진행합니다.{" "}
            </li>
            <li>
              {" "}
              외부 해커톤 및 각종 세미나에 스피커 또는 서포터로 함께 할
              예정이며,{" "}
            </li>
            <li>
              {" "}
              이번 시즌 저희는{" "}
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                SOPT
              </span>{" "}
              와 함께합니다.{" "}
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="title">
          <strong>Welcome New Crew</strong>
        </div>
        <div className="description">
          <ul>
            <li>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                이런 분들과 함께 하고자 함께 하고 싶습니다!
              </span>
            </li>
            <li>
              {" "}
              AWS를 비롯한 클라우드에 관심이 많은 대한민국 소재 대학 재학생 및
              휴학생!{" "}
            </li>
            <li> 지식의 나눔을 추구하며, 적극적으로 활동이 가능한 사람! </li>
            <li> 다양한 개발자들과의 커뮤니케이션을 즐기는 사람! </li>
            <li> 꾸준히 스스로의 발전을 추구하는 사람! </li>
            <br />
            <li>
              {" "}
              <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                지원서 제출
              </span>{" "}
            </li>
            <li> 2021.06.20(일) 23:59 까지 </li>
            <li>
              {" "}
              <a href="http://bit.ly/ausg-5th"> ▶ 5th AUSG 지원하기 ◀ </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Content;
