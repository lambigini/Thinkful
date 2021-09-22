import React from "react";
import Navigation from "./Navigation";
import renderer from "react-test-renderer";

it("renders the Navigation", () => {
  const component = renderer.create(<Navigation />);
  expect(component.toJSON()).toMatchSnapshot();
});
