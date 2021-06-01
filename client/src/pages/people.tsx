import Intro from "@ausg/components/molecules/Intro";
import Team from "@ausg/components/people/Team";
import AppLayout from "@ausg/components/templates/AppLayout";
import { NextPage } from "next";

const PeoplePage: NextPage = () => {
  return (
    <AppLayout>
      <Intro title="AUSG People" />
      <Team />
    </AppLayout>
  );
};

export default PeoplePage;
