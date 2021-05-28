import "./index.css";
//require("./index.css");
/*
 Your solution here
 */
function validateExists(value) {
  return value && value.trim();
}

function validateForm(formData) {
  const errors = {};

  // check if name was entered
  if (!validateExists(formData.get("searchTerm"))) {
    errors.name = "Please enter a searchTerm";
  }

  return errors;
}

const submitHandler = (event) => {
  event.preventDefault();

  const form = event.target;

  //console.log(form);

  const formData = new FormData(form);

  const errors = validateForm(formData);

  if (Object.keys(errors).length >= 1) {
    const div = document.createElement("div");
    div.innerText = "Please enter a search term";
    div.classList.add("error");
    div.setAttribute("id", "searchError");
    form.appendChild(div);
  } else {
    const errorElements = document.querySelectorAll(".error");
    for (let element of errorElements) {
      element.remove();
    }
  }

  const searchTerm = formData.get("searchTerm").toLowerCase();

  //console.log(`searchTerm ${searchTerm}`);

  // go to all h2 elmement of article
  // compare the serch term with the h2 element
  // if match, article should be display
  // if no, article should be hidden

  const h2List = document.querySelectorAll("h2");

  h2List.forEach((h2) => {
    const article = h2.closest("article");

    const h2InnerHTML = h2.innerHTML.toLowerCase();

    if (h2InnerHTML.includes(searchTerm)) {
      article.classList.remove("hidden");
    } else {
      article.classList.add("hidden");
    }
  });
};

const main = () => {
  // Get the form element
  const form = document.querySelector("#searchForm");

  // Attach the submit handler
  form.addEventListener("submit", submitHandler);
};

window.addEventListener("DOMContentLoaded", main);
