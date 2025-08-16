import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.real-estate-manager.redberryinternship.ge/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = "9fa65f37-7816-4e0c-9db1-0b9ee71acf98";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default axiosInstance;
