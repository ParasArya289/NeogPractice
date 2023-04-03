const Q10 = ({ studentsList }) => {
    const mean = studentsList.reduce(
      (acc, { marks }) => acc + marks / studentsList.length,
      0
    );
    return (
      <div>
        <h1>
          {mean > 80 ? "Certification Approved" : "Certification Not Approved"}
        </h1>
      </div>
    );
  };
  export default Q10;
  