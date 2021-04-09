// Templates
function accountLinkTemplate(account) {
  return `
    <li class="list-group-item">
      <a data-id="${account.id}" href="javascript:void(0);">
        ${account.name.last}, ${account.name.first}
      </a>
    </li>
  `;
}

function accountDetailsTemplate(account, borrowCount = 0) {
  const fullName = `${account.name.first} ${account.name.last}`;
  return `
    <div class="card">
      <div class="card-header font-weight-bold">
        ${fullName}
      </div>
      <div class="card-body">
        <div class="media">
          <img src="${account.picture}" class="mr-3 rounded border border-dark" alt="${fullName}">
          <div class="media-body">
            <p><strong>Age:</strong> ${account.age}</p>
            <p><strong>Company:</strong> ${account.company}</p>
            <p><strong>Email:</strong> ${account.email}</p>
            <p><strong>Account Created:</strong> ${account.registered}</p>
            <p class="mb-0">
              Borrowed from the library <span class="text-primary font-weight-bold">
                ${borrowCount}
              </span> times.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getBooksPossessedByAccountTemplate(books) {
  let lis = books
    .map(({ title, author }) => {
      const fullName = `${author.name.first} ${author.name.last}`;
      return `
        <li class="list-group-item">
          <strong>${title}</strong> by ${fullName}
        </li>
      `;
    })
    .join("");

  return `
    <div class="card mt-4">
      <div class="card-header">
        Books in Possession
      </div>
      <ul class="list-group list-group-flush">
        ${
          lis ||
          `<li class="list-group-item">No books currently taken out...</li>`
        }
      </ul>
    </div>
  `;
}

// Render functions
function renderAccounts() {
  const list = document.querySelector("#accounts-list");
  const result = sortAccountsByLastName(accounts);
  const lis = result.map(accountLinkTemplate).join("");

  list.innerHTML = lis;
}

function renderAccountSelection() {
  const list = document.querySelector("#accounts-list");
  const lis = Array.from(list.children);
  lis.forEach((li) => {
    const link = li.querySelector("a");
    const selection = document.querySelector("#account-selection");
    link.addEventListener("click", () => {
      const id = link.getAttribute("data-id");
      const account = findAccountById(accounts, id);
      const borrowCount = getTotalNumberOfBorrows(account, books);
      selection.innerHTML = accountDetailsTemplate(account, borrowCount);

      const inPossession = getBooksPossessedByAccount(account, books, authors);
      selection.innerHTML += getBooksPossessedByAccountTemplate(inPossession);
    });
  });
}

function render() {
  renderAccounts();
  renderAccountSelection();
}

document.addEventListener("DOMContentLoaded", render);
