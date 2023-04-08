import { useMemo, useState } from "react";

const Books = ({ list }) => {
  // const [data, setData] = useState([...list]);
  const [option, setOption] = useState("All");
  const mapGenre = ["All", ...new Set(list.map(({ genre }) => genre))];

  // const filterOption = () => {
  //   console.log("run");
  //   if (option !== "All") {
  //     setData([...list].filter(({ genre }) => genre === option));
  //   } else {
  //     setData([...list]);
  //   }
  // };
  const filterOption = useMemo(() => {
    if (option !== "All") {
      return [...list].filter(({ genre }) => genre === option);
    }
    return list;
  }, [option]);

  return (
    <div>
      <h1>Book Store</h1>
      {mapGenre.map((el) => (
        <button
          style={{ background: option === el ? "orange" : "" }}
          value={el}
          onClick={(e) => setOption(e.target.value)}
        >
          {el}
        </button>
      ))}
      {filterOption.map((el) => (
        <div
          key={el.id}
          style={{
            border: "2px dotted",
            margin: "20px",
            borderRadius: "6px",
            textAlign: "left"
          }}
        >
          <p style={{ paddingLeft: "20px" }}>
            <h2>{el.title}</h2>
            {el.author}{" "}
            <small>
              <i>-{el.genre}</i>
            </small>
          </p>
        </div>
      ))}
    </div>
  );
};
export default Books;
