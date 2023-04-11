import { useEffect, useState } from "react";
import { fakeFetch2 } from "./utils/utils";

const Q2 = () => {
  const [data, setData] = useState([]);
  // const [filterOption, setFilterOption] = useState("");
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fakeFetch2("https://example.com/api/todos");
        const {
          data: { todos }
        } = res;
        setData(todos);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetch();
  }, []);
  console.log(data);
  return (
    <div>
      {data.map(({ title, desc, todos }) => (
        <div>
          <h1>
            {title}: {desc}
          </h1>
          <ol>
            {todos.map((todo) => (
              <li>{todo}</li>
            ))}
          </ol>
          <hr />
        </div>
      ))}
    </div>
  );
};
export default Q2;
