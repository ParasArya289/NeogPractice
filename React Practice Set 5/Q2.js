import { useState, useEffect } from "react";
import { fakeFetch2 } from "./utils.js/utils";

const Q2 = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fakeFetch2("https://example.com/api/products");
        const {
          data: { products }
        } = res;
        setData(products);
        setError("");
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);
  const filterbyQuantity = () => {
    setData(data.filter(({ quantity }) => quantity > 20));
  };
  const filterbyPrice = () => {
    setData(data.filter(({ price }) => price > 100));
  };
  return (
    <div>
      <button onClick={filterbyQuantity}>
        Show Product with quantity {">"} 20{" "}
      </button>
      <button onClick={filterbyPrice}>Fitler By price {">"} 100</button>
      <ul>
        {data.map((el) => (
          <li>
            {el.name} - {el.price} - {el.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Q2;
