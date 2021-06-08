import { NextComponentType, NextPageContext } from "next";
import { ErrorProps as EP } from "next/error";
import React from "react";

interface ErrorProps extends EP {
  statusCode: number;
}

const Error: NextComponentType<NextPageContext, object, ErrorProps> = ({
  statusCode,
}) => (
  <section className="w-full flex flex-col">
    <span className="text-center my-4 text-2xl">
      <p className="inline-block">
        Welcome To Error page can you see reference
      </p>
      <span> </span>
      <a
        href="https://http.cat"
        target="_blank"
        rel="noreferrer"
        className="text-purple-400"
      >
        here
      </a>
    </span>
    <div className="flex justify-center">
      <img
        src={`https://http.cat/${statusCode}`}
        alt="cat"
        width={statusCode}
      />
    </div>
  </section>
);

Error.getInitialProps = ({ res, err }): ErrorProps => {
  const statusCode = res?.statusCode || err?.statusCode;

  return {
    statusCode: statusCode || 404,
  };
};

export default Error;
