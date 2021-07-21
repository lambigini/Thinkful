const {
  generateMessage,
  goodbye,
  generateSlogan,
} = require("../utils/slogan-generator");

function getSlogan(request) {
  generateSlogan(request).then(response => {
    console.log(`Your request was: ${request}`);
    console.log(`Your slogan is: ${response.slogan}`);
  });
}

function fullSession(request) {
  generateMessage()
    .then(console.log)
    .then(() => getSlogan(request))
    .then(() => goodbye())
    .then(console.log);
}

module.exports = { getSlogan, fullSession };
