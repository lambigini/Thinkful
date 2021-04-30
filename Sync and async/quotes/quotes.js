const readFile = require("./read-file");

const readFilePromise = readFile("quotes.txt");

console.log(readFilePromise);

setTimeout(() => {
  console.log(readFilePromise);
}, 500);