import { Div, H, P } from "../ui"
import React, { ReactNode,useEffect,useState } from 'react';

import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import FadeIn from "../animation/FadeIn";
interface StatCardProps {
    index: number,
    title: string;
    value: string | number;
    icon: ReactNode;
    iconWrapperClass?: string; // Cho phép tùy chỉnh màu nền/chữ của từng icon
    trendValue?: string;
    trendLabel?: string;
    trendType?: 'up' | 'down' | 'neutral';
}


const colorBorder = [
    "border-blue-500",    // Xanh dương (dành cho thông tin chung)
    "border-indigo-500",  // Xanh chàm (dành cho người dùng/nhà hàng)
    "border-emerald-500", // Xanh ngọc/Xanh lá (dành cho doanh thu/thành công)
    "border-purple-500",  // Tím (dành cho yêu cầu/tác vụ)
    "border-amber-500",   // Vàng hổ phách (dành cho cảnh báo/chờ duyệt)
    "border-rose-500",    // Đỏ hồng (dành cho lỗi/hủy bỏ)
    "border-sky-500",     // Xanh da trời 
    "border-teal-500"     // Xanh mòng két
];
// 2. Hàm lấy màu ngẫu nhiên từ ngân hàng màu
const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorBorder.length);
    return colorBorder[randomIndex];
};
const Public_Stat_Card = ({ index, title, value, icon, iconWrapperClass, trendLabel, trendValue, trendType }: StatCardProps) => {
    // random màu
    const [safeColor,setSafeColor]=useState("border-blue-500")
    useEffect(()=>{setSafeColor(getRandomColor)},[])
    const isPositive = trendType === 'up';
    const isNegative = trendType === 'down';
    return (
        <FadeIn delay={index / 10}>
            <Div variant="bg_white" size="full" className={`w-65 h-30 border-l-4 justify-start ${safeColor}`}>
                <Div className={` w-12 h-12 rounded-xl shrink-0 text-xl ${iconWrapperClass}`}>
                    {icon}
                </Div>
                <Div vitri="col_none" >
                    <H className="text-sm font-semibold text-gray-500 mb-1">{title}</H>
                    <P className="text-2xl font-bold " variant="text_black">{value}</P>
                    {/* Khu vực hiển thị tăng/giảm */}
                    {(trendValue || trendLabel) && (
                        <div className="flex items-center gap-1 mt-1 text-xs">
                            <span
                                className={
                                    `font-semibold flex items-center gap-0.5
                                    ${isPositive ? 'text-green-500' : ''}
                                    ${isNegative ? 'text-red-500' : ''}
                                    ${!isPositive && !isNegative ? 'text-gray-500' : ''}
                                    `
                                    }
                            >
                                {/* Thêm icon mũi tên tinh tế từ react-icons */}
                                {isPositive && <FiTrendingUp className="w-3.5 h-3.5" />}
                                {isNegative && <FiTrendingDown className="w-3.5 h-3.5" />}
                                {trendValue}
                            </span>
                            <span className="text-gray-400">{trendLabel}</span>
                        </div>
                    )}
                </Div>
            </Div>
        </FadeIn>
    )
}
export default Public_Stat_Card