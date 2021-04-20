const expect = require("chai").expect;
const getCarColor = require("../src/solution.js");
describe("getCarColor", () => {
  it("when the input is a car, correctly returns color", () => {
    expect(
      getCarColor({ make: "Honda", model: "Civic", color: "Slate Grey" })
    ).equal("Slate Grey");
  });

  it('if the input throws an error, returns "Color unknown"', () => {
    expect(getCarColor(null)).equal("Color unknown");
  });
});
