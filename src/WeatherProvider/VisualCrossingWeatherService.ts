import request from "../services/ApiService";

const APIKEY = "YZ6WEBPN5Q5EWRKGJBYE9THVP";
const BASEURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";


const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months start from 0
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};


export const getWeather = async (city: string) => {

    const today = getCurrentDate();
   const result = await request({
        method: 'GET',
        url: `${BASEURL}/${city}/${today}/${today}?unitGroup=metric&key=${APIKEY}&contentType=json`
    })

    if(result.successful){
        result.response = parseServiceResponse(result.response);
    }
    console.log('VisualCrossingWeather', JSON.stringify(result));
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
    }
};

