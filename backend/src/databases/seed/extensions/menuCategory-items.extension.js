// extensions/categoriesAndItemsExtension.js
import { menuCategoriesData, menuItemsData } from "../constants/menucategory-items.data.js";

export const categoriesAndItemsExtension = async (prisma) => {
  console.log("Creating Menu Categories & Items...");

  // ==========================================
  // 1️⃣ SEEDING MENU CATEGORIES
  // ==========================================
  
  // Lấy danh sách Menu để map ID
  const menus = await prisma.menu.findMany({
    select: { id: true, name: true }
  });
  const mapMenu = new Map(menus.map(e => [e.name, e.id]));

  // Tạo Categories
  const categoryResult = await prisma.menuCategory.createMany({
    data: menuCategoriesData.map(c => ({
      menuId: mapMenu.get(c.menuName), // Quan trọng: lấy đúng menuId
      name: c.name,
      description: c.description,
      image_url: c.image_url,
      sort_order: c.sort_order,
      is_active: c.is_active
    }))
  });

  console.log(`✅ Created ${categoryResult.count} menu categories`);

  // ==========================================
  // 2️⃣ SEEDING MENU ITEMS
  // ==========================================

  // Lấy các dữ liệu tham chiếu cần thiết
  const [categories, brands, restaurants] = await Promise.all([
    prisma.menuCategory.findMany({ select: { id: true, name: true } }),
    prisma.brand.findMany({ select: { id: true, name: true } }),
    prisma.restaurant.findMany({ select: { id: true, name: true } })
  ]);

  const mapCategory = new Map(categories.map(e => [e.name, e.id]));
  const mapBrand = new Map(brands.map(e => [e.name, e.id]));
  const mapRestaurant = new Map(restaurants.map(e => [e.name, e.id]));

  // Xử lý và map dữ liệu Items
  const itemsToCreate = menuItemsData.map(item => {
    return {
      categoryId: mapCategory.get(item.categoryName),
      brandId: item.brandName ? mapBrand.get(item.brandName) : null,
      restaurantId: item.restaurantName ? mapRestaurant.get(item.restaurantName) : null,
      
      name: item.name,
      slug: item.slug,
      description: item.description,
      image: item.image,
      images: item.images,
      base_price: item.base_price,
      item_type: item.item_type,
      dietary_tags: item.dietary_tags || [],
      allergens: item.allergens || [],
      is_available: item.is_available,
      is_featured: item.is_featured,
      sort_order: item.sort_order
    };
  });

  const itemResult = await prisma.menuItem.createMany({
    data: itemsToCreate
  });

  console.log(`✅ Created ${itemResult.count} menu items`);
};