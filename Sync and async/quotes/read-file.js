const fs = require("fs");

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (error, buffer) => {
      if (error) {
        return reject(error);
      }
      resolve(buffer.toString());
    });
  });
}

module.exports = readFile;