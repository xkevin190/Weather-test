import { ServiceColor } from "../constants/color";
import request from "../services/ApiService";
import { ApiResponse } from "../types/services";
import { WeatherData } from "../types/weather";
import { getCurrentDate } from "../utils/weatherUtils";

const APIKEY = "YZ6WEBPN5Q5EWRKGJBYE9THVP";
const BASEURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";


export const getWeather = async (city: string) => {

   const today = getCurrentDate();
   const result = await request({
        method: 'GET',
        url: `${BASEURL}/${city}/${today}/${today}?unitGroup=metric&key=${APIKEY}&contentType=json`
    })

    if(result.successful){
        result.response = parseServiceResponse(result.response);
    }
    
    return result as ApiResponse<WeatherData>;
};

const parseServiceResponse = (response: any) => {
    return {
        currentTemperature: response.days[0].temp,
        todayMaxTemperature: response.days[0].tempmax,
        todayMinTemperature: response.days[0].tempmin,
        sunriseTime: response.days[0].sunrise,
        sunsetTime: response.days[0].sunset,
        currentWeather: response.currentConditions.conditions,
        provider: "visualCrossing",
        ProviderColor: ServiceColor.visualCrossing
    }
};

