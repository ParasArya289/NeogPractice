// Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.

const capitalizeWords = (arr) => arr.map((el) => el.toUpperCase());

console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]));
// ["EAT", "SLEEP", "CODE", "REPEAT"]
