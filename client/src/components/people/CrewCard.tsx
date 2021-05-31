import React from "react";

interface CrewCardProps {
  url: string;
  name: string;
  role: string;
  introduction: string;
  description: string;
  linkedinURL?: string;
  githubURL?: string;
}

const CrewCard: React.FC<CrewCardProps> = ({
  url,
  name,
  role,
  introduction,
  description,
  linkedinURL,
  githubURL,
}) => {
  return (
    <div className="mb-8 xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs xl:max-w-sm 2xl:max-w-xs lg:w-1/2 relative">
      <div className="bg-top bg-cover bg-no-repeat h-64">
        <img
          src={url}
          alt=""
          className="h-full w-full overflow-hidden object-cover rounded shadow"
        />
        <div className="opacity-0 hover:opacity-100 hover:bg-opacity-30 bg-black duration-300 absolute h-64 inset-0 z-100 flex justify-center items-center text-2xl text-white font-semibold">
          {description}
        </div>
      </div>
      <div className="p-4 bg-white flex flex-col justify-center w-11/12 mx-auto relative rounded shadow-lg -mt-12 right-0 left-0">
        <p className="text-xl text-center text-gray-800 font-bold">{name}</p>
        <p className="text-center text-sm text-gray-600">{role}</p>
        <p className="mt-2 text-center text-sm italic">{introduction}</p>
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
        </div>
      </div>
    </div>
  );
};

export default CrewCard;
