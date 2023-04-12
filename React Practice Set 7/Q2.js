import { useEffect, useState } from "react";
import { fakeFetch2 } from "./utils/utils";
const Q2 = () => {
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const fetch = async (url) => {
      try {
        const res = await fakeFetch2(url);
        const { data } = res;
        setData(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetch("https://example.com/api/user");
  }, []);
  return (
    <div>
      <p>Name: {data?.name}</p>
      <p>Email: {data?.email}</p>
      <p>Phone: {data?.phone}</p>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Show Less" : "Show More"}
      </button>
      {toggle && (
        <>
          <p>Street: {data?.address?.street}</p>
          <p>Suit: {data?.address?.suit}</p>
          <p>City: {data?.address?.city}</p>
          <p>zipcode: {data?.address?.zipcode}</p>
        </>
      )}
    </div>
  );
};
export default Q2;
