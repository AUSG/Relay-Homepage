import {
  Banner,
  Content,
  Footer,
  Header,
  Layout,
} from "@ausg/components/common";
import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <Layout>
      <Header />
      <Banner />
      <Content />
      <Footer />
    </Layout>
  );
};

export default Home;
