import "react-responsive-carousel/lib/styles/carousel.min.css";

import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

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
      "Las vegas에서 개최된 2018 re:Invent에 참석 후, 'Amazon SageMaker RL'이라는 주제로 서울에서 스피치",
  },
  {
    url: "images/activity/2017.png",
    caption:
      "도쿄에서 열린 2017 JAWS Day에 참석하여 '대학생 그룹 구축 방안'에 대한 스피치",
  },
];

const Content: React.FC = () => {
  const [images, setImages] = useState<any>([]);
  useEffect(() => {
    const TOTAL_IMAGE_COUNT = 19;
    const randomlySelectedImages = [...Array(TOTAL_IMAGE_COUNT).keys()] // 20 pictures in groupPhotos
      .sort(() => 0.5 - Math.random()) // shuffle
      .slice(0, 4) // take 4
      .map((num) => ({ url: `images/groupPhotos/${num}.jpg` })); // always jpg

    setImages(randomlySelectedImages);
  }, []);

  return (
    <main className="main">
      <section className="doc_content">
        <article>
          <h3 className="typography text-4xl mt-10 mb-5 py-1 text-ausgPurple border-t-2 border-b-2 border-ausgPurple">
            AUSG
          </h3>
          <p className="px-2">
            AUSG는 AWSKRUG University Student Group의 약자로, AWS와 Cloud,
            프로그래밍에 관심있는 대학생들의 모임입니다.
            <br />
            자유로운 분위기에서 다양한 사람을 만나 각자의 경험을 나누고 소통할
            수 있습니다.
            <br />
            <a href="https://awskrug.github.io/">
              <strong>AWS 한국사용자모임</strong>
            </a>
            과 함께하고 있어요! 😎
          </p>
        </article>

        <article className="vision_wrapper">
          <h3 className="typography text-4xl mt-10 mb-5 py-1 text-ausgPurple border-t-2 border-b-2 border-ausgPurple">
            Our Vision
          </h3>
          <p className="px-2">
            우리는 각자의 경험을 나누고 함께 성장하는 것을 추구합니다. <br />
            막히는 것이 있다면 언제든 편하게 같이 이야기합니다.
            <br />
            각자의 자리에서 가진 고민들을 함께 나누며 발전하고 있습니다.
            <br />
            개발 뿐만 아니라, 즐거운 네트워크 형성도 하고 있습니다!
          </p>

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
                    style={{
                      maxHeight: "800px",
                      width: "100%",
                      position: "relative",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </article>

        <article className="vision_wrapper">
          <h3 className="typography text-4xl mt-10 mb-5 py-1 text-ausgPurple border-t-2 border-b-2 border-ausgPurple">
            Our Activity
          </h3>
          <p className="px-2">
            우리는 AWS에 대한 각자의 경험을 나누고, 스터디 · 프로젝트 · 세미나 ·
            외부동아리와의 연계 등 다양한 활동을 진행합니다. <br />
            아래는 저희가 경험했던 다양한 행사들입니다.
          </p>
          <div className="my-4 flex justify-center">
            <div className="md:max-w-3xl">
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
                  <figure key={idx}>
                    <img
                      src={image.url}
                      className="object-cover"
                      style={{ height: "100%", width: "none" }}
                    />
                    <figcaption className="my-8">{image.caption}</figcaption>
                  </figure>
                ))}
              </Carousel>
            </div>
          </div>
          <p className="px-2">
            이 외에도 아키텍처, 자격증, 기술 서적 등을 기반으로 상시 스터디를
            진행하며 성장을 추구합니다. <br />
            또, 숙명여대 해커톤 클라우드 어시스턴스 참여, AWS re:Invent 참관 등
            많은 활동을 해오고 있습니다.
          </p>
        </article>

        {/* 행사 목록 컴포넌트로 뺴주세요.. plz */}
        <div></div>

        <article>
          <h3 className="typography text-4xl mt-10 mb-5 py-1 text-ausgPurple border-t-2 border-b-2 border-ausgPurple">
            What is Next?
          </h3>
          <p className="px-2">
            지식의 나눔. 경험의 공유. 느리더라도 꾸준한 성장. 앞으로 나아가는
            열정.
            <br />
            각자 관심있는 주제가 생기면 스터디를 선행하고, 이를 기반으로
            프로젝트를 진행합니다.
            <br />
            외부 해커톤 및 각종 세미나에도 스피커, 혹은 서포터로 함께 하고
            있습니다.
          </p>
        </article>

        <article>
          <h3 className="typography text-4xl mt-10 mb-5 py-1 text-ausgPurple border-t-2 border-b-2 border-ausgPurple">
            Welcome New Crew!
          </h3>
          <div className="px-2">
            <h4 className="font-bold text-2xl">
              AUSG은 이런 사람을 기다립니다
            </h4>
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
          </div>
        </article>

        <article>
          <h3 className="typography text-4xl mt-10 mb-5 py-1 text-ausgPurple border-t-2 border-b-2 border-ausgPurple">
            Next Recruit
          </h3>
          <p className="px-2">
            5기는 지난 7월에 선발을 완료하였으며,
            <br />
            6기는 2022년 상반기 중 모집 예정입니다.
          </p>
        </article>
      </section>
    </main>
  );
};

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
