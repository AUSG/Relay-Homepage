import { Footer, Header, Layout } from "@ausg/components/common";
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
