import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

import VARIABLE from './variable';

const timeout = VARIABLE.REQUEST.TIMEOUT;
const baseURL = VARIABLE.REQUEST.API_ADDRESS;

let AxiosClient = axios.create({
  baseURL: baseURL,
  timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

const registerInterceptorsRequest = (clientInstance: AxiosInstance) => {
  clientInstance.interceptors.request.use(
    async (config: any) => {
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    },
  );
};
registerInterceptorsRequest(AxiosClient);

const registerInterceptorResponse = (clientInstance: AxiosInstance) => {
  clientInstance.interceptors.response.use(
    async (response: {data: any}) => {
      const data = response.data || response;

      if (data.success) {
        return response.data || response;
      } else {
        return response.data || response;
      }
    },
    async (error: any) => {
      return Promise.reject(error);
    },
  );
};
registerInterceptorResponse(AxiosClient);

const setConfigAxiosClient = (accessToken: any, clientAxiosInstance: AxiosInstance) => {
  clientAxiosInstance.defaults.headers.common = {
    'Content-Type': 'application/json',
    Authorization: '',
  };
  clientAxiosInstance.defaults.timeout = timeout;
  if (accessToken) {
    clientAxiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }
};

export function setConfigAxios(accessToken: any) {
  setConfigAxiosClient(accessToken, AxiosClient);
}

const post = (url: string, data?: any, config = {}) => {
  return AxiosClient.post(url, data, config);
};

const get = (url: string, data?: AxiosRequestConfig<any> | undefined) => {
  return AxiosClient.get(url, data);
};

const put = (url: string, data?: any, config = {}) => {
  return AxiosClient.put(url, data, config);
};

const patch = (url: string, data: any, config = {}) => {
  return AxiosClient.patch(url, data, config);
};

const del = (url: string, config = {}) => {
  return AxiosClient.delete(url, config);
};

const postWithCustomHeader = (url: string, data: any, customHeaders: any) => {
  const config = {
    headers: {
      ...AxiosClient.defaults.headers.common,
      ...customHeaders,
    },
  };

  return AxiosClient.post(url, data, config);
};
const SysFetch = {
  post,
  get,
  put,
  patch,
  delete: del,
  postWithCustomHeader,
};

export default SysFetch;
