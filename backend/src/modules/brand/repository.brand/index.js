import { prisma } from "../../../databases/init.mongodb.js";


export const countBrands = async (where) => {
    return prisma.brand.count({
        where:where
    });
}
export const getBrands = async ({ where, page, limit }) => {
    const result = await prisma.brand.findMany({
        where: where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: [
            { isFeatured: "desc" },
            { createdAt: "desc" }
        ],
        select: {
            id: true,
            name: true,
            description: true,
            imageMain: true,
            logo: true, // VD: "AS", "LA", "VI" trong vòng tròn
            _count: {
                select: {
                    restaurants: {
                        where: { isActive: "ACTIVE" } // Chỉ đếm những nhà hàng đang mở cửa
                    }
                }
            }
        }
    });
    if (result) {
        return result.map(({ _count, ...e }) => ({ ...e, numberRestaurant: _count.restaurants }))
    }
    return null
}