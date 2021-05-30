import BlogCard from "@ausg/components/molecules/BlogCard";
import Intro from "@ausg/components/molecules/Intro";
import AppLayout from "@ausg/components/templates/AppLayout";
import useAxios from "axios-hooks";

import ReactLoading from "react-loading";

const BlogPage = () => {
  const [{ data, loading, error }, _refetch] = useAxios(
    "https://raw.githubusercontent.com/AUSG/Relay-Homepage/feature/blogPage/lib/blogSpider/newestPosts.json",
  );

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
    const blogCards = data["posts"].map((blog) => (
      <BlogCard
        title={blog["title"]}
        preface={blog["preface"]}
        url={blog["url"]}
        author={blog["author"]}
      />
    ));

    mainComponent = (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center mx-40">
        {blogCards}
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
