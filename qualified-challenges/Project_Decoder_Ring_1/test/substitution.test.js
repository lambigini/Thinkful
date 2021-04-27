// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("should return false if the substitution alphabet is missing", () => {
    const input = "thinkful";
    const expected = false;

    expect(substitution(input)).to.equal(expected);
  });

  it("should return false if the substitution alphabet is not exactly 26 characters", () => {
    const input = "thinkful";
    const alphabet = "short";

    const actual = substitution(input, alphabet);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should return false if the substitution alphabet does not contain unique characters", () => {
    const input = "thinkful";
    const alphabet = "abcabcabcabcabcabcabcabcyz";

    const actual = substitution(input, alphabet);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should encode a message by using the given substitution alphabet", () => {
    const input = "thinkful";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";

    const actual = substitution(input, alphabet);
    const expected = 'jrufscpw';
    expect(actual).to.equal(expected);
  });

  it("should work with any kind of key with unique characters", () => {
    const input = "message";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";

    const actual = substitution(input, alphabet);
    const expected = "y&ii$r&";
    expect(actual).to.equal(expected);

  });

  it("should preserve spaces", () => {
    const input = "You are an excellent spy";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";

    const actual = substitution(input, alphabet);
    const expected = 'elp xhm xf mbymwwmfj dne';
    expect(actual).to.equal(expected);

  });

  it("should decode a message by using the given substitution alphabet", () => {
    const input = "jrufscpw";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";

    const actual = substitution(input, alphabet, false);
    const expected = 'thinkful';
    expect(actual).to.equal(expected);

  });


  it("should work with any kind of key with unique characters", () => {
    const input = "y&ii$r&";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";

    const actual = substitution(input, alphabet, false);
    const expected = "message";
    expect(actual).to.equal(expected);

  });

  it("should preserve spaces", () => {
    const input = "y&ii$r& y";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";

    const actual = substitution(input, alphabet, false);
    const expected = "message m";
    expect(actual).to.equal(expected);

  });

});
