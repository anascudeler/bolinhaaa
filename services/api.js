import axios from "axios";
import { API_URL, API_KEY } from "../constants/config";

export const api = axios.create({  
  baseURL: API_URL,
  params:{
    language: "pt-BR"
  }
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${API_KEY}`;
  config.headers.accept = "application/json";
  return config;
});

