// Write a function that takes a string as input and determines if it contains the word "hello".

const isHelloPresent = (str) => str.toLowerCase().includes('hello')

console.log(isHelloPresent("Hello World")) // true
console.log(isHelloPresent("World")) // false