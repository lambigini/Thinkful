const responses = require("./responses.json");

const welcomeMessage = "Provide me a question and I'll give you an answer...";
const goodbyeMessage = "Best of luck in the future...";
const tellErrorMessage = "A question is required...";

function selectRandomFortune() {
  const num = Math.random() * responses.length;
  const index = Math.floor(num);
  return responses[index];
}
function welcome() {
  return Promise.resolve(welcomeMessage);
}

function goodbye() {
  return Promise.resolve(goodbyeMessage);
}

function tell(question) {
  if (question) {
    const fortune = selectRandomFortune();
    return Promise.resolve(fortune);
  }
  return Promise.reject(tellErrorMessage);
}

module.exports = { welcome, goodbye, tell };
