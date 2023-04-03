import { useState, useMemo } from "react";

const Q6 = ({ list }) => {
  const [selectedFlower, setSelectedFlower] = useState("all");
  const [selectedPrice,setSelectedPrice] = useState("all");

  const filteredData = useMemo(() => {
    const data = [...list]

    if (selectedFlower !== "all") {
      return data.filter((el) => el.flowers.includes(selectedFlower));
    } 
    if(selectedPrice !== 'all'){
      return data.filter((el)=>el.price > selectedPrice)
    }

    return data;

  }, [selectedFlower,selectedPrice,list]);

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

      <select onChange={(e) => setSelectedPrice(e.target.value)}>
        <option value="all">All price</option>
        <option value="2000">above 2000</option>
      </select>
      {filteredData.map((el) => (
        <li
          style={{
            listStyle: "none",
            border: "2px solid black",
            margin: "2rem"
          }}
          key={el.id}
        >
          <h3>Bouquet</h3>
          <p>{el.flowers.join(", ")}</p>
          <p>Rs.{el.price}</p>
        </li>
      ))}
    </div>
  );
};
export default Q6;
