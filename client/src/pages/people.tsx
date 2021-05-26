import Intro from "@ausg/components/molecules/Intro";
import AppLayout from "@ausg/components/templates/AppLayout";

const PeoplePage = () => {
  return (
    <AppLayout>
      <Intro
        title="AUSG People"
        description="저마다 개성 넘치는 AUSG 크루들을 만나보세요"
      />
    </AppLayout>
  );
};

export default PeoplePage;
