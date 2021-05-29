import { FC } from "react";
import Truncate from "react-truncate";

export enum BlogType {
  MEDIUM,
  VELOG,
  TISTORY,
  ETC,
}

interface BlogButtonProps {
  url: string;
}

interface BlogCardProps {
  title: string;
  preface?: string;
  url: string;
  author: string;
}

const BlogButtonIcon: FC<BlogButtonProps> = ({ url }) => {
  const _classifyUrl = (url: string): BlogType => {
    const _url = url.toLowerCase();

    if (_url.includes("velog")) return BlogType.VELOG;
    else if (_url.includes("tistory")) return BlogType.TISTORY;
    else if (_url.includes("medium")) return BlogType.MEDIUM;
    else return BlogType.ETC;
  };

  let iconSrc: string = "";
  switch (_classifyUrl(url)) {
    case BlogType.MEDIUM:
      iconSrc = "https://medium.com/favicon.ico";
      break;
    case BlogType.VELOG:
      iconSrc = "https://static.velog.io/favicon.ico";
      break;
    case BlogType.TISTORY:
      iconSrc = "https://t1.daumcdn.net/tistory_admin/static/top/favicon.ico";
      break;
    case BlogType.ETC:
    default:
      // button using svg
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="p-4 w-16 h-16 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        </a>
      );
  }

  // button using image (ico)
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img className="p-4 w-16 h-16 inline-block" src={iconSrc} alt="" />
    </a>
  );
};

const BlogCard: FC<BlogCardProps> = ({ title, preface, url, author }) => {
  return (
    <>
      {/* <!-- CARD --> */}
      <div className="border-purple-300 border-2 h-72 w-28 md:w-96 md:rounded-3xl rounded-full shadow-lg flex flex-col items-center justify-between md:items-start py-1 md:p-5 my-5 transition-all duration-150">
        {/* <!-- IMG PROFILE --- TODO (roeniss): profile image?  --> */}
        {/* <img
            className="rounded-full w-16 h-16 shadow-sm absolute -top-8 transform md:scale-110 duration-700"
            src="https://randomuser.me/api/portraits/women/17.jpg"
            alt=""
          /> */}

        {/* <!-- TEXTS --> */}
        <div className="transform -rotate-90 md:rotate-0 text-2xl font-semibold text-gray-900 m-auto md:m-0 md:mt-8 text-left">
          <p>{title}</p>
        </div>
        <div className="text-md font-normal text-gray-800 text-left">
          <Truncate lines={3}>{preface ?? " "}</Truncate>
        </div>

        {/* <!-- BUTTON and AUTHOR --> */}
        <div className="flex w-full justify-between">
          <div className="p-4">
            <span>by {author}</span>
          </div>
          <BlogButtonIcon url={url} />
        </div>
      </div>
    </>
  );
};

export default BlogCard;
