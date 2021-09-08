import BlogCard from "@ausg/components/molecules/BlogCard";
import Intro from "@ausg/components/molecules/Intro";
import AppLayout from "@ausg/components/templates/AppLayout";
import useAxios from "axios-hooks";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";

const BlogPage: NextPage = () => {
  const [{ data, loading, error }] = useAxios(
    "https://raw.githubusercontent.com/AUSG/Relay-Homepage/dev/lib/blogSpider/newestPosts.json",
    { ssr: false },
  );
  const [isPostShuffled, setIsPostShuffled] = useState(false);

  // Easter egg ~ (발동 조건 : 모든 포스트 링크를 최소 한 번씩 클릭)
  const [openBlogCnt, setOpenBlogCnt] = useState(0);

  useEffect(() => {
    if (openBlogCnt > 0 && openBlogCnt === data.posts.length) {
      alert("Thank you! By the way you found one of our easter eggs! 🥚");
    }
  }, [openBlogCnt, data]);

  const onClickHandlerForEasterEgg = () => {
    setOpenBlogCnt(openBlogCnt + 1);
  };
  // ~ Easter egg

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    };
    if (!isPostShuffled && data) {
      shuffleArray(data.posts);
      // 정상적인 방법(setData(newData))가 아니라서 작동 방식을 서술해둡니다.
      // 1) data.posts의 순서 변경
      // 2) doIsPostsShuffled 호출로 rerender
      // 3) 배열을 jsx로 변환하는 중, key 값이 다른것을 보고 posts 영역이 updated
      setIsPostShuffled(true);
    }
  }, [isPostShuffled, data]);

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
      <div className="grid grid-cols-1 justify-items-center mx-4">
        <div className="transform text-2xl font-semibold text-gray-900 mx-auto text-left">
          <p>에러가 발생했습니다. 나중에 다시 시도해주세요.</p>
        </div>
      </div>
    );
  } else if (data) {
    const posts = data.posts;
    const blogCards = posts.map((blog) => (
      <BlogCard
        key={blog.author}
        title={blog.title}
        preface={blog.preface}
        url={blog.url}
        author={blog.author}
        callback={onClickHandlerForEasterEgg}
      />
    ));

    mainComponent = (
      // <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center mx-40">
      <section className="mx-4 md:container md:mx-auto">
        <ul className="flex flex-wrap justify-center">{blogCards}</ul>
      </section>
    );
  }

  return (
    <AppLayout>
      <Intro title="AUSG Blog" />
      {mainComponent}
    </AppLayout>
  );
};

export default BlogPage;
