
import { Div, P, A } from "@/src/core/components/ui";
import FeaturedBrandComponent from "@/src/features/brands/brands_components/featured-brands-components";
import PublicHome from "@/src/core/components/layout/public-home";
import Featured_Restaurant_Component from "@/src/features/restaurant/restaurant_components/featured-restaurant-component";

import FeaturedDishComponent from "@/src/features/dish/dish_component/featured-dish-component";
const PageHome = () => {
    return (
        <>
            <PublicHome />
            <Div vitri="col_none" className="px-10 py-20 gap-y-40" >
                <FeaturedBrandComponent type="home"/>
                <Featured_Restaurant_Component type="home"/>
                <FeaturedDishComponent type="home"/>
            </Div>
           
        </>
    )
}
export default PageHome