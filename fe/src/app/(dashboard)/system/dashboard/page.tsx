import { Div,P ,H} from "@/src/core/components/ui"
import Dashboard_Stats_component from "@/src/features/system/dashboard/dashboard_component/dashBoard_stats_component"
import DashboardBrand_component from "@/src/features/system/dashboard/dashboard_component/dashBoard_brand_component"
import Create_Brand_form from "@/src/features/brands/brands_components/Create_Brand_form"
const SystemDashboardPage=()=>{
    return (
        <Div
        vitri="col_none"
        size="full"
        className="p-10"
        >
            <P className="text-gray-500">Quản trị viên hệ thống</P>
            <H variant="text_black" className="text-2xl">Bảng điều khiển thổng quan</H>
            <Div vitri="col_none" size="full" gap="g5_6">
               <Dashboard_Stats_component/>
               <Div size="full" className="lg:justify-between items-start">
                     <Div className="lg:w-2/3">
                          <DashboardBrand_component/>
                     </Div>
                     <Div className="lg:w-1/3 "  vitri="col_none">
                       <Create_Brand_form/>
                     </Div>
               </Div>
            </Div>
        </Div>
    )
}
export default SystemDashboardPage