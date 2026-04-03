export const specialSchedulesData = [
  // ==========================================
  // 1. HƯƠNG VIỆT QUẬN 1 (restaurantId: 65b2a1c0d4f3e2a1b0c9d999)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f201",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d999", // Hương Việt Quận 1
    date: new Date("2026-02-17T00:00:00.000Z"), // Ngày Tết thay đổi theo Âm lịch mỗi năm -> Dùng date cụ thể
    month: null,
    day: null,
    is_recurring: false,
    type: "HOLIDAY",
    open_time: null,
    close_time: null,
    reason: "Nghỉ Tết Nguyên Đán (Mùng 1 Tết)",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9f202",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d999", 
    date: null,
    month: 12,
    day: 24,
    is_recurring: true, // Lặp lại mỗi năm
    type: "SPECIAL_HOURS",
    open_time: "16:00",
    close_time: "23:59",
    reason: "Lễ Giáng Sinh (Christmas Eve) - Mở cửa muộn phục vụ tiệc tối",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9f203",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d999", 
    date: null,
    month: 12,
    day: 31,
    is_recurring: true, // Lặp lại mỗi năm
    type: "SPECIAL_HOURS",
    open_time: "10:00",
    close_time: "02:00", 
    reason: "Tết Dương Lịch (Countdown) - Phục vụ xuyên đêm",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ==========================================
  // 2. TOKYO SUSHI LÊ LỢI (restaurantId: 65b2a1c0d4f3e2a1b0c9d99c)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f204",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d99c",
    date: new Date("2026-05-20T00:00:00.000Z"),
    month: null,
    day: null,
    is_recurring: false,
    type: "PRIVATE_EVENT",
    open_time: null, 
    close_time: null,
    reason: "Đặt trọn nhà hàng cho sự kiện Year-end Doanh nghiệp",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9f205",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d99c",
    date: new Date("2026-08-15T00:00:00.000Z"),
    month: null,
    day: null,
    is_recurring: false,
    type: "CLOSURE",
    open_time: null,
    close_time: null,
    reason: "Team Building nội bộ nhân viên toàn chi nhánh",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ==========================================
  // 3. TOKYO SUSHI LANDMARK 81 (restaurantId: 65b2a1c0d4f3e2a1b0c9d99d)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f206",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d99d",
    date: new Date("2026-06-10T00:00:00.000Z"),
    month: null,
    day: null,
    is_recurring: false,
    type: "CLOSURE",
    open_time: null,
    close_time: null,
    reason: "Bảo trì định kỳ hệ thống bếp và khử trùng toàn nhà hàng",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ==========================================
  // 4. BBQ MASTER PHẠM VĂN ĐỒNG (restaurantId: 65b2a1c0d4f3e2a1b0c9d99f)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f207",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d99f",
    date: null,
    month: 9,
    day: 2,
    is_recurring: true, // Quốc khánh 2/9 lặp lại hàng năm
    type: "SPECIAL_HOURS", 
    open_time: "16:00",
    close_time: "23:30",
    reason: "Lễ Quốc Khánh 2/9 - Chỉ mở cửa phục vụ tiệc nướng buổi tối",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ==========================================
  // 5. BBQ MASTER GÒ VẤP (restaurantId: 65b2a1c0d4f3e2a1b0c9d99e)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f208",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d99e",
    date: new Date("2026-07-01T00:00:00.000Z"),
    month: null,
    day: null,
    is_recurring: false,
    type: "CLOSURE",
    open_time: null,
    close_time: null,
    reason: "Nâng cấp hệ thống hút khói âm bàn",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ==========================================
  // 6. FINE DINE ELITE ĐỒNG KHỞI (restaurantId: 65b2a1c0d4f3e2a1b0c9d9ab)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f209",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9ab",
    date: null,
    month: 2,
    day: 14,
    is_recurring: true, // Valentine lặp lại hàng năm
    type: "SPECIAL_HOURS",
    open_time: "17:00",
    close_time: "23:00",
    reason: "Valentine's Day - Phục vụ Set Menu đặc biệt cho cặp đôi",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9f20a",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9ab", 
    date: new Date("2026-10-20T00:00:00.000Z"),
    month: null,
    day: null,
    is_recurring: false,
    type: "PRIVATE_EVENT",
    open_time: null,
    close_time: null,
    reason: "Bao trọn không gian cho Lễ đính hôn (Private Proposal Event)",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ==========================================
  // 7. COFFEE & CHILL QUẬN 5 (restaurantId: 65b2a1c0d4f3e2a1b0c9d9a2)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f20b",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9a2",
    date: null,
    month: 4,
    day: 30,
    is_recurring: true, // Lặp lại hàng năm
    type: "HOLIDAY",
    open_time: null,
    close_time: null,
    reason: "Nghỉ lễ 30/4 Giải phóng miền Nam",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9f20c",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9a2", 
    date: null,
    month: 5,
    day: 1,
    is_recurring: true, // Lặp lại hàng năm
    type: "HOLIDAY",
    open_time: null,
    close_time: null,
    reason: "Nghỉ lễ 1/5 Quốc tế Lao Động",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ==========================================
  // 8. SEA BREEZE ĐÀ NẴNG (restaurantId: 65b2a1c0d4f3e2a1b0c9d9a9)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f20d",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9a9",
    date: new Date("2026-11-15T00:00:00.000Z"),
    month: null,
    day: null,
    is_recurring: false,
    type: "CLOSURE",
    open_time: null,
    close_time: null,
    reason: "Đóng cửa khẩn cấp do ảnh hưởng của Bão (Thiên tai)",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ==========================================
  // 9. SAIGON VEGAN KITCHEN NGUYỄN TRÃI (restaurantId: 65b2a1c0d4f3e2a1b0c9d9a3)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f20e",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9a3",
    date: new Date("2026-08-28T00:00:00.000Z"), // Ngày Vu Lan đổi theo Âm lịch mỗi năm -> Dùng date
    month: null,
    day: null,
    is_recurring: false,
    type: "SPECIAL_HOURS",
    open_time: "06:00",
    close_time: "22:00",
    reason: "Lễ Vu Lan - Mở cửa sớm từ 6h sáng để phục vụ điểm tâm chay",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ==========================================
  // 10. PIZZA ROMA HAI BÀ TRƯNG (restaurantId: 65b2a1c0d4f3e2a1b0c9d9a5)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f20f",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9a5",
    date: new Date("2026-05-10T00:00:00.000Z"),
    month: null,
    day: null,
    is_recurring: false,
    type: "CLOSURE",
    open_time: null,
    close_time: null,
    reason: "Đóng cửa định kỳ để phun thuốc diệt côn trùng (Pest Control) và tổng vệ sinh",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ==========================================
  // 11. DALAT PINE ROASTERS (restaurantId: 65b2a1c0d4f3e2a1b0c9d9ac)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f210",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9ac",
    date: new Date("2026-08-05T00:00:00.000Z"),
    month: null,
    day: null,
    is_recurring: false,
    type: "PRIVATE_EVENT",
    open_time: null,
    close_time: null,
    reason: "Đoàn làm phim bao trọn quán để quay MV ca nhạc (Shooting Day)",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9f211",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9ac",
    date: null,
    month: 12,
    day: 25,
    is_recurring: true, // Lặp lại mỗi năm
    type: "SPECIAL_HOURS",
    open_time: "06:00",
    close_time: "14:00", 
    reason: "Giáng Sinh - Quán đóng cửa sớm để nhân viên nghỉ lễ",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ==========================================
  // 12. GOLDEN STEAK HOÀN KIẾM (restaurantId: 65b2a1c0d4f3e2a1b0c9d9a1)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f212",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9a1",
    date: new Date("2026-07-15T00:00:00.000Z"),
    month: null,
    day: null,
    is_recurring: false,
    type: "SPECIAL_HOURS",
    open_time: "10:00",
    close_time: "20:00",
    reason: "Đóng cửa sớm để tổ chức Tiệc Nhân viên (Staff Party) quý 3",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ==========================================
  // 13. BBQ MASTER PHẠM VĂN ĐỒNG (restaurantId: 65b2a1c0d4f3e2a1b0c9d99f)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f213",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d99f",
    date: new Date("2026-06-20T00:00:00.000Z"),
    month: null,
    day: null,
    is_recurring: false,
    type: "SPECIAL_HOURS",
    open_time: "10:00",
    close_time: "03:00", 
    reason: "Chung kết World Cup - Mở cửa xuyên đêm phục vụ khách xem bóng đá",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ==========================================
  // 14. COFFEE & CHILL QUẬN 5 (restaurantId: 65b2a1c0d4f3e2a1b0c9d9a2)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f214",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9a2",
    date: new Date("2026-03-12T00:00:00.000Z"), 
    month: null,
    day: null,
    is_recurring: false,
    type: "CLOSURE",
    open_time: null,
    close_time: null,
    reason: "Cúp điện toàn khu vực theo thông báo của EVN (Không có máy phát dự phòng)",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ==========================================
  // 15. TOKYO SUSHI LANDMARK 81 (restaurantId: 65b2a1c0d4f3e2a1b0c9d99d)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f215",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d99d",
    date: new Date("2026-09-10T00:00:00.000Z"),
    month: null,
    day: null,
    is_recurring: false,
    type: "PRIVATE_EVENT",
    open_time: "18:00", 
    close_time: "23:00",
    reason: "Sự kiện ra mắt Menu Mùa Thu (Menu Tasting) dành riêng cho khách mời VIP và KOLs",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ==========================================
  // 16. HƯƠNG VIỆT THỦ ĐỨC (restaurantId: 65b2a1c0d4f3e2a1b0c9d99b)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f216",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d99b",
    date: new Date("2026-11-01T00:00:00.000Z"),
    month: null,
    day: null,
    is_recurring: false,
    type: "CLOSURE",
    open_time: null,
    close_time: null,
    reason: "Đào tạo nhân viên (Staff Training) chuẩn bị tái khai trương nhà hàng",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];