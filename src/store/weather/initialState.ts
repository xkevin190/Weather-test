export interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
}


// Define the initial state
export const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};