import { getWeather, WeatherProvider } from './WeatherService'; // Adjust the import according to your file structure
import { getWeather as WeatherApi } from '../WeatherProvider/WeatherApiService';
import { getWeather as VisualCrossingWeather } from '../WeatherProvider/VisualCrossingWeatherService';

// Mock the modules
jest.mock('../WeatherProvider/WeatherApiService', () => ({
  getWeather: jest.fn(),
}));

jest.mock('../WeatherProvider/VisualCrossingWeatherService', () => ({
  getWeather: jest.fn(),
}));

describe('getWeather function', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear all mocks after each test
  });

  it('should call WeatherApi when provider is "weatherApi"', async () => {
    const mockCity = 'London';
    const mockWeatherData = { temperature: 20, condition: 'Clear' };

    // Mock the WeatherApi function to return mock data
    (WeatherApi as jest.Mock).mockResolvedValueOnce(mockWeatherData);

    const result = await getWeather(WeatherProvider.WeatherApi, mockCity);

    expect(result).toEqual(mockWeatherData); // Verify the result matches the mock data
    expect(WeatherApi).toHaveBeenCalledWith(mockCity); // Verify that WeatherApi was called with the correct city
    expect(VisualCrossingWeather).not.toHaveBeenCalled(); // Verify that VisualCrossingWeather was not called
  });

  it('should call VisualCrossingWeather when provider is "visualCrossing"', async () => {
    const mockCity = 'Paris';
    const mockWeatherData = { temperature: 25, condition: 'Cloudy' };

    // Mock the VisualCrossingWeather function to return mock data
    (VisualCrossingWeather as jest.Mock).mockResolvedValueOnce(mockWeatherData);

    const result = await getWeather(WeatherProvider.VisualCrossing, mockCity);

    expect(result).toEqual(mockWeatherData); // Verify the result matches the mock data
    expect(VisualCrossingWeather).toHaveBeenCalledWith(mockCity); // Verify that VisualCrossingWeather was called with the correct city
    expect(WeatherApi).not.toHaveBeenCalled(); // Verify that WeatherApi was not called
  });

  it('should call WeatherApi by default when an unknown provider is passed', async () => {
    const mockCity = 'Berlin';
    const mockWeatherData = { temperature: 18, condition: 'Rainy' };

    // Mock the WeatherApi function to return mock data
    (WeatherApi as jest.Mock).mockResolvedValueOnce(mockWeatherData);

    const result = await getWeather('unknownProvider' as WeatherProvider, mockCity);

    expect(result).toEqual(mockWeatherData); // Verify the result matches the mock data
    expect(WeatherApi).toHaveBeenCalledWith(mockCity); // Verify that WeatherApi was called with the correct city
    expect(VisualCrossingWeather).not.toHaveBeenCalled(); // Verify that VisualCrossingWeather was not called
  });
});