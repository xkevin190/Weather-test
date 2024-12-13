import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ILocation, initialState  } from './initialState';
import { getCityListRequest } from '../../services/LocationService';



export const getCityListThunk = createAsyncThunk<
  ILocation[],
  string,
  { rejectValue: string }
>('weather/getLocation', async (cityName) => {
    const result =  await getCityListRequest(cityName);
    if(!result.successful) {
      return Promise.reject(null);
    }

    const parsed: ILocation[] = result.response?.geonames.map((item) => {
       return {
        city: item.name,
        country: item.countryName,
        id: item.geonameId
       }
    }) ?? [];

    return parsed;
  
});


const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setSelectedLocation: (state, action: PayloadAction<ILocation>) => {
      state.selectedLocation = action.payload;
    },
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

export const { setSelectedLocation } = locationSlice.actions;
export default locationSlice.reducer;