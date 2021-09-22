import React from "react";
import Constellation from "./Constellation";
import renderer from "react-test-renderer";

it("renders a constellation card when provided data", () => {
  const constellation = {
    id: "zb8QvVt",
    name: "Crater",
    meaning: "Cup",
    starsWithPlanets: 10,
    quadrant: "SQ2",
  };
  const component = renderer.create(
    <Constellation constellation={constellation} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
