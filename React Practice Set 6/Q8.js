import { useEffect, useState } from "react";
import { fakeFetch8 } from "./utils/utils";
const Q8 = () => {
  const [data, setData] = useState({});
  const pStyle = { fontWeight: "800" };
  const spanStyle = { fontWeight: "200" };
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fakeFetch8("https://example.com/api/profile");
        const {
          data: { profiles }
        } = res;
        setData(profiles);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetch();
  }, []);
  console.log(data);
  const UpdateHandler = () => {
    const newName = prompt("Enter Your New Name");
    setData({
      ...data,
      name: newName
    });
  };
  return (
    <div>
      <p style={pStyle}>
        Name: <span style={spanStyle}>{data?.name}</span>
      </p>
      <p style={pStyle}>
        Age: <span style={spanStyle}>{data?.age}</span>
      </p>
      <p style={pStyle}>
        Gender: <span style={spanStyle}>{data?.gender}</span>
      </p>
      <p style={pStyle}>
        Email: <span style={spanStyle}>{data?.email}</span>
      </p>
      <p style={pStyle}>
        Occupation: <span style={spanStyle}>{data?.occupation}</span>
      </p>
      <button onClick={() => UpdateHandler()}>Update Profile</button>
    </div>
  );
};
export default Q8;
