import { ServiceColor } from "../constants/color";
import request from "../services/ApiService";
import { ApiResponse } from "../types/services";
import { WeatherData } from "../types/weather";

const APIKEY = "dda12dcb6ca74b8e9ae220828241212";
const BASEURL = "https://api.weatherapi.com/v1/forecast.json";

export const getWeather = async (city: string) => {
   const result =  await request({
        method: 'GET',
        url: `${BASEURL}?key=${APIKEY}&q=${city}&days=1`
    })

    if(result.successful){
         result.response = parseServiceResponse(result.response);
    }
    
    return result as ApiResponse<WeatherData>;
};

const parseServiceResponse = (response: any) => {
    return {
        currentTemperature: response.current.temp_c,
        todayMaxTemperature: response.forecast.forecastday[0].day.maxtemp_c,
        todayMinTemperature: response.forecast.forecastday[0].day.mintemp_c,
        sunriseTime: response.forecast.forecastday[0].astro.sunrise,
        sunsetTime: response.forecast.forecastday[0].astro.sunset,
        currentWeather: response.current.condition.text,
        provider: "weatherApi",
        ProviderColor: ServiceColor.weatherApi
    }
};