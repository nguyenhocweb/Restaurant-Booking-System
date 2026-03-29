import asyncHandler from "../../../core/utils/asyncHandler.js";
import { getBrandsService } from "../service.brand/getBrands.service.js";
import {NotFoundError} from "../../../core/constants/error/index.js"
export const getBrandsController=asyncHandler(
    async(req,res)=>{
       const page=parseInt(req.query.page);
       const limit=parseInt(req.query.limit);
       const city=req.query.city;
       const search=req.query.search;
       const where=[]
       if(city)where.push({city:city})
       if(search)where.push({name:{
        contains:search,// Tìm chuỗi con bên trong tên
        mode: 'insensitive',// Không phân biệt Hoa/Thường
       }});
       const result=await getBrandsService(page,limit,where); 
       
       switch (result.code) {
        case 404:
            throw new NotFoundError(result.mes)
        case 200:
            res.status(200).json(result.data)
            break;
      
       }
    }
)