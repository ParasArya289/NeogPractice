import { useState } from "react";

const Q5 = ({ vegetables }) => {
  const [toggle, setToggle] = useState(false);

  const formatDate = () => {
    const date = new Date();
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const formatter = new Intl.DateTimeFormat("en-GB", options);
    const formattedDate = formatter.format(date).split("/").reverse().join("-");
    return formattedDate;
  };

  const freshDate = () => {
    //7 days before present date, excluding today's date
    const currDate = formatDate();
    let [year, month, day] = currDate.split("-");
    let dateArr = [];
    for (let i = 0; i < 7; i++) {
      if (day <= 1) {
        month--;
        day = 32 - day;
      } else {
        day--;
      }
      if (day < 10) {
        dateArr.push(`${year}-${month}-0${day}`);
      } else if (month < 10) {
        dateArr.push(`${year}-0${month}-${day}`);
      } else {
        dateArr.push(`${year}-0${month}-${day}`);
      }
    }
    return dateArr;
  };

  const validateFreshVegies = (date) => {
    const datesArr = freshDate();
    if (toggle) {
      for (let i of datesArr) {
        if (i === date) {
          return "2px solid hotpink";
        }
      }
    }
    return "2px solid black";
  };

  return (
    <div>
      <button
        style={{
          width: "12rem",
          height: "2rem",
          border: "none",
          color: "white",
          borderRadius: "6px",
          background: (toggle && "hotpink") || "black",
        }}
        onClick={() => setToggle(!toggle)}
      >
        Highlight Fresh Vegies
      </button>
      <ol>
        {vegetables.map((el) => (
          <li
            key={el.id}
            style={{
              border: validateFreshVegies(el.pickDate),
              borderRadius: "12px",
              margin: "2rem",
            }}
          >
            <h3>{el.name}</h3>
            <p>{el.pickDate}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Q5;
