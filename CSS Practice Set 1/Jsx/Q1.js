// Create a HTML page with a heading and a paragraph.

// Style the heading to have a font size of 36px and a font color of #333333.
// Style the paragraph to have a font size of 18px, a font color of #666666, and have a line height of 1.5.
// Add a margin of 20px between the heading and the paragraph.
// Use default serif font-family for heading and paragraph.
import "../styles/q1.css";
export const Q1 = () => {
  return (
    <>
      <h1 className="heading">This heading</h1>
      <p className="paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
    </>
  );
};
