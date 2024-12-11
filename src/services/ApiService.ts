import type {
    HttpMethods,
    ApiResponse,
    ApiBody,
  } from '../types/services';

  
  export enum RESPONSE_STATUS {
    OK_RESPONSE = 200, // RETURN RESPONSE.JSON
    OK_NO_RESPONSE = 204, // RETURN UNDEFINED
    FAILED_BAD_REQUEST = 400, // RETURN BAD INFO
    FAILED_NO_PERMISSIONS = 401, // IF LOGGED (LOGOUT)
    FAILED_CREDENTIALS = 403,
    FAILED_NOT_FOUND = 404, // LOG BAD INFO (ALERT SOMETHING WAS WRONG)
    FAILED_APP_VERSION = 409, // IF LOGGED (LOGOUT) - ALWAYS ALERT FOR UPDATE
    FAILED_TO_MANY_REQUESTS = 429,
    FAILED_UNKNOWN_ERROR = 500, // LOG BAD INFO (ALERT SOMETHING WAS WRONG)
    FAILED_BAD_GATEWAY = 502, // LOG BAD INFO (ALERT SOMETHING WAS WRONG)
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
        console.error(e);
      return {
        successful: false,
        status: 400,
      };
    }
  };
  

  
  export default request;
  