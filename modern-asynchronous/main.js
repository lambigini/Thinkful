const axios = require("axios");
const BASE_URL = "http://localhost:5000";
const constellationsUrl = `${BASE_URL}/constellations`;

const leo = {
  name: "Leo",
  meaning: "Lion",
  starsWithPlanets: 19,
  quadrant: "NQ2",
};


axios
  .get(constellationsUrl)
  .then(({ data }) => {
    const exists = data.find(({ name }) => name === leo.name);
    if (exists) throw `Constellation "${leo.name}" already exists.`;
    return axios
      .post(constellationsUrl, leo)
      .then(({ data }) => console.log(data));
  })
  .catch(console.log);