// Use this URL - https://example.com/api/itemlist to make a fake fetch call and list out all the items as an ordered list on the DOM. A fakeFetch has been provided.

import { useState } from "react";

const Q8 = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/itemlist") {
          resolve({
            status: 200,
            message: "Success",
            data: [
              { itemName: "Bread", price: 30, quantity: 10 },
              { itemName: "Water Bottle", price: 50, quantity: 50 },
              { itemName: "Dairy Milk", price: 20, quantity: 30 },
            ],
          });
        } else {
          reject({
            status: 404,
            message: "Items list not found.",
          });
        }
      }, 2000);
    });
  };
  // Your Code here
  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/itemlist");
      setData(res.data);
      setError("");
    } catch (err) {
      setData([]);
      setError(err.message);
    }
  };
  return (
    <div>
      <h1>Map Data</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <ol>
        {data.map((el) => (
          <li key={el.itemName}>
            {el.itemName} | Rs.{el.price} | Qty {el.quantity}
          </li>
        ))}
      </ol>
      <h4>{error}</h4>
    </div>
  );
};

export default Q8;
