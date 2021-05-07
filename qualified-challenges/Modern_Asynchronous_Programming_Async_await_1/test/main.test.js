const fs = require("fs");
const path = require("path");
const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const { getFortune, fullSession } = require("../src/main");

chai.should();
chai.use(require("sinon-chai"));

const wait = (ms) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(true), ms));

describe("Assignment", () => {
  beforeEach(() => sinon.spy(console, "log"));
  afterEach(() => console.log.restore());

  describe("#getFortune()", () => {
    it("should print the question and fortune", async () => {
      const question = "Will the weather be excellent today?";
      await getFortune(question);
      await wait(250);
      expect(console.log).to.have.been.called;

      const firstCall = console.log.getCall(0).args[0];
      expect(firstCall).to.include(`Your question was: ${question}`);

      const secondCall = console.log.getCall(1).args[0];
      expect(secondCall).to.include(`Your fortune is:`);
    });

    it("should only print an error if no message is provided", async () => {
      await getFortune();
      await wait(250);
      expect(console.log).to.have.been.called;

      const call = console.log.getCall(0).args[0];
      expect(call).to.include(`There was an error: A question is required...`);
    });
  });

  describe("#fullSession()", () => {
    it("should print the welcome message", async () => {
      const question = "Will the weather be excellent today?";
      await fullSession(question);
      await wait(250);
      expect(console.log).to.have.been.called;

      const call = console.log.getCall(0).args[0];
      expect(call).to.include("Provide me a question");
    });

    it("should reprint the question", async () => {
      const question = "Will the weather be excellent today?";
      await fullSession(question);
      await wait(250);
      expect(console.log).to.have.been.called;

      const call = console.log.getCall(1).args[0];
      expect(call).to.include(`Your question was: ${question}`);
    });

    it("should print the fortune", async () => {
      const question = "Will the weather be excellent today?";
      await fullSession(question);
      await wait(250);
      expect(console.log).to.have.been.called;

      const call = console.log.getCall(2).args[0];
      expect(call).to.include(`Your fortune is:`);
    });

    it("should say goodbye", async () => {
      const question = "Will the weather be excellent today?";
      await fullSession(question);
      await wait(250);
      expect(console.log).to.have.been.called;

      const call = console.log.getCall(3).args[0];
      expect(call).to.include("Best of luck in the future...");
    });

    it("should say hello and then error if no question is provided", async () => {
      await fullSession();
      await wait(250);
      expect(console.log).to.have.been.called;

      const first = console.log.getCall(0).args[0];
      expect(first).to.include("Provide me a question");

      const second = console.log.getCall(1).args[0];
      expect(second).to.include(
        `There was an error: A question is required...`
      );
    });
  });

  describe("Implementation", () => {
    const filePath = path.join(__dirname, "..", "src", "main.js");
    const contents = fs.readFileSync(filePath, "utf-8");
    it("should define functions using `async`", () => {
      expect(contents).to.include("async");

      const count = contents.split("async").length - 1;
      expect(count).to.equal(2);
    });

    it("should use `await` multiple times to evaluate promises", () => {
      expect(contents).to.include("await");

      const count = contents.split("await").length - 1;
      expect(count).to.be.above(3);
    });

    it("should not use .then() or .catch()", () => {
      expect(contents).to.not.include(".then");
      expect(contents).to.not.include(".catch");
    });
  });
});
