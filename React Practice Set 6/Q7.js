import { useEffect, useState } from "react";
import { fakeFetch7 } from "./utils/utils";
const Q7 = () => {
  const [data, setData] = useState([]);
  const [toggleDescription, setToggleDescription] = useState({
    toggle: false,
    title: ""
  });
  // const [, set] = useState(true);
  const toggleHander = (key) => {
    setToggleDescription({
      ...toggleDescription,
      toggle: !toggleDescription.toggle,
      title: key
    });
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fakeFetch7("https://example.com/api/projects");
        const {
          data: { projects }
        } = res;
        setData(projects);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      {data.map(({ title, description, technologies, completed }) => (
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={() => toggleHander(title)}>
            {toggleDescription.toggle && toggleDescription.title === title
              ? "Show Less"
              : "Show More"}
          </button>
          {toggleDescription.toggle && toggleDescription.title === title && (
            <>
              <p>Technologies: {technologies.join(", ")}</p>
              <p>Completed: {completed}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
export default Q7;
