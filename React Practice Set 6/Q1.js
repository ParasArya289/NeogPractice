import { useEffect, useMemo, useState } from "react";
import { fakeFetch } from "./utils/utils";

const Q1 = () => {
  const [data, setData] = useState([]);
  const [filterOption, setFilterOption] = useState("");
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fakeFetch("https://example.com/api/products");
        const {
          data: { products }
        } = res;
        setData(products);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetch();
  }, []);
  const filterDataMemoised = useMemo(() => {
    console.log("filter");
    return [...data].filter(({ name }) => name === filterOption);
  }, [filterOption]);
  // const filterData = (key) => {
  //   setFilteredData([...data].filter(({ name }) => name === key));
  // };
  return (
    <div>
      {data.map(({ name }) => (
        <button key={name} onClick={() => setFilterOption(name)}>
          Show {name}
        </button>
      ))}
      {filterDataMemoised.map((el) => (
        <div key={el.src}>
          <img src={el.src} alt="product" />
          <p>Name: {el.price}</p>
          <p>Price: {el.price}</p>
          <p>Description: {el.desc}</p>
        </div>
      ))}
    </div>
  );
};
export default Q1;
