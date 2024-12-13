import { getCityListRequest } from './LocationService'; // Adjust the import according to your file structure
import { ApiResponse } from '../types/services';
import { LocationResponse } from '../types/Location';
import request from './ApiService'; 

// Mock the request function from ApiService
jest.mock('./ApiService', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const url = 'http://api.geonames.org/searchJSON?q=Madrid&maxRows=10&username=xkevin190';

describe('getCityListRequest function', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear all mocks after each test
  });

  it('should successfully fetch a city list', async () => {
    const mockCityName = 'Madrid';
    const mockResponse: ApiResponse<LocationResponse> = {
      successful: true,
      status: 200,
      response: {
        totalResultsCount: 2,
        geonames: [
          {
              name: 'Madrid', countryName: 'Spain',
              adminCode1: '',
              lng: '',
              geonameId: 0,
              toponymName: '',
              countryId: '',
              fcl: '',
              population: 0,
              countryCode: '',
              fclName: '',
              adminCodes1: undefined,
              fcodeName: '',
              adminName1: '',
              lat: '',
              fcode: ''
          },
          {
              name: 'Madrid', countryName: 'United States',
              adminCode1: '',
              lng: '',
              geonameId: 0,
              toponymName: '',
              countryId: '',
              fcl: '',
              population: 0,
              countryCode: '',
              fclName: '',
              adminCodes1: undefined,
              fcodeName: '',
              adminName1: '',
              lat: '',
              fcode: ''
          },
        ],
      },
    };

    
    (request as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await getCityListRequest(mockCityName);
    

    expect(result).toEqual(mockResponse); 
    expect(request).toHaveBeenCalledWith({
      method: 'GET',
      url: url,
    }); 
  });

  it('should handle an error if request fails', async () => {
    const mockCityName = 'Madrid';
    const mockErrorResponse: ApiResponse<LocationResponse> = {
      successful: false,
      status: 500,
      
    };

    (request as jest.Mock).mockResolvedValueOnce(mockErrorResponse);

    const result = await getCityListRequest(mockCityName);

    expect(result).toEqual(mockErrorResponse);
  });
});