const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {

const URL = BASE_URL + '/constellations';

  axios.get(URL)
      .then((response) => {
     console.log(response.data)   ;
      })

    
}

function create(body) {
  const URL = BASE_URL + '/constellations';

  axios.post(URL, body)
        .then( (response) =>  console.log(response.data));
  
  

}

function show(id) {
  const URL = BASE_URL + `/constellations/${id}`;

  axios.get(URL)
       .then( (response) => console.log(response.data));

}

function update(id, body) {

  const URL = BASE_URL + `/constellations/${id}`;

  axios.put(URL, body)
       .then( (response) => console.log(response.data));

}

function destroy(id) {

  const URL = BASE_URL + `/constellations/${id}`;

  axios.delete(URL)
       .then( (response) => console.log(response.data));

}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
