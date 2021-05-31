import { FC, useState } from "react";
// import Truncate from "react-truncate";

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
  callback: () => void;
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
        <div className="block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 inline-block"
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
        </div>
      );
  }

  // button using image (ico)
  return (
    <div className="block">
      <img className="w-8 h-8 inline-block" src={iconSrc} alt="" />
    </div>
  );
};

const BlogCard: FC<BlogCardProps> = ({
  title,
  preface,
  url,
  author,
  callback,
}) => {
  const [isFirstClick, setIsFirstClick] = useState(true);

  // Easter egg ~ (발동 조건 : Blog.tsx 참고)
  const onClickHandlerForEasterEgg = () => {
    setIsFirstClick(false);
    if (isFirstClick) callback();
  };
  // ~ Easter egg

  let cutTitle = (title ?? "").substring(0, 150);
  if (cutTitle.length === 150) cutTitle += "...";

  let cutPreface = (preface ?? "").substring(0, 150);
  if (cutPreface.length === 150) cutPreface += "...";

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClickHandlerForEasterEgg}
      >
        {/* <!-- CARD --> */}
        <div className="border-2 border-purple-300 hover:bg-yellow-400 shadow-lg hover:shadow-2xl rounded-xl flex flex-col transition-all duration-150 pt-4 pl-4 pr-4 pb-2 my-4 md:max-w-xs md:mx-4">
          {/* <!-- IMG PROFILE --- TODO (roeniss): profile image?  --> */}
          {/* <img
            className="rounded-full w-16 h-16 shadow-sm absolute -top-8 transform md:scale-110 duration-700"
            src="https://randomuser.me/api/portraits/women/17.jpg"
            alt=""
          /> */}

          {/* <!-- TEXTS --> */}
          <div className="transform text-2xl font-bold text-gray-900 text-left mb-4">
            {/* <Truncate lines={4}>{title ?? " "}</Truncate> */}
            {cutTitle}
          </div>
          <div className="text-md font-normal text-gray-800 text-left">
            {/* <Truncate lines={2}>{preface ?? " "}</Truncate> */}
            {cutPreface}
          </div>

          {/* <!-- BUTTON and AUTHOR --> */}
          <div className="flex justify-between items-baseline">
            <div className="p-4">
              <span>by {author}</span>
            </div>
            <BlogButtonIcon url={url} />
          </div>
        </div>
      </a>
    </>
  );
};

export default BlogCard;
