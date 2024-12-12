import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { initialState, WeatherData } from './initialState';
import { getCityListRequest } from '../../services/HttpsService';

// Define TypeScript types for weather data

export const getCityListThunk = createAsyncThunk<
  WeatherData,
  string,
  { rejectValue: string }
>('weather/getLocation', async (cityName) => {
  
    const result =  await getCityListRequest(cityName);
    
    if(!result.successful) {
      return Promise.reject(null);
    }

    return result.response?.geonames.map((item) => {
       return {
        city: item.name,
        country: item.countryName,
        id: item.geonameId
       }
    });
  
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
      state.error = false;
      state.listLocation = action.payload;
    });
    builder.addCase(getCityListThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const {  } = weatherSlice.actions;
export default weatherSlice.reducer;