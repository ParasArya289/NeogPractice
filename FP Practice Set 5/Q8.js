// Create an array of objects representing movies in your watchlist. Each object has the following properties: id, title, director, and runtime. Write a React component that takes the array of movies as input and generates an ordered list of movies, where each list item displays the movie's title, director, and runtime.

const watchlist = [
  {
    id: 1,
    title: "The Remains of the day",
    director: "James Ivory",
    runtime: 192,
  },
  {
    id: 2,
    title: "Ikiru",
    director: "Akira Kurosawa",
    runtime: 120,
  },
  {
    id: 3,
    title: "Third Star",
    director: "Hattie Dalton",
    runtime: 206,
  },
];
const Q8 = () => {
  return (
    <div>
      <h1>Watchlist</h1>
      <ol>
        {watchlist.map((el) => (
          <li>
            {el.title} : {el.director} :{" "}
            {("" + (el.runtime / 60).toFixed(2))
              .split(".")
              .map((el, i) => (!(i % 2) ? el + "hr " : el + "min "))}
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Q8;
