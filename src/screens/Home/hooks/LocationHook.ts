import { useNavigation } from "@react-navigation/native";
import useAppDispatch from "../../../GeneralHooks/useAppDispatch";
import useAppSelector from "../../../GeneralHooks/useAppSelector";
import { getCountryAndCitySelector, getListLocationSelector } from "../../../store/location/selector";
import { getCityListThunk, setSelectedLocation } from "../../../store/location/slice";
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
        dispatch(setSelectedLocation(selectedLocation))
        navigate("Details");
      }, []);



    return {selectedCountry, listLocation, findCity, handleSelect};
}

export default useLocation;