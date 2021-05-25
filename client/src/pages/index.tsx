import Layout from "@ausg/components/layout";
import Head from "next/head";
import React from "react";

import Banner from "../components/Banner";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Main = () => {
  return (
    <Layout>
      <Header />
      <Banner />
      <Content />
      <Footer />
    </Layout>
  );
};

export default Main;
