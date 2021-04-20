const { expect } = require("chai");
const solution = require("../src/solution");

describe("Solution", () => {
  describe("secretPasscode()", () => {
    it("should throw an error if the given code is too short", () => {
      const secretPasscode = () => solution("short-code");
      const msg = "Code is too short!";
      expect(secretPasscode).to.throw().with.property(0, msg);
    });
    it("should throw an error if the given code is too long", () => {
      const secretPasscode = () => solution("very-expansive-code");
      const msg = "Code is too long!";
      expect(secretPasscode).to.throw().with.property(0, msg);
    });
    it("should throw an error if the given code does not include a dash", () => {
      const secretPasscode = () => solution("codeofoklength");
      const msg = "Code is missing a '-'.";
      expect(secretPasscode).to.throw().with.property(0, msg);
    });
    it("should throw 3 errors if code is incorrect, missing dash and too short", () => {
      const secretPasscode = () => solution("shortcode");
      expect(secretPasscode).to.throw().have.lengthOf(3);
    });
    it("should throw 3 errors if code is incorrect, missing dash and too long", () => {
      const secretPasscode = () => solution("veryexpansivecode");
      expect(secretPasscode).to.throw().have.lengthOf(3);
    });
    it("should throw 2 errors if missing dash and wrong code", () => {
      const secretPasscode = () => solution("codeofoklength");
      expect(secretPasscode).to.throw().have.lengthOf(2);
    });
    it("should throw an error if the given code is simply incorrect", () => {
      const secretPasscode = () => solution("pretty-ok-code");
      const msg = "Code is incorrect.";
      expect(secretPasscode).to.throw().with.property(0, msg);
    });
    it("should return true if the code is correct", () => {
      const actual = solution("jWhyYFh-eTx3qt");
      expect(actual).to.be.true;
    });
  });
});
