import { useState } from "react";

const Q6 = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/productlist") {
          resolve({
            status: 200,
            message: "Success",
            data: [
              { itemName: "Shoes", price: 100, quantity: 2 },
              { itemName: "Hat", price: 350, quantity: 1 },
              { itemName: "Tshirt", price: 410, quantity: 5 },
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

  // Output on the DOM should be:
  // Total: INR 2600

  const getCart = async () => {
    try {
      setLoading(true);
      const res = await fakeFetch("https://example.com/api/productlist");
      setLoading(false);
      const calcTotalCart = res.data.reduce(
        (acc, { price, quantity }) => acc + price * quantity,
        0
      );
      const totalStr = `Total Cart Value: ${calcTotalCart}`;
      setData(totalStr);
      setError("");
    } catch (e) {
      setLoading(false);
      setError(e.message);
      setData("");
    }
  };

  return (
    <div>
      <h1>Fetch Cart value</h1>
      <button
        style={{ display: "block", margin: "1rem auto" }}
        onClick={getCart}
      >
        Fetch
      </button>
      <h3>{data}</h3>
      {loading && <h4>Loading...</h4>}
      <h4>{error}</h4>
    </div>
  );
};
export default Q6;
