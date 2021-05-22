// const heading = document.querySelector(".hello");
// console.log(heading);

// // Find all the buttons on the page
// const divList = document.querySelectorAll(".rating-display .value");
// console.log(typeof divList);

// for (const element of divList.values()) {
//   console.log(element);
// }

// const div2 = document.querySelectorAll(".area-display .value");

// console.log(typeof div2);

// for (let index = 0; index < div2.length; index++) {
//   const element = div2[index];
//   console.log(element);
// }

// const descriptions = document.querySelectorAll(".description-display");

// for (let desc of descriptions.values()) {
//   let content = desc.innerText;

//   if (content.length > 250) {
//     content = content.slice(0, 250);
//     content = content + '<a href="#">...</a>';
//   }
//   desc.innerHTML = content;
// }

// const ratings = document.querySelectorAll(".rating-display .value");
// console.log(ratings);
// for (let rating of ratings) {
//   let ratingValue = parseFloat(rating.innerText);

//   if (ratingValue > 4.7) {
//     rating.classList.add("high-rating");
//     rating.classList.remove("value");
//   }
// }

// const parks = document.querySelectorAll(".park-display");

// const numberParks = parks.length;

// const newElement = document.createElement("div");

// newElement.innerText = `${numberParks} exciting parks to visit`;

// newElement.classList.add("header-statement");

// const header = document.querySelector("header");

// header.appendChild(newElement);

// const main = document.querySelector("main");

// const park = main.querySelector(".park-display");

// main.removeChild(park);

// const firstBtn = document.querySelector("button");

// firstBtn.addEventListener("click", (event) => {
//   console.log("You clicked the button", event.target);
// });

// Select all the buttons for all the parks
// const allBtns = document.querySelectorAll(".rate-button");

// // Iterate through the list of buttons and add an event handler to each
// allBtns.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     const park = event.target.parentNode;
//     park.style.backgroundColor = "#c8e6c9";
//   });
// });
// Function for sorting by name

const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

nameSorterClickHandler = (event) => {
  event.preventDefault();

  const main = document.querySelector("main");

  const parksList = main.querySelectorAll(".park-display");

  main.innerHTML = "";

  const parksArray = Array.from(parksList);

  parksArray.sort(sortByName);

  console.log(parksArray);

  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

const main = () => {
  const nameSorter = document.querySelector("#name-sorter");

  nameSorter.addEventListener("click", nameSorterClickHandler);
};

window.addEventListener("DOMContentLoaded", main);
