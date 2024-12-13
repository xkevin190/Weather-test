import { ServiceColor } from "../../constants/color";
import { WeatherProvider } from "../../services/WeatherService";

export interface WeatherState {
    currentTemperature: number | null;
    todayMaxTemperature: number | null;
    todayMinTemperature: number | null;
    sunriseTime: string | null;
    sunsetTime: string | null;
    currentWeather: string | null;
    loading: boolean;
    error: string | null;
    provider: WeatherProvider;
    ProviderColor: string;

  }
  
  
export const initialState: WeatherState = {
    currentTemperature: null,
    todayMaxTemperature: null,
    todayMinTemperature: null,
    sunriseTime: null,
    sunsetTime: null,
    currentWeather: null,
    loading: false,
    error: null,
    provider: WeatherProvider.VisualCrossing,
    ProviderColor: ServiceColor.visualCrossing
  };