import { getWeather } from "../services/weatherService"; // Update with the correct path
import request from "../services/ApiService";
import { ServiceColor } from "../constants/color";

jest.mock("../services/ApiService");

describe("Get weather with the WeatherApi provider", () => {
  const mockCity = "Madrid";
  const mockSuccessfulApiResponse = {
    current: {
      temp_c: 18,
      condition: {
        text: "Partly cloudy"
      }
    },
    forecast: {
      forecastday: [
        {
          day: {
            maxtemp_c: 25,
            mintemp_c: 15
          },
          astro: {
            sunrise: "06:30 AM",
            sunset: "08:45 PM"
          }
        }
      ]
    }
  };

  const mockErrorApiResponse = {
    successful: false,
    response: null
  };

  it("should return parsed weather data when the request is successful", async () => {
    
    (request as jest.Mock).mockResolvedValue({
      successful: true,
      response: mockSuccessfulApiResponse
    });

    
    const result = await getWeather("weatherApi", mockCity);

    expect(result.successful).toBe(true);
    expect(result.response).toEqual({
      currentTemperature: 18,
      todayMaxTemperature: 25,
      todayMinTemperature: 15,
      sunriseTime: "06:30 AM",
      sunsetTime: "08:45 PM",
      currentWeather: "Partly cloudy",
      provider: "weatherApi",
      ProviderColor: ServiceColor.weatherApi
    });
  });

  it("should return an error response when the request fails", async () => {
    // Arrange: Mock the response for an unsuccessful request
    (request as jest.Mock).mockResolvedValue(mockErrorApiResponse);

    // Act: Call the `getWeather` function
    const result = await getWeather("weatherApi", mockCity);

    // Assert: Validate the error response
    expect(result.successful).toBe(false);
    expect(result.response).toBeNull();
  });
});