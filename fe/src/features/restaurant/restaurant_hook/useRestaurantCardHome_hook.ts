import { useQuery } from "@tanstack/react-query";
import { RestaurantCardHomeService } from "../restaurant_services/RestaurantCardHome_service";
export const useRestaurandCard_home=()=>{
    return useQuery({
        queryKey:["restaurantHome","home"],
        queryFn:()=>RestaurantCardHomeService(),
        placeholderData:(pev)=>pev,
         staleTime: 1000 * 60,   // cache 1 phút hết 1 phút gọi lại lệnh mới gọi lại api
        //refetchInterval: 60 *1000, // mõi 1 phút tự động gọi api
        refetchOnWindowFocus: false, // đổi tab thì có gọi api lại không true có
    })
}