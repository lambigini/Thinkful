/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/

function partitionStudentsByScore(students, score) {
// sort from small to large
  const sortedList = students.sort((a, b) => a.score - b.score);
 
const firstArray = [];
const secondArray = [];


// compare each element of the sort list with the score
sortedList.forEach(element => {

  // if  element <= score, push it the first array
  if (element.score <= score) firstArray.push(element);

  // if element > score, push it to the second array
  else secondArray.push(element);
    
});

console.log(`firstArray ${firstArray}`)
console.log(`secondArray ${secondArray}`)

const result = [ firstArray, secondArray];

return result;
}

module.exports = partitionStudentsByScore;
