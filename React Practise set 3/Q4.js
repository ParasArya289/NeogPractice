const Q4 = ({ list, superPower }) => {
  console.log(list, superPower);
  return (
    <div>
      {list.map(
        (el) =>
          el.superpower === superPower && (
            <li>
              {el.name} - {el.superPower} - {el.magnitude}
            </li>
          )
      )}
    </div>
  );
};
export default Q4;
