"use client"
import Card_Dish_Components from "./card-dish-component";
import { Div, P, A } from "@/src/core/components/ui";
import FadeIn from "@/src/core/components/animation/FadeIn";
import { useDishCard_hook } from "../dish_hook/useDishCard_hook";
import Loading from "@/src/core/components/layout/public-loading";
const featuredDishComponent = () => {
     const {data,isLoading} =useDishCard_hook();
     if(isLoading) return <Loading/>
    return (
        <Div  vitri="col_none" size="full" >
            <Div className="justify-between mb-8 " size="full" >
                <Div className="flex-col" size="full">
                    <FadeIn>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Những món ăn mới hôm nay
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <P>
                            Những lựa chọn được yêu thích nhất từ cộng đồng sành ăn.
                        </P>
                    </FadeIn>
                </Div>
                
            </Div>
            <Div gap="g2_3" >
                {data&&
                    data.map((e,index) => (
                        <Card_Dish_Components key={e.id} dataDish={e} index={index} />
                    ))
                   
                  
                }
                 
            </Div>
            {
                (!data||data.length===0)&&
                  <P variant="text_black" className="w-full flex justify-center">Không tìm thấy kết quả</P>
            }
        </Div>
    )
}
export default featuredDishComponent