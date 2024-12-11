export type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type ApiBody = {
  query: string;
  variables?: any;
};

export interface ApiResponse<T> {
  successful: boolean | undefined;
  response?: T;
  status?: number;
}
export interface IApiQuery {
  page: number;
  limit: number;
  q?: {
    [key: string]: any;
  };
  sort?: {
    [key: string]: 'asc' | 'desc';
  };
  fields?: string;
  orFields?: string;
  [customQueryParam: string]: any;
}

export type apiService = <T>(
  path: string,
  options: {
    method: HttpMethods;
    body?: ApiBody;
    query?: IApiQuery;
    token?: string;
  },
  store: any,
  actions: any,
) => Promise<ApiResponse<T>>;