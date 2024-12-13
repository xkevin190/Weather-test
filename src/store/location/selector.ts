import { RootState } from "../../types/redux"

export const getCitySelector = (state: RootState) => {
    return state.location.selectedLocation?.city;
}

export const getCountrySelector = (state: RootState) => {
    return state.location.selectedLocation?.country;
}

export const getCountryAndCitySelector = (state: RootState) => {
    const { city, country } = state.location.selectedLocation || {};
    return `${city}, ${country}`;
}

export const getListLocationSelector = (state: RootState) => {
    return state.location.listLocation;
}

export const getLocationSelector = (state: RootState) => {
    return state.location.selectedLocation;
}