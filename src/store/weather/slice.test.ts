
import { changeWeatherProvider, fetchWeatherData } from './slice'; 
import { initialState } from './initialState';
import { WeatherData } from '../../types/weather'; // Assuming these types exist
import { getWeather, WeatherProvider } from '../../services/WeatherService';
import { getMockStore } from '../../mock/mockStore';
import { MockPayloadWeather, successResponse } from '../../mock/weatherMock';


jest.mock('../../services/WeatherService', () => ({
    getWeather: jest.fn(),
    WeatherProvider: {
        VisualCrossing: 'VisualCrossing',
        WeatherStack: 'WeatherStack',
    }
}));

describe('weatherSlice - fetchWeatherData thunk', () => {
  let store: any;
  let successfulResponse: WeatherData;
  let errorResponse: any; // Simulate an error without specific details

  beforeEach(() => {
    successfulResponse = MockPayloadWeather

    errorResponse = {
        successful: false,
        response: null,
    };  

    store = getMockStore();
    });


  it('fetches weather data successfully and updates state', async () => {
    const location = 'London';
    const provider = WeatherProvider.VisualCrossing; // Expected provider
    (getWeather as jest.Mock).mockResolvedValueOnce(successResponse);

    await store.dispatch(fetchWeatherData(location));

    const state = store.getState().weather;

    expect(state.loading).toBe(false);
    expect(state.error).toEqual(false);
    expect(state.currentTemperature).toBe(successfulResponse.currentTemperature);
    expect(state.todayMaxTemperature).toBe(successfulResponse.todayMaxTemperature);
    expect(state.todayMinTemperature).toBe(successfulResponse.todayMinTemperature);
    expect(state.sunriseTime).toBe(successfulResponse.sunriseTime);
    expect(state.sunsetTime).toBe(successfulResponse.sunsetTime);
    expect(state.currentWeather).toBe(successfulResponse.currentWeather);
    expect(state.provider).toBe(provider);
    expect(state.ProviderColor).toBe(successfulResponse.ProviderColor);
  });

  it('handles errors and sets error state', async () => {
    
    const location = 'Paris';

    (getWeather as jest.Mock).mockRejectedValueOnce(errorResponse);

    await store.dispatch(fetchWeatherData(location));

    const state = store.getState().weather;

    expect(state.loading).toBe(false);
    expect(state.error).toEqual(true); 
    expect(state.currentTemperature).toBe(initialState.currentTemperature); 
    expect(state.todayMaxTemperature).toBe(initialState.todayMaxTemperature);
    expect(state.todayMinTemperature).toBe(initialState.todayMinTemperature);
    expect(state.sunriseTime).toBe(initialState.sunriseTime);
    expect(state.sunsetTime).toBe(initialState.sunsetTime);
    expect(state.currentWeather).toBe(initialState.currentWeather);
    expect(state.provider).toBe(initialState.provider); 
    expect(state.ProviderColor).toBe(initialState.ProviderColor);
  });

  it('updates the provider when changeWeatherProvider is dispatched', () => {
    const provider = WeatherProvider.WeatherApi;
    store.dispatch(changeWeatherProvider(provider));
    const state = store.getState().weather;
    expect(state.provider).toBe(provider);
  })
});