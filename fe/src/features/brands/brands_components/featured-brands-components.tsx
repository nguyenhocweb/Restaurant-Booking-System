"use client";
import Brand_Card from "@/src/features/brands/brands_components/brand-card-components";
import { Div, P, A } from "@/src/core/components/ui";
import FadeIn from "@/src/core/components/animation/FadeIn";
import { useBrandCard_hook } from "../brands_hook/useBrandCardHome_hook";
import Loading from "@/src/core/components/layout/public-loading"
const featuredBrandComponent = () => {
    const {data,isLoading,isFetched}=useBrandCard_hook();
     if (isLoading) return (<Loading/>)
    return (
        <Div id="brandHome" vitri="col_none" size="full" >
            <Div className="justify-between mb-8 " size="full" >
                <div>
                    <FadeIn>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Thương hiệu đối tác
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <P>
                            Mỗi nhà hàng là một câu chuyện về hương vị và sự sáng tạo không giới hạn.
                        </P>
                    </FadeIn>
                </div>
                <FadeIn delay={0.1}>
                    <A href="/brands" colors="green">Xem tất cả thương hiệu →</A>
                </FadeIn>
            </Div>
            <Div gap="g2_3">
                {data&&
                    data.map((e,index) => (
                        <Brand_Card key={e.id} dataBrand={e} index={index} />
                    ))
                }
            </Div>
        </Div>
    )
}
export default featuredBrandComponent