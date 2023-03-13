// Create an array of objects representing cars in a dealership. Each object has the following properties: id, make, model, and price. Write a React component that takes the array of cars as input and returns an unordered list of cars, where each list item displays the car's make, model, and price.

const cars = [
  { id: 1, make: "Toyota", model: "Corolla", price: 400000 },
  { id: 2, make: "Honda", model: "Civic", price: 1500000 },
  { id: 3, make: "Toyota", model: "Camry", price: 2500000 },
  { id: 4, make: "Ford", model: "Mustang", price: 7500000 },
];
const Q6 = () => {
  return (
    <div>
      <h1>Cars</h1>
      <ul>
        {cars.map((el) => (
          <li>
            <h4>{el.model}</h4>
            <span>
              {el.price / 10 ** (cars[1].price.toString().length - 2)} Lakh :{" "}
              {el.make}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Q6;
