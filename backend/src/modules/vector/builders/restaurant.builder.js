
export const textBuildRestaurant=(restaurant)=>{
 const rawText = [
        `nhà hàng: ${restaurant.name || "Nhà hàng ẩn danh"} là 1 nhà hàng.`,
        `${restaurant.brandName ? `nhà hàng này thuộc thương hiệu: ${restaurant.brandName}` : ""} .`,
        ` Địa chỉ: ${restaurant.address || "Chưa cập nhật địa chỉ"},`,
        restaurant.isActive === "INACTIVE" ? "tạm thời nghĩ" : restaurant.isActive === "TERMINATED" ? "nghĩ vĩnh viễn \n" : " đang hoạt động \n",
        restaurant.isNew === false ? "" : "Nhà hàng mới",
        ` ${restaurant.city || "chưa cập nhật thành phố"}.`,
        `Đánh giá trung bình: ${restaurant.averageRating || "chưa có đánh giá"}.`,
        `${restaurant.description || "chưa cập nhật mô tả"}.`,
        ` Slug: ${restaurant.slug || "chưa có slug"}.`,
    ].join("\n");
    return rawText
}
export const buildRestaurantVector = (restaurant) => {
    const rawText = [
        `nhà hàng: ${restaurant.name || "Nhà hàng ẩn danh"} là 1 nhà hàng.`,
        `${restaurant.brandName ? `nhà hàng này thuộc thương hiệu: ${restaurant.brandName}` : ""} .`,
        ` Địa chỉ: ${restaurant.address || "Chưa cập nhật địa chỉ"},`,
        restaurant.isActive === "INACTIVE" ? "tạm thời nghĩ" : restaurant.isActive === "TERMINATED" ? "nghĩ vĩnh viễn" : " đang hoạt động",
        restaurant.isNew === false ? "" : "Nhà hàng mới",
        ` ${restaurant.city || "chưa cập nhật thành phố"}. `,
        `Đánh giá trung bình: ${restaurant.averageRating || "chưa có đánh giá"}.`,
        `${restaurant.description || "chưa cập nhật mô tả"}. `,

        ` Slug: ${restaurant.slug || "chưa có slug"}.`,


    ].join(" ");
    return {
        id: restaurant.id,
        values: restaurant.embedding,
        metadata: {
            name: restaurant.name || "nha hàng ẩn danh",
            description: restaurant.description || "chưa cập nhật mô tả",
            city: restaurant.city || "chưa cập nhật thành phố",
            address: restaurant.address || "chưa cập nhật địa chỉ",
            slug: restaurant.slug || "chưa có slug",
            averageRating: restaurant.averageRating || 0,
            text: rawText
        }
    };
};