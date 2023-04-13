import { useEffect, useState } from "react";
import { fakeFetch9 } from "./utils/utils";

const Q9 = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    const fetch = async (url) => {
      try {
        const res = await fakeFetch9(url);
        const {
          data: { products },
        } = res;
        setData(products);
        const sorted = [...data].sort((a, b) => b.rating - a.rating);
        setSortedData(sorted);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetch("https://example.com/api/products");
  }, []);
  console.log(sortedData);
  const searchHandler = (searchKey) => {
    console.log(searchKey);
    const regex = new RegExp(searchKey, "i");
    if (searchKey) {
      const searchedData = [...data].filter(({ name }) => regex.test(name));
      setSortedData(searchedData);
    } else {
      const sorted = [...data].sort((a, b) => b.rating - a.rating);
      setSortedData(sorted);
    }
  };
  return (
    <>
      <input
        placeholder="Search by name"
        onChange={(e) => searchHandler(e.target.value)}
      />
      {sortedData.map(({ name, price, quantity, rating }) => (
        <li
          key={name}
          style={{ listStyle: "none", border: "1px solid", margin: "20px" }}
        >
          <h2>{name}</h2>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
          <p>Rating: {rating}</p>
        </li>
      ))}
      {!sortedData.length && <h3>{"No Match Found"}</h3>}
    </>
  );
};
export default Q9;
