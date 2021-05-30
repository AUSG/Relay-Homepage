import Banner from "@ausg/components/common/Banner";
import Content from "@ausg/components/common/Content";
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
