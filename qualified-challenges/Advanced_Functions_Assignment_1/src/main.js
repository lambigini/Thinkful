/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state) {
  // loop through the park array
  // find park that has state = state name
  // push that park in the empty array
  // return the array

  const result = parks.reduce((acc, park) => {
    if (park.location.state === state) acc.push(park);

    return acc;
  }, []);
  return result;
}

function getWishlistParksForUser(parks, users, username) {

  let wishlist = users[username].wishlist;

  let result = parks.filter( park => wishlist.includes(park.id));

  return result;

}

function userHasVisitedAllParksInState(parks, users, parkName, username) {
  //This function returns a boolean that represents whether or not a user has visited all parks in the parks array from a given state.

  //loop through parks, get all id of parkName
// let id = [];
//  parks.forEach( park => { 
//    if (park.location.state === parkName)
//    id.push(park.id)
//    return id;
//  });

 const id = parks.reduce( (acc,park) => {
  if (park.location.state === parkName)
  acc.push(park.id)
  return acc;
 } , [] )

 console.log("id " + id);
 console.log("users[username].visited " + users[username].visited);
  // check if "visited" contain all id from park
//let result = users[username].visited.forEach(element => { id.every( element)

const result = id.every( element => users[username].visited.includes(element));

  return result;
}

function userHasVisitedParkOnWishlist(users, name1, name2) {
  // This function takes in the list of users and two usernames. If the first user has visited any of the parks represented by the second user's wishlist, return true. Otherwise, return false.

  // userHasVisitedParkOnWishlist(users, "dwayne.m55", "karah.branch3"); //> true
  // userHasVisitedParkOnWishlist(users, "karah.branch3", "dwayne.m55"); //> false

// get name 2 wishlist
  const name2Wishlist =  users[name2].wishlist;
// check if name1 visited contain any of name2 wishlist 
const result = users[name1].visited.some( element => name2Wishlist.includes(element));
// return true of false
return result;
}

function getUsersForUserWishlist(users, username) {
  // This function returns all the usernames who have visited any park on the given user's wishlist.

  // getUsersForUserWishlist(users, "karah.branch3"); //> ["dwayne.m55"]
  // getUsersForUserWishlist(users, "dwayne.m55"); //> []

  // get username wishlist
  const usernameWishlist =  users[username].wishlist;
  // loop through "users", check each visited value if contain wishlist of username
    // if yes, add that username to array 

const acc = [];
for (let name in users) {
const person = users[name];
if (person.visited.some( element => usernameWishlist.includes(element)))   acc.push(name) ;
}

  // return array
return acc;
}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
