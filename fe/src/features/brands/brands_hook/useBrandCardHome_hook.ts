import { useQuery } from "@tanstack/react-query";
import { BrandCardHomeSevice } from "../brands_services/BrandCardHome_service";
export const useBrandCard_hook = () => {
    return useQuery({
        queryKey: ["brandHome", "home"],
        queryFn: () => BrandCardHomeSevice(),


        placeholderData: (prev) => prev, // 🔥 giữ data cũ khi đổi page
        staleTime: 1000 * 60,   // cache 1 phút hết 1 phút gọi lại lệnh mới gọi lại api
        //refetchInterval: 60 *1000, // mõi 1 phút tự động gọi api
        refetchOnWindowFocus: false, // đổi tab thì có gọi api lại không true có
    })
}