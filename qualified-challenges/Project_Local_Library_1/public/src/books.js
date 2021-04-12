function findAuthorById(authors, id) {
  // loop through authors array
  // find the author with the matching "id"
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  //filter book returned
  const returnedBooks = books.filter((book) => {
    return book.borrows.every((returnStatus) => returnStatus.returned);
  });
//filter book not return yet
  const notReturnedBooks = books.filter((book) => {
    return book.borrows.some((returnStatus) => !returnStatus.returned);
  });

  // add 2 array together
  const result = [notReturnedBooks, returnedBooks];

  return result;
}

function getBorrowersForBook(book, accounts) {
 // go to book -> borrows array
 const result = book.borrows.reduce( (acc,transaction) => {
   // go to each "transanctinons" find the matching "account" === "borrows.id"
  const newAccount = accounts.find( account => transaction.id === account.id);
  // add the "return = true/false" to "account"
  newAccount["returned"] = transaction.returned;
  // push the "new account" to the "new array"
  acc.push(newAccount)

return acc;
 } ,[])

//return array
return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
