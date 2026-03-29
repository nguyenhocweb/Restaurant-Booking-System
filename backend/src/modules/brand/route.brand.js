import {Router} from "express";

import {getBrandsController} from "./controller.brand/getBrands.controller.js";
import {getBrandByIdController} from "./controller.brand/getBrandById.controller.js";

import {validate} from "../../core/middlewares/validator.middleware.js";
import getBrandsValidator from "./validator.brand/getBrands.validator.js";
import getBrandByIdValidator from "./validator.brand/getBrandById.validator.js";

const route=Router();
route.get("",validate(getBrandsValidator),getBrandsController);
route.get("/:_id",validate(getBrandByIdValidator),getBrandByIdController);
export default route;