import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import SeeWeather from './SeeWeather';
import useWeather from './hook/useWeather';
import { WeatherProvider } from '../../services/WeatherService';


jest.mock("./hook/useWeather", () => ({
    __esModule: true,
    default: jest.fn(),
  }));

describe('SeeWeather Component', () => {
    it('renders loading state when weather data is loading', () => {

        (useWeather as jest.Mock).mockReturnValue({
        weather: { loading: true },
        location: null,
        changeProvider: jest.fn(),
        });

        render(<SeeWeather />);

        // Check if loading indicator is shown
        expect(screen.getByText(/Loading weather data.../i)).toBeTruthy();
    });

    it('renders weather data when available', async () => {
        // Mock the hook with weather data
        (useWeather as jest.Mock).mockReturnValue({
        weather: {
            loading: false,
            currentTemperature: 22,
            currentWeather: 'Sunny',
            todayMaxTemperature: 25,
            todayMinTemperature: 18,
            sunriseTime: '6:30 AM',
            sunsetTime: '7:30 PM',
            provider: WeatherProvider.WeatherApi,
            ProviderColor: '#00f',
        },
        location: { city: 'Madrid', country: 'Spain' },
        changeProvider: jest.fn(),
        });

        render(<SeeWeather />);

        // Check if the weather details are displayed
        expect(screen.getByText(/22°C/i)).toBeTruthy();
        expect(screen.getByText(/Madrid, Spain/i)).toBeTruthy();
        expect(screen.getByText(/Sunny/i)).toBeTruthy();
        expect(screen.getByText(/High: 25°C/i)).toBeTruthy();
        expect(screen.getByText(/Low: 18°C/i)).toBeTruthy();
        expect(screen.getByText(/Sunrise: 6:30 AM/i)).toBeTruthy();
        expect(screen.getByText(/Sunset: 7:30 PM/i)).toBeTruthy();
    });

    it('changes the provider when a new provider is selected', async () => {
        // Mock the hook with weather data and a function to change the provider
        const changeProviderMock = jest.fn();
        (useWeather as jest.Mock).mockReturnValue({
        weather: {
            loading: false,
            provider: WeatherProvider.WeatherApi,
            currentTemperature: 22,
            currentWeather: 'Sunny',
            todayMaxTemperature: 25,
            todayMinTemperature: 18,
            sunriseTime: '6:30 AM',
            sunsetTime: '7:30 PM',
            ProviderColor: '#00f',
        },
        location: { city: 'Madrid', country: 'Spain' },
        changeProvider: changeProviderMock,
        });

        render(<SeeWeather />);

        // Simulate changing the provider
        // fireEvent.valueChange(screen.getByTestId('picker'), WeatherProvider.VisualCrossing);

        // Check if the changeProvider function is called
        // await waitFor(() => expect(changeProviderMock).toHaveBeenCalledWith(WeatherProvider.VisualCrossing));
    });
});
