const fs = require("fs");

let quote = null;

console.log("Finding a quote...");

fs.readFile("quotes.txt", (error, buffer) => {
  if (error) {
    throw error;
  }
  const lines = buffer.toString().split("\n");
  quote = lines[Math.floor(Math.random() * lines.length)];
  console.log(`Your quote is: ${quote}`);
});

