import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { WeatherData } from '../../types/weather';
import { initialState } from './initialState';
import { getWeather, WeatherProvider } from '../../services/WeatherService';



export const fetchWeatherData = createAsyncThunk<
  WeatherData,  
  string,       
>(
  'weather/fetchWeatherData',
  async (location) => {
   await  getWeather(WeatherProvider.WeatherApi, location);
  }
);

// Redux slice
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action: PayloadAction<WeatherData>) => {
        state.loading = false;
        state.currentTemperature = action.payload.currentTemperature;
        state.todayMaxTemperature = action.payload.todayMaxTemperature;
        state.todayMinTemperature = action.payload.todayMinTemperature;
        state.sunriseTime = action.payload.sunriseTime;
        state.sunsetTime = action.payload.sunsetTime;
        state.currentWeather = action.payload.currentWeather;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch data';
      });
  },
});

export default weatherSlice.reducer;