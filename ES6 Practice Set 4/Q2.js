// Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.

const calculateAverage = (arr) =>{
    let avg = 0;
    arr.forEach((el)=>avg+=el/arr.length)
    return avg;
}
  
console.log(calculateAverage([1, 2, 3, 4, 5])); // 3