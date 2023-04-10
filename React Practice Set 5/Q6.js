import { useEffect, useState } from "react";
import { fakeFetch5 } from "./utils.js/utils";
const Q6 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fakeFetch5("https://example.com/api/userchat");
        const { data } = res;
        setData(data);
      } catch (e) {
        console.log(e.messgae);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      {data.map((el) => (
        <div
          style={{
            background: "#f3f4f6",
            textAlign: "left",
            borderRadius: "2px",
            margin: "2rem auto",
            width: "400px",
            paddingBottom: "12px"
          }}
        >
          <h3 style={{ padding: "12px 12px 0px" }}>{el.name}</h3>
          <hr style={{ border: "1px solid black" }} />
          {el.messages.map((msg) => (
            <div style={{ textAlign: msg.from !== el.name ? "right" : "left" }}>
              <div style={{ paddingLeft: "12px", paddingRight: "12px" }}>
                <span style={{ display: "block", fontWeight: "600" }}>
                  {msg.from}
                </span>
                <span>{msg.message}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Q6;
