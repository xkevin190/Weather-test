import { getWeather } from "../services/weatherService"; // Update with the correct import path
import request from "../services/ApiService";
import { ServiceColor } from "../constants/color";

jest.mock("../services/ApiService");

describe("Get weather with the visualCrossing provider", () => {
  const mockCity = "Madrid";
  const mockApiResponse = {
    days: [
      {
        temp: 15,
        tempmax: 20,
        tempmin: 10,
        sunrise: "06:00 AM",
        sunset: "06:00 PM"
      }
    ],
    currentConditions: {
      conditions: "Clear"
    }
  };

  const mockApiResponseWithError = {
    successful: false,
    response: null
  };

  it("should return the correct weather data when the request is successful", async () => {
    (request as jest.Mock).mockResolvedValue({
      successful: true,
      response: mockApiResponse
    });

    
    const result = await getWeather("visualCrossing", mockCity);

    
    expect(result.successful).toBe(true);
    expect(result.response).toEqual({
      currentTemperature: 15,
      todayMaxTemperature: 20,
      todayMinTemperature: 10,
      sunriseTime: "06:00 AM",
      sunsetTime: "06:00 PM",
      currentWeather: "Clear",
      provider: "visualCrossing",
      ProviderColor: ServiceColor.visualCrossing
    });
  });

  it("should return an error response if the request is unsuccessful", async () => {

    (request as jest.Mock).mockResolvedValue(mockApiResponseWithError);

    const result = await getWeather("visualCrossing", mockCity);

    expect(result.successful).toBe(false);
    expect(result.response).toBeNull();
  });
});