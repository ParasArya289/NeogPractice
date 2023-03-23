import { useState } from "react";

const Q4 = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/order/status/OR00A12") {
          resolve({
            status: 200,
            data: {
              order: {
                orderId: "OR00A12",
                status: "delivery pending",
                userName: "Kajal Kumari",
              },
            },
          });
        } else {
          reject({
            status: 404,
            message: "No order found",
          });
        }
      }, 2000);
    });
  };

  // your code here

  // Output on the DOM should be:
  // Hello Kajal Kumari your order status is delivery pending.
  const getPlayers = async () => {
    try {
      setLoading(true);
      const res = await fakeFetch("https://example.com/order/status/OR00A12");
      setLoading(false);
      const { status, userName } = res.data.order;

      const deliveryStatus = `Hello ${userName} your order status is ${status}`;
      setData(deliveryStatus);
      setError("");
    } catch (e) {
      setLoading(false);
      setError(e.message);
      setData("");
    }
  };

  return (
    <div>
      <h1>Delivery Status</h1>
      <button onClick={getPlayers}>Fetch</button>
      <h3>{data}</h3>
      {loading && <h4>Loading...</h4>}
      <h4>{error}</h4>
    </div>
  );
};
export default Q4;
