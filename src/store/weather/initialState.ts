
export interface ILocation {
  city: string;
  country: strin
  id: number;
}

export interface WeatherState {
  listLocation: Array<ILocation>;
  selectedLocation: ILocation | null;
  loading: boolean;
  error: boolean;
}

// Define the initial state
export const initialState: WeatherState = {
  listLocation: [],
  selectedLocation: null,
  loading: false,
  error: false,
};