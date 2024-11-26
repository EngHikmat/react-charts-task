import axios, { AxiosRequestConfig } from "axios";
import { ItemResponse } from "./structure";
import CryptoStorage from "lib/utils/cryptoStorage";
import { UserInfo } from "store/auth.store";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_PRIVATE_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const data = CryptoStorage.getItem("authData") as UserInfo;

  if (data && data.username && data.password) {
    const authToken = btoa(`${data.username}:${data.password}`);
    config.headers["Authorization"] = `Basic ${authToken}`;
  }

  return config;
});
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        CryptoStorage.removeItem("isAuth");
        CryptoStorage.removeItem("authData");
        window.location.href = "/login";
      }
    } else {
      console.error("No response available. Possible network error:", error);
    }

    return Promise.reject(error);
  }
);

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getList = (config?: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
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
