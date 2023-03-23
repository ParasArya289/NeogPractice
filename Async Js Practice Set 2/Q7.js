import { useState } from "react";

const Q7 = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/users") {
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

  // Output on the DOM should be (in red color):
  // Oops. Unexpected Error. Please try again.

  const handler = async () => {
    try {
      setLoading(true);
      const res = await fakeFetch("https://example.com/api/users");

      setLoading(false);
      setData(res.data.message);
      setError("");
    } catch (e) {
      setLoading(false);
      if (e.status === 500) {
        setError("Oops!! Unexpected Error. Please try again.");
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
export default Q7;
