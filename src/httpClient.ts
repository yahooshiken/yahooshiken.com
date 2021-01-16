import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://api.yahooshiken.com"
      : "http://localhost:8080",
  timeout: 2000,
  headers: {
    "Content-type": "application/json",
  },
};

const httpClient = axios.create(config);

export default httpClient;
