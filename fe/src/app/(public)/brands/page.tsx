"use client"

import { Div } from "@/src/core/components/ui";
import PublicBrands from "@/src/core/components/layout/public-brands";
import BrandFilterBar from "@/src/features/brands/brands_components/BrandFilterBar";
import FeaturedBrandComponent from "@/src/features/brands/brands_components/featured-brands-components";
const BrandPage = () => {
   
    return (

        <Div vitri="col_none" gap='g5_6'>
            {/* giới thiêu */}
            <PublicBrands />
            <BrandFilterBar/>
            <Div className="px-10">
            <FeaturedBrandComponent type="page"/>
            </Div>

        </Div>

    )
}
export default BrandPage