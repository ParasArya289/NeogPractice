// Create an array of objects representing employees in a company. Each object has the following properties: id, name, department, and salary. Write a React component that takes the array of employees as input and returns an unordered list of employees, where each list item displays the employee's name, department, and salary.

const employees = [
  {
    userId: "rirani",
    jobTitleName: "Developer",
    firstName: "Romin",
    lastName: "Irani",
    preferredFullName: "Romin Irani",
    employeeCode: "E1",
    region: "CA",
    phoneNumber: "408-1234567",
    emailAddress: "romin.k.irani@gmail.com",
  },
  {
    userId: "nirani",
    jobTitleName: "Developer",
    firstName: "Neil",
    lastName: "Irani",
    preferredFullName: "Neil Irani",
    employeeCode: "E2",
    region: "CA",
    phoneNumber: "408-1111111",
    emailAddress: "neilrirani@gmail.com",
  },
  {
    userId: "thanks",
    jobTitleName: "Program Directory",
    firstName: "Tom",
    lastName: "Hanks",
    preferredFullName: "Tom Hanks",
    employeeCode: "E3",
    region: "CA",
    phoneNumber: "408-2222222",
    emailAddress: "tomhanks@gmail.com",
  },
];

const Q4 = () => {
  return (
    <div>
      <h1>Employees data</h1>
      <ul>
        {employees.map((el) => (
          <li key={el.userId}>
            <h4 key={el.firstName}>
              {el.firstName} {el.lastName}
            </h4>
            <span key={el.jobTitleName}>{el.jobTitleName}</span>
            <br />
            <span key={el.emailAddress}>{el.emailAddress}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Q4;
