import Banner from "@ausg/components/common/Banner";
import Content from "@ausg/components/common/Content";
import AppLayout from "@ausg/components/templates/AppLayout";
import { consoleEasterEgg } from "@ausg/easterEggs/consoleEasterEgg";
import Head from "next/head";
import React from "react";

const Home: React.FC = () => {
  // Easter egg ~ (발동 조건 : 개발자 도구 - Console 탭 오픈)
  consoleEasterEgg();
  // ~ Easter egg

  return (
    <AppLayout>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LV39T61R82"
        />
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LV39T61R82');`}
        </script>
      </Head>
      <Banner />
      <Content />
    </AppLayout>
  );
};

export default Home;
