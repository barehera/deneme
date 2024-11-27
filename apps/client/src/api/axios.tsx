import { env } from '@/env';
import axios, { type AxiosInstance } from 'axios';

const createApiInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: env.NEXT_PUBLIC_BASE_API_URL,
  });

  instance.interceptors.request.use((config) => {
    //TODO: Add authorization header and language param
    // setHeaders(config);
    // setLanguageParam(config);
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    },
    // (error) => {
    //   throw new Error(error.response.data.message);
    // },
  );

  return instance;
};

export const api = createApiInstance();
