const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
chai.use(require("sinon-chai"));

const {
  printNames,
  logTreeType,
  totalPoints,
  buildSentence,
  logPercentages,
} = require("../src/solution");

describe("printNames", () => {
  const names = [
    "Mark Fisher",
    "Ira Bennett",
    "Denise Hicks",
    "Julius Patterson",
    "Pete Barrett",
    "Lionel Jensen",
    "Percy Martinez",
    "Robert Clarke",
    "Rickey Fox",
  ];

  it("logs each name with console.log", () => {
    const spy = sinon.spy(console, "log");
    printNames(names);
    names.forEach((name) => expect(console.log).calledWith(name));
    spy.restore();
  });

  it("uses forEach", () => {
    const spy = sinon.spy(names, "forEach");
    printNames(names);
    expect(names.forEach).to.have.been.called;
    spy.restore();
  });
});

describe("logTreeType", () => {
  const trees = [
    {
      type: "oak",
      height: "30m",
    },
    {
      type: "elm",
      height: "21m",
    },
    {
      type: "hickory",
      height: "11m",
    },
    {
      type: "maple",
      height: "14m",
    },
  ];

  it("logs each tree type with console.log", () => {
    const spy = sinon.spy(console, "log");
    logTreeType(trees);
    trees.forEach(({ type }) => expect(console.log).calledWith(type));
    spy.restore();
  });

  it("uses forEach", () => {
    const spy = sinon.spy(trees, "forEach");
    logTreeType(trees);
    expect(trees.forEach).to.have.been.called;
    spy.restore();
  });
});

describe("totalPoints", () => {
  const points = [6, 7, 1, 3, 1, 17, 4, 12, 1, 5, 0, 13, 15];

  it("returns the total points", () => {
    expect(totalPoints(points)).equal(85);
  });

  it("uses forEach", () => {
    const spy = sinon.spy(points, "forEach");
    totalPoints(points);
    expect(points.forEach).to.have.been.called;
    spy.restore();
  });
});

describe("buildSentence", () => {
  const words = [
    "I'm",
    "looking",
    "for",
    "the",
    "man",
    "who",
    "shot",
    "my",
    "paw",
  ];

  it("returns the full sentence", () => {
    expect(buildSentence(words)).equal(
      "I'm looking for the man who shot my paw "
    );
  });

  it("uses forEach", () => {
    const spy = sinon.spy(words, "forEach");
    buildSentence(words);
    expect(words.forEach).to.have.been.called;
    spy.restore();
  });
});

describe("logPercentages", () => {
  const decimals = [0.75, 0.91, 0.48, 0.23, 0.99, 0.83, 1.1];

  it("logs the percentages", () => {
    const spy = sinon.spy(console, "log");
    logPercentages(decimals);
    decimals.forEach((d) => expect(console.log).calledWith(`${d * 100}%`));
    spy.restore();
  });

  it("uses forEach", () => {
    const spy = sinon.spy(decimals, "forEach");
    logPercentages(decimals);
    expect(decimals.forEach).to.have.been.called;
    spy.restore();
  });
});
