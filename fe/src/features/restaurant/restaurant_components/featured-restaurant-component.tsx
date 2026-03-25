"use client"
import { Div, P, A } from "@/src/core/components/ui";
import FadeIn from "@/src/core/components/animation/FadeIn";
import { useRestaurandCard } from "../restaurant_hook/useRestaurantCard_hook";
import Card_Restaurant_Component from "./card-restaurant-component";
import Loading from "@/src/core/components/layout/public-loading"
const Featured_Restaurant_Component = ({page=1,limit=5}:{page:number,limit:number}) => {
    const {data,isLoading,isFetched}=useRestaurandCard({page:page,limit:limit});
    console.log(data);
    if(isLoading) return <Loading/>
    return (
        <Div id="restaurantHome" vitri="col_none" size="full" >
            <Div className="justify-between mb-8 " size="full" >
                <div>
                    <FadeIn>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Hệ thống Nhà hàng nổi bật
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <P>
                            Khám phá các điểm đến ẩm thực cụ thể thuộc hệ thống NVNguyen.
                        </P>
                    </FadeIn>
                </div>
            </Div>
            <Div gap="g2_3">
                {data&&
                    data?.data.map((e, index) => (
                        <Card_Restaurant_Component key={e.id} dataRestaurant={e} index={index} />
                    ))
                }
            </Div>
            <Div size="full" className="mt-3">
                <FadeIn delay={0.6}>  <A href="#" sizea="p4_3" variant="gray">
                    Xem toàn bộ {(data?.total ?? 0) > 99 ? "99+" : (data?.total ?? 0)} nhà hàng
                </A>
            </FadeIn>
        </Div>
            
        </Div >
    )
}
export default Featured_Restaurant_Component