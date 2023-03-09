import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://www.api.yahooshiken.com"
      : "http://localhost:8080",
  timeout: 5000,
  headers: {
    "Content-type": "application/json",
  },
};

const httpClient = axios.create(config);

export default httpClient;
