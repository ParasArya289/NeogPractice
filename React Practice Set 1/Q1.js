import "./Q1.css";
const Q1 = ({ person }) => {
  return (
    <div className="wrapper">
      <div className="card">
        <h1>{person.name}</h1>
        <h3>
          <span style={{ color: "lime" }}>Desingation: </span>
          {person.designation}
        </h3>
        <h3>
          <span style={{ color: "navy" }}>Experience: </span>
          {person.experience / 12} Years
        </h3>
      </div>
    </div>
  );
};
export default Q1;
