function findAccountById(accounts, id) {

const findAccountByIde = accounts.find( account => account.id === id  )
return findAccountByIde;

}

function sortAccountsByLastName(accounts) {

const sort =  accounts.sort( (accountA, accountB) => accountA.name.last.toLowerCase() < accountB.name.last.toLowerCase() ?  -1 : 1 );


return sort;
}

function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
