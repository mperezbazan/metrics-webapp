import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getWeatherAPI } from '../redux/Country/Country';
import Country from './Country';

const CountryList = () => {
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
    getWeatherAPI();
  }, []);
  return (
    <>
      {
        countries.length > 0
        && (

        <div>
          <div>NAVBAR</div>
          <Country item={countries[Math.floor(Math.random() * countries.length)]} fullwidth />
          <p className="home-title">WEATHER BY COUNTRY</p>
          <div className="countries-container">
            {
              countries.map((country) => (
                <Country key={country.alpha3} item={country} />
              ))
            }
          </div>
        </div>
        )
      }
    </>
  );
};

export default CountryList;
