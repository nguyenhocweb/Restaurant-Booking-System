export interface StatDetail {
    value: number;            // Giá trị thực tế (VD: 1254, 8750, 2400000)
    trendPercentage: string;  // Tỷ lệ % tăng/giảm (VD: 12.5, -5.0)
    trendType: 'up' | 'down' | 'neutral'; // Chiều hướng
    trendLabel: string;       // Nhãn thời gian (VD: "tháng trước", "YTD")
}
export interface Dashboard_stat_response {
    totalBrands: StatDetail;
    totalRestaurants: StatDetail;
    totalRevenue?: StatDetail;
    pendingRequests: StatDetail;
}