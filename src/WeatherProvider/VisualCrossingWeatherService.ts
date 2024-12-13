import request from "../services/ApiService";

const APIKEY = "YZ6WEBPN5Q5EWRKGJBYE9THVP";
const BASEURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

export const getWeather = async (city: string) => {
    console.log("VisualCrossingWeather", city);
   const result = await request({
        method: 'GET',
        url: `${BASEURL}/${city}?unitGroup=metric&key=${APIKEY}&contentType=json`
    })

    console.log(result);
};

const parseServiceResponse = (response: any) => {

};

