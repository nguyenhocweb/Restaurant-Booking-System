// constants/menuItem.data.js

export const menuCategoriesData = [
  // ================= MÓN VIỆT - MENU CHÍNH =================
  {
    menuName: "Menu Chính",
    name: "Khai Vị Truyền Thống",
    description: "Các món khai vị nhẹ nhàng, đánh thức vị giác",
    image_url: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0",
    sort_order: 1,
    is_active: true
  },
  {
    menuName: "Menu Chính",
    name: "Món Chín & Đặc Sản",
    description: "Các món ăn chính đậm đà bản sắc Việt",
    image_url: "https://images.unsplash.com/photo-1555126634-323283e090f1",
    sort_order: 2,
    is_active: true
  },
  {
    menuName: "Menu Chính",
    name: "Món Nước & Súp",
    description: "Phở, bún và các loại canh truyền thống",
    image_url: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43",
    sort_order: 3,
    is_active: true
  },
  {
    menuName: "Menu Chính",
    name: "Tráng Miệng & Đồ Uống",
    description: "Chè ngọt và thức uống giải khát",
    image_url: "https://images.unsplash.com/photo-1538593702873-4e5f419f8546",
    sort_order: 4,
    is_active: true
  },

  // ================= NHẬT BẢN - MENU SUSHI =================
  {
    menuName: "Menu Sushi",
    name: "Sashimi Tươi Sống",
    description: "Hải sản tươi sống nhập khẩu mỗi ngày",
    image_url: "https://images.unsplash.com/photo-1534482421-64566f976cfa",
    sort_order: 1,
    is_active: true
  },
  {
    menuName: "Menu Sushi",
    name: "Nigiri & Maki",
    description: "Cơm nắm hải sản và cơm cuộn rong biển",
    image_url: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351",
    sort_order: 2,
    is_active: true
  },
  {
    menuName: "Menu Sushi",
    name: "Tempura & Đồ Nướng",
    description: "Hải sản chiên giòn và các món nướng than hoa",
    image_url: "https://images.unsplash.com/photo-1615361200141-f45040f367be",
    sort_order: 3,
    is_active: true
  },

  // ================= CHI NHÁNH Q1 - MENU ĐẶC BIỆT =================
  {
    menuName: "Menu Chi Nhánh Q1",
    name: "Đặc Sản Quận 1",
    description: "Các món cao cấp phục vụ riêng tại chi nhánh trung tâm",
    image_url: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369",
    sort_order: 1,
    is_active: true
  },
  {
    menuName: "Menu Chi Nhánh Q1",
    name: "Combo Gia Đình VIP",
    description: "Set ăn cao cấp thiết kế riêng cho gia đình và khách đoàn",
    image_url: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    sort_order: 2,
    is_active: true
  }
];
export const menuItemsData = [
  // =========================================================
  // ITEMS: HƯƠNG VIỆT (MENU CHÍNH)
  // =========================================================
  
  // -- Khai Vị Truyền Thống --
  {
    categoryName: "Khai Vị Truyền Thống",
    brandName: "Hương Việt",
    restaurantName: null,
    name: "Gỏi Cuốn Tôm Thịt",
    slug: "goi-cuon-tom-thit",
    description: "Gỏi cuốn tươi mát với tôm sú, thịt ba chỉ và rau thơm, chấm tương đen đậu phộng.",
    image: "https://images.unsplash.com/photo-1556694795-b6423e38f5fb",
    images: ["https://images.unsplash.com/photo-1556694795-b6423e38f5fb"],
    base_price: 65000,
    item_type: "FOOD",
    dietary_tags: ["Healthy", "Dairy-Free"],
    allergens: ["Peanut", "Shellfish"],
    spice_level: 0,
    prep_time: 10,
    calories: 150,
    is_available: true,
    is_featured: true,
    sort_order: 1
  },
  {
    categoryName: "Khai Vị Truyền Thống",
    brandName: "Hương Việt",
    restaurantName: null,
    name: "Chả Giò Hải Sản",
    slug: "cha-gio-hai-san",
    description: "Chả giò chiên giòn rụm nhân tôm, cua và khoai môn.",
    image: "https://images.unsplash.com/photo-1605298418579-37332da12ceb",
    images: ["https://images.unsplash.com/photo-1605298418579-37332da12ceb"],
    base_price: 85000,
    item_type: "FOOD",
    dietary_tags: [],
    allergens: ["Shellfish", "Gluten"],
    spice_level: 0,
    prep_time: 15,
    calories: 320,
    is_available: true,
    is_featured: false,
    sort_order: 2
  },
  {
    categoryName: "Khai Vị Truyền Thống",
    brandName: "Hương Việt",
    restaurantName: null,
    name: "Gỏi Ngó Sen Tôm Thịt",
    slug: "goi-ngo-sen-tom-thit",
    description: "Ngó sen giòn sần sật trộn chua ngọt cùng tôm sú và thịt luộc.",
    image: "https://images.unsplash.com/photo-1590412200988-a436970781fa",
    images: ["https://images.unsplash.com/photo-1590412200988-a436970781fa"],
    base_price: 95000,
    item_type: "FOOD",
    dietary_tags: ["Gluten-Free"],
    allergens: ["Shellfish", "Peanut"],
    spice_level: 1,
    prep_time: 12,
    calories: 210,
    is_available: true,
    is_featured: false,
    sort_order: 3
  },

  // -- Món Chín & Đặc Sản --
  {
    categoryName: "Món Chín & Đặc Sản",
    brandName: "Hương Việt",
    restaurantName: null,
    name: "Cơm Tấm Sườn Bì Chả",
    slug: "com-tam-suon-bi-cha",
    description: "Sườn nướng than hoa đậm đà, ăn kèm bì chả và nước mắm chua ngọt đặc chế.",
    image: "https://images.unsplash.com/photo-1633504581286-1ebcc1e15647",
    images: ["https://images.unsplash.com/photo-1633504581286-1ebcc1e15647"],
    base_price: 75000,
    item_type: "FOOD",
    dietary_tags: [],
    allergens: ["Fish", "Soy"],
    spice_level: 1,
    prep_time: 15,
    calories: 650,
    is_available: true,
    is_featured: true,
    sort_order: 1
  },
  {
    categoryName: "Món Chín & Đặc Sản",
    brandName: "Hương Việt",
    restaurantName: null,
    name: "Bò Lúc Lắc Khoai Tây",
    slug: "bo-luc-lac-khoai-tay",
    description: "Thịt bò thăn mềm xào lúc lắc, ăn kèm khoai tây chiên giòn và salad.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    images: ["https://images.unsplash.com/photo-1544025162-d76694265947"],
    base_price: 135000,
    item_type: "FOOD",
    dietary_tags: ["High-Protein"],
    allergens: ["Soy"],
    spice_level: 0,
    prep_time: 20,
    calories: 550,
    is_available: true,
    is_featured: false,
    sort_order: 2
  },

  // -- Món Nước & Súp --
  {
    categoryName: "Món Nước & Súp",
    brandName: "Hương Việt",
    restaurantName: null,
    name: "Phở Bò Thập Cẩm",
    slug: "pho-bo-thap-cam",
    description: "Nước dùng hầm xương 24h, thịt bò tái, nạm, gầu, gân, bò viên.",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43",
    images: ["https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43"],
    base_price: 85000,
    item_type: "FOOD",
    dietary_tags: [],
    allergens: ["Soy"],
    spice_level: 1,
    prep_time: 10,
    calories: 450,
    is_available: true,
    is_featured: true,
    sort_order: 1
  },
  {
    categoryName: "Món Nước & Súp",
    brandName: "Hương Việt",
    restaurantName: null,
    name: "Bún Bò Huế Thuần Vị",
    slug: "bun-bo-hue-thuan-vi",
    description: "Đậm đà hương vị ruốc sả, kèm chả cua mắm ruốc.",
    image: "https://images.unsplash.com/photo-1604908812839-4b9e4e8152ef",
    images: ["https://images.unsplash.com/photo-1604908812839-4b9e4e8152ef"],
    base_price: 75000,
    item_type: "FOOD",
    dietary_tags: [],
    allergens: ["Fish", "Shellfish"],
    spice_level: 3,
    prep_time: 10,
    calories: 500,
    is_available: true,
    is_featured: false,
    sort_order: 2
  },

  // -- Tráng Miệng & Đồ Uống --
  {
    categoryName: "Tráng Miệng & Đồ Uống",
    brandName: "Hương Việt",
    restaurantName: null,
    name: "Chè Khúc Bạch",
    slug: "che-khuc-bach",
    description: "Khúc bạch phô mai béo ngậy, nhãn lồng tươi và hạnh nhân lát.",
    image: "https://images.unsplash.com/photo-1563805042-7684c8a9e9ce",
    images: ["https://images.unsplash.com/photo-1563805042-7684c8a9e9ce"],
    base_price: 45000,
    item_type: "DESSERT",
    dietary_tags: ["Vegetarian"],
    allergens: ["Dairy", "Tree Nuts"],
    spice_level: 0,
    prep_time: 5,
    calories: 250,
    is_available: true,
    is_featured: true,
    sort_order: 1
  },
  {
    categoryName: "Tráng Miệng & Đồ Uống",
    brandName: "Hương Việt",
    restaurantName: null,
    name: "Cà Phê Sữa Đá Sài Gòn",
    slug: "ca-phe-sua-da-sai-gon",
    description: "Cà phê pha phin truyền thống hòa quyện cùng sữa đặc béo ngọt.",
    image: "https://images.unsplash.com/photo-1558500224-3485c27f3189",
    images: ["https://images.unsplash.com/photo-1558500224-3485c27f3189"],
    base_price: 35000,
    item_type: "BEVERAGE",
    dietary_tags: [],
    allergens: ["Dairy"],
    spice_level: 0,
    prep_time: 5,
    calories: 180,
    is_available: true,
    is_featured: false,
    sort_order: 2
  },

  // =========================================================
  // ITEMS: TOKYO SUSHI CHAIN (MENU SUSHI)
  // LƯU Ý: Tên Brand gốc là "Tokyo Sushi Chain" theo file đầu tiên
  // =========================================================

  // -- Sashimi Tươi Sống --
  {
    categoryName: "Sashimi Tươi Sống",
    brandName: "Tokyo Sushi Chain", 
    restaurantName: null,
    name: "Sashimi Cá Hồi Na Uy (Salmon)",
    slug: "sashimi-ca-hoi-na-uy",
    description: "5 lát cá hồi tươi béo ngậy, kèm củ cải bào và wasabi tươi.",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221dce",
    images: ["https://images.unsplash.com/photo-1583623025817-d180a2221dce"],
    base_price: 150000,
    item_type: "FOOD",
    dietary_tags: ["Raw", "Gluten-Free", "Low-Carb"],
    allergens: ["Fish"],
    spice_level: 0,
    prep_time: 8,
    calories: 120,
    is_available: true,
    is_featured: true,
    sort_order: 1
  },
  {
    categoryName: "Sashimi Tươi Sống",
    brandName: "Tokyo Sushi Chain",
    restaurantName: null,
    name: "Sashimi Bụng Cá Ngừ (Otoro)",
    slug: "sashimi-bung-ca-ngu-otoro",
    description: "Phần bụng cá ngừ vây xanh cao cấp tan chảy trong miệng.",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
    images: ["https://images.unsplash.com/photo-1553621042-f6e147245754"],
    base_price: 450000,
    item_type: "FOOD",
    dietary_tags: ["Raw", "Gluten-Free"],
    allergens: ["Fish"],
    spice_level: 0,
    prep_time: 10,
    calories: 180,
    is_available: true,
    is_featured: true,
    sort_order: 2
  },

  // -- Nigiri & Maki --
  {
    categoryName: "Nigiri & Maki",
    brandName: "Tokyo Sushi Chain",
    restaurantName: null,
    name: "Dragon Roll (Cuộn Lươn Bơ)",
    slug: "dragon-roll",
    description: "Cơm cuộn tôm chiên xù, phủ lươn nướng Nhật Bản và quả bơ tươi.",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351",
    images: ["https://images.unsplash.com/photo-1579584425555-c3ce17fd4351"],
    base_price: 185000,
    item_type: "FOOD",
    dietary_tags: [],
    allergens: ["Fish", "Shellfish", "Gluten", "Soy"],
    spice_level: 0,
    prep_time: 15,
    calories: 420,
    is_available: true,
    is_featured: true,
    sort_order: 1
  },
  {
    categoryName: "Nigiri & Maki",
    brandName: "Tokyo Sushi Chain",
    restaurantName: null,
    name: "Nigiri Trứng Cá Hồi (Ikura)",
    slug: "nigiri-trung-ca-hoi-ikura",
    description: "Cơm nắm bọc rong biển, phủ đầy trứng cá hồi ngâm nước tương tẩm vị.",
    image: "https://images.unsplash.com/photo-1563630381190-77c336ea545a",
    images: ["https://images.unsplash.com/photo-1563630381190-77c336ea545a"],
    base_price: 120000,
    item_type: "FOOD",
    dietary_tags: ["Raw"],
    allergens: ["Fish", "Soy"],
    spice_level: 0,
    prep_time: 8,
    calories: 150,
    is_available: true,
    is_featured: false,
    sort_order: 2
  },

  // -- Tempura & Đồ Nướng --
  {
    categoryName: "Tempura & Đồ Nướng",
    brandName: "Tokyo Sushi Chain",
    restaurantName: null,
    name: "Tempura Tôm Thập Cẩm",
    slug: "tempura-tom-thap-cam",
    description: "Tôm sú và rau củ tẩm bột Tempura chiên giòn, dùng kèm nước chấm dashi.",
    image: "https://images.unsplash.com/photo-1615361200141-f45040f367be",
    images: ["https://images.unsplash.com/photo-1615361200141-f45040f367be"],
    base_price: 145000,
    item_type: "FOOD",
    dietary_tags: [],
    allergens: ["Shellfish", "Gluten", "Egg"],
    spice_level: 0,
    prep_time: 15,
    calories: 380,
    is_available: true,
    is_featured: false,
    sort_order: 1
  },

  // =========================================================
  // ITEMS: HƯƠNG VIỆT QUẬN 1 (MENU CHI NHÁNH Q1)
  // Thuộc thẳng vào Restaurant, BrandId sẽ null theo code của bạn
  // =========================================================

  // -- Đặc Sản Quận 1 --
  {
    categoryName: "Đặc Sản Quận 1",
    brandName: null,
    restaurantName: "Hương Việt Quận 1", 
    name: "Lẩu Cá Mú Trân Châu",
    slug: "lau-ca-mu-tran-chau",
    description: "Cá mú sống bắt tại hồ, phi lê nhúng lẩu măng chua cay nồng.",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4859",
    images: ["https://images.unsplash.com/photo-1548943487-a2e4e43b4859"],
    base_price: 550000,
    item_type: "FOOD",
    dietary_tags: [],
    allergens: ["Fish"],
    spice_level: 2,
    prep_time: 25,
    calories: 600,
    is_available: true,
    is_featured: true,
    sort_order: 1
  },
  {
    categoryName: "Đặc Sản Quận 1",
    brandName: null,
    restaurantName: "Hương Việt Quận 1", 
    name: "Tôm Hùm Nướng Bơ Tỏi",
    slug: "tom-hum-nuong-bo-toi",
    description: "Tôm hùm baby nướng bơ tỏi thơm lừng, dùng kèm bánh mì đặc ruột.",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47",
    images: ["https://images.unsplash.com/photo-1565680018434-b513d5e5fd47"],
    base_price: 890000,
    item_type: "FOOD",
    dietary_tags: [],
    allergens: ["Shellfish", "Dairy", "Gluten"],
    spice_level: 0,
    prep_time: 30,
    calories: 750,
    is_available: true,
    is_featured: true,
    sort_order: 2
  },

  // -- Combo Gia Đình VIP --
  {
    categoryName: "Combo Gia Đình VIP",
    brandName: null,
    restaurantName: "Hương Việt Quận 1", 
    name: "Set Mâm Cơm Phú Quý (4-6 Người)",
    slug: "set-mam-com-phu-quy",
    description: "Gồm: Gỏi tôm thịt, Gà ta hấp lá chanh, Cá tầm nướng muối ớt, Canh chua tôm, Tráng miệng.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    images: ["https://images.unsplash.com/photo-1559339352-11d035aa65de"],
    base_price: 1250000,
    item_type: "COMBO",
    dietary_tags: [],
    allergens: ["Fish", "Shellfish", "Peanut"],
    spice_level: 1,
    prep_time: 40,
    calories: 2500,
    is_available: true,
    is_featured: true,
    sort_order: 1
  }
];