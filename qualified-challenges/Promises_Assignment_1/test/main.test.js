const { getFortune, fullSession } = require("../src/main");

describe("Assignment", () => {
  describe("#getFortune()", () => {
    it("should print the question and fortune", async () => {
      const question = "Will the weather be excellent today?";
      const fortune = "Yes – definitely.";
      const expected = [
        `Your question was: ${question}`,
        expect.stringContaining("Your fortune is: "),
      ];

      const actual = await getFortune(question);

      expect(actual).toEqual(expected);
    });

    it("should only print an error if no message is provided", async () => {
      const expected = "There was an error: A question is required...";

      const actual = await getFortune();

      expect(actual).toEqual(expected);
    });
  });

  describe("#fullSession()", () => {
    it("should print the welcome message, question, fortune, and goodbye", async () => {
      const question = "Will the weather be excellent today?";
      const expected = [
        "Provide me a question and I'll give you an answer...",
        `Your question was: ${question}`,
        expect.stringContaining("Your fortune is: "),
        "Best of luck in the future...",
      ];

      const actual = await fullSession(question);

      expect(actual).toEqual(expected);
    });

    it("should only return welcome message, and error, then goodbye message if no message is provided", async () => {
      const expected = [
        "Provide me a question and I'll give you an answer...",
        "There was an error: A question is required...",
        "Best of luck in the future...",
      ];

      const actual = await fullSession();

      expect(actual).toEqual(expected);
    });
  });
});
