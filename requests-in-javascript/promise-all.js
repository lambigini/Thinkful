const axios = require("axios");
const BASE_URL = "http://localhost:5000";
const constellationsUrl = `${BASE_URL}/constellations`;

function getConstellations(ids) {
   
    const promises = ids.map((id) => {
      const url = `${BASE_URL}/constellations/${id}`;
      return axios.get(url);
    });
  
    console.log(`promises ${promises}`);
    for (const key in promises) {
        console.log(promises[key]);
    }
    return Promise.allSettled(promises);
  }

  const ids = ["KGQIwSq", "32TN5F8", "wrong-id"];
  getConstellations(ids).then(console.log);
  /*
    [
      { name: "Eridanus", ... },
      { name: "Draco", ... }
    ]
  */