import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { CookieKeys, getCookie } from 'utils';

const instance = axios.create({
  baseURL: process.env.REST_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getCookie(CookieKeys.TOKEN);
    if (token) config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default instance;
