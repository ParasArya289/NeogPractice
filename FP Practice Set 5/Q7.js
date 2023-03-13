// Create an array of objects representing students in a class. Each object has the following properties: id, name, grade, and attendance. Write a React component that takes the array of students as input and generates an ordered list of students, where each list item displays the student's name, grade, and attendance.

const students = [
  {
    id: 1,
    name: "Paras Arya",
    grade: "A+",
    Attendance: "98%",
  },
  {
    id: 2,
    name: "Manish Kansana",
    grade: "B",
    Attendance: "75%",
  },
  {
    id: 3,
    name: "Suraj Sharma",
    grade: "A",
    Attendance: "56%",
  },
];
const Q7 = () => {
  return (
    <div>
      <h1>Students</h1>
      <ol>
        {students.map((el) => (
          <li>
            <h4>
              {el.name} : {el.grade}
            </h4>
            <span>{el.Attendance}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Q7;
