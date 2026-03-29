import { prisma } from "../../../databases/init.mongodb.js";


export const countBrands = async (where) => {
    return prisma.brand.count({
        where: where
    });
}
const today = new Date();
const day = today.getDay();//lấy thứ trong tuần
export const getBrandById = async (_id) => {
    const brand = await prisma.brand.findUnique({
        where: { id: _id },
        select: {
            id: true,
            name: true,
            description: true,
            imageMain: true,
            logo: true, // VD: "AS", "LA", "VI" trong vòng tròn
            link: true,
            phone_contact: true,
            email_contact: true,
            isFeatured: true,
            images: true,
            restaurants: {
                where: { isActive: "ACTIVE" }, // Chỉ lấy những nhà hàng đang mở cửa
                take: 5, // Lấy 5 nhà hàng đầu tiên của thương hiệu
                orderBy: [
                    { isNew: "desc" },
                    { weightedScore: "desc" }
                ],
                select: {
                    id: true,
                    name: true,
                    imageMain: true,
                    averageRating: true,
                    address: true,
                    isNew: true,
                    operating_hours: {
                        where: { day_of_week: day },
                        take: 1,
                        select: {
                            open_time: true,
                            close_time: true,
                        }
                    },
                },
            }
        }
    });
    if (!brand) return null;
        brand.restaurants = brand.restaurants.map(({ operating_hours, ...rest }) => {
        // Lấy phần tử đầu tiên nếu mảng có dữ liệu
        const hours = operating_hours[0];
        return {
            ...rest,
            time: hours
                ? `${hours.open_time} - ${hours.close_time}`
                : "Hôm nay nghỉ"
        };
    });
    const {imageMain,images,...rest}=brand;    
    return { ...rest, images: imageMain ? [imageMain, ...images] : images };
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