"use client"
import Public_Stat_Card from "@/src/core/components/layout/public-stat-Card"
import { Div } from "@/src/core/components/ui"
import { FiGrid, FiUserPlus } from 'react-icons/fi';
import { IoRestaurantOutline } from 'react-icons/io5';
import { BiMoney } from 'react-icons/bi';
import { useDashboard_stat } from "../dashboard_hook/useDashboard_stas";
const Dashboard_Stats_component=()=>{
 const {data,isLoading,isFetched} =useDashboard_stat()
 console.log(data?.totalBrands);
 
   return (
    <Div className=" justify-between" size="full">
       {/* thương hiệu */}
        <Public_Stat_Card
        index={1}
          title="Tổng thương hiệu"
          value={data?.totalBrands.value||0}
          icon={<FiGrid />}
          iconWrapperClass="bg-blue-50 text-blue-600"
          trendValue={data?.totalBrands.trendPercentage}
          trendLabel={data?.totalBrands.trendLabel}
          trendType={data?.totalBrands.trendType}
        />
      {/* // nhà hàng */}
        <Public_Stat_Card
           index={2}
          title="Tổng Nhà hàng"
          value={data?.totalRestaurants?.value||0}
          icon={<IoRestaurantOutline />}
          iconWrapperClass="bg-indigo-50 text-indigo-500"
          trendValue={data?.totalRestaurants?.trendPercentage}
          trendLabel={data?.totalRestaurants?.trendLabel}
          trendType={data?.totalRestaurants?.trendType}
        />
 {/* sau này sữa database ròi tích hợp  */}
        <Public_Stat_Card
           index={3}
          title="Tổng doanh thu (tạm thời chưa tích hợp)"
          value="$2.4M"
          icon={<BiMoney className="text-2xl" />}
          iconWrapperClass="bg-emerald-50 text-emerald-500"
          trendValue="+15%"
          trendLabel="YTD"
          trendType="up"
        />
      {/* yêu cầu nâng cấp or tạo thương hiệu riêng cho bạn */}
        <Public_Stat_Card
           index={4}
          title="Yêu cầu chờ duyệt"
          value={data?.pendingRequests.value||0}
          icon={<FiUserPlus />}
          iconWrapperClass="bg-purple-50 text-purple-500"
          trendValue=""
          trendLabel=""
          trendType="neutral"
        />
    </Div>
   )
}
export default Dashboard_Stats_component