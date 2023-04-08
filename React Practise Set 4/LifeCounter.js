import { useState } from "react";

const LifeCounter = () => {
  const [counter, setCounter] = useState(3);
  return (
    <div>
      <h1>Life Counter</h1>
      <h4>Remaining Lives: {counter}</h4>
      <button onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>
        Lose a life
      </button>
      <button onClick={() => setCounter(3)}>Restart</button>
      {!counter && <p>Game Over</p>}
    </div>
  );
};
export default LifeCounter;
