import request from "./ApiService";

export const getCityListRequest = async (cityName: string) => {
    const response = await request({
        method: 'GET',
        url: `http://api.geonames.org/searchJSON?q=${cityName}&maxRows=10&username=xkevin190`,
    })

    console.log("response", response)

    return response;
};