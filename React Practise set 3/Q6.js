import { useState, useMemo } from "react";

const Q6 = ({ list }) => {
  const [selectedFlower, setSelectedFlower] = useState("all");

  const filteredData = useMemo(() => {
    console.log("i ran");
    if (selectedFlower === "all") {
      return list;
    } else {
      return list.filter((el) => el.flowers.includes(selectedFlower));
    }
  }, [selectedFlower, list]);

  return (
    <div>
      <select onChange={(e) => setSelectedFlower(e.target.value)}>
        <option value="all">Collection</option>
        <option value="rose">Rose</option>
        <option value="lily">Lily</option>
        <option value="marigold">Marigold</option>
        <option value="snapdragon">Snapdragon</option>
        <option value="sunflower">Sunflower</option>
      </select>
      {filteredData.map((el) => (
        <li
          style={{
            listStyle: "none",
            border: "2px solid black",
            margin: "2rem",
          }}
          key={el.id}
        >
          <h3>Bouquet</h3>
          <p>{el.flowers.join(", ")}</p>
        </li>
      ))}
    </div>
  );
};
export default Q6;
