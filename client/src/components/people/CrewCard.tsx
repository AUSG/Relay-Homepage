import React from "react";

interface CrewCardProps {
  url: string;
  name: string;
  role: string;
  introduction: string;
  description: string;
}

const CrewCard: React.FC<CrewCardProps> = ({
  url,
  name,
  role,
  introduction,
  description,
}) => {
  return (
    <div className="mb-28 xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs xl:max-w-sm lg:w-1/2 relative">
      <div className="bg-top bg-cover bg-no-repeat h-64">
        <img
          src={url}
          alt=""
          className="h-full w-full overflow-hidden object-cover rounded shadow"
        />
        <div className="opacity-0 hover:opacity-100 hover:bg-opacity-30 bg-black duration-300 absolute inset-0 z-100 flex justify-center items-center text-2xl text-white font-semibold">
          {description}
        </div>
      </div>
      <div className="p-4 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
        <p className="text-xl text-center text-gray-800 font-bold">{name}</p>
        <p className="text-center text-sm text-gray-600">{role}</p>
        <p className="mt-2 text-center text-sm italic">{introduction}</p>
      </div>
    </div>
  );
};

export default CrewCard;
