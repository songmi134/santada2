import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://santada.herokuapp.com/",
  headers: {
    Authorization: "",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = localStorage.getItem("token");
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
