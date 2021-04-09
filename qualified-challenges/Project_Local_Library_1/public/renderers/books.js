// Templates
function returnedBadgeTemplate(returned) {
  return `
    <span class="badge badge-${returned ? "light" : "dark"}">
      ${returned ? "Returned" : "Loaned Out"}
    </span>
  `;
}
function bookLinkTemplate(book, returned = false) {
  return `
    <li class="list-group-item">
      <a data-id="${book.id}" href="javascript:void(0);">${book.title}</a>
      ${returnedBadgeTemplate(returned)}
    </li>
  `;
}

function bookDetailsTemplate(book, author) {
  return `
    <div class="card">
      <div class="card-header font-weight-bold">
        ${book.title}
      </div>
      <div class="card-body">
        <h5 class="card-title h6">Written by ${author.name.first} ${author.name.last}</h5>
        <p class="card-text">Genre: <span class="text-info">${book.genre}</span></p>
      </div>
    </div>
  `;
}

function bookBorrowersTemplate(borrowers) {
  const lis = borrowers
    .map(({ name, returned }) => {
      return `
      <li class="list-group-item">
        ${name.first} ${name.last}
        ${returnedBadgeTemplate(returned)}
      </li>
    `;
    })
    .join("");

  return `
    <div class="card mt-4">
      <div class="card-header">
        Recent Borrowers
      </div>
      <ul class="list-group list-group-flush">
        ${lis}
      </ul>
    </div>
  `;
}

// Render functions
function renderBooks() {
  const [borrowed, returned] = partitionBooksByBorrowedStatus(books);
  const list = document.querySelector("#books-list");
  const returnedLis = returned.map((book) => bookLinkTemplate(book, true));
  const borrowedLis = borrowed.map((book) => bookLinkTemplate(book));
  const lis = returnedLis.concat(borrowedLis).join("");

  list.innerHTML = lis;
}

function renderBookSelection() {
  const list = document.querySelector("#books-list");
  const lis = Array.from(list.children);
  lis.forEach((li) => {
    const link = li.querySelector("a");
    const selection = document.querySelector("#book-selection");
    link.addEventListener("click", () => {
      const id = link.getAttribute("data-id");
      const book = findBookById(books, id);
      const author = findAuthorById(authors, book.authorId);
      const borrowers = getBorrowersForBook(book, accounts);
      if (book && author) {
        selection.innerHTML = bookDetailsTemplate(book, author);
      }
      if (book && borrowers) {
        selection.innerHTML += bookBorrowersTemplate(borrowers);
      }
    });
  });
}

function render() {
  renderBooks();
  renderBookSelection();
}

document.addEventListener("DOMContentLoaded", render);
