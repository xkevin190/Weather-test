import request from "../services/ApiService";

const APIKEY = "dda12dcb6ca74b8e9ae220828241212";
const BASEURL = "https://api.weatherapi.com/v1/forecast.json";

export const getWeather = async (city: string) => {
   const result =  await request({
        method: 'GET',
        url: `${BASEURL}?key=${APIKEY}&q=${city}&days=1`
    })

    console.log("WeatherApiService", result);
};

const parseServiceResponse = (response: any) => {

};