import { useState } from "react";

const HeroVillainList = ({ list }) => {
  const [toggle, setToggle] = useState(false);
  const { heroes, villains } = list;
  const [data, setData] = useState([]);

  const filterList = (val) => {
    setToggle(true);
    if (val === "heroes") {
      setData(heroes);
    } else if (val === "villains") {
      setData(villains);
    }
  };
  return (
    <div>
      <button value="heroes" onClick={(e) => filterList(e.target.value)}>
        Show Hero
      </button>
      <button value="villains" onClick={(e) => filterList(e.target.value)}>
        Show Villain
      </button>
      <ul>
        {toggle &&
          data.map((el) => (
            <li key={el.name} style={{ listStyle: "none" }}>
              <h3>{el.name}</h3>
              <p>{el.powers}</p>
              <p>{el.costume}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default HeroVillainList;
