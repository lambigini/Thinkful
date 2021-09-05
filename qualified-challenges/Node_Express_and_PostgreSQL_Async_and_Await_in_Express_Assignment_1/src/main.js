const {
  generateMessage,
  goodbye,
  generateSlogan,
} = require("../utils/slogan-generator");

 async function getSlogan(request) {
 const response = await generateSlogan(request)
 
    console.log(`Your request was: ${request}`);
    console.log(`Your slogan is: ${response.slogan}`);
  
}


// using try catch block
//  async function getSlogan(request) {
//    try {
//      const response = await generateSlogan(request)
 
//     console.log(`Your request was: ${request}`);
//     console.log(`Your slogan is: ${response.slogan}`);
//    } catch (error) {
//      console.log(error);
//    }
 
// }



// function getSlogan(request) {
//   generateSlogan(request).then(response => {
//     console.log(`Your request was: ${request}`);
//     console.log(`Your slogan is: ${response.slogan}`);
//   });
// }

// function fullSession(request) {
//   generateMessage()
//     .then(console.log)
//     .then(() => getSlogan(request))
//     .then(() => goodbye())
//     .then(console.log);
// }

async function fullSession(request) {
 const message = await generateMessage();

 
    console.log(message);
    await getSlogan(request);
  const goodbyeMessage = await goodbye();
    console.log(goodbyeMessage);
}

module.exports = { getSlogan, fullSession };
