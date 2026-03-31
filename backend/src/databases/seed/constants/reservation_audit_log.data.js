export const reservationAuditLogsData = [
  // ==========================================
  // LOGS CHO ĐƠN ĐẶT BÀN: RES-2026-AB12CD (reservationId: 65b2a1c0d4f3e2a1b0c9e601)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9e701",
    reservationId: "65b2a1c0d4f3e2a1b0c9e601",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9d915", // Customer 1 tự tạo đơn trên Web
    action: "CREATED",
    old_values: null,
    new_values: {
      status: "PENDING",
      party_size: 4,
      start_time: "18:00"
    },
    ip_address: "192.168.1.10",
    user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0",
    createdAt: new Date("2026-06-08T10:00:00.000Z")
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e702",
    reservationId: "65b2a1c0d4f3e2a1b0c9e601",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9db01", // rest_manager (Quản lý nhà hàng xác nhận)
    action: "UPDATED_STATUS",
    old_values: {
      status: "PENDING"
    },
    new_values: {
      status: "CONFIRMED"
    },
    ip_address: "10.0.0.5", // IP nội bộ của nhà hàng
    user_agent: "POS System / iPad Pro",
    createdAt: new Date("2026-06-08T10:30:00.000Z")
  },

  // ==========================================
  // LOGS CHO ĐƠN ĐẶT BÀN: RES-2026-PL9S2K (reservationId: 65b2a1c0d4f3e2a1b0c9e602)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9e703",
    reservationId: "65b2a1c0d4f3e2a1b0c9e602",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9db10", // Nhân viên tạo đơn giùm khách qua điện thoại
    action: "CREATED",
    old_values: null,
    new_values: {
      status: "CONFIRMED", // Staff tạo thường confirm luôn
      party_size: 6,
      source: "PHONE"
    },
    ip_address: "10.0.0.12",
    user_agent: "POS System / Web App",
    createdAt: new Date("2026-06-10T14:00:00.000Z")
  },

  // ==========================================
  // LOGS CHO ĐƠN ĐẶT BÀN: RES-2026-HF82KD (reservationId: 65b2a1c0d4f3e2a1b0c9e604)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9e704",
    reservationId: "65b2a1c0d4f3e2a1b0c9e604",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9d917", // Customer 3 tạo đơn
    action: "CREATED",
    old_values: null,
    new_values: {
      status: "PENDING",
      party_size: 3
    },
    ip_address: "14.232.15.99",
    user_agent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) Safari",
    createdAt: new Date("2026-06-12T08:30:00.000Z")
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e705",
    reservationId: "65b2a1c0d4f3e2a1b0c9e604",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9db02", // Thu ngân xác nhận đã nhận cọc
    action: "UPDATED_DEPOSIT",
    old_values: {
      deposit_paid: false
    },
    new_values: {
      deposit_paid: true,
      status: "CONFIRMED"
    },
    ip_address: "10.0.0.5",
    user_agent: "POS System / Windows 11",
    createdAt: new Date("2026-06-12T09:00:00.000Z")
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e706",
    reservationId: "65b2a1c0d4f3e2a1b0c9e604",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9db0a", // Lễ tân (Host) xếp bàn cho khách
    action: "UPDATED_STATUS",
    old_values: {
      status: "CONFIRMED"
    },
    new_values: {
      status: "SEATED",
      seated_at: "2026-06-13T17:35:00.000Z"
    },
    ip_address: "10.0.0.8",
    user_agent: "POS System / iPad Mini",
    createdAt: new Date("2026-06-13T17:35:00.000Z")
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e707",
    reservationId: "65b2a1c0d4f3e2a1b0c9e604",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9db02", // Thu ngân thanh toán xong và hoàn thành đơn
    action: "UPDATED_STATUS",
    old_values: {
      status: "SEATED"
    },
    new_values: {
      status: "COMPLETED",
      completed_at: "2026-06-13T19:20:00.000Z"
    },
    ip_address: "10.0.0.5",
    user_agent: "POS System / Windows 11",
    createdAt: new Date("2026-06-13T19:20:00.000Z")
  },

  // ==========================================
  // LOGS CHO ĐƠN ĐẶT BÀN: RES-2026-X91KQ2 (reservationId: 65b2a1c0d4f3e2a1b0c9e603)
  // Khách hàng vào app đổi số lượng người
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9e708",
    reservationId: "65b2a1c0d4f3e2a1b0c9e603",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9d916", // Customer 2 
    action: "UPDATED_DETAILS",
    old_values: {
      party_size: 2
    },
    new_values: {
      party_size: 3 // Khách tăng thêm 1 người
    },
    ip_address: "113.160.22.11",
    user_agent: "Mobile App / Android 14",
    createdAt: new Date()
  },

  // ==========================================
  // LOGS CHO ĐƠN ĐẶT BÀN: RES-2026-ZX77MN (reservationId: 65b2a1c0d4f3e2a1b0c9e606)
  // Khách hàng chủ động hủy bàn
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9e709",
    reservationId: "65b2a1c0d4f3e2a1b0c9e606",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9d919", // Customer 5 tự tạo
    action: "CREATED",
    old_values: null,
    new_values: {
      status: "PENDING",
      party_size: 15
    },
    ip_address: "118.69.10.55",
    user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari",
    createdAt: new Date("2026-06-10T11:00:00.000Z")
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e70a",
    reservationId: "65b2a1c0d4f3e2a1b0c9e606",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9d919", // Customer 5 tự hủy trên web
    action: "CANCELLED",
    old_values: {
      status: "PENDING"
    },
    new_values: {
      status: "CANCELLED",
      cancellation_reason: "Khách hàng thay đổi lịch trình"
    },
    ip_address: "118.69.10.55",
    user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari",
    createdAt: new Date("2026-06-14T08:00:00.000Z")
  },

  // ==========================================
  // LOGS CHO ĐƠN ĐẶT BÀN: RES-2026-WW11QQ (reservationId: 65b2a1c0d4f3e2a1b0c9e608)
  // Admin hệ thống ghi chú nội bộ (internal notes)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9e70b",
    reservationId: "65b2a1c0d4f3e2a1b0c9e608",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9db15", // Quản lý Coffee & Chill
    action: "ADDED_INTERNAL_NOTE",
    old_values: {
      internal_notes: null
    },
    new_values: {
      internal_notes: "Khách VIP, phục vụ ưu tiên khu yên tĩnh"
    },
    ip_address: "10.0.1.20",
    user_agent: "POS System / Web App",
    createdAt: new Date()
  },
  // ==========================================
  // LOGS CHO ĐƠN: RES-2026-FDE001 (Fine Dine Elite - Khách VIP Vingroup)
  // Kịch bản: Khách tự đặt -> Sửa lại ghi chú -> Admin xác nhận cọc 5 triệu
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9e70c",
    reservationId: "65b2a1c0d4f3e2a1b0c9e609",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9d91b", // Customer 7
    action: "CREATED",
    old_values: null,
    new_values: { status: "PENDING", party_size: 12 },
    ip_address: "115.79.20.100",
    user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edge",
    createdAt: new Date("2026-03-25T10:00:00.000Z")
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e70d",
    reservationId: "65b2a1c0d4f3e2a1b0c9e609",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9d91b", // Customer tự sửa yêu cầu đặc biệt
    action: "UPDATED_DETAILS",
    old_values: { special_requests: "Chuẩn bị menu riêng" },
    new_values: { special_requests: "Chuẩn bị menu riêng, set up hoa tươi trên bàn" },
    ip_address: "115.79.20.100",
    user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edge",
    createdAt: new Date("2026-03-25T11:00:00.000Z")
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e70e",
    reservationId: "65b2a1c0d4f3e2a1b0c9e609",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9dc01", // Giám đốc đích thân duyệt
    action: "UPDATED_DEPOSIT",
    old_values: { deposit_paid: false },
    new_values: { deposit_paid: true, status: "CONFIRMED", deposit_amount: 5000000 },
    ip_address: "10.0.0.1",
    user_agent: "Mac OS X / Chrome",
    createdAt: new Date("2026-03-25T14:00:00.000Z")
  },

  // ==========================================
  // LOGS CHO ĐƠN: RES-2026-SEA001 (Sea Breeze Đà Nẵng - Đoàn 80 khách)
  // Kịch bản: Đặt 80 người -> Tăng lên 85 người -> Bổ sung dị ứng thức ăn
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9e70f",
    reservationId: "65b2a1c0d4f3e2a1b0c9e60b",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9d91c", // Customer 8 (Tour guide)
    action: "CREATED",
    old_values: null,
    new_values: { status: "PENDING", party_size: 80 },
    ip_address: "14.160.22.11",
    user_agent: "Safari / iOS",
    createdAt: new Date("2026-03-30T16:00:00.000Z")
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e710",
    reservationId: "65b2a1c0d4f3e2a1b0c9e60b",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9d91c", // Khách báo tăng số lượng
    action: "UPDATED_DETAILS",
    old_values: { party_size: 80, dietary_restrictions: null },
    new_values: { party_size: 85, dietary_restrictions: ["5_vegetarian_meals"] },
    ip_address: "14.160.22.11",
    user_agent: "Safari / iOS",
    createdAt: new Date("2026-03-31T09:00:00.000Z")
  },

  // ==========================================
  // LOGS CHO ĐƠN: RES-2026-PIZ001 (Pizza Roma - Bị hủy do No-show)
  // Kịch bản: Khách đặt -> Nhân viên gọi chốt -> Khách không đến (Nhân viên hủy)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9e711",
    reservationId: "65b2a1c0d4f3e2a1b0c9e60d",
    changedByUserId: null, // Khách chưa login, đặt dạng guest
    action: "CREATED",
    old_values: null,
    new_values: { status: "PENDING", party_size: 6 },
    ip_address: "101.99.20.15",
    user_agent: "Chrome / Android",
    createdAt: new Date("2026-03-18T09:30:00.000Z")
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e712",
    reservationId: "65b2a1c0d4f3e2a1b0c9e60d",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9dc12", // Nhân viên Pizza Roma gọi điện confirm
    action: "UPDATED_STATUS",
    old_values: { status: "PENDING" },
    new_values: { status: "CONFIRMED" },
    ip_address: "192.168.10.5",
    user_agent: "POS / Windows",
    createdAt: new Date("2026-03-18T10:00:00.000Z")
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e713",
    reservationId: "65b2a1c0d4f3e2a1b0c9e60d",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9dc12", // Nhân viên hủy vì quá giờ không đến
    action: "CANCELLED",
    old_values: { status: "CONFIRMED" },
    new_values: { status: "CANCELLED", cancellation_reason: "Khách không đến, không liên lạc được" },
    ip_address: "192.168.10.5",
    user_agent: "POS / Windows",
    createdAt: new Date("2026-03-20T19:00:00.000Z") // Nửa tiếng sau giờ đặt (18:30)
  },
  // ==========================================
  // LOGS CHO ĐƠN: RES-2026-BBH001 (Bún Bò Huế 1986 - Khách vãng lai Walk-in)
  // Kịch bản: Thu ngân tự tạo -> Khách ngồi ăn luôn -> Thanh toán xong (COMPLETED)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9e714",
    reservationId: "65b2a1c0d4f3e2a1b0c9e60f",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9dc11", // Thu ngân tạo trực tiếp
    action: "CREATED",
    old_values: null,
    new_values: { status: "SEATED", source: "OTHER", party_size: 4 }, // Đặt xong ngồi luôn
    ip_address: "10.0.0.1",
    user_agent: "POS Cashier System",
    createdAt: new Date("2026-03-15T07:30:00.000Z")
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e715",
    reservationId: "65b2a1c0d4f3e2a1b0c9e60f",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9dc11", // Thu ngân bấm tính tiền
    action: "COMPLETED",
    old_values: { status: "SEATED" },
    new_values: { status: "COMPLETED" },
    ip_address: "10.0.0.1",
    user_agent: "POS Cashier System",
    createdAt: new Date("2026-03-15T08:15:00.000Z")
  },

  // ==========================================
  // LOGS CHO ĐƠN: RES-2026-HVT001 (Hương Việt Thủ Đức - Hủy do sự cố)
  // Kịch bản: Khách đặt -> Nhân viên hủy do nhà hàng có sự cố cúp điện
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9e716",
    reservationId: "65b2a1c0d4f3e2a1b0c9e611",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9d919", // Customer 5 đặt
    action: "CREATED",
    old_values: null,
    new_values: { status: "PENDING", party_size: 10 },
    ip_address: "113.190.10.22",
    user_agent: "Chrome / Windows",
    createdAt: new Date("2026-03-20T09:00:00.000Z")
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e717",
    reservationId: "65b2a1c0d4f3e2a1b0c9e611",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9db01", // Quản lý xác nhận
    action: "UPDATED_STATUS",
    old_values: { status: "PENDING" },
    new_values: { status: "CONFIRMED" },
    ip_address: "10.0.0.2",
    user_agent: "POS System",
    createdAt: new Date("2026-03-20T10:00:00.000Z")
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9e718",
    reservationId: "65b2a1c0d4f3e2a1b0c9e611",
    changedByUserId: "65b2a1c0d4f3e2a1b0c9db01", // Quản lý bấm hủy đơn và nhập lý do
    action: "CANCELLED",
    old_values: { status: "CONFIRMED" },
    new_values: { status: "CANCELLED", cancellation_reason: "Sự cố kỹ thuật tại nhà hàng (đã hoàn cọc)" },
    ip_address: "10.0.0.2",
    user_agent: "POS System",
    createdAt: new Date("2026-03-25T15:00:00.000Z") // Hủy sát giờ
  }
];