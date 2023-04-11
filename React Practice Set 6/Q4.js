import { useEffect, useState } from "react";
import { fakeFetch4 } from "./utils/utils";
const Q4 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fakeFetch4("https://example.com/api/videos");
        const {
          data: { videos }
        } = res;
        setData(videos);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetch();
  }, []);
  const deleteHandler = () => {
    setData([...data].filter((el, i) => i !== 0));
  };
  console.log(data);
  return (
    <div>
      <h1>Playlist</h1>
      <button
        style={{ display: "block", margin: "auto" }}
        onClick={deleteHandler}
      >
        Delete First Video
      </button>
      {data.map(({ title, thumbnail, views, likes }) => (
        <div style={{ display: "inline-block", margin: "10px" }}>
          <img src={thumbnail} alt={thumbnail} />
          <h4>{title}</h4>
          <p>Views: {views}</p>
          <p>Likes: {likes}</p>
        </div>
      ))}
    </div>
  );
};
export default Q4;
