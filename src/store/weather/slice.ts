import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { initialState, WeatherData } from './initialState';

// Define TypeScript types for weather data

export const fetchWeather = createAsyncThunk<
  WeatherData,
  string,
  { rejectValue: string }
>('weather/fetchWeather', async (location, { rejectWithValue }) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data: WeatherData = await response.json();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

// Create a slice for weather data
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    clearWeatherData: (state) => {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<WeatherData>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || 'Unknown error';
      });
  },
});

export const { clearWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;