// Convert the function getData, into an ES6 function with last amount of characters. 

// function getData(person) {
//     const name = person.name;
// 		const address = person.address.city
//     console.log(name); // John Doe
//     console.log(address); // New York
// }


const getData = ({name,address:{city}}) => console.log(name,'\n'+city)

const person = {
  name: 'John Doe',
  address: {
    city: 'New York',
    state: 'NY',
  },
};
getData(person);