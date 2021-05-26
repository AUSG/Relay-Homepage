import Home from "@ausg/pages";
import React from "react";
import renderer from "react-test-renderer";

test("Build <Home> without error", () => {
  renderer.create(<Home />);
});
export default {};
