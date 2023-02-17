// Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.

const person = {
    name:'Paras',
    age: '19',
    occupation:'Software Engineer'
  }
  
const changeOccupation = (obj,newOccupation) => obj.occupation = newOccupation;

  
console.log(person); // logs { name: 'Paras', age: 19, occupation: 'Software Engineer' } to the console

changeOccupation(person, 'Product Manager');

console.log(person); // logs { name: 'Paras', age: 19, occupation: 'Product Manager' } to the console
