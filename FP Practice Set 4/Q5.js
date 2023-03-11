// Write an ES6 function to multiply and return all the elements of a given array.

const numbers = [1, 2, 3, 4, 5];
// Your code here

const product = (arr) => arr.reduce((acc, el) => acc * el);

console.log(product(numbers));
// Output: 120
