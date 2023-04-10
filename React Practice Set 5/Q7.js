import { useEffect, useState } from "react";
import { fakeFetch6 } from "./utils.js/utils";
const Q7 = () => {
  const [data, setData] = useState([]);
  // const [dlt, setDlt] = useState('');
  const dltComment = (id) =>
    setData([...data].filter(({ name }) => name !== id));
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fakeFetch6("https://example.com/api/comments");
        const {
          data: { comments }
        } = res;
        setData(comments);
      } catch (e) {
        console.log(e.messgae);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      {data.map((el) => (
        <div>
          <h3>{el.name}</h3>
          <p>{el.text}</p>
          <button onClick={() => dltComment(el.name)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default Q7;
