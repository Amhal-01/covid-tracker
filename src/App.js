import React, { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import Style from "./App.module.css";
import { fetchData } from "./api";

const App = () => {
  const getData = async (_country) => {
    const covidData = await fetchData(_country);
    setData(covidData);
  };
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");
  useEffect(() => {
    getData(country);
  }, [country]);
  const handleCountryChange = (_country) => {
    setCountry(_country);
  };
  return (
    <div className={Style.container}>
      <Cards data={data} />
      <Chart data={data} country={country} />
      <CountryPicker handleCountryChange={handleCountryChange} data={data} />
    </div>
  );
};

export default App;
