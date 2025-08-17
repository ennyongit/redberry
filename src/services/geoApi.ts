import { City, Region } from "../interfaces/geo";
import axiosInstance from "./axiosInstance";

export const getCities = () => axiosInstance.get<City[], City[]>("/cities");

export const getRegions = () =>
  axiosInstance.get<Region[], Region[]>("/regions");
