/*
  Assume that `colors` in the function below will look something like the following:
  [ 'Red', 'Yellow', 'White' ];
*/

// Require `addColorToPlant` here.
let addColorToPlant = require("./plants.js");
let colors =   [ 'Red', 'Yellow', 'White' ];
function generateRosesByColor(colors) {
  let result = [];

  for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    let rose = addColorToPlant({ name: "Rose" }, color);
    
    result.push(rose);
  }
console.log(result);
  return result;
}

// Export `generateRosesByColor` as a function (not an objct).
module.exports = generateRosesByColor;