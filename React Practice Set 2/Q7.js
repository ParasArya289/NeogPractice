import { useState } from "react";

const Q7 = ({ heading, name, learning }) => {
  const [knowMore, setKnowMore] = useState(false);
  return (
    <div>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={() => setKnowMore(!knowMore)}>Know More</button>
      {knowMore && <p>{learning}</p>}
    </div>
  );
};
export default Q7;
