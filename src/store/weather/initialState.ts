
export interface ILocation {
  city: string;
  country: string;
}

export interface WeatherState {
  listLocation: Array<ILocation>;
  selectedLocation: ILocation | null;
  loading: boolean;
  error: string | null;
}

// Define the initial state
export const initialState: WeatherState = {
  listLocation: [],
  selectedLocation: null,
  loading: false,
  error: null,
};