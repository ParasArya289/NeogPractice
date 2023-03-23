import { useState } from "react";

const Q10 = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fakeFetch = (url, dimensions) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/getImage") {
          resolve({
            status: 200,
            data: {
              image: {
                link: `https://picsum.photos/${dimensions[0]}/${dimensions[1]}`,
                title: "Random Image"
              }
            }
          });
        } else {
          reject({
            status: 404,
            message: "No photo of such dimension found"
          });
        }
      }, 2000);
    });
  };

  // your code here

  // Output on the DOM should be an image.

  const handler = async () => {
    try {
      setLoading(true);
      const res = await fakeFetch("https://example.com/getImage", [200, 300]);
      setLoading(false);
      setData(res.data.image);
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
      <h1>Image dimension</h1>
      <button
        style={{ display: "block", margin: "1rem auto" }}
        onClick={handler}
      >
        Fetch
      </button>
      <img src={data.link} alt={data.title} />
      <h4>{data.title}</h4>
      {loading && <h4>Loading...</h4>}
      <h4 style={{ color: "tomato" }}>{error}</h4>
    </div>
  );
};
export default Q10;
