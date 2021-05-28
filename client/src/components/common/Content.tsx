import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from "react";
import { Carousel } from "react-responsive-carousel";

const images = [
  { url: "images/-1.jpg" },
  { url: "images/0.jpg" },
  { url: "images/9.png" },
  { url: "images/18.jpg" },
];

interface ContentProps {}

const Content: React.FC<ContentProps> = () => (
  <div className="main">
    <div className="doc_content">
      <div>
        <div className="title">
          <strong> AWSkrug University Student Group </strong>
        </div>
        <div className="description">
          <ul>
            <li> AUSG는 AWS와 클라우드, 프로그래밍에 관심을 갖고 </li>
            <li> 이와 관련 주제들로 이야기를 나누고 </li>
            <li> 함께 성장하며 나아가는 대학생들의 모임입니다. </li>
          </ul>
          <ul>
            <li>
              AUSG에서는 대학교에서 공부하는 친구들부터 현업에서 근무하는
              개발자도 함께
            </li>
            <li> 다양한 사람들을 만나 소통하실 수 있습니다. </li>
            <li> 함께 성장하며 나아가는 대학생들의 모임입니다. </li>
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
            <li> 우리는 각자의 경험을 나누고 함께 발전하는것을 좋아합니다. </li>
            <li> 막히는 것이 있다면 언제든 편하게 같이 이야기합니다. </li>
            <li>
              각자의 자리에서 가진 고민들을 함께 나누며 성장하고 있습니다.
            </li>
            <li> 앗, 물론 개발만이 아니라 함께 놀기도 합니다!! </li>
          </ul>
        </div>
        <div style={{ marginRight: "10rem" }}>
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
            <li>
              우리는 AWS에 대한 각자의 경험을 나누고, 그 속에서 매 순간 성장하고
              있습니다.
            </li>
            <li>아래는 저희가 경험했던 다양한 행사들입니다.</li>
            <li>
              이 외에도 아키텍처, 자격증, 기술 서적 등을 기반으로 스터디를
              진행하며 성장을 추구하고 있으며,
            </li>
            <li>
              숙명여대 해커톤에 클라우드 어시스턴스로 참여, AWSKRUG와 함께 AWS
              re:Invent 참관 등 많은 활동을 해오고 있습니다.
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
              천천히. 꾸준하게. 자기{" "}
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                자신의 성장
              </span>
              나아가는
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>열정</span>
            </li>
            <li>우리는 꾸준히 스스로에 발전을 지향합니다.</li>
            <li>
              각자의 관심사에 맞는 스터디를 합니다. 이를 기반으로 프로젝트를
              진행합니다.
            </li>
            <li>
              외부 해커톤 및 세미나 지원 예정이며, 이번 시즌 저희는
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>SOPT</span>
              와 함께합니다.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="title">
          <strong>Welcome New Krew</strong>
        </div>
        <div className="description">
          <ul>
            <li>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                이런 분들과 함께 하고자 함께 하고 싶습니다!
              </span>
            </li>
            <li>
              AWS 또는 클라우드에 관심있는 대한민국 소재 대학 재학생 및
              휴학생이라면 누구나 지원 하실 수 있습니다.
            </li>
            <li>함께 개발자들과 즐거운 커뮤니케이션을 즐기는 사람!</li>
            <li>꾸준히 스스로 발전을 추구하는 사람!</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Content;
