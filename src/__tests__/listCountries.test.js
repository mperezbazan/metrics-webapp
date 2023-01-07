import { getWeatherAPI, getWeather } from '../redux/Country/Country';

it('Expects getWeatherAPI get a function', () => {
  let countries = [];
  countries = getWeatherAPI();
  expect(typeof countries).toBe('function');
});
it('asd', () => {
  const countries = ['Argentina', 'Iran'];
  const getCountries = getWeather(countries);
  expect(countries.length).toBe(2);
  expect(getCountries.type).toBe('weatherapp/country/GET');
});
