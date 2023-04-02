import { useState } from "react";

const Q9 = ({ red, green, blue }) => {
  const clrArray = [
    ["Red", red],
    ["Green", green],
    ["Blue", blue]
  ];
  const [hex, setHex] = useState(false);
  const [clr, setClr] = useState("");
  return (
    <div>
      {clrArray.map((el) => (
        <div>
          <button
            style={{
              width: "12rem",
              height: "3rem",
              background: el[1],
              border: "none",
              margin: "6px",
              color: "white",
              borderRadius: "6px"
            }}
            onPointerOver={() => {
              setHex(true);
              setClr(el[0]);
            }}
            onPointerOut={() => setHex(false)}
          >
            {el[0]}
          </button>
          {hex && clr === el[0] && <p style={{ color: el[1] }}>{el[1]}</p>}
        </div>
      ))}
    </div>
  );
};
export default Q9;
