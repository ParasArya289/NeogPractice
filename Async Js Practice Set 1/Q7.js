// Use this URL - https://example.com/api/chat to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided

import { useState } from "react";

const Q7 = () => {
  const [message, setMessage] = useState("");
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/chat") {
          reject({
            status: 503,
            message: "Service Unavailable",
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

  fakeFetch("https://example.com/api/chat")
    .then((res) => {
      setMessage(res.data.message);
    })
    .catch((err) => {
      if (err.status === 503) {
        setMessage(
          "We are facing high demand at the moment. Please check back later in sometime"
        );
      }
    });

  return (
    <div>
      <h1>Promises</h1>
      <h4>{message}</h4>
    </div>
  );
};

export default Q7;
