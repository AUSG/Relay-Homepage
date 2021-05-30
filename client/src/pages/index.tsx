import { Banner, Content } from "@ausg/components/common";
import AppLayout from "@ausg/components/templates/AppLayout";
import React from "react";

const Home: React.FC = () => {
  return (
    <AppLayout>
      <Banner />
      <Content />
    </AppLayout>
  );
};

export default Home;
