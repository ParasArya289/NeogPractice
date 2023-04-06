import { useState } from "react";

const FruitVegi = ({ list }) => {
  const [data, setData] = useState(list);
  const filterItem = (option) => {
    console.log(option);
    if (option !== "All") {
      setData([...list].filter(({ category }) => category === option));
    } else {
      setData(list);
    }
  };
  return (
    <div>
      <button value="All" onClick={(e) => filterItem(e.target.value)}>
        All
      </button>
      <button value="Fruit" onClick={(e) => filterItem(e.target.value)}>
        Fruit
      </button>
      <button value="Vegetable" onClick={(e) => filterItem(e.target.value)}>
        Vegitable
      </button>
      {data.map(({ id, name, category }) => (
        <p
          key={id}
          style={{ color: category === "Fruit" ? "orange" : "green" }}
        >
          {name}
        </p>
      ))}
    </div>
  );
};
export default FruitVegi;
