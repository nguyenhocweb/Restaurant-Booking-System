import asyncHandler from "../../../core/utils/asyncHandler.js";
import { AdminDashboardService } from "../service.dashboard/adminDashboardStat.service.js";
export const AdminDashboardStatController=asyncHandler(
    async(req,res)=>{
        const result=await AdminDashboardService();
        res.status(200).json(result)
    }
)