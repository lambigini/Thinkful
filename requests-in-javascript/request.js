const axios = require("axios");

const url = "http://localhost:5000/constellations";
axios.get(url).then((response) => {
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.data);
  // console.log(response);
});
