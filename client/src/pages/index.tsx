import { Banner, Content } from "@ausg/components/common";
import AppLayout from "@ausg/components/templates/AppLayout";
import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <AppLayout>
      <Banner />
      <Content />
    </AppLayout>
  );
};

export default Home;
