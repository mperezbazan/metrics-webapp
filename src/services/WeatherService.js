import http from '../http-common';
import CountryData from '../data/countries.json';

const getAll = async () => {
  const countries = CountryData.ref_country_codes;
  const newCountries = await Promise.all(
    countries.map(async (country) => {
      const lat = country.latitude;
      const lon = country.longitude;
      const res = await http.get(`forecast?current_weather=true&latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=CST`);
      const newData = { ...country, data: res.data };
      return newData;
    }),
  );
  return newCountries;
};

const WeatherService = {
  getAll,
};

export default WeatherService;
