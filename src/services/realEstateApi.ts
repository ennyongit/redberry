import { RealEstate } from "../interfaces/realEstate";
import axiosInstance from "./axiosInstance";

export const getRealEstate = () => axiosInstance.get("/real-estates");

export const postRealEstate = (realEstate: RealEstate) =>
  axiosInstance.post("/real-estates", realEstate);

export const getRealEstateById = (id: number) =>
  axiosInstance.get(`/real-estate/${id}`);

export const deleteRealEstate = (id: number) =>
  axiosInstance.delete(`real-estate/${id}`);
