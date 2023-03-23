import { useState } from "react";

const Q5 = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/photo") {
          resolve({
            status: 200,
            data: {
              photo: {
                link: "https://source.unsplash.com/featured/300x201",
                title: "Random Image"
              }
            }
          });
        } else {
          reject({
            status: 404,
            message: "No order found"
          });
        }
      }, 2000);
    });
  };

  // your code here

  const getImage = async () => {
    try {
      setLoading(true);
      const res = await fakeFetch("https://example.com/photo");
      setLoading(false);
      setData(res.data.photo);
      console.log(data);
      setError("");
    } catch (e) {
      setLoading(false);
      setError(e.message);
      setData({});
    }
  };

  return (
    <div>
      <h1>Fetch Image</h1>
      <button
        style={{ display: "block", margin: "1rem auto" }}
        onClick={getImage}
      >
        Fetch
      </button>
      <img src={data.link} alt={data.title} />
      <h4>{data.title}</h4>
      {loading && <h4>Loading...</h4>}
      <h4>{error}</h4>
    </div>
  );
};
export default Q5;
