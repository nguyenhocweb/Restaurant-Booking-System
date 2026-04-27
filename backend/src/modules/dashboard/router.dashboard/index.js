import { Router } from "express";


import { AdminDashboardStatController } from "../controller.dashboard/adminDashboardStat.crontroller.js";
const route=Router();
// thêm kiểm trạm sát quyền admin mới đc vào đây
route.use("/admin/stat",AdminDashboardStatController);

export default route