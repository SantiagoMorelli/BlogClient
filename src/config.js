import axios from "axios";

export const axiosIntance = axios.create({
  baseURL: "https://blog1988.herokuapp.com/api",
});
