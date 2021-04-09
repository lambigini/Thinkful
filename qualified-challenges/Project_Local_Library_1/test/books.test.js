const { expect } = require("chai");
const {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
} = require("../public/src/books.js");

const accountsFixture = require("./fixtures/accounts.fixture");
const authorsFixture = require("./fixtures/authors.fixture");
const booksFixture = require("./fixtures/books.fixture");

describe("Books Page", () => {
  let accounts;
  let authors;
  let books;

  beforeEach(() => {
    accounts = accountsFixture.slice();
    authors = authorsFixture.slice();
    books = booksFixture.slice();
  });

  describe("findAuthorById()", () => {
    it("should return the author object when given a particular ID", () => {
      const author = authors[3];
      const actual = findAuthorById(authors, author.id);
      expect(actual).to.eql(author);
    });
  });

  describe("findBookById()", () => {
    it("should return the book object when given a particular ID", () => {
      const book = books[1];
      const actual = findBookById(books, book.id);
      expect(actual).to.eql(book);
    });
  });

  describe("partitionBooksByBorrowedStatus()", () => {
    it("should return an array with two arrays: borrowed books and returned books", () => {
      const [borrowed, returned] = partitionBooksByBorrowedStatus(books);
      expect(borrowed.length).to.equal(6);
      expect(returned.length).to.equal(3);
    });
  });

  describe("getBorrowersForBook()", () => {
    it("should return an array for a book of all borrowers with their information and return status", () => {
      const book = booksFixture[3];
      const [first, second] = getBorrowersForBook(book, accounts);

      expect(first.name).to.eql({ first: "Barber", last: "Waters" });
      expect(first.email).to.eql("barber.waters@kegular.biz");
      expect(first.returned).to.be.true;

      expect(second.name).to.eql({ first: "Dyer", last: "Trevino" });
      expect(second.email).to.eql("dyer.trevino@slax.io");
      expect(second.returned).to.be.true;
    });

    it("should limit the list to ten borrowers", () => {
      const book = booksFixture[1];
      const actual = getBorrowersForBook(book, accounts);
      expect(actual.length).to.equal(10);
    });
  });
});
