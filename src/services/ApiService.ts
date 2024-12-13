import type {
    HttpMethods,
    ApiResponse,
    ApiBody,
  } from '../types/services';

  
  export enum RESPONSE_STATUS {
    OK_RESPONSE = 200, // RETURN RESPONSE.JSON
    OK_NO_RESPONSE = 204, // RETURN UNDEFINED
  }
  
  export enum EHttpMethod {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE',
  }
  
  const request = async <T>(options: {
    method: HttpMethods;
    body?: ApiBody;
    url: string;
  }): Promise<ApiResponse<T>> => {
    const { method, body } = options;
    try {
      const response = await fetch(options.url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : null,
      });
  
      switch (response.status) {
        case RESPONSE_STATUS.OK_RESPONSE:
          const res = await response.json();
          return {
            response: res,
            successful: true,
            status: response.status,
          };
        case RESPONSE_STATUS.OK_NO_RESPONSE:
          return {
            successful: true,
            status: response.status,
          };
      }
      const unhandledResponse = await response.json();
      return {
        successful: false,
        response: unhandledResponse,
        status: response.status,
      };
    } catch (e: any) {
      return {
        successful: false,
        status: 400,
      };
    }
  };
  

  
  export default request;
  