import { useQuery } from "@tanstack/react-query";
import { RestaurantCardService } from "../restaurant_services/RestaurantCard_service";
export const useRestaurandCard=({page,limit}:{page:number,limit:number})=>{
    return useQuery({
        queryKey:["restaurantCard",page],
        queryFn:()=>RestaurantCardService({page:page,limit:limit}),
        placeholderData:(pev)=>pev,
         staleTime: 1000 * 60,   // cache 1 phút hết 1 phút gọi lại lệnh mới gọi lại api
        //refetchInterval: 60 *1000, // mõi 1 phút tự động gọi api
        refetchOnWindowFocus: false, // đổi tab thì có gọi api lại không true có
    })
}