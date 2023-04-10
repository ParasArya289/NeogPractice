import { useEffect, useState } from "react";
import { Card } from "./Card";
import { fakeFetch4 } from "./utils.js/utils";

const Q5 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fakeFetch4("https://example.com/api/users");
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
      <h1>Your Feed</h1>
      {data.map((el) => (
        <Card data={el} height={200} width={200} />
      ))}
    </div>
  );
};
export default Q5;
