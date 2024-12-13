import request, { RESPONSE_STATUS, EHttpMethod } from './ApiService'; // Adjust the import according to your file structure


global.fetch = jest.fn();

describe('request function', () => {
  afterEach(() => {
    jest.clearAllMocks(); 
  });

  it('should handle a successful response with JSON data', async () => {
    const mockResponse = { message: 'Success' };
    
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: RESPONSE_STATUS.OK_RESPONSE,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const options = {
      method: EHttpMethod.GET,
      url: 'https://api.example.com/data',
    };

    const result = await request(options);

    expect(result.successful).toBe(true);
    expect(result.status).toBe(RESPONSE_STATUS.OK_RESPONSE);
    expect(result.response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(options.url, expect.objectContaining({ method: options.method }));
  });

  it('should handle a successful response with no content', async () => {
    
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: RESPONSE_STATUS.OK_NO_RESPONSE,
      json: jest.fn(), 
    });

    const options = {
      method: EHttpMethod.GET,
      url: 'https://api.example.com/data',
    };

    const result = await request(options);

    expect(result.successful).toBe(true);
    expect(result.status).toBe(RESPONSE_STATUS.OK_NO_RESPONSE);
    expect(result.response).toBeUndefined();
  });

  it('should handle errors and return a 400 status', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    const options = {
      method: EHttpMethod.GET,
      url: 'https://api.example.com/data',
    };

    const result = await request(options);

    expect(result.successful).toBe(false);
    expect(result.status).toBe(400);
    expect(fetch).toHaveBeenCalledWith(options.url, expect.objectContaining({ method: options.method }));
  });

  it('should handle unhandled status codes and return a proper response', async () => {
    const mockErrorResponse = { error: 'Unhandled error' };

    
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 500, 
      json: jest.fn().mockResolvedValueOnce(mockErrorResponse),
    });

    const options = {
      method: EHttpMethod.POST,
      url: 'https://api.example.com/data',
      body: { key: 'value' },
    };

    const result = await request(options);

    expect(result.successful).toBe(false);
    expect(result.status).toBe(500);
    expect(result.response).toEqual(mockErrorResponse);
  });
});