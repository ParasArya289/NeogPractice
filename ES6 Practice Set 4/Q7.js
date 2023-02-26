// Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.

const teamId = Math.floor(9000000 * Math.random())
const podAndTeamAllocation = (data) => {
  return {
    ...data,
    teamId
  }
}

const userData = { firstName : "John", lastName: "Dee" }
console.log(podAndTeamAllocation(userData))
// {firstName: 'John', lastName: 'Dee', teamId: 667543}