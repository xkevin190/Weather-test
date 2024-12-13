import { RootState } from "../../types/redux";

export const getWeatherSelector = (state: RootState) => state.weather;