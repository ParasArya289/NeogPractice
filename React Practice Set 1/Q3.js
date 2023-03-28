const Q3 = ({ header, items, listStyle }) => {
  return (
    <div>
      <h1>{header}</h1>
      <ol>
        {items.map((el) => (
          <li style={listStyle} key={el}>
            {el[0].toUpperCase() + el.slice(1)}
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Q3;
