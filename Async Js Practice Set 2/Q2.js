import { useState } from "react";

const Q2 = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/winner-team") {
          resolve({
            status: 200,
            data: {
              message: "Success",
              data: ["Jhon", "Raju", "Anjali", "Sakshi"],
            },
          });
        } else {
          reject({
            status: 404,
            message: "No Users found.",
          });
        }
      }, 2000);
    });
  };

  // your code here
  const getPlayers = async () => {
    try {
      setLoading(true);
      const res = await fakeFetch("https://example.com/winner-team");
      setLoading(false);
      const congratsStr = `Congratulation to the members of winning team ${res.data.data.join(
        ", "
      )}`;
      setData(congratsStr);
      setError("");
    } catch (e) {
      setLoading(false);
      setError(e.message);
      setData([]);
    }
  };

  return (
    <div>
      <h1>Fetch and print custom string</h1>
      <button onClick={getPlayers}>Fetch</button>
      <h3>{data}</h3>
      {loading && <h4>Loading...</h4>}
      <h4>{error}</h4>
    </div>
  );
};
export default Q2;
