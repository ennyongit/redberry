import { CreateRealEstatePayload, RealEstate } from "../interfaces/realEstate";
import axiosInstance from "./axiosInstance";

// export const getRealEstate = () =>
//   axiosInstance.get<RealEstate[], RealEstate[]>("/real-estates");

// export const postRealEstate = (realEstatePayload: CreateRealEstatePayload) =>
//   axiosInstance.post<CreateRealEstatePayload, RealEstate>(
//     "/real-estates",
//     realEstatePayload
//   );

// export const getRealEstateById = (id: number) =>
//   axiosInstance.get<RealEstate, RealEstate>(`/real-estate/${id}`);

// export const deleteRealEstate = (id: number) =>
//   axiosInstance.delete<RealEstate, RealEstate>(`/real-estate/${id}`);
export const RealEstateApi = {
  getAll: (): Promise<RealEstate[]> =>
    axiosInstance.get<RealEstate[], RealEstate[]>("/real-estates"),

  getById: (id: number): Promise<RealEstate> =>
    axiosInstance.get<RealEstate, RealEstate>(`/real-estate/${id}`),

  create: (payload: CreateRealEstatePayload): Promise<RealEstate> =>
    axiosInstance.post<CreateRealEstatePayload, RealEstate>(
      "/real-estates",
      payload
    ),

  delete: (id: number): Promise<RealEstate> =>
    axiosInstance.delete<RealEstate, RealEstate>(`/real-estate/${id}`),
};
