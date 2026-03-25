import axiosClient from "@/src/core/api/axios-instance";
import { Card_Dish_Type } from "../dish_type/card_dish_type";

export const DishCardHomeSevice=async ():Promise<Card_Dish_Type[]>=>{
    const response=await axiosClient.get<Card_Dish_Type[]>(`/dish?page=1&limit=5`)   ;     
    return response.data;
}