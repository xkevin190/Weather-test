import {getWeather as WeatherApi} from '../WeatherProvider/WeatherApiService'
import {getWeather as VisualCrossingWeather} from '../WeatherProvider/VisualCrossingWeatherService'


export enum WeatherProvider {
    WeatherApi = 'weatherApi',
    VisualCrossing = 'visualCrossing'
}

export const getWeather = async (provider: string, city: string) => {
    switch (provider) {
        case WeatherProvider.WeatherApi:
            return await WeatherApi(city);
        case WeatherProvider.VisualCrossing:
            return  await VisualCrossingWeather(city);
        default:
            return WeatherApi(city);
    }
}
