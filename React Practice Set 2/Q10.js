import { useState } from "react";

const Q10 = ({ list }) => {
  const [negate, setNegate] = useState();
  const [data, setData] = useState([...list]);
  const taskClr = (complete) => (complete ? "lime" : "tomato");

  const toggleTaskCompletion = (taskId) => {
    const updatedData = data.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setData(updatedData);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {data.map((el) => (
          <li
            key={el.id}
            style={{
              listStyle: "none",
              border: "2px dotted black",
              borderRadius: "6px",
              margin: "2rem",
              color: taskClr(el.isCompleted)
            }}
          >
            <h3>{el.title}</h3>
            <p>{el.description}</p>
            <button
              style={{
                background: "transparent",
                border: "1px solid black",
                margin: "6px",
                padding: "6px",
                borderRadius: "3px"
              }}
              onClick={() => {
                toggleTaskCompletion(el.id);
              }}
            >
              {el.isCompleted ? "Completed" : "Not Completed"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Q10;
