import axiosInstance from "./axiosInstance";

export const getCities = axiosInstance.get("/cities");

export const getRegions = axiosInstance.get("/regions");
