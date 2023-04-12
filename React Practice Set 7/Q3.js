import { useEffect, useState } from "react";
import { fakeFetch3 } from "./utils/utils";
let fetchedData = [];
const Q3 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async (url) => {
      try {
        const res = await fakeFetch3(url);
        const { data } = res;
        fetchedData = data;
        setData(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetch("https://example.com/api/movies");
  }, []);
  const filterByYear = (option) => {
    if (option !== "All") {
      setData(fetchedData.filter(({ year }) => year === +option));
    } else {
      setData(fetchedData);
    }
  };
  return (
    <>
      <select onChange={(e) => filterByYear(e.target.value)}>
        <option value="All">All</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
      </select>
      {data?.map(({ title, year, rating }) => (
        <li style={{ listStyle: "none", border: "2px dotted", margin: "20px" }}>
          <h3>{title}</h3>
          <p>{year}</p>
          <p>{rating}</p>
        </li>
      ))}
    </>
  );
};
export default Q3;
