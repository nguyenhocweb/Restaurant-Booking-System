import axiosClient from "@/src/core/api/axios-instance";
import { Brand } from "../brands_type/brand-type";
export const BrandService=async(id:string)=>{
    const response=await axiosClient.get<Brand>(`/brand/${id}`)   ;     
    return response.data ;
}