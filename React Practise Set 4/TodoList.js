import { useState } from "react";

const TodoList = ({ list }) => {
  const [data, setData] = useState(list);
  // const [prevData, setPrevData] = useState([]);
  const [history, setHistory] = useState([]);
  const removeItem = (ID) => {
    const arr = [...data];
    const newList = arr.filter(({ id }) => id !== ID);
    // setPrevData(data);
    setHistory([...history, data]);
    setData(newList);
  };
  const undo = () => {
    // setData(prevData);
    // setPrevData([]);
    if (history.length === 0) {
      return;
    }
    const prevData = history[history.length - 1];
    const newHistory = history.slice(0, history.length - 1);
    console.log(history, prevData);
    setHistory(newHistory);
    setData(prevData);
  };
  const done = (ID) => {
    const updatedData = data.map((el) =>
      el.id === ID ? { ...el, isDone: !el.isDone } : el
    );
    setData(updatedData);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <button disabled={!history.length} onClick={undo}>
        Undo Previous Action
      </button>
      {data.map((el) => (
        <div key={el.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',border:'2px dotted grey',margin:'20px',borderRadius:'6px'}}>
          <p style={{display:'inline-block',padding:'20px', textDecoration: !el.isDone ? "line-through" : "" }}>
            {el.task}
          </p>
          <div style={{padding:'20px'}}>
          <button onClick={() => removeItem(el.id)}>🗑</button>
          <button onClick={() => done(el.id)}>
            {!el.isDone ? "✅" : "❌"}
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TodoList;
