import * as React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useNavigation } from "@react-navigation/native";
import useLocation from "./LocationHook"; // Update with the correct path
import { getMockStore } from "../../../mock/mockStore";
import { Provider } from "react-redux";
import useAppDispatch from "../../../GeneralHooks/useAppDispatch";
import { getCityListThunk, setSelectedLocation } from "../../../store/location/slice";
import { Location } from "../../../types/Location";


jest.mock("../../../store/location/slice", () => ({
  getCityListThunk: jest.fn(),
  setSelectedLocation: jest.fn(),
}));

jest.mock("../../../GeneralHooks/useAppDispatch", () => ({
  __esModule: true, 
  default: jest.fn(),
}));

// Mock navigation
jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

describe("useLocation hook", () => {
  let mockDispatch: jest.Mock;
  let mockNavigate: jest.Mock;

  beforeEach(() => {
    
    mockDispatch = jest.fn();
    mockNavigate = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useNavigation as jest.Mock).mockReturnValue({ navigate: mockNavigate });
   
  
    
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  

  it("should return default state values for selectedCountry and listLocation", () => {
    const store = getMockStore();

    const { result } = renderHook(() => useLocation(), {
      wrapper: ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>,
    });


    expect(result.current.selectedCountry).toEqual(", ");
    expect(result.current.listLocation).toEqual([]);
  });

  it("should dispatch getCityListThunk when findCity is called", () => {
    const store = getMockStore();
    const { result } = renderHook(() => useLocation(), {
      wrapper: ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>,
    });

    const cityName = "New York";
    act(() => {
      result.current.findCity(cityName)
    });

    expect(mockDispatch).toHaveBeenCalledWith(getCityListThunk(cityName));
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    
    
  });


  it("should dispatch setSelectedLocation and navigate when handleSelect is called", () => {
    const store = getMockStore();
    const { result } = renderHook(() => useLocation(), {
      wrapper: ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>,
    });

    const selectedLocation: Location = { city: "New York", country: "USA", id: 1 };


    act(() => {
      result.current.handleSelect(selectedLocation);
    });
    expect(mockDispatch).toHaveBeenCalledWith(setSelectedLocation(selectedLocation));
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("Details");
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});
