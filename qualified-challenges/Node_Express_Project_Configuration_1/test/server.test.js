const fs = require("fs");
const path = require("path");
const chai = require("chai");
const { expect } = chai;
const chaiHttp = require("chai-http");
const app = require("../src/app");

chai.use(chaiHttp);

describe("server.js file", () => {
  it("should have a server.js file in the src/ directory", () => {
    const serverPath = path.join(__dirname, "..", "src", "server.js");
    const content = fs.existsSync(serverPath);
    expect(content).to.be.ok;
  });

  it("should run the server (use app.listen) in the server.js file", () => {
    const serverPath = path.join(__dirname, "..", "src", "server.js");
    const content = fs.readFileSync(serverPath, "utf-8");
    expect(content).to.include(".listen");
  });
});
