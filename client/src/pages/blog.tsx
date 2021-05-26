import Intro from "@ausg/components/molecules/Intro";
import AppLayout from "@ausg/components/templates/AppLayout";

const BlogPage = () => {
  return (
    <AppLayout>
      <Intro
        title="AUSG Blog"
        description="AUSG 팀원들이 작성한 블로그 게시글을 둘러보세요"
      />
    </AppLayout>
  );
};

export default BlogPage;
