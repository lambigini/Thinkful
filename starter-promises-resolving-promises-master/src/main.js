const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const promise = welcome();

// console.log(promise);

// const tellPromise = tell(question);

// tellPromise.then(console.log);

// const tellPromise = tell()
//   .then((result) => {
//     console.log("Success:", result);
//   })
//   .catch((error) => {
//     console.log("Failure:", error);
//   });

// console.log(tellPromise);
// setTimeout(() => console.log(`setTimeout:  ${tellPromise}`), 500);

// const question = "Will the weather be nice today?";
// const tellPromise = tell(question);
// tellPromise
//   .then((fortune) => {
//     console.log(question);
//     console.log(fortune);
//   })
//   .catch(console.error);

// welcome()
//   .then(console.log) // Logs the result of welcome()
//   .then(() => goodbye().then(console.log)) // .then inside of another .then
//   .catch(console.error); // Logs error from welcome() or goodbye()

// welcome()
//   .then(console.log) // Logs the result of welcome()
//   .then(goodbye) // Returns promise from goodbye()
//   .then(console.log) // Logs the result of goodbye()
//   .catch(console.error); // Logs error from welcome() or goodbye()

welcome()
  .then((welcomeMessage) =>
    goodbye().then((goodbyeMessage) => `${welcomeMessage}\n${goodbyeMessage}`)
  ) // welcomeMessage and goodbyeMessage combined.
  .then(console.log) // Logs combines messages
  .catch(console.error); // Logs error from welcome() or goodbye()

// welcome().then(console.log); // Logs the result of welcome()
// .then(tell) // Calls tell, which returns a rejected promise (no question supplied).
// .then(console.log) // Skipped because tell returned a rejected promise.
// .catch(console.error) // Logs error from tell() or welcome()
// .then(goodbye) // Returns promise from goodbye()
// .then(console.log) // Logs the result from goodbye()
// .catch(console.error); // Logs error only from goodbye()
