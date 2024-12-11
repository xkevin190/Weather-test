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

export type apiService = <T>(
  path: string,
  options: {
    method: HttpMethods;
    body?: ApiBody;
    token?: string;
  },
  store: any,
  actions: any,
) => Promise<ApiResponse<T>>;