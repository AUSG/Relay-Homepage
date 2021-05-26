import { Footer, Header, Layout } from "@ausg/components/common";
import { FC } from "react";

const AppLayout: FC = ({ children }) => {
  return (
    <Layout>
      <Header />
      {children}
      <Footer />
    </Layout>
  );
};

export default AppLayout;
