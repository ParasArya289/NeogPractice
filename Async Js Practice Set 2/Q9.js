import { useState } from "react";

const Q9 = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url !== "https://example.com/welcome") {
          reject({
            status: 511,
            message: "Network auth required"
          });
        } else {
          resolve({
            status: 200,
            data: {
              logged: true
            }
          });
        }
      }, 2000);
    });
  };

  // your code here

  // Output: As per the response from server
  const handler = async () => {
    try {
      setLoading(true);
      const res = await fakeFetch("https://example.com/welcome");
      setLoading(false);
      const loginString = res.data.logged && "Welcome you are logged in";
      setData(loginString);
      console.log(data);
      setError("");
    } catch (e) {
      setLoading(false);
      console.log(e);
      setError(e.message);
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
export default Q9;
