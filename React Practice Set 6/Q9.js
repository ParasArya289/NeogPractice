import { useEffect, useState } from "react";
import { fakeFetch9 } from "./utils/utils";
const Q9 = () => {
  const [data, setData] = useState({});
  const pStyle = { fontWeight: "800" };
  const spanStyle = { fontWeight: "200" };
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fakeFetch9("https://example.com/api/getvideo");
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
  const updateHandler = () => {
    const label = prompt("Add Label");
    setData({
      ...data,
      label
    });
  };
  return (
    <div>
      <img src={data?.thumbnail} alt={data?.title} />
      <p style={pStyle}>
        Title: <span style={spanStyle}>{data?.title}</span>
      </p>
      <p style={pStyle}>
        Views: <span style={spanStyle}>{data?.views}</span>
      </p>
      <p style={pStyle}>
        Likes: <span style={spanStyle}>{data?.likes}</span>
      </p>
      {data?.label && (
        <p style={pStyle}>
          Label: <span style={spanStyle}>{data?.label}</span>
        </p>
      )}
      <button onClick={updateHandler}>
        {!data.label ? "Add Label" : "Update Label"}
      </button>
    </div>
  );
};
export default Q9;
