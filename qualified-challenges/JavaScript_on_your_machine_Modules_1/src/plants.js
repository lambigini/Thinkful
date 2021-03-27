/*
  In the following function, assume plant is an object.
*/
function addColorToPlant(plant, color) {
  plant.color = color;
  return plant;
}

// Export `addColorToPlant` here.
//module.exports = {addColorToPlant: addColorToPlant};
module.exports = addColorToPlant;

