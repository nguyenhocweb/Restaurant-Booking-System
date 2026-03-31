export const menusData = [
  // ==========================================
  // I. MENU CẤP THƯƠNG HIỆU (BRAND MENUS) 
  // (Áp dụng cho toàn bộ chi nhánh trừ khi có menu riêng đè lên)
  // ==========================================

  // 1. Hương Việt (brandId: 65b2a1c0d4f3e2a1b0c9d8e7)
  {
    id: "65b2a1c0d4f3e2a1b0c9e801",
    brandId: "65b2a1c0d4f3e2a1b0c9d8e7",
    restaurantId: null,
    name: "Thực Đơn Chính",
    type: "REGULAR",
    description: "Thực đơn các món ăn truyền thống 3 miền của Hương Việt",
    available_days: [1, 2, 3, 4, 5, 6, 7], // Cả tuần
    available_from: "09:00",
    available_until: "22:00",
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 1
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e802",
    brandId: "65b2a1c0d4f3e2a1b0c9d8e7",
    restaurantId: null,
    name: "Cơm Trưa Văn Phòng",
    type: "LUNCH_SPECIAL",
    description: "Combo cơm trưa nhanh, tiện lợi và đầy đủ dinh dưỡng",
    available_days: [1, 2, 3, 4, 5], // Chỉ thứ 2 - thứ 6
    available_from: "10:30",
    available_until: "14:00",
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 2
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e803",
    brandId: "65b2a1c0d4f3e2a1b0c9d8e7",
    restaurantId: null,
    name: "Menu Mâm Cỗ Ngày Tết",
    type: "HOLIDAY",
    description: "Các món ăn truyền thống dịp Tết Nguyên Đán",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: null, // Bán cả ngày
    available_until: null,
    valid_from: new Date("2026-01-15T00:00:00.000Z"), // Chỉ bán dịp Tết
    valid_until: new Date("2026-02-15T23:59:59.000Z"),
    is_active: true,
    sort_order: 3
  },

  // 2. Tokyo Sushi Chain (brandId: 65b2a1c0d4f3e2a1b0c9d8e8)
  {
    id: "65b2a1c0d4f3e2a1b0c9e804",
    brandId: "65b2a1c0d4f3e2a1b0c9d8e8",
    restaurantId: null,
    name: "Grand Sushi Menu",
    type: "REGULAR",
    description: "Menu sashimi và sushi tổng hợp chuẩn vị Nhật",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: "10:00",
    available_until: "22:30",
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 1
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e805",
    brandId: "65b2a1c0d4f3e2a1b0c9d8e8",
    restaurantId: null,
    name: "Omakase Experience",
    type: "DINNER",
    description: "Trải nghiệm ẩm thực do đầu bếp quyết định (chỉ buổi tối)",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: "18:00",
    available_until: "22:00",
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 2
  },

  // 3. BBQ Master Vietnam (brandId: 65b2a1c0d4f3e2a1b0c9d8e9)
  {
    id: "65b2a1c0d4f3e2a1b0c9e806",
    brandId: "65b2a1c0d4f3e2a1b0c9d8e9",
    restaurantId: null,
    name: "Buffet Nướng Tiêu Chuẩn",
    type: "BUFFET",
    description: "Vé buffet bao gồm bò, heo, hải sản và quầy line",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: "10:00",
    available_until: "23:00",
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 1
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e807",
    brandId: "65b2a1c0d4f3e2a1b0c9d8e9",
    restaurantId: null,
    name: "A La Carte (Gọi Món)",
    type: "ALACARTE",
    description: "Thực đơn gọi món cho khách không ăn buffet",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: "10:00",
    available_until: "23:00",
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 2
  },

  // 4. Coffee & Chill (brandId: 65b2a1c0d4f3e2a1b0c9d8ea)
  {
    id: "65b2a1c0d4f3e2a1b0c9e808",
    brandId: "65b2a1c0d4f3e2a1b0c9d8ea",
    restaurantId: null,
    name: "Menu Đồ Uống Cà Phê",
    type: "BEVERAGE",
    description: "Cà phê pha máy, pha phin và các loại trà",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: "07:00",
    available_until: "22:00",
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 1
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e809",
    brandId: "65b2a1c0d4f3e2a1b0c9d8ea",
    restaurantId: null,
    name: "Menu Bánh Ngọt (Pastry)",
    type: "DESSERT",
    description: "Các loại bánh kem, croissant ăn kèm",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: "07:00",
    available_until: "22:00",
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 2
  },

  // 5. Fine Dine Elite (brandId: 65b2a1c0d4f3e2a1b0c9d8f6)
  {
    id: "65b2a1c0d4f3e2a1b0c9e80a",
    brandId: "65b2a1c0d4f3e2a1b0c9d8f6",
    restaurantId: null,
    name: "Signature Tasting Menu (7 Courses)",
    type: "TASTING",
    description: "Hành trình ẩm thực 7 món do bếp trưởng thiết kế",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: "17:30",
    available_until: "23:00",
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 1
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e80b",
    brandId: "65b2a1c0d4f3e2a1b0c9d8f6",
    restaurantId: null,
    name: "Premium Wine List",
    type: "WINE",
    description: "Bộ sưu tập rượu vang nhập khẩu cao cấp",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: "17:30",
    available_until: "23:00",
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 2
  },

  // 6. Saigon Vegan Kitchen (brandId: 65b2a1c0d4f3e2a1b0c9d8ed)
  {
    id: "65b2a1c0d4f3e2a1b0c9e80c",
    brandId: "65b2a1c0d4f3e2a1b0c9d8ed",
    restaurantId: null,
    name: "Thực Đơn Chay Bốn Mùa",
    type: "REGULAR",
    description: "Menu thuần chay tốt cho sức khỏe",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: "08:00",
    available_until: "21:30",
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 1
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e80d",
    brandId: "65b2a1c0d4f3e2a1b0c9d8ed",
    restaurantId: null,
    name: "Special Full Moon Buffet",
    type: "EVENT",
    description: "Buffet chay đặc biệt mùng 1 và Rằm (âm lịch)",
    available_days: [1, 2, 3, 4, 5, 6, 7], // Mở tùy theo ngày rằm
    available_from: "10:00",
    available_until: "21:00",
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 2
  },

  // ==========================================
  // II. MENU CẤP CHI NHÁNH NHÀ HÀNG (RESTAURANT MENUS)
  // (Menu thiết kế riêng chỉ có tại 1 chi nhánh cụ thể)
  // ==========================================

  // 1. Hương Việt Quận 1 (restaurantId: 65b2a1c0d4f3e2a1b0c9d999)
  {
    id: "65b2a1c0d4f3e2a1b0c9e80e",
    brandId: null, // Thuộc về cấp Restaurant
    restaurantId: "65b2a1c0d4f3e2a1b0c9d999",
    name: "VIP Lounge Menu Quận 1",
    type: "EXCLUSIVE",
    description: "Menu đặc biệt bằng nguyên liệu cao cấp, chỉ phục vụ tại CN Quận 1",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: "10:00",
    available_until: "23:00", // Bán khuya hơn
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 1
  },

  // 2. Tokyo Sushi Lê Lợi (restaurantId: 65b2a1c0d4f3e2a1b0c9d99c)
  {
    id: "65b2a1c0d4f3e2a1b0c9e80f",
    brandId: null,
    restaurantId: "65b2a1c0d4f3e2a1b0c9d99c",
    name: "Lê Lợi Chef's Choice",
    type: "SPECIAL",
    description: "Menu sáng tạo độc quyền của bếp trưởng chi nhánh Lê Lợi",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: "11:00",
    available_until: "22:00",
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 1
  },

  // 3. Coffee & Chill Quận 5 (restaurantId: 65b2a1c0d4f3e2a1b0c9d9a2)
  {
    id: "65b2a1c0d4f3e2a1b0c9e810",
    brandId: null,
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9a2",
    name: "Student Combo Q5",
    type: "PROMO",
    description: "Combo nước và bánh giá tiết kiệm cho sinh viên các trường Quận 5",
    available_days: [1, 2, 3, 4, 5], // Không bán T7, CN
    available_from: "08:00",
    available_until: "17:00", // Chỉ bán ban ngày
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 1
  },

  // 4. BBQ Master Phạm Văn Đồng (restaurantId: 65b2a1c0d4f3e2a1b0c9d99f)
  {
    id: "65b2a1c0d4f3e2a1b0c9e811",
    brandId: null,
    restaurantId: "65b2a1c0d4f3e2a1b0c9d99f",
    name: "Menu Nhậu Đêm (Late Night BBQ)",
    type: "NIGHT",
    description: "Thực đơn nướng và bia vỉa hè dành riêng cho khách nhậu đêm",
    available_days: [5, 6, 7], // Chỉ bán cuối tuần (T6, T7, CN)
    available_from: "21:00",
    available_until: "02:00", // Qua ngày hôm sau
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 1
  },

  // 5. Fine Dine Elite Đồng Khởi (restaurantId: 65b2a1c0d4f3e2a1b0c9d9ab)
  {
    id: "65b2a1c0d4f3e2a1b0c9e812",
    brandId: null,
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9ab",
    name: "Spring Collection Menu",
    type: "SEASONAL",
    description: "Bộ sưu tập món ăn theo chủ đề mùa Xuân 2026",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: "18:00",
    available_until: "23:00",
    valid_from: new Date("2026-03-01T00:00:00.000Z"), // Bán trong 3 tháng xuân
    valid_until: new Date("2026-05-31T23:59:59.000Z"),
    is_active: true,
    sort_order: 3
  },
  // ==========================================
  // I. MENU CẤP THƯƠNG HIỆU (BRAND MENUS) 
  // ==========================================

  // 1. Pizza Roma (brandId: 65b2a1c0d4f3e2a1b0c9d8ee)
  {
    id: "65b2a1c0d4f3e2a1b0c9e813",
    brandId: "65b2a1c0d4f3e2a1b0c9d8ee",
    restaurantId: null,
    name: "Kids Menu (Thực Đơn Bé Yêu)",
    type: "KIDS",
    description: "Phần ăn nhỏ gọn, ít gia vị cay nóng, tặng kèm đồ chơi cho bé",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: "10:00",
    available_until: "22:00",
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 2
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e814",
    brandId: "65b2a1c0d4f3e2a1b0c9d8ee",
    restaurantId: null,
    name: "Delivery & Takeaway Menu",
    type: "DELIVERY",
    description: "Thực đơn đóng gói mang về (lược bỏ các món dễ hỏng khi vận chuyển)",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: "10:00",
    available_until: "22:00",
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 3
  },

  // 2. Bún Bò Huế 1986 (brandId: 65b2a1c0d4f3e2a1b0c9d8f0)
  {
    id: "65b2a1c0d4f3e2a1b0c9e815",
    brandId: "65b2a1c0d4f3e2a1b0c9d8f0",
    restaurantId: null,
    name: "Menu Điểm Tâm Sáng",
    type: "BREAKFAST",
    description: "Bún bò tô tiêu chuẩn phục vụ nhanh buổi sáng",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: "06:00", // Bán từ sáng sớm
    available_until: "10:30", // Hết giờ ăn sáng
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 1
  },

  // 3. Da Nang Sea Breeze (brandId: 65b2a1c0d4f3e2a1b0c9d8f8)
  {
    id: "65b2a1c0d4f3e2a1b0c9e816",
    brandId: "65b2a1c0d4f3e2a1b0c9d8f8",
    restaurantId: null,
    name: "Hải Sản Tươi Sống (Market Price)",
    type: "MARKET_PRICE",
    description: "Hải sản bắt tại hồ, giá thay đổi theo thời giá mỗi ngày",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: "10:00",
    available_until: "23:00",
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 2
  },

  // 4. Hanoi Phở Quán (brandId: 65b2a1c0d4f3e2a1b0c9d8f7)
  {
    id: "65b2a1c0d4f3e2a1b0c9e817",
    brandId: "65b2a1c0d4f3e2a1b0c9d8f7",
    restaurantId: null,
    name: "Phở Gánh Truyền Thống",
    type: "REGULAR",
    description: "Menu các món phở nước và phở xào đậm chất Hà Nội",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: "06:00",
    available_until: "22:00",
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 1
  },

  // ==========================================
  // II. MENU CẤP CHI NHÁNH NHÀ HÀNG (RESTAURANT MENUS)
  // ==========================================

  // 5. Golden Steak Thảo Điền (restaurantId: 65b2a1c0d4f3e2a1b0c9d9a0)
  {
    id: "65b2a1c0d4f3e2a1b0c9e818",
    brandId: null,
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9a0",
    name: "Weekend Brunch Thảo Điền",
    type: "BRUNCH",
    description: "Menu Brunch phong cách Âu (Steak & Eggs, Mimosa) chỉ dành cho cuối tuần",
    available_days: [6, 7], // Chỉ phục vụ Thứ 7, Chủ Nhật
    available_from: "09:00",
    available_until: "14:00",
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 2
  },

  // 6. Tokyo Sushi Landmark 81 (restaurantId: 65b2a1c0d4f3e2a1b0c9d99d)
  {
    id: "65b2a1c0d4f3e2a1b0c9e819",
    brandId: null,
    restaurantId: "65b2a1c0d4f3e2a1b0c9d99d",
    name: "Business Lunch Set",
    type: "LUNCH_SPECIAL",
    description: "Set cơm trưa Bento cao cấp tiếp khách dành cho giới văn phòng tòa nhà",
    available_days: [1, 2, 3, 4, 5], // Thứ 2 đến Thứ 6
    available_from: "11:00",
    available_until: "14:30",
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 3
  },

  // 7. Coffee & Chill Quận 5 (restaurantId: 65b2a1c0d4f3e2a1b0c9d9a2)
  {
    id: "65b2a1c0d4f3e2a1b0c9e81a",
    brandId: null,
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9a2",
    name: "Night Owl Cravings (Menu Cú Đêm)",
    type: "LATE_NIGHT",
    description: "Đồ uống nhẹ và mì gói, snack phục vụ các bạn sinh viên chạy deadline xuyên đêm",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: "22:00",
    available_until: "06:00", // Phục vụ xuyên đêm
    valid_from: null,
    valid_until: null,
    is_active: true,
    sort_order: 3
  },

  // 8. Dalat Pine Roasters (restaurantId: 65b2a1c0d4f3e2a1b0c9d9ac)
  {
    id: "65b2a1c0d4f3e2a1b0c9e81b",
    brandId: null,
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9ac",
    name: "Winter Warmers (Thức Uống Mùa Đông)",
    type: "SEASONAL",
    description: "Cacao nóng, trà quế mật ong và các thức uống giữ ấm",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: null,
    available_until: null,
    valid_from: new Date("2026-11-01T00:00:00.000Z"), // Chỉ bán vào mùa lạnh ở Đà Lạt
    valid_until: new Date("2027-02-28T23:59:59.000Z"),
    is_active: true,
    sort_order: 2
  },

  // 9. Saigon Vegan Kitchen Nguyễn Trãi (restaurantId: 65b2a1c0d4f3e2a1b0c9d9a3)
  {
    id: "65b2a1c0d4f3e2a1b0c9e81c",
    brandId: null,
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9a3",
    name: "Thực Đơn Mùa Vu Lan Báo Hiếu",
    type: "FESTIVAL",
    description: "Set mâm cúng chay và các món đặc biệt dành cho tháng 7 âm lịch",
    available_days: [1, 2, 3, 4, 5, 6, 7],
    available_from: "08:00",
    available_until: "21:30",
    valid_from: new Date("2026-08-10T00:00:00.000Z"), // Giai đoạn tháng Vu Lan
    valid_until: new Date("2026-09-10T23:59:59.000Z"),
    is_active: true,
    sort_order: 3
  },

  // 10. BBQ Master Gò Vấp (restaurantId: 65b2a1c0d4f3e2a1b0c9d99e)
  {
    id: "65b2a1c0d4f3e2a1b0c9e81d",
    brandId: null,
    restaurantId: "65b2a1c0d4f3e2a1b0c9d99e",
    name: "Happy Hour Drinks (Giờ Vàng Bia Cuộn)",
    type: "HAPPY_HOUR",
    description: "Khuyến mãi mua 1 tặng 1 cho các loại bia tháp và cocktail",
    available_days: [1, 2, 3, 4], // Chỉ áp dụng Thứ 2 - Thứ 5 (kích cầu ngày vắng)
    available_from: "15:00",
    available_until: "18:00", // Khung giờ vắng khách buổi chiều
    valid_from: null,
    valid_until: null,
    is_active: true, // Nếu hết chạy chương trình có thể chuyển thành false
    sort_order: 4
  }
];