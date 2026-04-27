"use client"
import { Div, H, P, Button,A } from "@/src/core/components/ui"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/src/core/components/ui/Table"

// Dữ liệu mẫu bám sát theo Prisma Schema
import { getDashboardBrands_Reponse } from "../dashboard_type/dashboard_brand_type";

const brandData:getDashboardBrands_Reponse[] = [
    {
        id: "64a1b2c3d4e5f60012345678", // Định dạng ObjectId
        name: "Công ty TNHH Alpha",
        isActive: "ACTIVE",
        tax_code: "0101234567",
        createdAt: "2023-05-12T08:30:00.000Z", // DateTime chuẩn ISO
        logo: "https://hinhcute.net/wp-content/uploads/2025/06/anh-dep-cho-may-tinh-va-dien-thoai-704x1024.jpg",
        isFeatured: true
    },
    {
        id: "64a1b2c3d4e5f60012345679",
        name: "Tập đoàn Beta",
        isActive: "INACTIVE",
        tax_code: "0309876543",
        createdAt: "2022-08-20T14:15:00.000Z",
        logo: "https://example.com/beta.jpg",
        isFeatured: false
    },
    {
        id: "64a1b2c3d4e5f6001234567a",
        name: "Startup Gamma",
        isActive: "ACTIVE",
        tax_code: "0103456789",
        createdAt: "2024-01-05T09:00:00.000Z",
        logo: "https://example.com/gamma.jpg",
        isFeatured: true
    },
    {
        id: "64a1b2c3d4e5f6001234567b",
        name: "Công ty Cổ phần Delta",
        isActive: "PENDING", // Khớp với @default(PENDING) trong schema
        tax_code: "0401112223",
        createdAt: "2026-04-19T10:45:00.000Z",
        logo: "https://example.com/delta.jpg",
        isFeatured: false
    }
];
import FadeIn from "@/src/core/components/animation/FadeIn";
type PVariant = "tabel_green" | "tabel_gray" | "tabel_red" | "default" | "glow" | "neon" | "truncate_1line" | "truncate_2line" | "text_black" | "tabel_orange" | "text_green" | "mes" | null | undefined;
type StatusStyle = {
    label: string;
    color: PVariant;
};
const STATUS_CONFIG: Record<string, StatusStyle> = {
    ACTIVE: { label: 'Hoạt động', color: "tabel_green" },
    PENDING: { label: 'Chờ duyệt', color: "tabel_gray" },
    INACTIVE: { label: 'Tạm ngưng', color: "tabel_orange" },
    TERMINATED: { label: "Đã chấm dứt", color: "tabel_red" }
};

import { useState } from "react";
import IsActiveBrand_component from "@/src/features/brands/brands_components/IsActiveBrand_component";
import { IsActiveBrand_type } from "@/src/features/brands/brands_type/isActiveBrand-type";
const DashboardBrand_component = () => {
    const [openNewActive, setOpenNewActive] = useState<Boolean>(false);
    const [ValueNewActive, setValueNewActive] = useState<IsActiveBrand_type>({
        name: "",
        isActive: "ACTIVE",
        logo: "",
        id: "",
        
    });
    const HandleSetActive = (ids: string) => {
        const brand = brandData.find(e => e.id === ids);
        setValueNewActive({
            name: brand?.name || "",
            isActive: brand?.isActive || "ACTIVE",
            logo: brand?.logo,
            id: brand?.id || ""
        });
        setOpenNewActive(true)
    }
    const HandleCloseActive=()=>{
        setOpenNewActive(false)
    }
    return (
        <>
            {
                openNewActive &&
              
                <IsActiveBrand_component id={ValueNewActive.id} name={ValueNewActive.name} isActive={ValueNewActive.isActive} logo={ValueNewActive.logo} onclickCloseActive={()=>{HandleCloseActive()}} />
           
            }
             <FadeIn delay={0.5}> 
            <Div variant="bg_white" size="full" vitri="col_none">
                <H variant="text_black">Vòng đời thương hiệu</H>
                <Table>
                    <TableHeader>
                        {/* Bạn có thể truyền variant "striped" hoặc "default" vào TableRow */}
                        <TableRow variant="default">
                            <TableHead className="w-[150px]">Tên </TableHead>
                            <TableHead className="w-[130px]">Trạng thái</TableHead>
                            <TableHead>Mã số thuế</TableHead>
                            <TableHead className="text-right">Ngày tham gia</TableHead>
                            <TableHead className="text-center">Hành động</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            brandData.map(e => (
                                <TableRow key={e.id} variant="striped">
                                    <TableCell className="font-medium"><P line="truncate_1line" variant="text_black" className="text-sm">{e.name}</P></TableCell>
                                    <TableCell><P variant={STATUS_CONFIG[e.isActive].color || "default"} className="text-sm rounded-lg" >{STATUS_CONFIG[e.isActive].label}</P></TableCell>
                                    <TableCell>{e.tax_code}</TableCell>
                                    <TableCell className="text-right">{new Date(e.createdAt).toLocaleDateString('vi-VN')}</TableCell>
                                    <TableCell className="text-right">
                                        <Div gap="g3_4">
                                            <A 
                                            href={`/system/dashboard/brands/${e.id}`}
                                            variant="green"
                                            sizea="p2_1"
                                            >
                                                Quản lý
                                                </A>
                                            <Button variant="gray" sizea="p2_1" onClick={()=>{HandleSetActive(e.id)}}>Đổi trạng thái</Button>
                                        </Div>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                        <TableRow className="bg-blue-200">
                            <TableCell colSpan={2}>
                                Hiện có tổng
                            </TableCell>
                            <TableCell colSpan={3}  >
                                <Div gap="g3_4" size="full" className=" justify-end">
                                    <Button variant="gray" sizea="p3_1">1</Button>
                                </Div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Div>
                </FadeIn>
        </>
    )
}
export default DashboardBrand_component