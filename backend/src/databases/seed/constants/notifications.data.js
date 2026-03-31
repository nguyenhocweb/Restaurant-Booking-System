export const notificationsData = [
  // ==========================================
  // 1. THÔNG BÁO XÁC NHẬN ĐẶT BÀN (CONFIRMATION - EMAIL)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f401",
    reservationId: "65b2a1c0d4f3e2a1b0c9e601",
    userId: "65b2a1c0d4f3e2a1b0c9d915", 
    type: "CONFIRMATION",
    channel: "EMAIL",
    recipient: "minhanh@gmail.com",
    subject: "Xác nhận đặt bàn tại Hương Việt Quận 1",
    body: "Xin chào Nguyễn Minh Anh, đặt bàn của bạn vào lúc 18:00 ngày 10/06/2026 đã được xác nhận. Mã đặt bàn: RES-2026-AB12CD.",
    status: "DELIVERED",
    sent_at: new Date("2026-06-08T10:00:00.000Z"),
    delivered_at: new Date("2026-06-08T10:00:05.000Z"),
    external_id: "sendgrid_msg_001",
    error_message: null,
    is_read: true,
    read_at: new Date("2026-06-08T10:05:00.000Z"),
    createdAt: new Date("2026-06-08T10:00:00.000Z"),
    updatedAt: new Date("2026-06-08T10:05:00.000Z")
  },

  // ==========================================
  // 2. THÔNG BÁO CHỜ XÁC NHẬN (PENDING - SMS)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f402",
    reservationId: "65b2a1c0d4f3e2a1b0c9e603",
    userId: "65b2a1c0d4f3e2a1b0c9d916", 
    type: "CONFIRMATION", 
    channel: "SMS",
    recipient: "0912000002",
    subject: null,
    body: "Tokyo Sushi Landmark 81: Đặt bàn của bạn (RES-2026-X91KQ2) đang chờ xác nhận. Vui lòng thanh toán cọc để giữ chỗ.",
    status: "DELIVERED",
    sent_at: new Date("2026-06-10T14:00:00.000Z"),
    delivered_at: new Date("2026-06-10T14:00:02.000Z"),
    external_id: "twilio_sms_002",
    error_message: null,
    is_read: false,
    read_at: null,
    createdAt: new Date("2026-06-10T14:00:00.000Z"),
    updatedAt: new Date("2026-06-10T14:00:02.000Z")
  },

  // ==========================================
  // 3. THÔNG BÁO NHẮC NHỞ ĐẾN GIỜ (REMINDER - ZALO)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f403",
    reservationId: "65b2a1c0d4f3e2a1b0c9e602",
    userId: null, 
    type: "REMINDER",
    channel: "ZALO",
    recipient: "0933000003",
    subject: "Nhắc nhở đặt bàn BBQ Master",
    body: "Nhắc nhở: Bạn có lịch đặt bàn tại BBQ Master Phạm Văn Đồng lúc 18:30 hôm nay. Vui lòng đến đúng giờ nhé!",
    status: "DELIVERED",
    sent_at: new Date("2026-06-12T16:30:00.000Z"),
    delivered_at: new Date("2026-06-12T16:30:03.000Z"),
    external_id: "zalo_zns_003",
    error_message: null,
    is_read: true,
    read_at: new Date("2026-06-12T16:45:00.000Z"),
    createdAt: new Date("2026-06-12T16:30:00.000Z"),
    updatedAt: new Date("2026-06-12T16:45:00.000Z")
  },

  // ==========================================
  // 4. THÔNG BÁO CẢM ƠN (THANK_YOU - EMAIL)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f404",
    reservationId: "65b2a1c0d4f3e2a1b0c9e604",
    userId: "65b2a1c0d4f3e2a1b0c9d917", 
    type: "CUSTOM",
    channel: "EMAIL",
    recipient: "thutrang@gmail.com",
    subject: "Cảm ơn bạn đã dùng bữa tại Hương Việt",
    body: "Cảm ơn chị Thu Trang đã dùng bữa tại Hương Việt Quận 3. Rất mong nhận được phản hồi của chị để chúng tôi phục vụ tốt hơn.",
    status: "DELIVERED",
    sent_at: new Date("2026-06-13T19:30:00.000Z"),
    delivered_at: new Date("2026-06-13T19:30:02.000Z"),
    external_id: "sendgrid_msg_004",
    error_message: null,
    is_read: true,
    read_at: new Date("2026-06-13T19:35:00.000Z"),
    createdAt: new Date("2026-06-13T19:30:00.000Z"),
    updatedAt: new Date("2026-06-13T19:35:00.000Z")
  },

  // ==========================================
  // 5. THÔNG BÁO GỬI THẤT BẠI (FAILED - SMS)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f405",
    reservationId: "65b2a1c0d4f3e2a1b0c9e606", 
    userId: "65b2a1c0d4f3e2a1b0c9d919", 
    type: "REMINDER",
    channel: "SMS",
    recipient: "0977444555", 
    subject: null,
    body: "BBQ Master Gò Vấp: Nhắc nhở bạn có bàn lúc 18:00 tối nay.",
    status: "FAILED",
    sent_at: new Date("2026-06-15T15:00:00.000Z"),
    delivered_at: null,
    external_id: "twilio_sms_005",
    error_message: "Error 30008: Unknown destination handset (Invalid Phone Number)",
    is_read: false,
    read_at: null,
    createdAt: new Date("2026-06-15T15:00:00.000Z"),
    updatedAt: new Date("2026-06-15T15:00:02.000Z")
  },

  // ==========================================
  // 6. THÔNG BÁO HỦY BÀN (CANCELLATION - SMS)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f406",
    reservationId: "65b2a1c0d4f3e2a1b0c9e607",
    userId: null,
    type: "CANCELLATION",
    channel: "SMS",
    recipient: "0966999888",
    subject: null,
    body: "Tokyo Sushi thông báo: Đơn đặt bàn của bạn (RES-2026-YT44RE) đã bị hủy do bạn đến trễ quá 30 phút. Xin cảm ơn.",
    status: "DELIVERED",
    sent_at: new Date("2026-06-14T12:00:00.000Z"),
    delivered_at: new Date("2026-06-14T12:00:05.000Z"),
    external_id: "esms_vn_006",
    error_message: null,
    is_read: false,
    read_at: null,
    createdAt: new Date("2026-06-14T12:00:00.000Z"),
    updatedAt: new Date("2026-06-14T12:00:05.000Z")
  },

  // ==========================================
  // 7. PUSH NOTIFICATION (FIREBASE) - Cho In-app/Web Push
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f407",
    reservationId: "65b2a1c0d4f3e2a1b0c9e608",
    userId: "65b2a1c0d4f3e2a1b0c9d91a",
    type: "CUSTOM",
    channel: "PUSH", // Thay đổi từ WEB sang PUSH để khớp Enum
    recipient: "huyngo@gmail.com", 
    subject: "Chào mừng đến Coffee & Chill",
    body: "Chúc bạn có buổi làm việc hiệu quả. Mật khẩu Wifi của quán là: chillquan5.",
    status: "DELIVERED",
    sent_at: new Date(),
    delivered_at: new Date(),
    external_id: "firebase_fcm_007",
    error_message: null,
    is_read: true, 
    read_at: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ==========================================
  // 8. THÔNG BÁO NHẮC CỌC (PAYMENT_REMINDER - EMAIL)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f408",
    reservationId: "65b2a1c0d4f3e2a1b0c9e60b",
    userId: "65b2a1c0d4f3e2a1b0c9d91c",
    type: "REMINDER", 
    channel: "EMAIL",
    recipient: "tour@saigontourist.vn",
    subject: "[Quan Trọng] Nhắc nhở thanh toán cọc - Sea Breeze",
    body: "Kính gửi quý đối tác, để giữ chỗ cho đoàn 80 khách ngày 01/05/2026, vui lòng thanh toán khoản cọc 10,000,000đ trước 12:00 ngày mai.",
    status: "SENT", 
    sent_at: new Date("2026-04-01T08:00:00.000Z"),
    delivered_at: null,
    external_id: "aws_ses_008",
    error_message: null,
    is_read: false,
    read_at: null,
    createdAt: new Date("2026-04-01T08:00:00.000Z"),
    updatedAt: new Date("2026-04-01T08:00:00.000Z")
  }
];