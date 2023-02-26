// Write an ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property. Avoid using in-built methods.

//one liner with map()
// const getValues = (arr) => arr.map(({name})=>name)

const getValues = (arr) =>{
    const values = [];
    for(let {name} of arr){
      values.push(name)
    }
    return values;
  }

  console.log(
    getValues(
      [
        { name: "John", age: 21 },
        { name: "Mary", age: 22 },
        { name: "Peter", age: 23 },
      ],
      "name"
    )
  ); // ["John", "Mary", "Peter"]