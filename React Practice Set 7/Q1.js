import { useEffect, useState } from "react";
import { fakeFetch } from "./utils/utils";

const Q1 = () => {
  const [data, setData] = useState({});
  const [toggler, setToggler] = useState(true);
  const [loading, setLoading] = useState(false);
  const [changedTemperature, setChangedTemperature] = useState();

  useEffect(() => {
    const fetch = async (url) => {
      try {
        setLoading(true);
        const res = await fakeFetch(url);
        setLoading(false);
        const { data } = res;
        setData(data);
        setChangedTemperature(data?.temperature + " ℃");
      } catch (e) {
        setLoading(false);
        console.error(e);
      }
    };
    fetch("https://example.com/api/weather");
  }, []);
  const ChangeHandler = () => {
    setToggler(!toggler);
    const fahrenheit = (data.temperature * 9) / 5 + 32 + " ℉";
    if (toggler) setChangedTemperature(fahrenheit);
    else setChangedTemperature(data?.temperature + " ℃");
  };
  return (
    <div>
      <h1>Wheather</h1>
      <p>Temperature: {changedTemperature}</p>
      <p>Humidity: {data.humidity}</p>
      <p>Wind Speed: {data.windSpeed}</p>
      <button disabled={loading} onClick={() => ChangeHandler()}>
        {toggler ? "Change to Fahrenheit" : "Change to Celcius"}
      </button>
    </div>
  );
};
export default Q1;
