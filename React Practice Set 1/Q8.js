const Q8 = ({ container, employees }) => {
  const totalExpense = employees.reduce((acc, { salary }) => acc + salary, 0);

  return (
    <div>
      {employees.map((el) => (
        <div
          style={{
            border: `${
              el.designation === "President" ? "2px dotted grey" : "none"
            }`,
            ...container,
          }}
        >
          <h3>{el.name}</h3>
          <h4 style={{ backgroundColor: `${el.level === 2 ? "orange" : ""}` }}>
            Level: {el.level}
          </h4>
          <h4>Department: {el.dept}</h4>
          <h4>Designation: {el.designation}</h4>
          <h4>Salary: {el.salary}</h4>
        </div>
      ))}
      <h2>Total Expense: {totalExpense}</h2>
    </div>
  );
};
export default Q8;
