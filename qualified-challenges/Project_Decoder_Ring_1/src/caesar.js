// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    
   // check for out of range shift
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    
    //convert all to lowercase
    const inputLowerCase = input.toLowerCase();
    
    let message = "";
     // if encode not true, then decode
    if (!encode) shift = 26 - shift;


    for (let index = 0; index < inputLowerCase.length; index++) {
      let char = inputLowerCase[index];
      
      // convert only if character from input is from a--->z
      if ( "a" <= char && char <= "z" ) {
        let ch;
        // shift left, modular of 26
        if (shift < 0) ch = String.fromCharCode((char.charCodeAt(0) + shift - 122) % 26 + 122 );
        // shift right, modular of 26
        else ch = String.fromCharCode((char.charCodeAt(0) + shift - 97) % 26 + 97);
        message += ch;
      } else { // keep the same character
        message += char;
      }
      
    }
    
    return message;
  }
  
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
