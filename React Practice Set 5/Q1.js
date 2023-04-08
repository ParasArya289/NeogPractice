import { useEffect, useState } from "react";
import { fakeFetch } from "./utils.js/utils";

const Q1 = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fakeFetch("https://example.com/api/users/status");
        const {
          data: { users }
        } = res;
        setData(users);
        setError("");
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Online Users</h1>
      {data.map((el) => (
        <div
          style={{
            background: "#f1f5f9",
            padding: "20px",
            margin: "20px",
            borderRadius: "6px"
          }}
        >
          <p style={{ color: el.status === "Online" ? "green" : "red" }}>
            <h1>{el.name}</h1>
            <small>{el.status}</small>
          </p>
        </div>
      ))}
      {error && <h4>{error}</h4>}
    </div>
  );
};
export default Q1;
