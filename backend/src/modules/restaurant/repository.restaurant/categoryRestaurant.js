import { prisma } from "../../../databases/init.mongodb.js";
export const getCategoriesRestaurantRepository = async () => {
    return prisma.category_Restaurant.findMany({
        where: {
            isActive: true,
        },
        select: {
            id: true,
            name: true,
        }
    });
}