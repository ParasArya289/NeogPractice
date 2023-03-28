const Q7 = ({ data, container }) => {
  const { name, english, maths, computer } = data;
  const totalMarks = english + maths + computer;
  const giveGrade =
    totalMarks >= 225
      ? "A"
      : totalMarks >= 180
      ? "B"
      : totalMarks >= 150
      ? "C"
      : "D";

  return (
    <div style={container}>
      <h1>{name}'s Marks</h1>
      <h4>English: {english}</h4>
      <h4>Maths: {maths}</h4>
      <h4>Computer: {computer}</h4>
      <h3>Total Marks: {totalMarks}</h3>
      <h3>Grade: {giveGrade}</h3>
    </div>
  );
};
export default Q7;
