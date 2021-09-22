import React from "react";
import NoConstellationsMessage from "./NoConstellationsMessage";
import renderer from "react-test-renderer";

it("renders the NoConstellationsMessage", () => {
  const component = renderer.create(<NoConstellationsMessage />);
  expect(component.toJSON()).toMatchSnapshot();
});
