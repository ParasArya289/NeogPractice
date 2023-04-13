import { useEffect, useState } from "react";
import { fakeFetch6 } from "./utils/utils";
let fetchedData = [];
const Q6 = () => {
  const [data, setData] = useState([]);
  const filterOptionArr = [...new Set(fetchedData.map(({ genre }) => genre))];
  console.log(filterOptionArr);
  useEffect(() => {
    const fetch = async (url) => {
      try {
        const res = await fakeFetch6(url);
        const { data } = res;
        fetchedData = data;
        setData(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetch("https://example.com/api/movies");
  }, []);
  const filterByGenre = (option) => {
    console.log(option);
    if (option !== "All") {
      setData(fetchedData.filter(({ genre }) => genre === option));
    } else {
      setData(fetchedData);
    }
  };
  return (
    <>
      <select onChange={(e) => filterByGenre(e.target.value)}>
        <option value="All">All</option>
        {filterOptionArr.map((company) => (
          <option value={company}>{company}</option>
        ))}
      </select>
      {data.map(({ title, year, genre }) => (
        <li style={{ listStyle: "none", border: "2px dotted", margin: "20px" }}>
          <h2>{title}</h2>
          <p>{year}</p>
          <p>{genre}</p>
        </li>
      ))}
    </>
  );
};
export default Q6;
