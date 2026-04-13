import { useQuery } from "@tanstack/react-query";
import { CategoryRestaurantService } from "../restaurant_services/CategoryRestaurant_service";
export const useCategoryRestaurant=()=>{
    return useQuery({
        queryKey:["categoryRestaurant"],
        queryFn:()=>CategoryRestaurantService(),
        placeholderData:(pev)=>pev, // placeholderData: dữ liệu giả định ban đầu, nếu có dữ liệu cũ sẽ dùng dữ liệu cũ để hiển thị trước khi có dữ liệu mới từ api trả về
        staleTime: 1000 * 60,   // cache 1 phút hết 1 phút gọi lại lệnh mới gọi lại api
        //refetchInterval: 60 *1000, // mõi 1 phút tự động gọi api
        refetchOnWindowFocus: false, // đổi tab thì có gọi api lại không true có
    })
}