// extensions/categoriesAndItemsExtension.js
import { menuCategoriesData, menuItemsData } from "../constants/menucategory-items.data.js";
import { upsertVector } from "../../../modules/vector/service/vectorDB.service.js";
import { embedText } from "../../../modules/vector/service/embedding.service.js";

import { buildMenuItemVector } from "../../../modules/vector/builders/menuItem.builder.js";
export const categoriesAndItemsExtension = async (prisma) => {
  console.log("Creating Menu Categories & Items...");

  // ==========================================
  // 1️⃣ SEEDING MENU CATEGORIES
  // ==========================================
  
  // Lấy danh sách Menu để map ID

  // Tạo Categories
  const categoryResult = await prisma.menuCategory.createMany({
    data: menuCategoriesData
  });

  console.log(`✅ Created ${categoryResult.count} menu categories`);

  // ==========================================
  // 2️⃣ SEEDING MENU ITEMS
  // ==========================================

  // Lấy các dữ liệu tham chiếu cần thiết
  


  // Xử lý và map dữ liệu Items

  

  const itemResult = await prisma.menuItem.createMany({
    data: menuItemsData
  });
 
  // Tạo vector cho từng item
  for (const item of menuItemsData) {
    const text = [
      item.name,
      item.description,
      item.dietary_tags?.join(" "),
      item.allergens?.join(" "),
      item.restaurantName,
      item.categoryName,
      item.base_price ? `Price: ${item.base_price}` : ""
    ].filter(Boolean).join(" ");
    const embedding = await embedText(text);
    const MenuItemVector = buildMenuItemVector({
      id: `menu_item_${itemResult.id}`,
      name: item.name,
      description: item.description,
      dietary_tags: item.dietary_tags,
      allergens: item.allergens,
      embedding: embedding,
      base_price: item.base_price,
      restaurantName: item.restaurantName,
      categoryName: item.categoryName
    });
    await upsertVector(MenuItemVector);
  }
  console.log(`✅ Created ${itemResult.count} menu items`);
};