// Write a function that takes a string as input and determines if it is longer than 5 characters.

const checkLength = (str) => str.length > 5? 'More than 5 char' :'Less than 5';

console.log(checkLength("Programming")) // more than 5 characters 
console.log(checkLength("Jeep")) // less than 5 characters 