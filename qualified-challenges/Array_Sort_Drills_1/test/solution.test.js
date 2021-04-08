const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
chai.use(require("sinon-chai"));

const {
  sortWords,
  sortNumbers,
  largestFirst,
  sortFlowersByZone,
  sortByLength,
} = require("../src/solution");

describe("sortWords", () => {
  let abc = ["c", "a", "b"];
  let words = [
    "mug",
    "curl",
    "hole",
    "appliance",
    "unused",
    "spark",
    "polite",
    "manage",
    "stir",
    "stroke",
    "versed",
    "tight",
  ];
  it("correctly sorts ['c','a','b']", () => {
    expect(sortWords(abc.slice())).eql(["a", "b", "c"]);
  });

  it("correctly sorts longer array of words", () => {
    let sorted = words.slice().sort();
    expect(sortWords(words.slice())).eql(sorted);
  });

  it("uses sort", () => {
    let arr = abc.slice();
    let spy = sinon.spy(arr, "sort");
    sortWords(arr);
    expect(arr.sort).to.have.been.called;
    spy.restore();
  });
});

describe("sortNumbers", () => {
  it("correctly sorts  [3,1,2]", () => {
    expect(sortNumbers([3, 1, 2])).eql([1, 2, 3]);
  });

  it("sorts short list of numbers", () => {
    expect(sortNumbers([56, -2, 3, 102])).eql([-2, 3, 56, 102]);
  });

  it("uses sort", () => {
    let arr = [56, -2, 3, 102];
    let spy = sinon.spy(arr, "sort");
    sortNumbers(arr);
    expect(arr.sort).to.have.been.called;
    spy.restore();
  });
});

describe("largestFirst", () => {
  it("correctly sorts  [3,1,2]", () => {
    expect(largestFirst([3, 1, 2])).eql([3, 2, 1]);
  });

  it("sorts short list of numbers", () => {
    expect(largestFirst([56, -2, 3, 102])).eql([102, 56, 3, -2]);
  });

  it("uses sort", () => {
    let arr = [56, -2, 3, 102];
    let spy = sinon.spy(arr, "sort");
    largestFirst(arr);
    expect(arr.sort).to.have.been.called;
    spy.restore();
  });
});

describe("sortFlowersByZone", () => {
  let flowers = [
    {
      name: "Pink Coneflower",
      zone: 6,
    },
    {
      name: "Scarlet Phlox",
      zone: 3,
    },
    {
      name: "Carnations",
      zone: 4,
    },
    {
      name: "Hyacinths",
      zone: 3,
    },
    {
      name: "Hydrangeas",
      zone: 5,
    },
  ];

  it("correctly sorts flowers by zone", () => {
    try {
      expect(sortFlowersByZone(flowers.slice())).eql([
        {
          name: "Hyacinths",
          zone: 3,
        },
        {
          name: "Scarlet Phlox",
          zone: 3,
        },
        {
          name: "Carnations",
          zone: 4,
        },
        {
          name: "Hydrangeas",
          zone: 5,
        },
        {
          name: "Pink Coneflower",
          zone: 6,
        },
      ]);
    } catch (error) {
      expect(sortFlowersByZone(flowers.slice())).eql([
        {
          name: "Scarlet Phlox",
          zone: 3,
        },
        {
          name: "Hyacinths",
          zone: 3,
        },
        {
          name: "Carnations",
          zone: 4,
        },
        {
          name: "Hydrangeas",
          zone: 5,
        },
        {
          name: "Pink Coneflower",
          zone: 6,
        },
      ]);
    }
  });

  it("uses sort", () => {
    let arr = flowers.slice();
    let spy = sinon.spy(arr, "sort");
    sortFlowersByZone(arr);
    expect(arr.sort).to.have.been.called;
    spy.restore();
  });
});

describe("sortByLength", () => {
  let names = [
    "Scarlet Phlox",
    "Hyacinths",
    "Carnations",
    "Hydrangeas",
    "Pink Coneflower",
  ];

  it("correctly sorts by string length", () => {
    try {
      expect(sortByLength(names.slice())).eql([
        "Hyacinths",
        "Carnations",
        "Hydrangeas",
        "Scarlet Phlox",
        "Pink Coneflower",
      ]);
    } catch (error) {
      expect(sortByLength(names.slice())).eql([
        "Hyacinths",
        "Hydrangeas",
        "Carnations",
        "Scarlet Phlox",
        "Pink Coneflower",
      ]);
    }
  });

  it("uses sort", () => {
    let arr = names.slice();
    let spy = sinon.spy(arr, "sort");
    sortByLength(arr);
    expect(arr.sort).to.have.been.called;
    spy.restore();
  });
});
