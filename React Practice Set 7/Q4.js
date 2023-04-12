import { useEffect, useState } from "react";
import { fakeFetch4 } from "./utils/utils";
let fetchedData = [];
const Q4 = () => {
  const [data, setData] = useState([]);
  const filterOptionArr = [
    ...new Set(fetchedData.map(({ company }) => company))
  ];
  console.log(filterOptionArr);
  useEffect(() => {
    const fetch = async (url) => {
      try {
        const res = await fakeFetch4(url);
        const { data } = res;
        fetchedData = data;
        setData(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetch("https://example.com/api/users");
  }, []);
  const filterByYear = (option) => {
    console.log(option);
    if (option !== "All") {
      setData(fetchedData.filter(({ company }) => company === option));
    } else {
      setData(fetchedData);
    }
  };
  console.log(data);
  return (
    <>
      <select onChange={(e) => filterByYear(e.target.value)}>
        <option value="All">All</option>
        {filterOptionArr.map((company) => (
          <option value={company}>{company}</option>
        ))}
      </select>
      {data.map(({ name, email, website, company }) => (
        <li>
          <p>{name}</p>
          <p>{email}</p>
          <p>{website}</p>
          <p>{company}</p>
        </li>
      ))}
    </>
  );
};
export default Q4;
