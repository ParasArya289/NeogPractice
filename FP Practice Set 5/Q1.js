// Create an array of objects representing movies in your watchlist. Each object has the following properties: id, title and director. Write a React component that takes the array of movies as input and returns an unordered list of movies, where each list item displays the movie's title and director.
const watchlist = [
  {
    id: 1,
    title: "The Remains of the day",
    director: "James Ivory",
  },
  {
    id: 2,
    title: "Ikiru",
    director: "Akira Kurosawa",
  },
  {
    id: 3,
    title: "Third Star",
    director: "Hattie Dalton",
  },
];
const Q1 = () => {
  return (
    <div>
      <h1>My Watchlist</h1>
      <ul>
        {watchlist.map((el) => (
          <li key={el.id}>
            {el.title} : {el.director}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Q1;
