// Write an ES6 function that takes an array of objects and returns the sum of all ages.

//with reduce
const sumOfAges = (arr) => arr.reduce((acc,{age})=>acc+age,0)

//traditional method
// const sumOfAges = (arr) => {
//   let sum = 0;
//   for (let { age } of arr) {
//     sum += age;
//   }
//   return sum;
// };

var array = [
  {
    name: "Jay",
    age: 60,
  },
  {
    name: "Gloria",
    age: 36,
  },
  {
    name: "Manny",
    age: 16,
  },
  {
    name: "Joe",
    age: 9,
  },
];

console.log(sumOfAges(array)); // 121
