// write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.

//with inbuilt filter method
// cost filterWords = (arr) => arr.filter(el=>el.length > 5)

const filterWords = (arr) => {
  const wordArr = [];
  for (let word of arr) {
    console.log(word, word.length);
    if (word.length > 5) {
      wordArr.push(word);
    }
  }
  return wordArr;
};

var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)); // ["repeat", "community"]
