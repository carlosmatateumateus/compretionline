import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
})

export const timeApi = axios.create({
  baseURL: "http://worldtimeapi.org/api/"
})

export const locationApi = axios.create({
  baseURL: "https://ipapi.co/json/"
})