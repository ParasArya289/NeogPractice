//Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.

const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]
// Your code here
const studentNames = (arr) => arr.filter(el=>el.toUpperCase().startsWith('A'))

console.log(studentNames(studentName));
// Output: ["Anjali", "Arpit", "Ankit"]