import Head from "next/head";
import React from "react";

export const siteTitle = "AUSG - AWSkrug University Student Group";
export const siteDescription =
  "안녕하세요. 우리는 AUSG(AWSkrug University Student Group)입니다. 우리는 AWS와 클라우드에 관심이 많은 사람들과 함께 하고 있습니다.";

interface LayoutProps {
  home?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteDescription} />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#000000" />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:site_name" content="AUSG Homepage" />
        {/* Naver에서 제공 하는 검색 어드바이저 https://searchadvisor.naver.com/ */}
        <meta
          name="naver-site-verification"
          content="41c30f24dff3c33c26a870cc7d4d392d3e2cebdb"
        />
        <link href="/images/logo-black.svg" rel="icon" />
        <title>{siteTitle}</title>
      </Head>
      <header></header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
