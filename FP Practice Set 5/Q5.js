// Create an array of objects representing recipes in a cookbook. Each object has the following properties: id, recipe name, recipe creator name. Write a React component that takes the array of recipes as input and returns an unordered list, where each list item displays the recipe's name and recipe creator name.
const recipes = [
  {
    id: 1,
    name: "Butter Chicken",
    chef: "XYZ",
  },
  {
    id: 2,
    name: "Palak Paneer",
    chef: "YZZ",
  },
  {
    id: 3,
    name: "Chole Bhature",
    chef: "ABC",
  },
];
const Q5 = () => {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((el) => (
        <li>
          {el.name} : {el.chef}
        </li>
      ))}
    </div>
  );
};
export default Q5;
