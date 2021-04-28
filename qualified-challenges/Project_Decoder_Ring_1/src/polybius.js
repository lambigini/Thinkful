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
      const character = inputLowerCase.charCodeAt(index);
      console.log(`character: ${character}`)
      if(character !== 32) {

      // get the row of the table
       row = parseInt((inputLowerCase.charCodeAt(index) - 97) /5) +1   ;
      console.log(`row: ${row}`);
      
       col = ((inputLowerCase.charCodeAt(index) - 97) % 5) + 1;
       console.log(`col: ${col}`)

       if (character === 107) 
            {
                row = row - 1;
                col = 5 - col + 1;
            }
          
            // if character is greater than 'j'
        else if (character >= 106)
        {
            if (col === 1) 
            {
                col = 6;
                row = row - 1;
            }
            col = col - 1;
        }
       console.log(`row: ${row}`);
      console.log(`col: ${col}`)
      result += (col+ "" + row);
      } else {
          result += ' ';
      }
      
     }
    
    console.log(`result final: ${result}`)
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
