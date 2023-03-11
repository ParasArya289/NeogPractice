// Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.

const people = [
  { name: "Jeena", age: 25 },
  { name: "Priya", age: 30 },
  { name: "Naina", age: 45 },
];
// Your code here

const oldestPersonName = (arr) => {
  const { name } = people.reduce(({ name, age }, el) => {
    return age > el.age ? { name, age } : el;
  });
  return name;
};

console.log(oldestPersonName(people));
// Output: 'Naina'
