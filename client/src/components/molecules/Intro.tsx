import { FC } from "react";

interface IntroProps {
  title: string;
  description?: string;
}

const Intro: FC<IntroProps> = ({ title, description }) => {
  return (
    <div className="py-20 px-24 text-black">
      <h1 className="mb-8 text-4xl font-bold">{title}</h1>

      <p className="text-base">{description}</p>
    </div>
  );
};

export default Intro;
