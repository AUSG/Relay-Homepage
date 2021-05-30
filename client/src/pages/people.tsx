import Intro from "@ausg/components/molecules/Intro";
import Team from "@ausg/components/people/Team";
import AppLayout from "@ausg/components/templates/AppLayout";
import { NextPage } from "next";

const PeoplePage: NextPage = () => {
  return (
    <AppLayout>
      <Intro
        title="AUSG People"
        description="저마다 개성 넘치는 AUSG 크루들을 만나보세요."
      />
      <Team />
    </AppLayout>
  );
};

export default PeoplePage;
