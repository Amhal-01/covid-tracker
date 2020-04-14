import Axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let newUrl = url
  if(country){
    newUrl = `${url}/countries/${country}`
  }
  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = await Axios.get(newUrl);
  return {
    confirmed,
    recovered,
    deaths,
    lastUpdate,
  };
};

export const fetchDailyData = async () => {
  const { data } = await Axios.get(`${url}/daily`);
  return data.map((dailyData) => ({
    confirmed: dailyData.confirmed.total,
    deaths: dailyData.deaths.total,
    date: dailyData.reportDate,
  }));
};

export const fetchCountries = async () => {
  const {
    data: { countries },
  } = await Axios.get(`${url}/countries`);
  return countries.map((country) => country.name);
};
