const path = require("path");
const { expect } = require("chai");
const solution = require("../src/solution");

const json = require(path.resolve("package.json"));

describe("Package.json", () => {
  it("should have a description", () => {
    expect(json.description).to.be.ok;
  });

  it("should have an author", () => {
    expect(json.author).to.be.ok;
  });
});

describe("Solution", () => {
  describe("#plantGenerator()", () => {
    it("should use faker", () => {
      const functionBody = solution.toString();
      expect(functionBody).to.include("faker");
    });

    it("should use the color() function in faker", () => {
      const functionBody = solution.toString();
      expect(functionBody).to.include("color()");
    });

    it("should generate plants", () => {
      const plant = solution();
      expect(plant.name).to.be.a("string");
      expect(plant.name).to.be.ok;
      expect(plant.color).to.be.a("string");
      expect(plant.color).to.be.ok;
    });
  });
});
