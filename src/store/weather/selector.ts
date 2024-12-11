import { RootState } from "../../types/redux"

export const getCitySelector = (state: RootState) => {
    return state.weather.selectedLocation?.city;
}

export const getCountrySelector = (state: RootState) => {
    return state.weather.selectedLocation?.country;
}

export const getCountryAndCitySelector = (state: RootState) => {
    const { city, country } = state.weather.selectedLocation || {};
    return `${city}, ${country}`;
}

export const getListLocationSelector = (state: RootState) => {
    return state.weather.listLocation;
}