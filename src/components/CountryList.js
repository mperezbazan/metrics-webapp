import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getWeatherAPI } from '../redux/Country/Country';
import Country from './Country';
import Loading from './Loading';
import Navbar from './Navbar';

const CountryList = () => {
  const [mainCountry, setMainCountry] = useState();
  const [filteredCountries, setFilteredCountries] = useState([]);
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
    setMainCountry(Math.floor(Math.random() * 243));
    getWeatherAPI();
    setFilteredCountries(countries);
  }, []);
  const handleChange = (e) => {
    const search = e.target.value;
    const newCountries = [...countries];
    const data = newCountries.filter((country) => (
      country.country.toLowerCase().includes(search.toLowerCase())));
    setFilteredCountries(data);
  };
  return (
    <>
      <div>
        <Navbar />
        {
        countries.length === 0
          ? <Loading />
          : (
            <>
              <Country item={countries[mainCountry]} fullwidth />
              <div className="home-mid-container">
                <p className="home-title">WEATHER BY COUNTRY</p>
                <input type="text" onChange={handleChange} className="search-input" placeholder="Search by country" />
              </div>
              <div className="countries-container">
                {
                  filteredCountries.map((country) => (
                    <Country key={country.alpha3} item={country} />
                  ))
                }
              </div>
            </>
          )
      }
      </div>
    </>
  );
};

export default CountryList;
