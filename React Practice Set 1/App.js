//driver code
import Q1 from "./reactSet1/Q1";
import Q2 from "./reactSet1/Q2";
import "./styles.css";
import { btn, wrapper } from "./reactSet1/utils/stylesQ2";
import Q3 from "./reactSet1/Q3";
import { header, items, listStyle } from "./reactSet1/utils/Q3utils";
import Q4 from "./reactSet1/Q4";
import { caption, container, imageLink } from "./reactSet1/utils/Q4utils";
import Q5 from "./reactSet1/Q5";
import Q6 from "./reactSet1/Q6";
import { products } from "./reactSet1/utils/Q5utils";
import Q7 from "./reactSet1/Q7";
import { student } from "./reactSet1/utils/Q7utils";
import Q8 from "./reactSet1/Q8";
import { employees } from "./reactSet1/utils/Q8utils";

export default function App() {
  return (
    <div className="App">
      {/* <Q1 person={personObj} /> */}
      {/* <Q2 btn={btn} wrapper={wrapper} /> */}
      {/* <Q3 header={header} items={items} listStlye={listStyle} /> */}
      {/* <Q4 imageLink={imageLink} caption={caption} container={container}/> */}
      {/* <Q5 data={products} container={container}/> */}
      {/* <Q6 data={products} container={container} /> */}
      {/* <Q7 data={student} container={container}/> */}
      <Q8 container={container} employees={employees} />
    </div>
  );
}
