const heading = document.querySelector(".hello");
console.log(heading);

// Find all the buttons on the page
const divList = document.querySelectorAll(".rating-display .value");
console.log(typeof divList);

for (const element of divList.values()) {
  console.log(element);
}

const div2 = document.querySelectorAll(".area-display .value");

console.log(typeof div2);

for (let index = 0; index < div2.length; index++) {
  const element = div2[index];
  console.log(element);
}

const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }
  desc.innerHTML = content;
}

const ratings = document.querySelectorAll(".rating-display .value");
console.log(ratings);
for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}

const parks = document.querySelectorAll(".park-display");

const numberParks = parks.length;

const newElement = document.createElement("div");

newElement.innerText = `${numberParks} exciting parks to visit`;

newElement.classList.add("header-statement");

const header = document.querySelector("header");

header.appendChild(newElement);

const main = document.querySelector("main");

const park = main.querySelector(".park-display");

main.removeChild(park);
