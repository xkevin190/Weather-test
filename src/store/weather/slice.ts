import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { initialState, WeatherData } from './initialState';
import { getCityListRequest } from '../../services/HttpsService';

// Define TypeScript types for weather data

export const getCityListThunk = createAsyncThunk<
  WeatherData,
  string,
  { rejectValue: string }
>('weather/fetchWeather', async (cityName, { rejectWithValue }) => {
  
    const response =  await getCityListRequest(cityName);
    

    console.log("response", JSON.stringify(response))
  
});

// Create a slice for weather data
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder.addCase(getCityListThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCityListThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.listLocation = action.payload.listLocation;
    });
    builder.addCase(getCityListThunk.rejected, (state, action) => {
      // state.loading = false;
      // state.error = action.payload as string;
    });
  },
});

export const {  } = weatherSlice.actions;
export default weatherSlice.reducer;