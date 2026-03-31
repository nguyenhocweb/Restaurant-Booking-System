import {demoValidator} from "../../../core/utils/validator.js";
import {z} from "zod"
export default z.object({
    query:z.object({
        page:demoValidator.int("page",1,255),
        limit:demoValidator.int("limit",1,255),
        city:demoValidator.chuoi("city").optional(),
        search:demoValidator.chuoi("search").optional()
    }),
    params:z.object({
        _id:demoValidator.chuoi("_id").optional(),
    })
})