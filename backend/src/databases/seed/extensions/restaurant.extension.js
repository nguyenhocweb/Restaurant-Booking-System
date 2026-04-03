import {restaurantData} from '../constants/restaurant.data.js';
import { upsertVector } from "../../../modules/vector/service/vectorDB.service.js";
import { embedText } from "../../../modules/vector/service/embedding.service.js";
import { buildRestaurantVector } from "../../../modules/vector/builders/restaurant.builder.js";
export const restaurant_Extension = async(prisma)=>{
    // nơi lưu id của thương hiệu để gán cho nhà hàng
   

    
    // xóa dữ liệu cũ
    console.log('creating restaurants...');

  
    // tạo dữ liệu
   
        
    const result = await prisma.Restaurant.createMany({
        data: restaurantData  // Mảng dữ liệu
    });
    for (const restaurantDataItem of restaurantData) {
        const text = [
            restaurantDataItem.name,
            restaurantDataItem.description,
            restaurantDataItem.city,
            restaurantDataItem.address,
            restaurantDataItem.slug,
            restaurantDataItem.averageRating,
        ].filter(Boolean).join(" ");
        const embedding = await embedText(text);
        const RestaurantVector = buildRestaurantVector({
            id: `restaurant_${restaurantDataItem.id}`,
            name: restaurantDataItem.name, 
            description: restaurantDataItem.description,
            city: restaurantDataItem.city,
            address: restaurantDataItem.address,
            slug: restaurantDataItem.slug,
            averageRating: restaurantDataItem.averageRating,
            embedding: embedding
        });
        await upsertVector( [RestaurantVector] );
    }
    console.log(`✅ Đã tạo thành công ${result.count} Restaurants!`);
}