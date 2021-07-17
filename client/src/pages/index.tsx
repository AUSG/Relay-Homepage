import Banner from "@ausg/components/common/Banner";
import Content from "@ausg/components/common/Content";
import AppLayout from "@ausg/components/templates/AppLayout";
import { consoleEasterEgg } from "@ausg/easterEggs/consoleEasterEgg";
import React from "react";

const Home: React.FC = () => {
  // Easter egg ~ (발동 조건 : 개발자 도구 - Console 탭 오픈)
  consoleEasterEgg();
  // ~ Easter egg

  return (
    <AppLayout>
      <Banner />
      <Content />
    </AppLayout>
  );
};

export default Home;
