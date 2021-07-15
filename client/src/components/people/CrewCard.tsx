import styled from "@emotion/styled";
import React from "react";

interface CrewCardProps {
  url: string;
  name: string;
  role: string;
  introduction: string;
  description: string;
  linkedinURL?: string;
  githubURL?: string;
  blogURL?: string;
  otherURL?: string;
}

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 91.666667%;
  padding: 1rem;
  background: white;
  margin: -3rem auto 0;
  right: 0px;
  left: 0px;
  border-radius: 0.25rem;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  min-height: 11.5rem;
`;

const Introduction = styled.p`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-style: italic;
  display: -webkit-box;
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const CrewCard: React.FC<CrewCardProps> = ({
  url,
  name,
  role,
  introduction,
  description,
  linkedinURL,
  githubURL,
  blogURL,
  otherURL,
}) => {
  return (
    <li className="mb-8 xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs xl:max-w-sm 2xl:max-w-xs lg:w-1/2 relative">
      <figure className="bg-top bg-cover bg-no-repeat h-64">
        <img
          src={url}
          alt="AUSG 멤버의 사진"
          className="h-full w-full overflow-hidden object-cover rounded shadow"
        />
        <div className="opacity-0 hover:opacity-100 hover:bg-opacity-30 bg-black duration-300 absolute h-64 inset-0 z-100 flex justify-center items-center text-2xl text-white font-semibold text-center flex-col pt-0 pb-8 px-4">
          {/* 여러 줄인 경우도 커버 */}
          {description.split("\\n").map(function (item, idx) {
            return (
              <span key={idx}>
                {item}
                <br />
              </span>
            );
          })}
        </div>
      </figure>
      <IntroWrapper>
        <p className="text-xl text-center text-gray-800 font-bold">{name}</p>
        <p className="text-center text-sm text-gray-600">{role}</p>
        <Introduction>{introduction}</Introduction>
        <div className="flex justify-center mt-2">
          {!!githubURL && (
            <a href={githubURL} target="_blank" rel="noreferrer">
              <i className="fab fa-github text-xl mr-3" />
            </a>
          )}
          {!!linkedinURL && (
            <a href={linkedinURL} target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin text-xl mr-3" />
            </a>
          )}
          {!!blogURL && (
            <a href={blogURL} target="_blank" rel="noreferrer">
              <i className="fas fa-home text-xl mr-3" />
            </a>
          )}
          {!!otherURL && (
            <a href={otherURL} target="_blank" rel="noreferrer">
              <i className="fas fa-globe text-xl mr-3" />
            </a>
          )}
        </div>
      </IntroWrapper>
    </li>
  );
};

export default CrewCard;
