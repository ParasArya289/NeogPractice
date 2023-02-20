// Write an ES6 function to return sum of all numbers at even indices of the given array.

const sumOfEvenIndices = (arr) => arr.reduce((acc,el,i)=>acc+(!(i%2)?el:0),0)

console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])) // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) // 30

