const Q6 = ({ data, container }) => {
  return (
    <div style={container}>
      <h1>Products</h1>
      <hr style={{ border: "1px solid white" }} />
      {data.map((el, i) => (
        <li
          style={{
            display: "flex",
            flexDirection: "column",
            listStyle: "none",
            padding: "6px",
            border: `${!(i % 2) ? "1px solid white" : "none"}`,
            borderRadius: "6px",
          }}
        >
          <strong style={{ fontSize: "18px" }}>{el.name}</strong>
          <span style={{ display: "block", padding: "3px" }}>
            Sales {el.sales}
          </span>
          <span style={{ display: "block", padding: "3px" }}>
            Qty {el.quantity}
          </span>
        </li>
      ))}
    </div>
  );
};
export default Q6;
