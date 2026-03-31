export const reservationsData = [
  // ==========================================
  // NHÀ HÀNG: FINE DINE ELITE QUẬN 1 (restaurantId: 65b2a1c0d4f3e2a1b0c9d9ab)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9e609",
    confirmation_code: "RES-2026-FDE001",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9ab", 
    userId: "65b2a1c0d4f3e2a1b0c9d91b", 
    created_by_staff_id: null,
    
    guest_name: "Tập đoàn Vingroup (Đại diện: Mr. Hùng)",
    guest_phone: "0909112233",
    guest_email: "hung.nguyen@vingroup.com",

    reservation_date: new Date("2026-04-15T00:00:00.000Z"),
    start_time: "19:00",
    end_time: "22:00", 
    party_size: 12,
    
    status: "CONFIRMED",
    source: "WEB",
    special_requests: "Chuẩn bị menu riêng, set up hoa tươi trên bàn",
    dietary_restrictions: ["vegan_options_needed", "no_dairy"],
    occasion: "BUSINESS",
    internal_notes: "Khách siêu VIP, quản lý trực tiếp chăm sóc",

    deposit_paid: true,
    deposit_amount: 5000000, 
    
    confirmed_at: new Date("2026-03-25T14:00:00.000Z"),
    createdAt: new Date("2026-03-25T10:00:00.000Z")
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e60a",
    confirmation_code: "RES-2026-FDE002",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9ab", 
    userId: null,
    created_by_staff_id: "65b2a1c0d4f3e2a1b0c9db01", 
    
    guest_name: "Trương Thảo Nhi",
    guest_phone: "0933999888",
    guest_email: "thaonhi@gmail.com",

    reservation_date: new Date("2026-02-14T00:00:00.000Z"),
    start_time: "20:00",
    end_time: "22:30",
    party_size: 2,
    
    status: "COMPLETED",
    source: "PHONE",
    special_requests: "Cầu hôn, mang nhẫn ra cùng món tráng miệng",
    dietary_restrictions: null,
    occasion: "ANNIVERSARY",
    internal_notes: "Cầu hôn thành công, khách tip hậu hĩnh",

    deposit_paid: true,
    deposit_amount: 1000000,
    
    confirmed_at: new Date("2026-01-20T09:00:00.000Z"),
    seated_at: new Date("2026-02-14T20:05:00.000Z"),
    completed_at: new Date("2026-02-14T23:00:00.000Z"),
    createdAt: new Date("2026-01-20T08:30:00.000Z")
  },

  // ==========================================
  // NHÀ HÀNG: SEA BREEZE ĐÀ NẴNG (restaurantId: 65b2a1c0d4f3e2a1b0c9d9a9)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9e60b",
    confirmation_code: "RES-2026-SEA001",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9a9", 
    userId: "65b2a1c0d4f3e2a1b0c9d91c", 
    created_by_staff_id: null,
    
    guest_name: "Đoàn du lịch Saigontourist",
    guest_phone: "0988555666",
    guest_email: "tour@saigontourist.vn",

    reservation_date: new Date("2026-05-01T00:00:00.000Z"),
    start_time: "11:30",
    end_time: "14:00",
    party_size: 80,
    
    status: "PENDING",
    source: "WEB",
    special_requests: "Sắp xếp bàn dài sát biển, xuất hóa đơn VAT",
    dietary_restrictions: ["5_vegetarian_meals"],
    occasion: "NORMAL", // Đổi từ null sang NORMAL
    internal_notes: "Đang chờ kế toán check tiền cọc 10 triệu",

    deposit_paid: false,
    deposit_amount: 10000000,
    
    createdAt: new Date("2026-03-30T16:00:00.000Z")
  },

  // ==========================================
  // NHÀ HÀNG: DALAT PINE ROASTERS (restaurantId: 65b2a1c0d4f3e2a1b0c9d9ac)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9e60c",
    confirmation_code: "RES-2026-DLPR01",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9ac", 
    userId: "65b2a1c0d4f3e2a1b0c9d91d", 
    created_by_staff_id: null,
    
    guest_name: "Phan Văn Đức",
    guest_phone: "0977222111",
    guest_email: "ducphan@gmail.com",

    reservation_date: new Date(), 
    start_time: "15:00",
    end_time: "17:00",
    party_size: 2,
    
    status: "SEATED",
    source: "MOBILE",
    special_requests: "Bàn ngoài ban công ngắm rừng thông",
    dietary_restrictions: null,
    occasion: "DATE",
    internal_notes: null,

    deposit_paid: false,
    deposit_amount: null,
    
    confirmed_at: new Date(Date.now() - 2 * 60 * 60 * 1000),
    seated_at: new Date(Date.now() - 30 * 60 * 1000),
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000)
  },

  // ==========================================
  // NHÀ HÀNG: PIZZA ROMA QUẬN 3 (restaurantId: 65b2a1c0d4f3e2a1b0c9d9a5)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9e60d",
    confirmation_code: "RES-2026-PIZ001",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9a5", 
    userId: null, 
    created_by_staff_id: null,
    
    guest_name: "Gia đình chị Hoa",
    guest_phone: "0905123456",
    guest_email: null,

    reservation_date: new Date("2026-03-20T00:00:00.000Z"),
    start_time: "18:30",
    end_time: "20:00",
    party_size: 6,
    
    status: "CANCELLED",
    source: "WEB",
    special_requests: "Cần 2 ghế trẻ em (highchairs)",
    dietary_restrictions: null,
    occasion: "BIRTHDAY",
    internal_notes: "Gọi điện 3 lần không bắt máy",

    deposit_paid: false,
    deposit_amount: null,
    
    confirmed_at: new Date("2026-03-18T10:00:00.000Z"),
    cancelled_at: new Date("2026-03-20T19:00:00.000Z"),
    cancellation_reason: "Khách không đến, không liên lạc được",
    createdAt: new Date("2026-03-18T09:30:00.000Z")
  },

  // ==========================================
  // NHÀ HÀNG: BÚN BÒ HUẾ 1986 LÝ TỰ TRỌNG (restaurantId: 65b2a1c0d4f3e2a1b0c9d9a7)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9e60f",
    confirmation_code: "RES-2026-BBH001",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9a7", 
    userId: null, 
    created_by_staff_id: "65b2a1c0d4f3e2a1b0c9dc11", 
    
    guest_name: "Khách lẻ (Walk-in)",
    guest_phone: "0000000000",
    guest_email: null,

    reservation_date: new Date("2026-03-15T00:00:00.000Z"),
    start_time: "07:30",
    end_time: "08:15",
    party_size: 4,
    
    status: "COMPLETED",
    source: "WALK_IN",
    special_requests: null,
    dietary_restrictions: null,
    occasion: "NORMAL", // Đổi từ null sang NORMAL
    internal_notes: "Bàn số 12",

    deposit_paid: false,
    deposit_amount: null,
    
    confirmed_at: new Date("2026-03-15T07:30:00.000Z"),
    seated_at: new Date("2026-03-15T07:30:00.000Z"),
    completed_at: new Date("2026-03-15T08:15:00.000Z"),
    createdAt: new Date("2026-03-15T07:30:00.000Z")
  },

  // ==========================================
  // NHÀ HÀNG: GOLDEN STEAK HOÀN KIẾM (restaurantId: 65b2a1c0d4f3e2a1b0c9d9a1)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9e610",
    confirmation_code: "RES-2026-GSK001",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9a1", 
    userId: "65b2a1c0d4f3e2a1b0c9d916", 
    created_by_staff_id: null,
    
    guest_name: "Lê Ngọc Hân",
    guest_phone: "0966777888",
    guest_email: "ngochan@gmail.com",

    reservation_date: new Date("2026-04-20T00:00:00.000Z"),
    start_time: "19:00",
    end_time: "21:30",
    party_size: 6,
    
    status: "PENDING",
    source: "MOBILE",
    special_requests: "Ghi dòng chữ 'Chúc mừng sinh nhật sếp' lên đĩa bánh",
    dietary_restrictions: null,
    occasion: "BIRTHDAY",
    internal_notes: "Chưa thanh toán cọc",

    deposit_paid: false,
    deposit_amount: 500000,
    
    createdAt: new Date("2026-03-31T08:00:00.000Z")
  },

  // ==========================================
  // NHÀ HÀNG HỦY ĐƠN VÌ SỰ CỐ TẠI THỦ ĐỨC
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9e611",
    confirmation_code: "RES-2026-HVT001",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d99b", 
    userId: "65b2a1c0d4f3e2a1b0c9d919", 
    created_by_staff_id: null,
    
    guest_name: "Trần Bảo Quốc",
    guest_phone: "0901555444",
    guest_email: "baoquoc@gmail.com",

    reservation_date: new Date("2026-03-25T00:00:00.000Z"),
    start_time: "18:00",
    end_time: "20:00",
    party_size: 10,
    
    status: "CANCELLED",
    source: "WEB",
    special_requests: null,
    dietary_restrictions: null,
    occasion: "OTHER", // Đổi từ FAMILY_GATHERING sang OTHER cho đúng enum
    internal_notes: "Sự cố cúp điện khu vực, phải đóng cửa nhà hàng",

    deposit_paid: true,
    deposit_amount: 500000,
    
    confirmed_at: new Date("2026-03-20T10:00:00.000Z"),
    cancelled_at: new Date("2026-03-25T15:00:00.000Z"),
    cancellation_reason: "Sự cố kỹ thuật tại nhà hàng (đã hoàn cọc)",
    createdAt: new Date("2026-03-20T09:00:00.000Z")
  }
];