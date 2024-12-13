
export interface ILocation {
  city: string;
  country: string
  id: number;
}

export interface LocationState {
  listLocation: Array<ILocation>;
  selectedLocation: ILocation | null;
  loading: boolean;
  error: boolean;
}

// Define the initial state
export const initialState: LocationState = {
  listLocation: [],
  selectedLocation: null,
  loading: false,
  error: false,
};