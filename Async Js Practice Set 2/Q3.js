import { useState } from "react";

const Q3 = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/login") {
          resolve({
            status: 200,
            data: {
              auth: true,
            },
          });
        } else {
          reject({
            status: 404,
            message: "Status not found",
          });
        }
      }, 2000);
    });
  };

  // your code here

  // Output on the DOM should be:
  // Verified

  // your code here
  const getPlayers = async () => {
    try {
      setLoading(true);
      const res = await fakeFetch("https://eample.com/login");
      setLoading(false);
      const auth = res.data.auth && "Verified";
      setData(auth);
      setError("");
    } catch (e) {
      setLoading(false);
      setError(e.message);
      setData("");
    }
  };

  return (
    <div>
      <h1>Authentication</h1>
      <button onClick={getPlayers}>Fetch</button>
      <h3>{data}</h3>
      {loading && <h4>Loading...</h4>}
      <h4>{error}</h4>
    </div>
  );
};
export default Q3;
