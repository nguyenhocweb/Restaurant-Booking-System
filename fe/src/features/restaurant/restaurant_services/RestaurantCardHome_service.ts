import { RestaurantCardResponseType } from "../restaurant_type/restaurant_card_type";
import axiosClient from "@/src/core/api/axios-instance";
export const RestaurantCardHomeService=async():Promise<RestaurantCardResponseType>=>{
       const response=await axiosClient.get<RestaurantCardResponseType>("/restaurant?page=1&limit=5")
       return response.data
    }