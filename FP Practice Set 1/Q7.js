// Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.

const isDivisibleBy3and5 = (arr) => arr.filter(el=>(!(el%3) && !(el%5)))

const numbers = [1, 2, 30, 4, 15];
console.log(isDivisibleBy3and5(numbers));
// Output: [30, 15]
