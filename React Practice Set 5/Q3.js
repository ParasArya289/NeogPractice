import { useEffect, useState } from "react";
import { fakeFetch3 } from "./utils.js/utils";
const spanStyle = { display: "block", paddingLeft: "50px", textAlign: "left" };

const Q3 = ({ url, height, width }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const res = await fakeFetch3(url);
        setIsLoading(false);
        setData(res.data);
      } catch (e) {
        setIsLoading(false);
        console.log(e.message);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div
          style={{
            width: "200px",
            height: "200px",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <h4>Loading..</h4>
        </div>
      ) : (
        <div style={{ width: "300px", height: "300px", margin: "auto" }}>
          <h4>{data.name}'s Profile</h4>
          <img
            style={{ borderRadius: "6px" }}
            src={data.image}
            alt="user profile"
            height={height}
            width={width}
          />
          <span style={spanStyle}>
            ❤️ {data.likes} · 💬 {data.comments}
          </span>
          <span style={{ ...spanStyle, color: "lightgrey" }}>
            veiw all {data.comments} comments
          </span>
        </div>
      )}
    </div>
  );
};
export default Q3;
