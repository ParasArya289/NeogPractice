// Use this URL - https://example.com/api/profile/NC002 in which we are passing the id of a user to make a fake fetch call and display a welcome message to the user on the DOM. A fakeFetch has been provided
import { useState } from "react";

const Q11 = () => {
  const [error, setError] = useState("");
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/profile/NC002") {
          resolve({
            status: 200,
            data: {
              message: "Success",
              data: { id: "NC002", name: "Roshan", institute: "neoG Camp" },
            },
          });
        } else {
          reject({
            status: 404,
            message: "Resource not found",
          });
        }
      }, 2000);
    });
  };

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/profile/NC002");
      const data = res.data.data;
      setError(`Welcome! ${data.name} from ${data.institute}`);
    } catch (err) {
      if (err.status === 404) {
        setError(err.message);
      }
    }
  };
  return (
    <div>
      <h1>User Login</h1>
      <button onClick={fetchData}>Fetch</button>
      <h4>{error}</h4>
    </div>
  );
};

export default Q11;
