// Create a HTML page with a list of 5 items. HTML template has been provided below. Add your CSS to it as follows:

// Style the list items to have a font size of 18px, a font color of #333333 and a padding of 10px.
// Add a border of 1px solid #cccccc around each list item and a border radius of 5px.
// Add a margin of 5px below each list item.
import "../styles/q2.css";
export const Q2 = () => {
  return (
    <>
      <ul className="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
    </>
  );
};
