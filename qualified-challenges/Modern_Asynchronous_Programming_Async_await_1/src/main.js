const { welcome, goodbye, tell } = require("../utils/fortune-teller");

async function getFortune(question) {
  try {
    const  response  = await tell(question);
 console.log(`Your question was: ${question}`);
 console.log(`Your fortune is: ${response}`);
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
 
}

async function fullSession(question) {

  try {
    const  welcomeMessage  = await welcome();
     console.log(welcomeMessage);
    
    await getFortune(question);
    
    const  goodbyeMessage  = await goodbye();
    console.log(goodbyeMessage);
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }

}


module.exports = { getFortune, fullSession };
