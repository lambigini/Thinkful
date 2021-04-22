// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    // check if encode if true or not
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    
    const inputLowerCase = input.toLowerCase();
    console.log(`inputLowerCase ${inputLowerCase}`);
    let message = "";
    
    // if true
    if (encode) {
      // go to each character of input
     
for (let index = 0; index < inputLowerCase.length; index++) {
  // ignore the space
  if (inputLowerCase.charCodeAt(index) === 32) continue;

  else if (inputLowerCase.charCodeAt(index) + shift > 122) {
    const character = 96 + (inputLowerCase.charCodeAt(index) -122);
  }
  else {
    const character = inputLowerCase.charCodeAt(index) + shift;
  }
  message += String.fromCharCode(character);
}  
    } else  {
        //if false
          // go to each character of input
           if (inputLowerCase.charCodeAt(index) === 32) continue;
  
  else if (inputLowerCase.charCodeAt(index) - shift < 97) {
    const character = 123 - (inputLowerCase.charCodeAt(index) -97);
  }
  else {
    const character = inputLowerCase.charCodeAt(index) - shift;
  }
             message += String.fromCharCode(character);
           }
          
    } 
  
  }
    
    console.log(`message ${message}`);
    // return decode/endcode message input or output
    return message;
  }

  
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
