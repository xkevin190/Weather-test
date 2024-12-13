import { WeatherProvider } from "../services/WeatherService";
import { ApiResponse } from "../types/services";
import { WeatherData } from "../types/weather";


export const MockPayloadWeather = {
    currentTemperature: 25,
    todayMaxTemperature: 30,
    todayMinTemperature: 20,
    sunriseTime: '06:00:00',
    sunsetTime: '18:00:00',
    currentWeather: 'Sunny',
    provider: WeatherProvider.VisualCrossing,
    ProviderColor: '#ffcc00', 
}

export const successResponse: ApiResponse<WeatherData>  = {
    successful: true,
    response: MockPayloadWeather,
}

export const failedResponse  = {
    successful: false,
    response: null,
}