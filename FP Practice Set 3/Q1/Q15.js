// Write an ES6 function that takes an array of numbers and returns the minimum number using the reduce function.

const numbers = [10, 5, 8, 3, 6];

// Your code here
const getMinimumNumber = (arr) =>
  arr.reduce((acc, el) => (acc < el ? acc : el));

console.log(getMinimumNumber(numbers));
// Output: 3
