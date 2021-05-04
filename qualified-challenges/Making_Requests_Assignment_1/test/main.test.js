const chai = require("chai");
const sinon = require("sinon");
const axios = require("../utils/axios");
const { index, create, show, update, destroy } = require("../src/main");

const expect = chai.expect;
const BASE_URL = "http://localhost:5000";
chai.use(require("sinon-chai"));

describe("Assignment", () => {
  beforeEach(() => {
    sinon.spy(console, "log");
    axios.get = sinon.stub(axios, "get");
    axios.post = sinon.stub(axios, "post");
    axios.put = sinon.stub(axios, "put");
    axios.delete = sinon.stub(axios, "delete");
  });

  afterEach(() => {
    axios.get.restore();
    axios.post.restore();
    axios.put.restore();
    axios.delete.restore();
    console.log.restore();
  });

  describe("index()", () => {
    const data = [
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

    beforeEach(() => {
      axios.get.returns(Promise.resolve({ data }));
    });

    it("should make a GET request to the appropriate URL", async () => {
      await index();
      const expectedURL = `${BASE_URL}/constellations`;
      expect(axios.get).to.have.been.calledWith(expectedURL);
    });

    it("should log a list of all constellations", async () => {
      await index();
      expect(console.log).to.have.been.calledWith(data);
    });
  });

  describe("create()", () => {
    const body = {
      name: "Triangulum",
      meaning: "Triangle",
      starsWithPlanets: 3,
      quadrant: "NQ1",
    };
    const data = { ...body, id: "abc-def" };

    beforeEach(() => {
      axios.post.returns(Promise.resolve({ data }));
    });

    it("should make a POST request to the appropriate URL", async () => {
      await create(body);
      const expectedURL = `${BASE_URL}/constellations`;
      expect(axios.post).to.have.been.calledWith(expectedURL, body);
    });

    it("should log the response", async () => {
      await create(body);
      expect(console.log).to.have.been.calledWith(data);
    });
  });

  describe("show()", () => {
    const data = {
      id: "abc-def",
      name: "Triangulum",
      meaning: "Triangle",
      starsWithPlanets: 3,
      quadrant: "NQ1",
    };

    beforeEach(() => {
      axios.get.returns(Promise.resolve({ data }));
    });

    it("should make a GET request to the appropriate URL", async () => {
      const { id } = data;
      await show(id);
      const expectedURL = `${BASE_URL}/constellations/${id}`;
      expect(axios.get).to.have.been.calledWith(expectedURL);
    });

    it("should log the response", async () => {
      const { id } = data;
      await show(id);
      expect(console.log).to.have.been.calledWith(data);
    });
  });

  describe("update()", () => {
    const data = {
      id: "abc-def",
      name: "Triangulum",
      meaning: "Triangle",
      starsWithPlanets: 3,
      quadrant: "NQ1",
    };
    const body = {
      ...data,
      meaning: "the Triangle",
    };

    beforeEach(() => {
      axios.put.returns(Promise.resolve({ data: body }));
    });

    it("should make a PUT request to the appropriate URL", async () => {
      const { id } = data;
      await update(id, body);
      const expectedURL = `${BASE_URL}/constellations/${id}`;
      expect(axios.put).to.have.been.calledWith(expectedURL, body);
    });

    it("should log the response", async () => {
      const { id } = data;
      await update(id, body);
      expect(console.log).to.have.been.calledWith(body);
    });
  });

  describe("destroy()", () => {
    const id = "abc-def";

    beforeEach(() => {
      axios.delete.returns(Promise.resolve({ data: {} }));
    });

    it("should make a DELETE request to the appropriate URL", async () => {
      await destroy(id);
      const expectedURL = `${BASE_URL}/constellations/${id}`;
      expect(axios.delete).to.have.been.calledWith(expectedURL);
    });

    it("should log out the ID inside of an object", async () => {
      await destroy(id);
      expect(console.log).to.have.been.calledWith({});
    });
  });
});
