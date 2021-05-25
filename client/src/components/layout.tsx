import Head from "next/head";
import React from "react";

export const siteTitle = "AUSG";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Welcome to AUSG homepage." />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta
          property="og:title"
          content="AUSG 홈페이지에 오신 것을 환영합니다."
        />
        <meta property="og:description" content="Welcome to AUSG homepage." />
        <meta property="og:site_name" content="AUSG Homepage" />
        <link href="/images/logo-black.svg" rel="icon" />
        <title>{siteTitle}</title>
      </Head>
      <header></header>
      <main>{children}</main>
    </div>
  );
}
