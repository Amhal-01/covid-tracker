import React, { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./assets/img/COVID19.png";
import styles from './App.module.css';

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
    <div class="container">
      <div class="row">
        <div class="col-md-12">
            <img src={img} className={styles.image} alt=""/>
          <Cards data={data} />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <CountryPicker
            handleCountryChange={handleCountryChange}
            data={data}
          />
          <Chart data={data} country={country} />
        </div>
      </div>
    </div>
  );
};

export default App;
