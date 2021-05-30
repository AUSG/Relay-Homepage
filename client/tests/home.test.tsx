import Home from "@ausg/pages";
import React from "react";
import renderer from "react-test-renderer";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("Build <Home> without error", () => {
  (useRouter as jest.Mock<any, any>).mockImplementationOnce(() => ({
    asPath: "/",
    pathname: "/",
  }));

  renderer.create(<Home />);
});

export default {};
