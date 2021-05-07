const chai = require("chai");
const sinon = require("sinon");
const axios = require("../utils/axios");
const { bulkImport, update } = require("../src/main");

chai.use(require("sinon-chai"));
const expect = chai.expect;
const BASE_URL = "http://localhost:5000";

describe("Assignment", () => {
  beforeEach(() => {
    axios.put = sinon.stub(axios, "put").callsFake((url) => {
      if (url.includes("error")) return Promise.reject();
      return Promise.resolve({});
    });
  });

  afterEach(() => axios.put.restore());

  describe("update()", () => {
    it("should make a PUT request to the URL using the constellation's ID", async () => {
      const constellation = {
        id: "HwLvy2S",
        name: "Ursa Minor",
        meaning: "Little Bear",
        starsWithPlanets: 6,
        quadrant: "NQ3",
      };

      const response = await update(constellation);
      expect(axios.put).to.have.been.calledOnce;
      expect(axios.put.getCall(0).args).to.include.members([
        `${BASE_URL}/constellations/${constellation.id}`,
        constellation,
      ]);
      expect(response).to.eql({});
    });

    it("should return a promise rejection if something goes wrong", () => {
      const constellation = {
        id: "error",
        name: "Ursa Minor",
        meaning: "Little Bear",
        starsWithPlanets: 6,
        quadrant: "NQ3",
      };

      update(constellation).catch((error) => {
        expect(axios.put).to.have.been.calledOnce;
        expect(axios.put.getCall(0).args).to.include.members([
          `${BASE_URL}/constellations/${constellation.id}`,
          constellation,
        ]);
        expect(error).to.eql({
          error: `Updating constellation (id: error) failed.`,
        });
      });
    });
  });

  describe("bulkImport()", () => {
    const correct = [
      {
        id: "HwLvy2S",
        name: "Ursa Minor",
        meaning: "Little Bear",
        starsWithPlanets: 6,
        quadrant: "NQ3",
      },
      {
        id: "dFBbdkr",
        name: "Vela",
        meaning: "Sails",
        starsWithPlanets: 7,
        quadrant: "SQ2",
      },
    ];

    const missingProperties = {
      id: "d6CwhBN",
      meaning: "Hunter",
      name: "Orion",
      starsWithPlanets: 12,
    };

    const incorrectId = {
      id: "error",
      meaning: "Hunter",
      name: "Orion",
      quadrant: "NQ1",
      starsWithPlanets: 12,
    };

    it("should update multiple constellations by making multiple PUT requests", async () => {
      const actual = await bulkImport(correct);
      const expected = [
        { status: "fulfilled", value: {} },
        { status: "fulfilled", value: {} },
      ];
      expect(axios.put).to.have.been.calledTwice;

      const [first, second] = [axios.put.getCall(0), axios.put.getCall(1)];
      const ursa = correct[0];
      expect(first.args).to.eql([
        `${BASE_URL}/constellations/${ursa.id}`,
        ursa,
      ]);
      const vela = correct[1];
      expect(second.args).to.eql([
        `${BASE_URL}/constellations/${vela.id}`,
        vela,
      ]);

      expect(actual).to.eql(expected);
    });

    it("should reject if anything but an array is passed in to it", () => {
      bulkImport({}).catch(({ error }) => {
        expect(error).to.be.a("string");
        expect(axios.put).not.to.have.been.called;
      });
    });

    it("should reject if any of the constellations are missing a property", () => {
      bulkImport([...correct, missingProperties]).catch(({ error }) => {
        expect(error).to.be.a("string");
        expect(axios.put).not.to.have.been.called;
      });
    });

    it("should include update() error messages if something goes wrong in the request", async () => {
      bulkImport([...correct, incorrectId]).catch(({ error }) => {
        expect(axios.put).to.have.been.calledThrice;
        expect(error).to.eql(
          `Updating constellation (id: ${incorrectId.id}) failed.`
        );
      });
    });
  });
});
