const chai = require("chai");
const sinon = require("sinon");
const axios = require("../utils/axios");
const { bulkDelete } = require("../src/main");

const expect = chai.expect;
chai.use(require("sinon-chai"));

describe.only("Assignment", () => {
  beforeEach(() => {
    axios.delete = sinon.stub(axios, "delete");
  });

  afterEach(() => {
    axios.delete.restore();
  });

  describe("bulkDelete()", () => {
    beforeEach(() => {
      axios.delete.returns(Promise.resolve({ data: {} }));
    });

    it("should delete all of the records with the associated IDs", async () => {
      await bulkDelete([111, 222, 333]);
      expect(axios.delete).to.have.been.calledThrice;

      const [url] = axios.delete.getCall(0).args;
      expect(url).to.include("111");
    });

    it("should have each promise resolve to an object with the id", async () => {
      const actual = await bulkDelete([111, 222, 333, 444, 555]);
      const expected = [
        { id: 111 },
        { id: 222 },
        { id: 333 },
        { id: 444 },
        { id: 555 },
      ];
      expect(actual).to.eql(expected);
    });
  });

  describe("Implementation", () => {
    it("should make use of Promise.all()", async () => {
      expect(bulkDelete.toString()).to.include("Promise.all(");
    });
  });
});
