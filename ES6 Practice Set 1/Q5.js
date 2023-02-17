// Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

const checkForA = (str) => str.toLowerCase().includes('a') ? 'Includes a' :'Does not include a' 

console.log(checkForA('Paras Arya'))