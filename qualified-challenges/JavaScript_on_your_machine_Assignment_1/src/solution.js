/*
  The `faker` package has already been installed. 
  
  Require the `faker` package at the top of this file.  Make sure to assign it to a variable named `faker`.
  
  Use the `faker` package inside of the plantGenerator() function.
  
  For the name property, return a string value using any method from `faker` that you want. 
  
  For the color property, return a string value using one of the available color methods from `faker`

  plantGenerator should return a different `name` and `color` combination each time it is called.
  
  Finally, export plantGenerator as a function.
*/
let faker = require("faker");
function plantGenerator() {
  return {
    name: faker.name.firstName(),
    color: faker.internet.color()
  };
}

module.exports = plantGenerator;

function openInstructions (weather, temperatureInCelsius) {
  if (weather && temperatureInCelsius) {
    if (weather === "sunny") {
    if (temperatureInCelsius > 20) {
      return "Set up the patio and put out umbrellas. Open indoor windows.";
    } else { return "Set up the patios, umbrellas optional. Open indoor windows."; }
    } else if (weather === "rainy") {
      if (temperatureInCelsius > 10) {
        return "Open indoor windows slightly.";
      } else { return "Keep windows closed." } }
    }
  } else {
    return "Please set the `weather` and `temperatureInCelsius` variables.";
  }
  }
  
  openInstructions("sunny", 18);
