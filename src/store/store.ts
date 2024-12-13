import { configureStore } from '@reduxjs/toolkit';
import LocationReducer from './location/slice';
import WeatherReducer from './weather/slice';

const store = configureStore({
  reducer: {
    location: LocationReducer,
    weather: WeatherReducer,
  },
});

export default store;