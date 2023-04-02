import { useState } from "react";

const Q8 = ({ products }) => {
  const [highlight, setHighlight] = useState(false);
  const priceHighlight = (price) =>
    highlight && price > 50000 ? "lime" : "grey";
  return (
    <div>
      <button onClick={() => setHighlight(!highlight)}>
        Highlight product {">"} 50000
      </button>
      {products.map((el) => (
        <li
          key={el.id}
          style={{
            listStyle: "none",
            backgroundColor: priceHighlight(el.price)
          }}
        >
          <h4>{el.description}</h4>
          <p>{el.name}</p>
          <p>{el.price}</p>
        </li>
      ))}
    </div>
  );
};
export default Q8;
