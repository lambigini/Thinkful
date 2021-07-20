const fs = require("fs");
const path = require("path");
const chai = require("chai");
const { expect } = chai;
const chaiHttp = require("chai-http");
const app = require("../src/app");

chai.use(chaiHttp);

describe("app.js file", () => {
  it("should have an app.js file in the src/ directory", () => {
    const appPath = path.join(__dirname, "..", "src", "app.js");
    const content = fs.existsSync(appPath);
    expect(content).to.be.ok;
  });

  it("should be able to receive a request", async () => {
    return chai
      .request(app)
      .get("/")
      .then((res) => {
        expect(res.status).to.equal(404);
      });
  });
});
