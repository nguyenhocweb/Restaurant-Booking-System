import axiosClient from "@/src/core/api/axios-instance";
import { CategoryRestaurantTypeResponse } from "../restaurant_type/categoryRestaurant";
export const CategoryRestaurantService=async():Promise<CategoryRestaurantTypeResponse[]>=>{
    const res=await axiosClient.get<CategoryRestaurantTypeResponse[]>("/restaurant/category")
    return res.data
} 