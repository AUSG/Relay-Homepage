import BlogCard from "@ausg/components/molecules/BlogCard";
import Intro from "@ausg/components/molecules/Intro";
import AppLayout from "@ausg/components/templates/AppLayout";
import useAxios from "axios-hooks";
import { NextPage } from "next";
import { useState } from "react";
import ReactLoading from "react-loading";

const BlogPage: NextPage = () => {
  const [{ data, loading, error }] = useAxios(
    "https://github.com/AUSG/Relay-Homepage/blob/dev/lib/blogSpider/newestPosts.json",
    { ssr: false },
  );

  // Easter egg ~ (발동 조건 : 모든 포스트 링크를 최소 한 번씩 클릭)
  const [openBlogCnt, setOpenBlogCnt] = useState(0);

  const onClickHandlerForEasterEgg = () => {
    setOpenBlogCnt(openBlogCnt + 1);
    if (openBlogCnt > 0 && openBlogCnt === data.posts.length - 1)
      alert("Thank you! By the way you found one of our easter eggs! 🥚");
  };
  // ~ Easter egg

  let mainComponent;
  if (loading) {
    mainComponent = (
      <div className="grid grid-cols-1 justify-items-center mx-40">
        <ReactLoading
          type={"spin"}
          color={"#6b66ff"}
          height={"5%"}
          width={"5%"}
        />
      </div>
    );
  } else if (error) {
    mainComponent = (
      <div className="grid grid-cols-1 justify-items-center mx-40">
        <div className="transform -rotate-90 md:rotate-0 text-2xl font-semibold text-gray-900 m-auto md:m-0 md:mt-8 text-left">
          <p>에러가 발생했습니다. 나중에 다시 시도해주세요.</p>
        </div>
      </div>
    );
  } else if (data) {
    const blogCards = data.posts.map((blog, blogIndex) => (
      <BlogCard
        key={blogIndex}
        title={blog.title}
        preface={blog.preface}
        url={blog.url}
        author={blog.author}
        callback={onClickHandlerForEasterEgg}
      />
    ));

    mainComponent = (
      // <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center mx-40">
      <div className="mx-4 md:container md:mx-auto">
        <div className="flex flex-wrap justify-center">{blogCards}</div>
      </div>
    );
  }

  return (
    <AppLayout>
      <Intro
        title="AUSG Blog"
        description="AUSG 팀원들이 작성한 블로그 게시글을 둘러보세요"
      />
      {mainComponent}
    </AppLayout>
  );
};

export default BlogPage;
