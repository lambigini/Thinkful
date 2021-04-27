// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    // encoding 
    const inputLowerCase = input.toLowerCase();
    let result = "";
    let row, col;
    // loop through each character of the input
    for (let index = 0; index < inputLowerCase.length; index++) {
      const character = inputLowerCase[index];
      console.log(`character: ${character}`)

      // get the row of the table
       col =parseInt(Math.ceil((character.charCodeAt(0) - 97) /5))+1   ;
       row = ((character.charCodeAt(0) - 97) % 5) +1;

// if the letter is (i/j) assign number 42 to it
       if (character === 'i' || character === 'j' ) {
         col = 2;
         row = 4;
       } 

      console.log(`row: ${row}`);
      console.log(`col: ${col}`)
      result += (row+ "" + col + " ");
      
      console.log(`result: ${result}`)
    }
    
    console.log(`result final: ${result}`)
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
