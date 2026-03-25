import { getBrands,countBrands } from "../repository.brand/index.js";
export const getBrandsService = async (page, limit,where) => {
 const [brands,total]=await Promise.all([
      getBrands({
        where: {
            AND:[
                ...where,
                {isActive:"ACTIVE"},
                {isFeatured:false}
            ]
        },
        page: page,
        limit: limit
    }),
   countBrands()
 ])
    
    return brands?{code:200,data:{data:brands,total:total}}:{code:404,mes:"không tìm thấy tài nguyên"}
}