import "../styles/global.css";
import "tailwindcss/tailwind.css";

import { AppProps } from "next/app";
import React from "react";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default App;
