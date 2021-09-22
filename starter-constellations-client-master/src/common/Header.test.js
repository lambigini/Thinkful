import React from "react";
import Header from "./Header";
import renderer from "react-test-renderer";

it("renders the header with a search bar", () => {
  const constellations = [
    {
      id: "zb8QvVt",
      name: "Crater",
      meaning: "Cup",
      starsWithPlanets: 10,
      quadrant: "SQ2",
    },
  ];
  const component = renderer.create(<Header constellations={constellations} />);
  expect(component.toJSON()).toMatchSnapshot();
});
