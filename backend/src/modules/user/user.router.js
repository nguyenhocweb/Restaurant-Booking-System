

import { Router } from "express";
import { updateImageProfileController } from "./controller/updateImageProfile_controller.js";
import { UpdateInformationProfileController } from "./controller/updateInformationProfile_controller.js";
import { ChangePasswordController } from "./controller/changePassword_controller.js";
import { imageProfile } from "./user.validator/index.js";
import {validate} from "../../core/middlewares/validator.middleware.js";
import { upload } from "../../core/middlewares/upload.middleware.js";
const route=Router();

route.patch("/avatar", validate(imageProfile), updateImageProfileController);
route.patch("/profile",UpdateInformationProfileController)
route.patch("/changePassword",ChangePasswordController)
export default route; 