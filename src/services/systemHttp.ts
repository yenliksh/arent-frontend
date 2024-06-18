import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: process.env.SYSTEM_REST_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers = { ...config.headers };
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default instance;
