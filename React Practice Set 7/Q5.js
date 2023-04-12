import { useEffect, useState } from "react";
import { fakeFetch5 } from "./utils/utils";
const Q5 = () => {
  const [data, setData] = useState([]);
  const [stateChanger, setStateChanger] = useState(false);
  useEffect(() => {
    const fetch = async (url) => {
      try {
        const res = await fakeFetch5();
        setData(res);
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  }, [stateChanger]);
  console.log(data);
  return (
    <>
      <p>{data?.content}</p>
      <p>- {data?.author}</p>
      <button onClick={(e) => setStateChanger(!stateChanger)}>New Quote</button>
    </>
  );
};
export default Q5;
