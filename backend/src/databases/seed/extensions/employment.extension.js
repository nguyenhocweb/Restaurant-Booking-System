
import {Brand_employment,Restaurant_employment} from "../constants/Employment.data.js"
export const employment_Extension = async (prisma) => {


    // create data employment brand 
    const resultBrand=await prisma.Employment.createMany({
        data:Brand_employment
        
    });
    console.log(`✅ Đã tạo thành công ${resultBrand.count} Employment Brand!`);
    // create data employment restaurant
    const resultRestaurant=await prisma.Employment.createMany({
        data:Restaurant_employment
        
    });


     console.log(`✅ Đã tạo thành công ${resultRestaurant.count} Employment restaurand!`);
};
