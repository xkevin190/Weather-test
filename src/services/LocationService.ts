import { LocationResponse } from "../types/Location";
import { ApiResponse } from "../types/services";
import request from "./ApiService";

export const getCityListRequest = async (cityName: string) => {
    const response: ApiResponse<LocationResponse> = await request({
        method: 'GET',
        url: `http://api.geonames.org/searchJSON?q=${cityName}&maxRows=10&username=xkevin190`,
    })

    return response;
};