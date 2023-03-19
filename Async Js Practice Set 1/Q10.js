// Use this URL - https://example.com/api/profile to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided
import { useState } from "react";

const Q10 = () => {
  const [error, setError] = useState("");
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/profile") {
          reject({
            status: 401,
            message: "Unauthorized Access"
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

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/profile");
      setError(res.data.message);
    } catch (err) {
      if (err.status === 401) {
        setError(
          "Unauthorized Access! Looks like you are not logged in. Please login to see your profile data."
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

export default Q10;
