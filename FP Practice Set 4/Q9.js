// Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with the most expensive product.

const products = [
  { name: "Bread", price: 10, quantity: 2 },
  { name: "Clips", price: 20, quantity: 50 },
  { name: "Knife", price: 30, quantity: 1 },
  { name: "Slipper", price: 40, quantity: 3 },
];
// Your code here

const findMostExpensiveProduct = (arr) =>
  arr.reduce((acc, { name, price, quantity }) => {
    return acc.price * acc.quantity > price * quantity
      ? acc
      : { name, price, quantity };
  });

console.log(findMostExpensiveProduct(products));
// { name: "Clips", price: 20, quantity: 50 }
