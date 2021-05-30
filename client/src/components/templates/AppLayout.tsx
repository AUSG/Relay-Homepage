import Footer from "@ausg/components/common/Footer";
import Header from "@ausg/components/common/Header";
import Layout from "@ausg/components/common/Layout";
import React from "react";

const AppLayout: React.FC = ({ children }) => {
  return (
    <Layout>
      <Header />
      {children}
      <Footer />
    </Layout>
  );
};

export default AppLayout;
