// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("If the shift value is not present", () => {
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



  it("Spaces should be maintained throughout, as should other non-alphabetic symbols.", () => {
    const input = "thinkful th@$";
    const shift = 3;

    const expected = "wklqnixo wk@$";
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });

  // convert capital letter to lower case
  it("Capital letters can be ignored", () => {
const input = "This is a secret message!";
const shift = 8;

const expected = "bpqa qa i amkzmb umaaiom!";
const actual = caesar(input, shift);
expect(actual).to.equal(expected);
  });

  // decoder test
  it("decode cypher test", () => {
    const input = "BPQA qa I amkzmb umaaiom!";
    const shift = 8;
    
    const expected = "this is a secret message!";
    const actual = caesar(input, shift, false);
    expect(actual).to.equal(expected);
      });

      it("should allow for a negative shift that will shift to the left", () => {
        const input = "zebra magazine";
        const shift = -3;
        
        const expected = "wbyox jxdxwfkb";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
          });

});
