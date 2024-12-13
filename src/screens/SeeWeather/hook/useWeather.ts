import { useState, useEffect } from 'react';
import useAppDispatch from '../../../GeneralHooks/useAppDispatch';
import { changeWeatherProvider, fetchWeatherData } from '../../../store/weather/slice';
import useAppSelector from '../../../GeneralHooks/useAppSelector';
import {  getLocationSelector } from '../../../store/location/selector';
import { getWeatherSelector } from '../../../store/weather/selector';
import { WeatherProvider } from '../../../services/WeatherService';



const useWeather = () => {
    const dispatch = useAppDispatch();
    const location = useAppSelector(getLocationSelector)
    const weather = useAppSelector(getWeatherSelector);

    useEffect(() => {
        if (!location?.city){
            return;
        }

        dispatch(fetchWeatherData(location.city));
    }, [weather.provider]);


    const changeProvider = (provider: WeatherProvider) => {
        dispatch(changeWeatherProvider(provider));
        // dispatch(fetchWeatherData(provider));
    };

    return { weather, location, changeProvider };
};

export default useWeather;