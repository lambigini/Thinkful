const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function bulkDelete(ids) {

// delete id in ids array
   // go to each id, make delete request to each id
   // return array of promise

  

   const promises = ids.map( id => {
    url = `${BASE_URL}/constellations/${id}`;
   return  axios.delete(url)
                .then(console.log);
  
   })

// return object with { id: " id"}
return Promise.all(promises)
              .then( (result) => {
                
               return ids.map( id => {
                 return {id: id}
                })
              });
}

module.exports = {
  bulkDelete,
};
