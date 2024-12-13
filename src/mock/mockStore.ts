import { configureStore } from '@reduxjs/toolkit';
import WeatherReducer from '../store/weather/slice';
import LocationReducer from '../store/location/slice';

export const getMockStore = () => {
   const store = configureStore({
        reducer: {
          weather: WeatherReducer,
          location: LocationReducer,
        },
      }); 
      return store;
};