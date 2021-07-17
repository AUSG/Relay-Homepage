import { FC } from "react";

interface IntroProps {
  title: string;
}

const Intro: FC<IntroProps> = ({ title }) => {
  return (
    <div className="py-8 mx-4 w-full max-w-screen-xl sm:py-10 md:px-7 lg:py-20 lg:mx-auto text-black">
      <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
    </div>
  );
};

export default Intro;
