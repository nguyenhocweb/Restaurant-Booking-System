export const buildMenuItemVector = (menuItem) => {
    const rawText = `Món ăn: ${menuItem.name || "Món ăn ẩn danh"}. Mô tả: ${menuItem.description || "chưa cập nhật mô tả"}. Giá cơ bản: ${menuItem.base_price || 0}. Nhà hàng: ${menuItem.restaurantName || "chưa cập nhật nhà hàng"}. Danh mục: ${menuItem.categoryName || "chưa cập nhật danh mục"}. Dị ứng: ${menuItem.allergens ? menuItem.allergens.join(", ") : "Không có thông tin"}. Thực đơn ăn kiêng: ${menuItem.dietary_tags ? menuItem.dietary_tags.join(", ") : "Không có thông tin"}.`;
    return {
        id: menuItem.id,
        values: menuItem.embedding,
        metadata: {
            name: menuItem.name||"món ăn ẩn danh",
            description: menuItem.description||"chưa cập nhật mô tả",
            base_price: menuItem.base_price||0,
            restaurantName: menuItem.restaurantName||"chưa cập nhật nhà hàng",
            categoryName: menuItem.categoryName||"chưa cập nhật danh mục",
            allergens: menuItem.allergens||[],
            dietary_tags: menuItem.dietary_tags||[],
            text: rawText
        }
    };
};