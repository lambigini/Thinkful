const fs = require("fs");
const path = require("path");
const chai = require("chai");
const { expect } = chai;
const chaiHttp = require("chai-http");
const app = require("../src/app");

chai.use(chaiHttp);

describe("Application Routes", () => {
  describe("Routes", () => {
    describe("/send/:message", () => {
      it("should respond with a message when it is long enough", async () => {
        const response = await chai.request(app).get("/send/message");
        expect(response.text).to.equal("Your message: message");
      });

      it("should not allow messages shorter than three characters", async () => {
        const response = await chai.request(app).get("/send/hi");
        expect(response.text).to.not.equal("Your message: hi");
      });

      it("should return an error for short messages", async () => {
        const response = await chai.request(app).get("/send/hi");
        expect(response.text).to.equal(
          "An error occurred: Your message is too short!"
        );
      });
    });
  });

  describe("Error Handling", () => {
    describe("Request to unknown route", () => {
      it("should respond with a 404 message", async () => {
        const response = await chai.request(app).get("/unknown");
        expect(response.text).to.equal(
          "An error occurred: Could not find route."
        );
      });
    });
  });
});
