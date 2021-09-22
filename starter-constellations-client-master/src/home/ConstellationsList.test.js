import React from "react";
import ConstellationsList from "./ConstellationsList";
import renderer from "react-test-renderer";

it("renders a single constellation card when provided data", () => {
  const constellations = [
    {
      id: "zb8QvVt",
      name: "Crater",
      meaning: "Cup",
      starsWithPlanets: 10,
      quadrant: "SQ2",
    },
  ];
  const component = renderer.create(
    <ConstellationsList constellations={constellations} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

it("renders multiple constellation cards when provided data", () => {
  const constellations = [
    {
      id: "zvBpkNq",
      name: "Gemini",
      meaning: "Twins",
      starsWithPlanets: 11,
      quadrant: "NQ2",
    },
    {
      id: "UPtAzfV",
      name: "Hydrus",
      meaning: "Water Snake",
      starsWithPlanets: 5,
      quadrant: "SQ1",
    },
    {
      id: "ISlkF4G",
      name: "Leo",
      meaning: "Lion",
      starsWithPlanets: 19,
      quadrant: "NQ2",
    },
  ];
  const component = renderer.create(
    <ConstellationsList constellations={constellations} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
