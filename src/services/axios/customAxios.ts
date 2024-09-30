import { useRef } from "react";
import axios, {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { urls } from "../urls/urls";

const useCustomAxios = (contentType = "application/json") => {
  const customAxiosRef = useRef<AxiosInstance | null>(null);
  if (!customAxiosRef.current) {
    customAxiosRef.current = axios.create({
      baseURL: urls.baseUrl,
      headers: {
        "Content-Type": contentType,
      },
    });

    // Request interceptor
    customAxiosRef.current.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config;
      },
      (error: AxiosError) => {
        console.error("Request error:", error);
        return Promise.reject(error);
      },
    );
  
    // Response interceptor
    customAxiosRef.current.interceptors.response.use(
      
      (response: AxiosResponse) => {
       
        return response;

        
      },
      (error: AxiosError) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        )
        
        console.error("Response error:", error);
        return Promise.reject(error);
      },
    );
  
  }

  return customAxiosRef.current;
};

export default useCustomAxios;
