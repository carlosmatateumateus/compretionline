import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/"
})

export const timeApi = axios.create({
  baseURL: "http://worldtimeapi.org/api/"
})