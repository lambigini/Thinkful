//import "./styles.css";

/**
  Write the addheadings() function here
  
*/

function addHeadings() {
  const article = document.querySelectorAll("article");

  const articles = document.querySelector(".articles");

  //go to each article element,
  // grap the text and add the h2 element with the text
  for (let element of article) {
    const h2Element = document.createElement("h2");
    h2Element.innerText = element.innerText;
    element.innerText = "";

    element.appendChild(h2Element);
  }
}
/**
  Write the styleTutorialsAndArticles() function here
*/
function styleTutorialsAndArticles() {
  // loop through all article
  // check the innertext of each article
  // if innertext contain word Tutorial, add tutorial class to that element
  // otherwise add class article
  const article = document.querySelectorAll("article");

  for (let node of article) {
    if (node.innerText.includes("Tutorial")) {
      node.classList.add("tutorial");
    } else {
      node.classList.add("article");
    }
  }
}

/**
  Write the separateAllTutorials() function here
*/
function separateAllTutorials() {
  //check if  tutorial not exist, then do nothing
  // if yes,
  // add new section to container
  // add new section
  const article = document.querySelectorAll("article");

  const container = document.querySelector(".container");

  const newSection = document.createElement("section");

  newSection.classList.add("tutorials");

  container.appendChild(newSection);

  let count = 0;

  for (let node of article) {
    if (node.innerText.includes("Tutorial")) {
      // move it to new section
      count++;

      newSection.appendChild(node);
    }
  }

  if (!count) {
    container.removeChild(newSection);
  }
}
/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
