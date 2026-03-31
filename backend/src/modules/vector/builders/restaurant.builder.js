

export const buildRestaurantVector = (restaurant) => {
    const rawText = `Chi nhánh: ${restaurant.name || "Nhà hàng ẩn danh"}. Địa chỉ: ${restaurant.address || "Chưa cập nhật địa chỉ"}, ${restaurant.city || "chưa cập nhật thành phố"}. ${restaurant.description || "chưa cập nhật mô tả"}. Đánh giá trung bình: ${restaurant.averageRating || "chưa có đánh giá"}. Slug: ${restaurant.slug || "chưa có slug"}.`;
    return {
      id: restaurant.id,
        values: restaurant.embedding,
        metadata: {
            name: restaurant.name||"nha hàng ẩn danh",
            description: restaurant.description||"chưa cập nhật mô tả",
            city: restaurant.city||"chưa cập nhật thành phố",
            address: restaurant.address||"chưa cập nhật địa chỉ",
            slug: restaurant.slug||"chưa có slug",
            averageRating: restaurant.averageRating||0,
            text: rawText
        }
    };
};