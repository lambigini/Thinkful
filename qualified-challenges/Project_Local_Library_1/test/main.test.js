const { expect } = require("chai");
const {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
} = require("../public/src/home.js");

const authorsFixture = require("./fixtures/authors.fixture");
const booksFixture = require("./fixtures/books.fixture");

describe("Home Page", () => {
  let authors;
  let books;

  beforeEach(() => {
    authors = authorsFixture.slice();
    books = booksFixture.slice();
  });

  describe("getTotalBooksCount()", () => {
    it("should return the total number of books in the array", () => {
      const actual = getTotalBooksCount([{}, {}]);
      expect(actual).to.equal(2);
    });

    it("should return zero if the array is empty", () => {
      const actual = getTotalBooksCount([]);
      expect(actual).to.equal(0);
    });
  });

  describe("getTotalAccountsCount()", () => {
    it("should return the total number of accounts in the array", () => {
      const actual = getTotalAccountsCount([{}, {}]);
      expect(actual).to.equal(2);
    });

    it("should return zero if the array is empty", () => {
      const actual = getTotalAccountsCount([]);
      expect(actual).to.equal(0);
    });
  });

  describe("getBooksBorrowedCount()", () => {
    it("should return the total number of books that are currently borrowed", () => {
      const actual = getBooksBorrowedCount(books);
      expect(actual).to.equal(6);
    });
  });

  describe("getMostCommonGenres()", () => {
    it("should return an ordered list of most common genres", () => {
      const actual = getMostCommonGenres(books);
      const [first, second] = [
        { name: "Science", count: 3 },
        { name: "Classics", count: 2 },
      ];
      expect(actual[0]).to.eql(first);
      expect(actual[1]).to.eql(second);
    });

    it("should limit the list to the top five", () => {
      const actual = getMostCommonGenres(books);
      expect(actual.length).to.equal(5);
    });
  });

  describe("getMostPopularBooks()", () => {
    it("should return an ordered list of most popular books", () => {
      const actual = getMostPopularBooks(books);
      const [first, second] = [
        { name: "sit eiusmod occaecat eu magna", count: 11 },
        { name: "ullamco est minim", count: 5 },
      ];
      expect(actual[0]).to.eql(first);
      expect(actual[1]).to.eql(second);
    });

    it("should limit the list to the top five", () => {
      const actual = getMostPopularBooks(books);
      expect(actual.length).to.equal(5);
    });
  });

  describe("getMostPopularAuthors()", () => {
    it("should return an ordered list of most popular authors", () => {
      const actual = getMostPopularAuthors(books, authors);
      const [first, second] = [
        { name: "Susanne Lawson", count: 11 },
        { name: "Matthews Sanders", count: 5 },
      ];
      expect(actual[0]).to.eql(first);
      expect(actual[1]).to.eql(second);
    });

    it("should limit the list to the top five", () => {
      const actual = getMostPopularAuthors(books, authors);
      expect(actual.length).to.equal(5);
    });
  });
});
