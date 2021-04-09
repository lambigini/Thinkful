const { expect } = require("chai");
const {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
} = require("../public/src/accounts.js");

const accountsFixture = require("./fixtures/accounts.fixture");
const authorsFixture = require("./fixtures/authors.fixture");
const booksFixture = require("./fixtures/books.fixture");

describe("Accounts Page", () => {
  let accounts;
  let authors;
  let books;

  beforeEach(() => {
    accounts = accountsFixture.slice();
    authors = authorsFixture.slice();
    books = booksFixture.slice();
  });

  describe("findAccountById()", () => {
    it("should return the account object when given a particular ID", () => {
      const account = accounts[3];
      const actual = findAccountById(accounts, account.id);
      expect(actual).to.eql(account);
    });
  });

  describe("sortAccountsByLastName()", () => {
    it("should return the list of accounts ordered by last name", () => {
      const [first, second] = sortAccountsByLastName(accounts);
      expect(first.name.last).to.eql("Ball");
      expect(second.name.last).to.eql("Banks");
    });
  });

  describe("getTotalNumberOfBorrows()", () => {
    it("should return the number of times an account has created a 'borrow' record", () => {
      const account = accounts[0];
      const actual = getTotalNumberOfBorrows(account, books);
      expect(actual).to.equal(2);
    });
  });

  describe("getBooksPossessedByAccount()", () => {
    it("should return all of the books taken out by an account with the author embedded", () => {
      const account = accounts[4];

      const actual = getBooksPossessedByAccount(account, books, authors);
      expect(actual.length).to.equal(1);

      const book = actual[0];
      expect(book.author.name).to.eql({ first: "Giles", last: "Barlow" });
      expect(book.title).to.equal("esse ea veniam non occaecat");
    });
  });
});
