function getCarColor(car) {
try {
if (!car.color) throw new Error(" can't access car.color")
} catch (error) {
    return "Color unknown";
}

    return car.color;
}

//do not remove
module.exports = getCarColor;
