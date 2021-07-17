import Head from "next/head";
import React from "react";

export const siteTitle = "AUSG";
export const siteDescription =
  "압도적 쓱케일, 아우쓱 - AWSKRUG University Student Group";
export const GA_TRACKING_ID = "G-G8WPXP0PB2";

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
        <title>{siteTitle}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="ALL" />
        <meta name="robots" content="index, follow" />
        <meta name="title" content={siteTitle} />
        <meta name="keywords" content="AUSG" />
        <meta name="description" content={siteDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:site_name" content="AUSG Homepage" />
        <meta
          property="og:image"
          content="https://ausg.me/images/thumbnail.png"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="420" />

        {/* Naver에서 제공 하는 검색 어드바이저 https://searchadvisor.naver.com/ */}
        <meta
          name="naver-site-verification"
          content="e09e694c50c5fad12e5bce73f2468d8c9a2aaebd"
        />
        <meta
          name="naver-site-verification"
          content="41c30f24dff3c33c26a870cc7d4d392d3e2cebdb"
        />
        <link href="/images/logo-black.svg" rel="icon" />

        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
            `,
          }}
        />
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
