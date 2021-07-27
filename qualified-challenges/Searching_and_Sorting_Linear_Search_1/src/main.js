const indexOf = require("./indexOf");

const animals = [
  {
    animal_id: "d467876f-",
    common_name: "Black-throated butcher",
    scentific_name: "Cracticus nigroagularis",
  },
  {
    animal_id: "ebdc8a1f",
    common_name: "Crested Barbet",
    scentific_name: "Trachyphonus vaillantii",
  },
  {
    animal_id: "9df6a70c",
    common_name: "Jackal",
    scentific_name: "Canis aureus",
  },
  {
    animal_id: "ccfe73bf",
    common_name: "Indian mynah",
    scentific_name: "Acridotheres tristis",
  },
];

function isJackal(animal) {
  return animal.common_name === "Jackal";
}

function numberIsGreaterThan5(value) {
  return value > 5;
}

// This a match function that is trying to break your implementation by
// modifying the array from inside the matcher.
function evilIsMatch(element, index, array) {
  if (array.length < 15) {
    array.push(array.length + 1);
  }
  return false;
}

console.log(indexOf(isJackal, animals));
console.log(indexOf(numberIsGreaterThan5, [1, 3, 5, 7, 9]));
console.log(indexOf(evilIsMatch, animals));
