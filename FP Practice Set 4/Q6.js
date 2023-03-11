// Write an ES6 function that takes an array of strings and returns the longest string.

const strings = ["neogcampe", "Haule Haule", "code", "Batman", "Awesome"];
// Your code here

const longestString = (arr) =>
  arr.reduce((acc, el) => (acc.length > el.length ? acc : el));

console.log(longestString(strings));
// Output: 'Haule Haule'
