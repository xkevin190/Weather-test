import useAppDispatch from "../../../GeneralHooks/useAppDispatch";
import useAppSelector from "../../../GeneralHooks/useAppSelector";
import { getCountryAndCitySelector, getListLocationSelector } from "../../../store/weather/selector";
import { getCityListThunk } from "../../../store/weather/slice";


const useLocation =()=> {
    const selectedCountry = useAppSelector(getCountryAndCitySelector)
    const listLocation = useAppSelector(getListLocationSelector)
    const dispatch = useAppDispatch();

    const findCity = (cityName: string) =>{
        dispatch(getCityListThunk(cityName))
    }

    return {selectedCountry, listLocation, findCity};
}

export default useLocation;