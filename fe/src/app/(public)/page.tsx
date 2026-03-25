
import { Div, P, A } from "@/src/core/components/ui";
import FeaturedBrandComponent from "@/src/features/brands/brands_components/featured-brands-components";
import PublicHome from "@/src/core/components/layout/public-home";
import Featured_Restaurant_Component from "@/src/features/restaurant/restaurant_components/featured-restaurant-component";

import FeaturedDishComponent from "@/src/features/dish/dish_component/featured-dish-component";
const PageHome = () => {
    return (
        <>
            <PublicHome />
            <Div vitri="col_none" className="px-10 gap-y-20" >


                <FeaturedBrandComponent />
                <Featured_Restaurant_Component />
                <FeaturedDishComponent/>
            </Div>
           
        </>
    )
}
export default PageHome