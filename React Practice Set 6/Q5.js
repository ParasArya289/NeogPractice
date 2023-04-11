import { useEffect, useState } from "react";
import { fakeFetch5 } from "./utils/utils";
const Q5 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fakeFetch5("https://example.com/api/posts");
        const {
          data: { posts }
        } = res;
        setData(posts);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetch();
  }, []);
  console.log(data);
  const showBakery = () => {
    setData([...data].filter(({ category }) => category === "Bakery"));
  };
  return (
    <div>
      <h1>Playlist</h1>
      <button style={{ display: "block", margin: "auto" }} onClick={showBakery}>
        Show Bakery
      </button>
      {data.map(({ caption, src, views, likes, category }) => (
        <div style={{ display: "inline-block", margin: "10px" }}>
          <img src={src} alt={src} />
          <h4>{caption}</h4>
          <p>Views: {views}</p>
          <p>Likes: {likes}</p>
          <p>Category: {category}</p>
        </div>
      ))}
    </div>
  );
};
export default Q5;
