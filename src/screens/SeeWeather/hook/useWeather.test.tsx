import * as React from "react";
import { renderHook, act } from "@testing-library/react-hooks";

import useWeather from "./useWeather"; // Update with the correct path to your useWeather hook
import { getMockStore } from "../../../mock/mockStore";
import { Provider } from "react-redux";
import useAppDispatch from "../../../GeneralHooks/useAppDispatch";
import useAppSelector from "../../../GeneralHooks/useAppSelector";
import { changeWeatherProvider, fetchWeatherData } from "../../../store/weather/slice";
import { WeatherProvider } from "../../../services/WeatherService"; // Adjust based on your types
import { getLocationSelector } from "../../../store/location/selector";
import { getWeatherSelector } from "../../../store/weather/selector";



// Mock necessary actions and hooks
jest.mock("../../../store/weather/slice", () => ({
  changeWeatherProvider: jest.fn(),
  fetchWeatherData: jest.fn(),
}));

jest.mock("../../../GeneralHooks/useAppDispatch", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../../../GeneralHooks/useAppSelector", () => ({
  __esModule: true,
  default: jest.fn(),
}));



const dataMock = {
  location: { city: 'Madrid', country: 'Spain' },
  weather: { temperature: 20, condition: 'Clear' },
};


describe("useWeather hook", () => {
  let mockDispatch: jest.Mock;
  let mockSelector: jest.Mock;

  beforeEach(() => {
    mockDispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    mockSelector = (useAppSelector as jest.Mock).mockImplementation((selector) => {
      if (selector === getLocationSelector) {
        return dataMock.location;
      }
      if (selector === getWeatherSelector) {
        return dataMock.weather;
      }
    });
;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return default state values for weather and location", () => {
    const store = getMockStore();

    const { result } = renderHook(() => useWeather(), {
      wrapper: ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>,
    });

    const cityName = dataMock.location.city;
    // Assuming the default state for weather and location is set properly
    expect(result.current.weather).toEqual(dataMock.weather);
    expect(result.current.location).toEqual(dataMock.location);
    expect(mockDispatch).toHaveBeenCalledWith(fetchWeatherData(cityName));
    expect(mockDispatch).toHaveBeenCalledTimes(1);

  });

  it("should dispatch changeWeatherProvider when changeProvider is called", () => {
    const store = getMockStore();

    const { result } = renderHook(() => useWeather(), {
      wrapper: ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>,
    });

    const provider = WeatherProvider.VisualCrossing;
    act(() => {
      result.current.changeProvider(provider);
    });

    expect(mockDispatch).toHaveBeenCalledWith(changeWeatherProvider(provider));
  
  });
});