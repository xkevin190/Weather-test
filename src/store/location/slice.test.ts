import { mockLocationResponse, mockLocations } from "../../mock/locationMock";
import { getMockStore } from "../../mock/mockStore";
import { getCityListRequest } from "../../services/LocationService";
import { ILocation, LocationState } from "./initialState";
import { getCityListThunk, setSelectedLocation } from "./slice";



jest.mock('../../services/LocationService', () => ({
    getCityListRequest: jest.fn(),
}));

describe('LocationSlice - getCityListThunk ', () => {
  let store: any;
  let successfulResponse: ILocation[];
  let errorResponse: any; 

  beforeEach(() => {
    successfulResponse = mockLocations

    errorResponse = {
        successful: false,
        response: null,
    };

    store = getMockStore();
    });


  it('fetches location data successfully and updates state', async () => {
    const location = 'Paris';
   
    (getCityListRequest as jest.Mock).mockResolvedValueOnce(mockLocationResponse);

    await store.dispatch(getCityListThunk(location));

    const state = store.getState().location as LocationState;


    expect(state.loading).toBe(false);
    expect(state.error).toEqual(false);
    expect(state.listLocation).toEqual(successfulResponse);
  });

  it('handles errors and sets error state', async () => {
    
    const location = 'Paris';
   
    (getCityListRequest as jest.Mock).mockResolvedValueOnce(errorResponse);

    await store.dispatch(getCityListThunk(location));

    const state = store.getState().location as LocationState;


    expect(state.loading).toBe(false);
    expect(state.error).toEqual(true); 
    expect(state.listLocation).toEqual([]);

    
  });

  it('updates the location when setSelectedLocation is dispatched', () => {
    const location = {
        city: "Paris",
        country: "France",
        id: 2,
    }
     store.dispatch(setSelectedLocation(location));
     const state = store.getState().location as LocationState;
     expect(state.selectedLocation).toBe(location);
  })
});