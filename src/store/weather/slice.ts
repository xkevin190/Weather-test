import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { WeatherData } from '../../types/weather';
import { initialState } from './initialState';
import { getWeather, WeatherProvider } from '../../services/WeatherService';
import { RootState } from '../../types/redux';

export const fetchWeatherData = createAsyncThunk<
  WeatherData,  
  string    
>(
  'weather/fetchWeatherData',
  async (location, {getState}) => {
    const state = getState() as RootState;
    const result  = await  getWeather(state.weather.provider, location);
    if(!result.successful){
      Promise.reject(null);
    }

    return result.response!
  }
);

// Redux slice
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeWeatherProvider(state, action: PayloadAction<WeatherProvider>) {
      state.provider = action.payload;
    },
  },
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
        state.provider = action.payload.provider as WeatherProvider;
        state.ProviderColor = action.payload.ProviderColor
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { changeWeatherProvider } = weatherSlice.actions;
export default weatherSlice.reducer;