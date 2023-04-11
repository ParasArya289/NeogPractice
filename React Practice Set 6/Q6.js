import { useEffect, useState } from "react";
import { fakeFetch6 } from "./utils/utils";
const Q6 = () => {
  const [data, setData] = useState([]);
  const [toggleArchive, setToggleArchive] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fakeFetch6("https://example.com/api/habits");
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
  return (
    <div>
      <h1>{toggleArchive ? "Archived Todos" : "Unarchived Todos"}</h1>
      <button onClick={() => setToggleArchive(!toggleArchive)}>
        {!toggleArchive ? "Show Archived" : "Show Unarchived"}
      </button>
      <ul>
        {data
          .filter(({ archived }) => toggleArchive === archived)
          .map(({ title, desc, daysFollowed, daysSkipped }) => (
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
              </h4>
              <hr />
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Q6;
