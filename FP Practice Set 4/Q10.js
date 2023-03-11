// Write an ES6 function that takes an array of strings and returns an object with the count of each string.

const fruits = [
  "apple",
  "banana",
  "banana",
  "cherry",
  "apple",
  "apple",
  "banana",
];

//with reduce
const countStrings = (arr) =>
  arr.reduce(
    (acc, curr) => (acc[curr] ? acc[curr]++ : (acc[curr] = 1), acc),
    {}
  );

//with map
const countStringsMAP = (arr) => {
  const seen = new Map();
  arr.forEach((el) => seen.set(el, (seen.get(el) || 0) + 1));
  return seen;
};

console.log(countStrings(fruits));
console.log(countStringsMAP(fruits));

// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }
