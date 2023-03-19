// Use this URL - https://example.com/api/data to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided.
import { useState } from "react";

const Q9 = () => {
  const [error, setError] = useState("");
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/data") {
          reject({
            status: 500,
            message: "Internal Server Error",
          });
        } else {
          resolve({
            status: 200,
            data: {
              message: "Success",
            },
          });
        }
      }, 2000);
    });
  };
  // Your Code here
  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/data");
      setError(res.data.message);
    } catch (err) {
      if (err.status === 500) {
        setError(
          "Internal Server Error! The server crashed. Please try again in some time."
        );
      }
    }
  };
  return (
    <div>
      <h1>Error Handling</h1>
      <button onClick={fetchData}>Fetch</button>
      <h4>{error}</h4>
    </div>
  );
};

export default Q9;
