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

function findParkByName(parks, name) {

 const match =  parks.find( park => park.name === name);
 return match;
}

function allParksAboveCertainSize(parks, minSize) {
const boo = parks.every( park => park.areaInSquareKm > minSize);

return boo;

}

function getBigParkNames(parks, minSize) {

const parkName = parks.filter( park => park.areaInSquareKm >= minSize);

const newFilteredPark = parkName.map( park => park.name);

return newFilteredPark;
}

function doesStateHaveOneBigPark(parks, minSize, state) {

 // filter park from state
const filterPark = parks.filter(park => park.location.state === state);
console.log(filterPark);
 // compare result to minsiz
const result = filterPark.some( park => park.areaInSquareKm >= minSize)

return result;
}

module.exports = {
  findParkByName,
  allParksAboveCertainSize,
  getBigParkNames,
  doesStateHaveOneBigPark,
};
