import { getBrandById } from "../repository.brand/index.js";
export const getBrandByIdService=async(_id)=>{
    const brand=await getBrandById(_id);
    return brand?{code:200,data:brand}:{code:404,mes:"không tìm thấy tài nguyên"}
} 