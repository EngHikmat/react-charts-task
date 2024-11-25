import axios, { AxiosRequestConfig } from "axios";
import { ItemResponse, ListResponse } from "./structure";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_PRIVATE_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  console.log(config);
  config.headers["username"] = `username`;
  config.headers["password"] = `password`;

  return config;
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getList = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<ListResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  getItem = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<ItemResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  post = (data?: T | FormData, headers?: Record<string, string>) => {
    return axiosInstance
      .post<T>(this.endpoint, data, headers)
      .then((res) => res.data);
  };
  put = (data?: T | FormData, headers?: Record<string, string>) => {
    return axiosInstance
      .put<T>(this.endpoint, data, headers)
      .then((res) => res.data);
  };
  delete = async (data?: T) => {
    const config = {
      data: data,
    };

    return await axiosInstance
      .delete(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
