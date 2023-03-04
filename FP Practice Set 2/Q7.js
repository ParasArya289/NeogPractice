// Write an ES6 function that takes an array of numbers and returns the first number that is divisible by 7.

const numbers = [1, 2, 3, 21, 14, 7];
// Your code here
const isDivisibleBy7 = (arr) => arr.find(el=>!(el%7)) 

console.log(isDivisibleBy7(numbers))
// Output: 21