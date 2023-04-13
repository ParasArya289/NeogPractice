import { useEffect, useState } from "react";
import { fakeFetch7 } from "./utils/utils";

let fetchedData = [];
const Q7 = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    const fetch = async (url) => {
      try {
        const res = await fakeFetch7(url);
        const {
          data: { products }
        } = res;
        setData(products);
        fetchedData = products;
      } catch (e) {
        console.error(e.message);
      }
    };
    fetch("https://example.com/api/products");
  }, []);
  const sortByPrice = () => {
    setToggle(!toggle);
    if (toggle) {
      const sortedData = [...fetchedData].sort((a, b) => b.price - a.price);
      console.log(sortedData);
      setData(sortedData);
    } else {
      const sortedData = [...fetchedData].sort((a, b) => a.price - b.price);
      setData(sortedData);
    }
  };
  return (
    <>
      <button onClick={sortByPrice}>
        {!toggle ? "Lower To Higher" : "Higher To Lower"}
      </button>
      {data.map(({ name, description, price, quantity }) => (
        <li
          key={name}
          style={{ listStyle: "none", border: "2px dotted", margin: "20px" }}
        >
          <h2>{name}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <p>{quantity}</p>
        </li>
      ))}
    </>
  );
};
export default Q7;
