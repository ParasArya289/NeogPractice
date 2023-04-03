const Q3 = ({ list }) => {
    return (
      <div>
        {list.map(
          ({ name, magnitude }) => !(magnitude % 2) && <h1>{name}</h1>
        )}
      </div>
    );
  };
  export default Q3;
  