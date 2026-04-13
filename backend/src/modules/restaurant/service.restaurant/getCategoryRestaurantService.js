import {NotFoundError} from "../../../core/constants/error/index.js";
import { getCategoriesRestaurantRepository } from "../repository.restaurant/categoryRestaurant.js";
export const getCategoriesRestaurantService = async () => {
    const result = await getCategoriesRestaurantRepository();
    if (!result) {
        throw new NotFoundError("Không tìm thấy danh mục nhà hàng");
    }
    return result;
    // Implementation for fetching category restaurant data
};