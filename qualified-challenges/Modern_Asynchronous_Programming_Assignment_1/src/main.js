const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function isValid({ id, name, meaning, quadrant, starsWithPlanets }) {
  return id && name && meaning && quadrant && starsWithPlanets;
}

function update(constellation) {
// get the constellation id
// make the put request with that id
    // succedd, update the function body, return a promise
    // fail, return rejected promise

   
const url = `${BASE_URL}/constellations/${constellation.id}`;
console.log(`url: ${url}`);
console.log(`constellation.id: ${constellation.id}`);
console.log(`constellation: ${constellation}`);

 const result =  axios
    .put(url, constellation) 
    .then( (response) => {
      //console.log(`response.data: ${response.data}`)
       return response ;
    })
    .catch((error) => {
      console.log(error.message);
      return {error: `Updating constellation (id: ${constellation.id}) failed.`};
    });
return result;
    
}

function bulkImport(constellations) {

// get the id of each item in array
//make put request to each id
// return promise
// reject if not array
// reject if each item not valid

if (!Array.isArray(constellations)){
 

 return Promise.reject({ error: "Inputted argument must be an array." } );
  
 
} 

constellations.forEach( element => {
  if (!isValid(element)) return Promise.reject({ error: "All constellations must include relevant fields." });
})


  const promises =  constellations.map( (element) => {
   return update(element);
    
    });
  
  const result = Promise.allSettled(promises)
            .then((response) => {
              console.log(`response.data: ${response.data}`)
              return response;
            })
            
   
return result;

  }



  


module.exports = { bulkImport, update };
