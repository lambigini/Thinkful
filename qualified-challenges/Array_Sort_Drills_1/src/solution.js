function sortWords(words) {
  // your solution here
 

words.sort((a, b) => a < b? -1: 1);
return words;
}

function sortNumbers(numbers) {
  // your solution here

  numbers.sort((a, b) => a - b);
return numbers;
}

function largestFirst(numbers) {
  // your solution here
  numbers.sort((a, b) => b - a);
  return numbers;
}

function sortFlowersByZone(flowers) {
  // your solution here
flowers.sort((a, b) => a.zone - b.zone);
  return flowers;
}

function sortByLength(strings) {
  // your solution here
strings.sort( (a,b) => a.length <b.length? -1: 1)
  return strings;
}

module.exports = {
  sortWords,
  sortNumbers,
  largestFirst,
  sortFlowersByZone,
  sortByLength,
};
