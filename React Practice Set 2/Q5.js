const Q5 = ({ products }) => {
    const filterMobile = products.filter(({ name }) => name === "mobile");
    return (
      <div>
        {filterMobile.map((el) => (
          <li>
            {el.price} | {el.description} | {el.name}{" "}
          </li>
        ))}
      </div>
    );
  };
  export default Q5;
  