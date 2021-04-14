
function getTotalBooksCount(books) {

  let count = books.reduce((acc, book) => {
    acc++;
    return acc;
  }, 0);

  return count;
}

function getTotalAccountsCount(accounts) {

  let count = accounts.reduce((acc, account) => {
    acc++;
    return acc;
  }, 0);

  return count;
}

function getBooksBorrowedCount(books) {

  let count = books.reduce((acc, book) => {
    if (book.borrows.some((transaction) => !transaction.returned)) acc++;

    return acc;
  }, 0);
  return count;
}

function getMostCommonGenres(books) {
  let genre = [];

  books.forEach((book) => {
    //check for genre already exists or not

    let found = genre.find((accElement) => accElement.name === book.genre);
    //console.log(`found ${found}`);
    if (!found) {
      let name = book.genre;
      let count = 1;
      genre.push({ name, count });
    } else {
      found.count++;
    }
  });

  genre.sort((a, b) => b.count - a.count);

  return genre.slice(0, 5);
  //console.log(`genre ${genre}`);
}

function getMostPopularBooks(books) {

let mostPopularBooks = books.map(book => {
    const count = book.borrows.length;
    const name = book.title;
    // push it to empty array
    return {count, name};
  })

  // sort by highest to lowest
  mostPopularBooks.sort((a, b) => b.count - a.count);
  // get the top five
  return mostPopularBooks.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {

  const booksModule = require("./books.js");
  // get all the books from same author
  const result = books.reduce((acc, book) => {
    //const author = authors.find((author) => author.id === book.authorId);
    const author = booksModule.findAuthorById(authors, book.authorId);

    // get number of book of borrowd
    const name = author.name.first + " " + author.name.last;
    const count = book.borrows.length;

    // check if author name exist in empty array, add the number of borrowed book to the existing count number
    let found = acc.find((accElement) => accElement.name === name);

    if (found) found.count += book.borrows.length;
    else {
      // go to book, go to author id
      // push it to the empty array
      acc.push({ name, count });
    }

    return acc;
  }, []);

  // sort it from highest to smallest
  result.sort((a, b) => b.count - a.count);
  // get the top 5 only
  return result.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
