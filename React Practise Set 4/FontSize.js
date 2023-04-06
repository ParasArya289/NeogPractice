import { useState } from "react";

const FontSize = () => {
  let [size, setSize] = useState(18);
  console.log(size);
  return (
    <div>
      <h1 style={{ fontSize: `${size}px` }}>Welcome</h1>
      <button onClick={() => setSize((prev) => prev + 1)}>+</button>
      <button
        onClick={() => setSize((prev) => (prev > 15 ? prev - 1 : prev))}
        onClickCapture={() => (size <= 15 ? alert("Cant go below 15px") : "")}
      >
        -
      </button>
      {size <= 15 && <p>Can't go below 15px</p>}
    </div>
  );
};
export default FontSize;
