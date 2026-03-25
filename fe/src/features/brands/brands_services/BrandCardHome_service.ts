import axiosClient from "@/src/core/api/axios-instance";
import { BrandCardType } from "../brands_type/brand-card-type";

export const BrandCardHomeSevice=async ():Promise<BrandCardType[]>=>{
    const response=await axiosClient.get<BrandCardType[]>(`/brand?page=1&limit=5`)   ;     
    return response.data;
}