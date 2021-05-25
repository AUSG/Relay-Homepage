import "../styles/global.css";
import "tailwindcss/tailwind.css";

import { AppProps } from "next/app";
import React from "react";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default App;
