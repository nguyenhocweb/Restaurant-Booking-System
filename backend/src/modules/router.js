import { Router } from "express";
import authRouter from "./auth/auth.router.js";
import userRouter from "./user/user.router.js";
import brandRouter from "./brand/route.brand.js";
import restaurantRouter from "./restaurant/route.restaurant.js";
import dishRouter from "./dish/route.dish.js"
import aiRouter from "./ai/ai.router.js";
import tableRouter from "./table/router.table/index.js"
import dashboardRouter from "./dashboard/router.dashboard/index.js"
import reservationRouter from "./reservation/reservation.router/index.js";
import { authenticateToken } from "../core/middlewares/authenticateToken.js";
import cloudinaryRouter from "./cloudinary/router.cloudinary/index.js"
const route = Router();
route.use("/auth", authRouter);
route.use("/users", authenticateToken, userRouter);
route.use("/brand", brandRouter);
route.use("/ai", aiRouter);
route.use("/restaurant", restaurantRouter);
route.use("/dish", dishRouter);
route.use("/restaurant/:idRestaurant/table", tableRouter);
route.use("/restaurant/reservation", reservationRouter);
route.use("/cloudinary",authenticateToken,cloudinaryRouter)
route.use("/dashboard",authenticateToken,dashboardRouter)
export default route;