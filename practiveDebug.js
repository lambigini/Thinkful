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
 else {
  return "Please set the `weather` and `temperatureInCelsius` variables.";
}
}

openInstructions("sunny", 18);