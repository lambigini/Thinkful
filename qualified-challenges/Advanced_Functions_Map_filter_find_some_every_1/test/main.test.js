const { expect } = require("chai");
const {
  findParkByName,
  allParksAboveCertainSize,
  getBigParkNames,
  doesStateHaveOneBigPark,
} = require("../src/main");

describe("Solution", () => {
  const parks = [
    { name: "Acadia", areaInSquareKm: 198.6, location: { state: "Maine" } },
    {
      name: "Canyonlands",
      areaInSquareKm: 1366.2,
      location: { state: "Utah" },
    },
    {
      name: "Crater Lake",
      areaInSquareKm: 741.5,
      location: { state: "Oregon" },
    },
    {
      name: "Lake Clark",
      areaInSquareKm: 10602,
      location: { state: "Alaska" },
    },
    {
      name: "Kenai Fjords",
      areaInSquareKm: 2710,
      location: { state: "Alaska" },
    },
    {
      name: "Zion",
      areaInSquareKm: 595.9,
      location: { state: "Utah" },
    },
  ];

  describe("findParkByName()", () => {
    it("should return the park by the given name", () => {
      const actual = findParkByName(parks, "Kenai Fjords");
      const expected = {
        name: "Kenai Fjords",
        areaInSquareKm: 2710,
        location: { state: "Alaska" },
      };
      expect(actual).to.eql(expected);
    });
    it("should make use of the .find() method", () => {
      expect(findParkByName.toString()).to.include(".find(");
    });
  });

  describe("allParksAboveCertainSize()", () => {
    it("should return true if all parks are above the given size", () => {
      const actual = allParksAboveCertainSize(parks, 100);
      expect(actual).to.be.true;
    });
    it("should return false if even one park is too small", () => {
      const actual = allParksAboveCertainSize(parks, 200);
      expect(actual).to.be.false;
    });
    it("should make use of the .every() method", () => {
      expect(allParksAboveCertainSize.toString()).to.include(".every(");
    });
  });

  describe("getBigParkNames()", () => {
    it("should return the names of all parks above the given size", () => {
      const actual = getBigParkNames(parks, 2000);
      const expected = ["Lake Clark", "Kenai Fjords"];
      expect(actual).to.eql(expected);
    });
    it("should make use of the .filter() method", () => {
      expect(getBigParkNames.toString()).to.include(".filter(");
    });
    it("should make use of the .map() method", () => {
      expect(getBigParkNames.toString()).to.include(".map(");
    });
  });

  describe("doesStateHaveOneBigPark()", () => {
    it("should return true if there is one park in the given state that is above the given size", () => {
      const actual = doesStateHaveOneBigPark(parks, 2000, "Alaska");
      expect(actual).to.be.true;
    });
    it("should return false if there is not one park in the given state that is above the given size", () => {
      const actual = doesStateHaveOneBigPark(parks, 2000, "Utah");
      expect(actual).to.be.false;
    });
    it("should make use of the .filter() method", () => {
      expect(doesStateHaveOneBigPark.toString()).to.include(".filter(");
    });
    it("should make use of the .some() method", () => {
      expect(doesStateHaveOneBigPark.toString()).to.include(".some(");
    });
  });
});
