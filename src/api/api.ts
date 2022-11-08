import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosParams = {
  baseURL: import.meta.env.BASE_API_URL || "lol"
};

console.log(axiosParams);

const axiosInstance = axios.create(axiosParams);

const api = (axios: AxiosInstance) => ({
  get: (url: string, config: AxiosRequestConfig) =>
    axios.get(url, config),

  post: (url: string, body: unknown, config: AxiosRequestConfig) =>
    axios.post(url, body, config),

  patch: (url: string, body: unknown, config: AxiosRequestConfig) =>
    axios.patch(url, body, config),

  delete: (url: string, config: AxiosRequestConfig) =>
    axios.delete(url, config),
});

export default api(axiosInstance)
