function secretPasscode(code) {
  let errors = [];
  if (code.length < 14) {
   // errors.push(console.error("Code is too short!"))
   // console.error("Code is too short!")
  }
    //throw new Error("Code is too short!")
   ;
  if (code.length > 14) {
    errors.push("Code is too long!");
   // throw new Error("Code is too long!")
  }
  
  //console.log(`errors messege ${errors}`);
  if (!code.includes("-")){
    errors.push("Code is missing a '-'.");
  } 
  if (code !== "jWhyYFh-eTx3qt") {
     errors.push("Code is incorrect.");
  } 

  if (errors.length) throw new Error(errors);
  return true;
}

module.exports = secretPasscode;
