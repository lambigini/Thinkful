// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
function is_unique(str) {
  var obj = {};
  for (let i = 0; i < str.length; ++i) {
    var ch = str[i];
    if (obj[ch]) return false;
    obj[ch] = true;
  }
  return true;
}

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26 || !is_unique(alphabet))
      return false;
    // encode
    // get the index of each input in ascii
    let result = "";
    const inputLowerCase = input.toLowerCase();

    if (!encode) {
      for (let index = 0; index < inputLowerCase.length; index++) {
        const element = inputLowerCase[index];

        if (element.charCodeAt(0) !== 32) {
          // find character from input match with character in alphabet, get the index

          let index = alphabet.search(element);

          //  match that index with ascii table
          if (index === 26) index = index - 26;
          const match = String.fromCharCode(index + 97);

          // add the result
          result += match;
        } else {
          result += " ";
        }
      }
    } else {
      for (let index = 0; index < inputLowerCase.length; index++) {
        const element = inputLowerCase[index];

        if (element.charCodeAt(0) !== 32) {
          const indexElement = element.charCodeAt(0) - 97;

          // match the index of to apphabet
          const match = alphabet.charAt(indexElement);

          // add character together
          result += match;
        } else {
          result += " ";
        }
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
