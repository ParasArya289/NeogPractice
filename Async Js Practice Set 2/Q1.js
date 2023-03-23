import { useState } from "react";

const Q1 = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/post/comments") {
          resolve({
            status: 200,
            message: "Success",
            data: [
              { email: "xyz@gmail.com", commentBody: "Well done keep it up" },
              {
                email: "hello@outlook.com",
                commentBody: "Good going a lot to learn from you awesome",
              },
              {
                email: "ram99@gmail.com",
                commentBody: "Anyone from Vadodara here",
              },
            ],
          });
        } else {
          reject({
            status: 404,
            message: "No Comments found.",
          });
        }
      }, 2000);
    });
  };

  // your code here
  const getItems = async () => {
    try {
      setLoading(true);
      const res = await fakeFetch("https://example.com/pot/comments");
      setLoading(false);
      setData(res.data);
      setError("");
    } catch (e) {
      setLoading(false);
      setError(e.message);
      setData([]);
    }
  };

  return (
    <div>
      <h1>Fetch and Map Items</h1>
      <button onClick={getItems}>Fetch</button>
      <ol>
        {data.map((el) => (
          <li key={el.email}>
            {el.email} | {el.commentBody}
          </li>
        ))}
      </ol>
      {loading && <h4>Loading...</h4>}
      <h4>{error}</h4>
    </div>
  );
};
export default Q1;
