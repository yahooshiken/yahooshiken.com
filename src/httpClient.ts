import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "http://localhost:8080",
  timeout: 2000,
  headers: {
    "Content-type": "application/json",
  },
};

const httpClient = axios.create(config);

export default httpClient;
