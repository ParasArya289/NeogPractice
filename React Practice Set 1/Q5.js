const Q5 = ({ data, container }) => {
    return (
      <div style={container}>
        <h1>Products</h1>
        <hr style={{ border: "1px solid white" }} />
        {data.map((el, i) => (
          <li
            style={{
              listStyle: "none",
              padding: "6px",
              border: `${!(i % 2) ? "1px solid white" : "none"}`,
              borderRadius: "6px"
            }}
          >
            {el.name}
          </li>
        ))}
      </div>
    );
  };
  export default Q5;