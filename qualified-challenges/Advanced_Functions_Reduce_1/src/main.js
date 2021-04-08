/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function squareKmTotal(parks) {
const result = parks.reduce( (acc, area) => {
  return acc + area.areaInSquareKm  }, 0)

return result;
}

function parkNameAndState(parks) {

const result =  parks.reduce( (acc, park) => {

  acc[park.name] = park.location.state;

  return acc;
}  ,{})

return result;
}

function parkByState(parks) {

  // if state the same, add each object to array

  //  if not, don't add
const parkArray=[];
  const result = parks.reduce( (acc, park) => {
    console.log(`park name ${park.name}`)
    console.log(`park.location.state ${park.location.state}`)
    console.log(`park ${park}`)
    console.log(`acc ${acc}`)
    // set key state = array of object
  
    console.log(`parkArray ${parkArray}`)
    acc[park.location.state ] = {park};
    //if ( park.location.state === parkArray. ) 
   
  } , {})


return result;
}

module.exports = { squareKmTotal, parkNameAndState, parkByState };
