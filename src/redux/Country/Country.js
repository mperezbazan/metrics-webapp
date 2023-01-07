import { createAsyncThunk } from '@reduxjs/toolkit';
import WeatherService from '../../services/WeatherService';

const GET_WEATHER = 'weatherapp/country/GET';
const GET_WEATHER_FULFILLED = 'weatherapp/country/GET/fulfilled';

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_WEATHER_FULFILLED:
      return [...action.payload];
    default:
      return state;
  }
}

export const getWeather = (payload) => ({
  type: GET_WEATHER,
  payload,
});

export const getWeatherAPI = createAsyncThunk(
  GET_WEATHER,
  async () => {
    const res = await WeatherService.getAll();
    return res;
  },
);
