
import {restaurantAreasData} from "../constants/restaurant_areas.data.js"
export const RestaurantAreas_Extension= async(prisma)=>{
     
      console.log("creating restaurant Areas ..........");
      const result=await prisma.Restaurant_Areas.createMany({
        data: restaurantAreasData
      });
       console.log(`✅ Đã tạo thành công ${result.count} Restaurants areas  !`);
      
}
