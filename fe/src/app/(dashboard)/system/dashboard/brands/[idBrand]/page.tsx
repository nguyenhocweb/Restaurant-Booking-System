"use client"
import { Div,H,P } from "@/src/core/components/ui"
import { use } from "react";
const brandManagementPage=(  { params }: {
        params: Promise<{ idBrand: string }>
    })=>{
   // lấy id  
    const { idBrand } = use(params);

    return (
        <Div size="full" vitri="col_none">
           <H variant="text_black">Chi tiết thương hiệu </H>
           <P>Quản lý thực thể kinh doanh và và cấu trúc vận hành</P>
        </Div>
    )
}
export default brandManagementPage