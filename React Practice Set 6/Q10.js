import { useEffect, useState } from "react";
import { fakeFetch10 } from "./utils/utils";
const Q10 = () => {
  const [data, setData] = useState({});
  const pStyle = { fontWeight: "800" };
  const spanStyle = { fontWeight: "200" };
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fakeFetch10("https://example.com/api/profile");
        const {
          data: { profile }
        } = res;
        setData(profile);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetch();
  }, []);
  const FollowHandler = () => {
    setData({
      ...data,
      followers: data.isFollowed ? data.followers - 1 : data?.followers + 1,
      isFollowed: data?.isFollowed ? false : true
    });
  };
  return (
    <div>
      <p style={pStyle}>
        Name: <span style={spanStyle}>{data?.name}</span>
      </p>
      <p style={pStyle}>
        Email: <span style={spanStyle}>{data?.email}</span>
      </p>
      <p style={pStyle}>
        Gender: <span style={spanStyle}>{data?.gender}</span>
      </p>
      <p style={pStyle}>
        Occupation: <span style={spanStyle}>{data?.occupation}</span>
      </p>
      <p style={pStyle}>
        Followers: <span style={spanStyle}>{data?.followers}</span>
      </p>
      <p style={pStyle}>
        FollowedBy: <span style={spanStyle}>{data?.followedBy}</span>
      </p>
      <button onClick={FollowHandler}>
        {!data?.isFollowed ? `Follow ${data.name}` : `Unfollow ${data.name}`}
      </button>
    </div>
  );
};
export default Q10;
