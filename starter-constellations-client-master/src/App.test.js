import React from "react";
import App from "./App";
import renderer from "react-test-renderer";

it("renders the NoConstellationsMessage when no data appears", () => {
  const component = renderer.create(<App />);
  expect(component.toJSON()).toMatchSnapshot();
});
