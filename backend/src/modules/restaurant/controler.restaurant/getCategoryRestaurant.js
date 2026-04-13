import asyncHandler from "../../../core/utils/asyncHandler.js";
import { getCategoriesRestaurantService } from "../service.restaurant/getCategoryRestaurantService.js";
export const getCategoriesRestaurantController=asyncHandler(async(req,res)=>{
    const data=await getCategoriesRestaurantService()
    res.status(200).json(data)
})