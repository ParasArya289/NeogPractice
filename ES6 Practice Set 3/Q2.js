// Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.

const formatProduct = ({name,price,inStock}) => inStock ? `${name} costs INR ${price} and is in stock` : 'Out of stock'  


const product = {
  name: 'Socks',
  price: 249,
  inStock: false,
};

const message = formatProduct(product);
console.log(message);
// Socks costs INR 249 and is in stock.