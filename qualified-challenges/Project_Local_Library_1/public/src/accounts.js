function findAccountById(accounts, id) {
  const findAccountByIde = accounts.find((account) => account.id === id);
  return findAccountByIde;
}

function sortAccountsByLastName(accounts) {
  const sort = accounts.sort((accountA, accountB) =>
    accountA.name.last.toLowerCase() < accountB.name.last.toLowerCase() ? -1 : 1
  );

  return sort;
}

function getTotalNumberOfBorrows(account, books) {
  // loop through book object in book
  const count = books.reduce((acc, bookElement) => {
    // loop through borrows object
    bookElement.borrows.forEach((element) => {
      //count number of id match
      if (element.id === account.id) acc++;
    });
    return acc;
  }, 0);

  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  // loop through all element of books
  const booksPossessedByAccount = books.reduce((acc, bookElement) => {
    // go to each book element, go into borrows[]
    bookElement.borrows.forEach((element) => {
      // search each borrow element, check for matching account id
      if (element.id === account.id && !element.returned) {
        // find author id match book id
        authors.forEach((authorElement) => {
          if (authorElement.id === bookElement.authorId){
            // add new key:value author: author value to book element
             bookElement["author"] = authorElement; 
          }
        });
   // push the book element to the empty array
        acc.push(bookElement); 
      }
    });
    return acc;
  }, []);

  // return the array
  return booksPossessedByAccount;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
