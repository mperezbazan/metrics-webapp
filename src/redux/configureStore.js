import { configureStore } from '@reduxjs/toolkit';
import countries from './Country/Country';

const store = configureStore({
  reducer: {
    countries,
  },
});

export default store;
