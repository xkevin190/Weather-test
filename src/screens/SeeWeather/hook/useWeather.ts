import { useState, useEffect } from 'react';
import useAppDispatch from '../../../GeneralHooks/useAppDispatch';
import { fetchWeatherData } from '../../../store/weather/slice';
import useAppSelector from '../../../GeneralHooks/useAppSelector';
import {  getLocationSelector } from '../../../store/location/selector';

interface WeatherData {
    temperature: number;
    description: string;
    // Add more fields as needed
}

const useWeather = () => {
    const dispatch = useAppDispatch();
    const location = useAppSelector(getLocationSelector)

    useEffect(() => {
        if (!location?.city){
            return;
        }

        dispatch(fetchWeatherData(location.city));
    }, []);

    return {  };
};

export default useWeather;