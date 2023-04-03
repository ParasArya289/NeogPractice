const Q9 = ({ cars }) => {
    const category = cars.reduce(
      (acc, { category }) => (
        acc[category] ? acc[category]++ : (acc[category] = 1), acc
      ),
      {}
    );
    return (
      <div>
        <h1>Sports {category.sports}</h1>
        <h1>Luxury {category.luxury}</h1>
      </div>
    );
  };
  export default Q9;
  