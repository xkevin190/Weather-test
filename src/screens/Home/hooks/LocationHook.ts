import { useNavigation } from "@react-navigation/native";
import useAppDispatch from "../../../GeneralHooks/useAppDispatch";
import useAppSelector from "../../../GeneralHooks/useAppSelector";
import { getCountryAndCitySelector, getListLocationSelector } from "../../../store/weather/selector";
import { getCityListThunk } from "../../../store/weather/slice";
import { NavigationProps } from "../../../types/navigation";
import { useCallback } from "react";
import { Location } from "../../../types/Location";


const useLocation =()=> {
    const selectedCountry = useAppSelector(getCountryAndCitySelector)
    const listLocation = useAppSelector(getListLocationSelector)
    const { navigate} = useNavigation<NavigationProps>();
    
    const dispatch = useAppDispatch();

    const findCity = (cityName: string) =>{
        dispatch(getCityListThunk(cityName))
    }

    const handleSelect = useCallback((selectedLocation: Location) => {
        console.log(`Ciudad seleccionada: ${selectedLocation.city}, ${selectedLocation.country}`);
      }, []);


    return {selectedCountry, listLocation, findCity, handleSelect};
}

export default useLocation;