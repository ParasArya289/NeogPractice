import { useState } from "react";

const Q6 = ({title,content}) => {
  const [knowMore,setKnowMore] = useState(false);
  return(
    <div>
      <h1>{title}</h1>
      <button onClick={()=>setKnowMore(!knowMore)}>Know More</button>
      {knowMore&& <p>{content}</p>}
    </div>
  )
}
export default Q6;