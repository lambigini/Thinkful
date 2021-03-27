
// let find = require("./plants");
// let plants = [
//   { id: 1, name: "Garden Rocket Arugula" },
//   { id: 2, name: "Watercress" },
//   { id: 3, name: "Royal Rose Radicchio" },
// ];

// const result = find(plants, 2);
// console.log(result);
let plantFunctions = require("./plants");
let plants = [
  { id: 1, name: "Garden Rocket Arugula" },
  { id: 2, name: "Watercress" },
  { id: 3, name: "Royal Rose Radicchio" },
];

console.log(plantFunctions.findPlantById(plants, 2));