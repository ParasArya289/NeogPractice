import { useState } from "react";

const Q8 = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/allbooks") {
          reject({
            status: 400,
            message: "Bad Request"
          });
        } else {
          resolve({
            status: 200,
            data: {
              message: "Success"
            }
          });
        }
      }, 2000);
    });
  };

  // Your Code here

  // Output on the DOM should be:
  // Bad Request! Requested size too large.

  const handler = async () => {
    try {
      setLoading(true);
      const res = await fakeFetch("https://example.com/api/allbooks");

      setLoading(false);
      setData(res.data.message);
      setError("");
    } catch (e) {
      setLoading(false);
      if (e.status === 400) {
        setError("Bad Request! Requested size too large.");
      }
      setData("");
    }
  };

  return (
    <div>
      <h1>Handle Error</h1>
      <button
        style={{ display: "block", margin: "1rem auto" }}
        onClick={handler}
      >
        Fetch
      </button>
      <h3 style={{ color: "lime" }}>{data}</h3>
      {loading && <h4>Loading...</h4>}
      <h4 style={{ color: "tomato" }}>{error}</h4>
    </div>
  );
};
export default Q8;
