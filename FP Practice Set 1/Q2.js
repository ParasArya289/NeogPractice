// Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.

const capitalizeArray = (arr) => {
  const capitalizer = (el) => {
    let upper = "";
    for (let word of el) {
      if (word.charCodeAt() > 96 && word.charCodeAt() < 123) {
        upper += String.fromCharCode(word.charCodeAt() - 32);
      } else {
        upper += word;
      }
    }
    return upper;
  };
  return arr.map(capitalizer);
};

const myArray = ["apple", "banana", "cherry"];
console.log(capitalizeArray(myArray));
// Output: ["APPLE", "BANANA", "CHERRY"]
