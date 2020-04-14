import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import style from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";
const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setcountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const countriesFetched = await fetchCountries();
      setcountries(countriesFetched);
    };
    fetchAPI();
  }, [countries]);
  return (
    <FormControl className={style.formControl}>
      <NativeSelect default="Morocco" onChange={({target}) => handleCountryChange(target.value)}>
        <option value="global">Global</option>
        {countries.map((country, id) => (
          <option key={id} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
