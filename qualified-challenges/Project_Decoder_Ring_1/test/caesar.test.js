// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("If the shift value is not present,equal to 0,less than -25,greater than 25, the function should return false", () => {
    const input = "thinkful";
    

    const expected = false;
    //const actual = caesar(input, shift);
    expect(caesar(input)).to.equal(expected);
    // expect(caesar(input, 0)).to.equal(expected);
    // expect(caesar(input, -26)).to.equal(expected);
    // expect(caesar(input, 26)).to.equal(expected);
  });

  it("If the shift equal to 0, the function should return false", () => {
    const input = "thinkful";
    const shift = 0;

    const expected = false;
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });

  it("If the shift value less than -25, the function should return false", () => {
    const input = "thinkful";
    const shift = -26;

    const expected = false;
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });

  it("If the shift value greater than 25, the function should return false", () => {
    const input = "thinkful";
    const shift = 26;

    const expected = false;
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });


});
