import React from "react";
import Search from "./Search";
import renderer from "react-test-renderer";

it("renders the Search", () => {
  const component = renderer.create(<Search />);
  expect(component.toJSON()).toMatchSnapshot();
});
