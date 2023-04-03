import { useState } from "react";

const Q2 = ({ list }) => {
  const [cartoons, setCartoons] = useState([...list]);
  const filterCartoons = (el) => {
    const filterOption = el.target.value;
    if (filterOption === "All") {
      setCartoons([...list]);
    } else if (filterOption === "1-5") {
      setCartoons(
        [...list].filter(({ magnitude }) => magnitude <= 5 && magnitude >= 1)
      );
    } else if (filterOption === "5-10") {
      setCartoons(
        [...list].filter(({ magnitude }) => magnitude <= 10 && magnitude > 5)
      );
    }
  };
  return (
    <div>
      <select onChange={filterCartoons} style={{ width: "12rem" }}>
        <option value="All">All</option>
        <option value="1-5">Magnitude: 1-5</option>
        <option value="5-10">Magnitude: 5-10</option>
      </select>
      {cartoons.map((el) => (
        <li
          key={el.id}
          style={{ listStyle: "none", border: "1px solid", margin: "2rem" }}
        >
          <h4>{el.name}</h4>
          <p>Superpower: {el.superpower}</p>
          <p>Magnitude: {el.magnitude}</p>
        </li>
      ))}
    </div>
  );
};
export default Q2;
