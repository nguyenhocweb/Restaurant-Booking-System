import { RestaurantCardResponseType } from "../restaurant_type/restaurant_card_type";
import axiosClient from "@/src/core/api/axios-instance";
export const RestaurantCardService=async({page,limit}:{page:number,limit:number}):Promise<RestaurantCardResponseType>=>{
       const response=await axiosClient.get<RestaurantCardResponseType>(`/restaurant?page=${page}&limit=${limit}`)
       return response.data
    }