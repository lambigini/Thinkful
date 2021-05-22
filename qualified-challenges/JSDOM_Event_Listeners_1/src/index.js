//import "./styles.css";

/*
Add event listeners to the .expand_button buttons
*/
function expandArticleBody() {
  // your code here
  // get all expand button
  // add an event listener for it
  // if user cleck expand button
  // find out which expand button clicked, what is it parent
  // set the dislay body to show <p>

  const buttons = document.querySelectorAll(".expand_button");

  // console.log(buttons);

  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      // console.log(event);

      const article = btn.closest("article");

      const displayBody = article.querySelector(".article_body");

      if (btn.innerText !== "V") {
        displayBody.style.display = "block";

        btn.innerText = "V";
      } else if (btn.innerText === "V") {
        displayBody.style.display = "none";

        btn.innerText = ">";
      }
    });
  });
}

/*
Add event listeners to the .highlightBtn buttons
*/
function highlightArticle() {
  // your code here
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
