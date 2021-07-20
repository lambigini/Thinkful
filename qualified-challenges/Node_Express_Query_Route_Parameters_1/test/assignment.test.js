const fs = require("fs");
const path = require("path");
const chai = require("chai");
const { expect } = chai;
const chaiHttp = require("chai-http");
const app = require("../src/app");

chai.use(chaiHttp);

describe("Speaker Application", () => {
  describe("Routes", () => {
    describe("/say/:greeting", () => {
      it('should respond "Hello!" when request is "/say/Hello"', async () => {
        const greetings = await chai.request(app).get("/say/Hello");
        expect(greetings.text).to.equal("Hello!");

        const random = await chai.request(app).get("/say/xyzABC");
        expect(random.text).to.equal("xyzABC!");
      });

      it('should respond "Hello, Ted!" when request is "/say/Hello?name=Ted"', async () => {
        const greetings = await chai.request(app).get("/say/Hello?name=Ted");
        expect(greetings.text).to.equal("Hello, Ted!");

        const random = await chai.request(app).get("/say/xyzABC?name=wvuLMN");
        expect(random.text).to.equal("xyzABC, wvuLMN!");
      });
    });

    describe("/say/welcome", () => {
      it('should respond "Welcome to the server!" when request is "/say/welcome"', async () => {
        const greetings = await chai.request(app).get("/say/welcome");
        expect(greetings.text).to.equal("Welcome to the server!");
      });

      it('should respond "Welcome to the server, Ted!" when request is "/say/welcome?name=Ted"', async () => {
        const greetings = await chai.request(app).get("/say/welcome?name=Ted");
        expect(greetings.text).to.equal("Welcome to the server, Ted!");
      });
    });

    describe("/say/goodbye", () => {
      it('should respond "We\'re sorry to see you go!" when request is "/say/goodbye"', async () => {
        const greetings = await chai.request(app).get("/say/goodbye");
        expect(greetings.text).to.equal("We're sorry to see you go!");
      });

      it('should respond "We\'re sorry to see you go, Ted!" when request is "/say/goodbye?name=Ted"', async () => {
        const greetings = await chai.request(app).get("/say/goodbye?name=Ted");
        expect(greetings.text).to.equal("We're sorry to see you go, Ted!");
      });
    });
  });
});
