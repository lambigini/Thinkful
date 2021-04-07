function printNames(names) {
  // your solution here
  names.forEach(element =>  console.log(element));
}

function logTreeType(trees) {
  // your solution here
  trees.forEach(index => console.log(index.type));
}

function totalPoints(points) {
  // your solution here
  let sum  = 0;
  points.forEach(num => {
    sum += num;
  })

  return sum;
}

function buildSentence(words) {
  // your solution here
  //loop though each index
  // get the index value
  // add it to the string + space
let result = "";
  words.forEach( index =>  result += index + " ");

  return result;


}

function logPercentages(decimals) {
  // your solution here
  
  let result ='' ;
  decimals.forEach( value =>  result +=`${parseInt(value*100)}%\n`);
console.log(result);
  
}

module.exports = {
  printNames,
  logTreeType,
  totalPoints,
  buildSentence,
  logPercentages,
};
