const chai = require("chai");
const { expect } = chai;
const chaiHttp = require("chai-http");
const app = require("../src/app");

chai.use(chaiHttp);

describe("Speaker Application", () => {
  describe("Routes", () => {
    describe("/ping", () => {
      it("should respond with pong!", async () => {
        const response = await chai.request(app).get("/ping");
        expect(response.text).to.equal("pong!");
      });
    });

    describe("/welcome", () => {
      it("should respond with a welcome phrase", async () => {
        const response = await chai.request(app).get("/welcome");
        expect(response.text).to.equal("Welcome to my server.");
      });
    });

    describe("Any other route", () => {
      it("should respond with the standard 404 message", async () => {
        const response = await chai.request(app).get("/");
        expect(response.status).to.equal(404);
      });
    });
  });
});
