// Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component that takes the array of products as input and returns an unordered list of products, where each list item displays the product's name, price, and category.
const products = [
    {
      id: 1,
      name: "Black T-Shirt",
      price: 540,
      category: "Clothing"
    },
    {
      id: 2,
      name: "Quad Copter",
      price: 2000,
      category: "Toys"
    },
    {
      id: 3,
      name: "5AM Club",
      price: 220,
      category: "Books"
    },
    {
      id: 4,
      name: "Areca Palm",
      price: 540,
      category: "Plants"
    }
  ];
  
  const Q2 = () => {
    return (
      <div>
        <h1>Products Inventory</h1>
        <ul>
          {products.map((el) => (
            <li key={el.id}>
              <h4>{el.name}</h4>
              <span>
                Rs.{el.price},{el.category}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  export default Q2;