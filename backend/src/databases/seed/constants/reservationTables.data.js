export const reservationTablesData = [
  // ==========================================
  // 1. ĐƠN ĐẶT: RES-2026-AB12CD (Hương Việt Quận 1 - 4 người)
  // Bàn: T2 (Sức chứa 2-4 người)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f101",
    reservationId: "65b2a1c0d4f3e2a1b0c9e601",
    tableId: "65b2a1c0d4f3e2a1b0c9f002", // T2 - Hương Việt Q1
    assigned_by_staff_id: "65b2a1c0d4f3e2a1b0c9db0a", // Lễ tân xếp bàn
    assigned_at: new Date("2026-06-08T10:35:00.000Z"),
    createdAt: new Date("2026-06-08T10:35:00.000Z"),
    updatedAt: new Date("2026-06-08T10:35:00.000Z")
  },

  // ==========================================
  // 2. ĐƠN ĐẶT: RES-2026-X91KQ2 (Tokyo Sushi LM81 - 3 người)
  // Bàn: T1 (Sức chứa 2-4 người)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f102",
    reservationId: "65b2a1c0d4f3e2a1b0c9e603",
    tableId: "65b2a1c0d4f3e2a1b0c9f008", // T1 - Tokyo Sushi LM81
    assigned_by_staff_id: null, // Hệ thống tự động xếp
    assigned_at: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ==========================================
  // 3. ĐƠN ĐẶT: RES-2026-PL9S2K (BBQ Master PVD - 6 người)
  // Bàn: B1 (Sức chứa 4-6 người)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f103",
    reservationId: "65b2a1c0d4f3e2a1b0c9e602",
    tableId: "65b2a1c0d4f3e2a1b0c9f009", // B1 - BBQ Master PVD
    assigned_by_staff_id: "65b2a1c0d4f3e2a1b0c9db10", // Cửa hàng trưởng xếp
    assigned_at: new Date("2026-06-10T14:05:00.000Z"),
    createdAt: new Date("2026-06-10T14:05:00.000Z"),
    updatedAt: new Date("2026-06-10T14:05:00.000Z")
  },

  // ==========================================
  // 4. ĐƠN ĐẶT: RES-2026-HF82KD (Hương Việt Quận 3 - 3 người)
  // Bàn: T1 (Sức chứa 2-4 người)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f104",
    reservationId: "65b2a1c0d4f3e2a1b0c9e604",
    tableId: "65b2a1c0d4f3e2a1b0c9f004", // T1 - Hương Việt Q3
    assigned_by_staff_id: "65b2a1c0d4f3e2a1b0c9db0a",
    assigned_at: new Date("2026-06-13T17:30:00.000Z"), // Xếp khi khách tới
    createdAt: new Date("2026-06-13T17:30:00.000Z"),
    updatedAt: new Date("2026-06-13T17:30:00.000Z")
  },

  // ==========================================
  // 5. ĐƠN ĐẶT: RES-2026-WW11QQ (Coffee & Chill Q5 - 2 người)
  // Bàn: RT1 (Sức chứa 2-4 người) trên Rooftop
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f105",
    reservationId: "65b2a1c0d4f3e2a1b0c9e608",
    tableId: "65b2a1c0d4f3e2a1b0c9f010", // RT1 - Rooftop Chill
    assigned_by_staff_id: "65b2a1c0d4f3e2a1b0c9db15", // Quản lý ca xếp
    assigned_at: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ==========================================
  // 6. ĐƠN ĐẶT: RES-2026-DLPR01 (Dalat Pine Roasters - 2 người)
  // Bàn: BAL1 (Sức chứa 1-2 người) ngoài ban công
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f106",
    reservationId: "65b2a1c0d4f3e2a1b0c9e60c",
    tableId: "65b2a1c0d4f3e2a1b0c9f018", // BAL1 - Pine View Balcony
    assigned_by_staff_id: null,
    assigned_at: new Date(Date.now() - 35 * 60 * 1000),
    createdAt: new Date(Date.now() - 35 * 60 * 1000),
    updatedAt: new Date(Date.now() - 35 * 60 * 1000)
  },

  // ==========================================
  // 7. ĐƠN ĐẶT NHIỀU BÀN: RES-2026-VEG001 (Saigon Vegan Q1 - 15 người)
  // Khách đoàn đông: Phải ghép 2 bàn Z1 (4 chỗ) và Z2 (6 chỗ) lại với nhau
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f107",
    reservationId: "65b2a1c0d4f3e2a1b0c9e60e",
    tableId: "65b2a1c0d4f3e2a1b0c9f012", // Z1 - Zen Room
    assigned_by_staff_id: "65b2a1c0d4f3e2a1b0c9db01", // Quản lý đích thân xếp
    assigned_at: new Date("2026-03-28T16:00:00.000Z"),
    createdAt: new Date("2026-03-28T16:00:00.000Z"),
    updatedAt: new Date("2026-03-28T16:00:00.000Z")
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9f108",
    reservationId: "65b2a1c0d4f3e2a1b0c9e60e",
    tableId: "65b2a1c0d4f3e2a1b0c9f013", // Z2 - Zen Room (Ghép với Z1)
    assigned_by_staff_id: "65b2a1c0d4f3e2a1b0c9db01",
    assigned_at: new Date("2026-03-28T16:00:00.000Z"),
    createdAt: new Date("2026-03-28T16:00:00.000Z"),
    updatedAt: new Date("2026-03-28T16:00:00.000Z")
  },

  // ==========================================
  // 8. ĐƠN ĐẶT NHIỀU BÀN: RES-2026-KL19OP (Golden Steak Thảo Điền - 10 người)
  // Khách đoàn công ty: Ghép bàn G1 (6 chỗ) và kê thêm ghế hoặc mượn bàn
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f109",
    reservationId: "65b2a1c0d4f3e2a1b0c9e605",
    tableId: "65b2a1c0d4f3e2a1b0c9f00e", // G1 - Garden Seat
    assigned_by_staff_id: "65b2a1c0d4f3e2a1b0c9db01", 
    assigned_at: new Date("2026-05-15T11:00:00.000Z"),
    createdAt: new Date("2026-05-15T11:00:00.000Z"),
    updatedAt: new Date("2026-05-15T11:00:00.000Z")
  },
  // ==========================================
  // 9. ĐƠN ĐẶT: RES-2026-FDE001 (Fine Dine Elite - Khách VIP Vingroup 12 người)
  // Kịch bản: Bàn giới hạn số lượng, phải ghép 2 bàn lớn sát nhau trong phòng VIP
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f10a",
    reservationId: "65b2a1c0d4f3e2a1b0c9e609", // Đơn FDE001
    tableId: "65b2a1c0d4f3e2a1b0c9f01a", // (Giả định) Bàn VIP1 - 6 chỗ
    assigned_by_staff_id: "65b2a1c0d4f3e2a1b0c9db01", // Quản lý
    assigned_at: new Date("2026-03-25T14:30:00.000Z"),
    createdAt: new Date("2026-03-25T14:30:00.000Z"),
    updatedAt: new Date("2026-03-25T14:30:00.000Z")
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9f10b",
    reservationId: "65b2a1c0d4f3e2a1b0c9e609", // Đơn FDE001
    tableId: "65b2a1c0d4f3e2a1b0c9f01b", // (Giả định) Bàn VIP2 - 6 chỗ (Ghép)
    assigned_by_staff_id: "65b2a1c0d4f3e2a1b0c9db01", // Quản lý
    assigned_at: new Date("2026-03-25T14:30:00.000Z"),
    createdAt: new Date("2026-03-25T14:30:00.000Z"),
    updatedAt: new Date("2026-03-25T14:30:00.000Z")
  },

  // ==========================================
  // 10. ĐƠN ĐẶT: RES-2026-SEA001 (Sea Breeze Đà Nẵng - Đoàn 80 khách)
  // Kịch bản: Đoàn rất đông, phải book trước cả 1 dãy bàn dài sát biển
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f10c",
    reservationId: "65b2a1c0d4f3e2a1b0c9e60b", // Đơn SEA001
    tableId: "65b2a1c0d4f3e2a1b0c9f017", // Bàn BEACH2 (8-12 chỗ)
    assigned_by_staff_id: "65b2a1c0d4f3e2a1b0c9db01", 
    assigned_at: new Date("2026-04-05T09:00:00.000Z"), // Sắp xếp bàn trước ngày đến
    createdAt: new Date("2026-04-05T09:00:00.000Z"),
    updatedAt: new Date("2026-04-05T09:00:00.000Z")
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9f10d",
    reservationId: "65b2a1c0d4f3e2a1b0c9e60b", // Đơn SEA001
    tableId: "65b2a1c0d4f3e2a1b0c9f01c", // (Giả định) Bàn BEACH3 - Ghép nối tiếp
    assigned_by_staff_id: "65b2a1c0d4f3e2a1b0c9db01",
    assigned_at: new Date("2026-04-05T09:00:00.000Z"),
    createdAt: new Date("2026-04-05T09:00:00.000Z"),
    updatedAt: new Date("2026-04-05T09:00:00.000Z")
  },

  // ==========================================
  // 11. ĐƠN ĐẶT: RES-2026-ZX77MN (BBQ Master Gò Vấp - 15 người) -> CANCELLED
  // Kịch bản: Đã phân phòng VIP nhưng sau đó khách hủy, bàn được giải phóng
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f10e",
    reservationId: "65b2a1c0d4f3e2a1b0c9e606", // Đơn bị hủy ZX77MN
    tableId: "65b2a1c0d4f3e2a1b0c9f00c", // VIP1 - BBQ Gò Vấp (6-10 chỗ)
    assigned_by_staff_id: "65b2a1c0d4f3e2a1b0c9db10",
    assigned_at: new Date("2026-06-11T09:00:00.000Z"), // Phân bàn lúc mới nhận đơn
    createdAt: new Date("2026-06-11T09:00:00.000Z"),
    updatedAt: new Date("2026-06-14T08:05:00.000Z") // Bị hủy nên cập nhật lại trạng thái (logic code của bạn sẽ xử lý nhả bàn)
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9f10f",
    reservationId: "65b2a1c0d4f3e2a1b0c9e606", // Đơn bị hủy ZX77MN
    tableId: "65b2a1c0d4f3e2a1b0c9f00b", // T1 - BBQ Gò Vấp (Ghép thêm vì khách đi 15 ng)
    assigned_by_staff_id: "65b2a1c0d4f3e2a1b0c9db10",
    assigned_at: new Date("2026-06-11T09:00:00.000Z"),
    createdAt: new Date("2026-06-11T09:00:00.000Z"),
    updatedAt: new Date("2026-06-14T08:05:00.000Z")
  },

  // ==========================================
  // 12. ĐƠN ĐẶT: RES-2026-YT44RE (Tokyo Sushi Lê Lợi - 4 người) -> CANCELLED No-Show
  // Kịch bản: Giữ phòng Tatami nhưng khách không đến
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f110",
    reservationId: "65b2a1c0d4f3e2a1b0c9e607", // Đơn bị hủy YT44RE
    tableId: "65b2a1c0d4f3e2a1b0c9f007", // TATAMI1 - Tokyo Sushi
    assigned_by_staff_id: "65b2a1c0d4f3e2a1b0c9db0b", // Quản lý
    assigned_at: new Date("2026-06-13T15:05:00.000Z"), // Giữ bàn sau khi khách cọc
    createdAt: new Date("2026-06-13T15:05:00.000Z"),
    updatedAt: new Date("2026-06-14T12:00:00.000Z") // Hủy bàn vì quá giờ 30p
  },

  // ==========================================
  // 13. ĐƠN ĐẶT: RES-2026-PIZ001 (Pizza Roma - 6 người) -> CANCELLED
  // Kịch bản: Giữ bàn khu vực lò nướng nhưng khách hủy
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f111",
    reservationId: "65b2a1c0d4f3e2a1b0c9e60d", // Đơn PIZ001
    tableId: "65b2a1c0d4f3e2a1b0c9f015", // OVEN2 (4-6 người)
    assigned_by_staff_id: "65b2a1c0d4f3e2a1b0c9dc12", // Nhân viên
    assigned_at: new Date("2026-03-18T10:15:00.000Z"),
    createdAt: new Date("2026-03-18T10:15:00.000Z"),
    updatedAt: new Date("2026-03-20T19:00:00.000Z")
  },

  // ==========================================
  // 14. ĐƠN ĐẶT: RES-2026-BBH001 (Bún Bò Huế 1986 - Khách Walk-in)
  // Kịch bản: Khách vãng lai, nhân viên xếp bàn luôn ngay tại thời điểm khách vào
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f112",
    reservationId: "65b2a1c0d4f3e2a1b0c9e60f", // Đơn Walk-in BBH001
    tableId: "65b2a1c0d4f3e2a1b0c9f01d", // (Giả định) Bàn số 12
    assigned_by_staff_id: "65b2a1c0d4f3e2a1b0c9dc11", // Thu ngân xếp bàn
    assigned_at: new Date("2026-03-15T07:30:00.000Z"), // Khớp giờ khách vào
    createdAt: new Date("2026-03-15T07:30:00.000Z"),
    updatedAt: new Date("2026-03-15T07:30:00.000Z")
  },

  // ==========================================
  // 15. ĐƠN ĐẶT: RES-2026-HVT001 (Hương Việt Thủ Đức - Hủy do sự cố kỹ thuật)
  // Kịch bản: Bàn đã được phân sẵn nhưng phải hủy vào phút chót
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f113",
    reservationId: "65b2a1c0d4f3e2a1b0c9e611", // Đơn HVT001
    tableId: "65b2a1c0d4f3e2a1b0c9f01e", // (Giả định) Bàn 10 người
    assigned_by_staff_id: "65b2a1c0d4f3e2a1b0c9db01", // Quản lý
    assigned_at: new Date("2026-03-20T10:10:00.000Z"), // Xếp bàn lúc xác nhận đơn
    createdAt: new Date("2026-03-20T10:10:00.000Z"),
    updatedAt: new Date("2026-03-25T15:00:00.000Z") // Giải phóng bàn khi sự cố xảy ra
  }
];