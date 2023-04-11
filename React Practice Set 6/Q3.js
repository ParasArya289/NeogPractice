import { useEffect, useState } from "react";
import { fakeFetch3 } from "./utils/utils";
const Q3 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fakeFetch3("https://example.com/api/habits");
        const {
          data: { habits }
        } = res;
        setData(habits);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetch();
  }, []);
  console.log(data);
  return (
    <div>
      <ul>
        {data.map(({ title, desc, daysFollowed, daysSkipped }) => (
          <li>
            <h2>{title}</h2>
            <p>{desc}</p>
            <h4>
              Days Followed:{" "}
              <span style={{ fontWeight: "200" }}>{daysFollowed}</span>
            </h4>
            <h4>
              Days Skipped:{" "}
              <span style={{ fontWeight: "200" }}>{daysSkipped}</span>
            </h4><hr/>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Q3;
