export const reviewRestaurantData = [
  // ==========================================
  // 1. HƯƠNG VIỆT QUẬN 1 (reservationId: 65b2a1c0d4f3e2a1b0c9e601)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f601",
    reservationId: "65b2a1c0d4f3e2a1b0c9e601", // Thuộc về đơn RES-2026-AB12CD
    userId: "65b2a1c0d4f3e2a1b0c9d915", // Customer 1
    restaurantId: "65b2a1c0d4f3e2a1b0c9d999",

    overall_rating: 5,
    food_rating: 5,
    service_rating: 4,
    ambiance_rating: 5,

    comment: "Đồ ăn rất ngon, không gian đẹp. Gỏi cuốn tôm thịt xuất sắc, nhân viên phục vụ ổn dù quán hơi đông.",
    is_public: true,
    staff_response: "Cảm ơn chị Minh Anh đã ghé thăm Hương Việt Quận 1. Rất hân hạnh được phục vụ chị lần sau!",

    createdAt: new Date("2026-06-11T08:00:00.000Z"),
    updatedAt: new Date("2026-06-11T08:00:00.000Z")
  },

  // ==========================================
  // 2. TOKYO SUSHI LANDMARK 81 (reservationId: 65b2a1c0d4f3e2a1b0c9e603)
  // (Thay cho Vincom theo data gốc)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f602",
    reservationId: "65b2a1c0d4f3e2a1b0c9e603", // Thuộc về đơn RES-2026-X91KQ2
    userId: "65b2a1c0d4f3e2a1b0c9d916", // Customer 2
    restaurantId: "65b2a1c0d4f3e2a1b0c9d99d",

    overall_rating: 5,
    food_rating: 5,
    service_rating: 5,
    ambiance_rating: 4,

    comment: "Sushi rất tươi, sashimi cá hồi cắt dày dặn. Không gian hơi ồn một chút do nằm trong TTTM nhưng chấp nhận được.",
    is_public: true,
    staff_response: null, // Chưa có phản hồi từ nhân viên

    createdAt: new Date("2026-06-12T10:30:00.000Z"),
    updatedAt: new Date("2026-06-12T10:30:00.000Z")
  },

  // ==========================================
  // 3. BBQ MASTER PHẠM VĂN ĐỒNG (reservationId: 65b2a1c0d4f3e2a1b0c9e602)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f603",
    reservationId: "65b2a1c0d4f3e2a1b0c9e602", // Thuộc về đơn RES-2026-PL9S2K
    userId: "65b2a1c0d4f3e2a1b0c9d91a", // Khách hàng
    restaurantId: "65b2a1c0d4f3e2a1b0c9d99f",

    overall_rating: 5,
    food_rating: 5,
    service_rating: 4,
    ambiance_rating: 5,

    comment: "Thịt nướng tẩm ướp rất vừa miệng. Chỗ ngồi ngoài trời thoáng mát, hút khói tốt không bị ám mùi quần áo.",
    is_public: true,
    staff_response: "Dạ BBQ Master cảm ơn đánh giá chân thành của quý khách. Mong sớm gặp lại ạ!",

    createdAt: new Date("2026-06-13T09:15:00.000Z"),
    updatedAt: new Date("2026-06-13T14:20:00.000Z") // Quản lý cập nhật response
  },

  // ==========================================
  // 4. HƯƠNG VIỆT QUẬN 3 (reservationId: 65b2a1c0d4f3e2a1b0c9e604)
  // (Thay cho Q7)
  // ==========================================
  {
    id: "65b2a1c0d4f3e2a1b0c9f604",
    reservationId: "65b2a1c0d4f3e2a1b0c9e604", // Thuộc về đơn RES-2026-HF82KD
    userId: "65b2a1c0d4f3e2a1b0c9d917", // Customer 3
    restaurantId: "65b2a1c0d4f3e2a1b0c9d99a",

    overall_rating: 4,
    food_rating: 4,
    service_rating: 4,
    ambiance_rating: 4,

    comment: "Mọi thứ ở mức ổn áp, tròn vai. Giá hơi nhỉnh so với mặt bằng chung nhưng bù lại vị trí trung tâm.",
    is_public: true,
    staff_response: null,

    createdAt: new Date("2026-06-14T08:00:00.000Z"),
    updatedAt: new Date("2026-06-14T08:00:00.000Z")
  },

  // ==========================================
  // THÊM NHIỀU DỮ LIỆU ĐÁNH GIÁ (MỞ RỘNG)
  // ==========================================

  // 5. Đánh giá xấu - GOLDEN STEAK THẢO ĐIỀN (reservationId: 65b2a1c0d4f3e2a1b0c9e605)
  {
    id: "65b2a1c0d4f3e2a1b0c9f605",
    reservationId: "65b2a1c0d4f3e2a1b0c9e605", // Thuộc đơn RES-2026-KL19OP
    userId: "65b2a1c0d4f3e2a1b0c9d918",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9a0",

    overall_rating: 2, // Đánh giá thấp
    food_rating: 4,
    service_rating: 1, // Điểm phục vụ rất tệ
    ambiance_rating: 5,

    comment: "Đồ ăn ngon, không gian sang trọng nhưng phục vụ quá chậm. Gọi thêm ly vang mà 20 phút mới mang ra.",
    is_public: true,
    staff_response: "Dạ Golden Steak thành thật xin lỗi vì trải nghiệm chưa tốt của quý khách. Nhà hàng đã làm việc lại với đội ngũ phục vụ ca tối qua để rút kinh nghiệm. Xin gửi tặng anh voucher giảm 20% cho lần dùng bữa tới ạ.",

    createdAt: new Date("2026-05-21T09:00:00.000Z"),
    updatedAt: new Date("2026-05-21T11:00:00.000Z")
  },

  // 6. Đánh giá tuyệt đối - FINE DINE ELITE (Giả định ID: 65b2a1c0d4f3e2a1b0c9e60a)
  {
    id: "65b2a1c0d4f3e2a1b0c9f606",
    reservationId: "65b2a1c0d4f3e2a1b0c9e60a", 
    userId: "65b2a1c0d4f3e2a1b0c9d91b",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9ab",

    overall_rating: 5,
    food_rating: 5,
    service_rating: 5,
    ambiance_rating: 5,

    comment: "Nhà hàng đã hỗ trợ tôi setup buổi lễ cầu hôn cực kỳ lãng mạn. Đồ ăn tinh tế, rượu vang rất ngon. Vô cùng hài lòng!",
    is_public: true,
    staff_response: "Chúc mừng hạnh phúc của hai bạn! Cảm ơn bạn đã chọn Fine Dine Elite cho dịp đặc biệt này.",

    createdAt: new Date("2026-02-15T10:00:00.000Z"),
    updatedAt: new Date("2026-02-15T15:00:00.000Z")
  },

  // 7. Đánh giá ẩn (Không công khai) - SEA BREEZE ĐÀ NẴNG (Giả định ID: 65b2a1c0d4f3e2a1b0c9e999)
  {
    id: "65b2a1c0d4f3e2a1b0c9f607",
    reservationId: "65b2a1c0d4f3e2a1b0c9e999", // ID giả định cho 1 đơn đã hoàn thành
    userId: "65b2a1c0d4f3e2a1b0c9d91c",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9a9",

    overall_rating: 3,
    food_rating: 3,
    service_rating: 3,
    ambiance_rating: 4,

    comment: "Hải sản tươi nhưng gia vị nêm nếm hơi mặn so với khẩu vị của mình.",
    is_public: false, // Đánh giá ẩn, chỉ Admin/Brand mới xem được (chờ xử lý)
    staff_response: null,

    createdAt: new Date("2026-05-10T14:00:00.000Z"),
    updatedAt: new Date("2026-05-10T14:00:00.000Z")
  },

  // 8. Đánh giá quán Cafe - COFFEE & CHILL QUẬN 5 (Giả định ID: 65b2a1c0d4f3e2a1b0c9e888)
  {
    id: "65b2a1c0d4f3e2a1b0c9f608",
    reservationId: "65b2a1c0d4f3e2a1b0c9e888", 
    userId: "65b2a1c0d4f3e2a1b0c9d91a",
    restaurantId: "65b2a1c0d4f3e2a1b0c9d9a2",

    overall_rating: 5,
    food_rating: 4, // Đồ ăn nhẹ/Bánh
    service_rating: 5,
    ambiance_rating: 5,

    comment: "Quán yên tĩnh, rất phù hợp để chạy deadline. Nhân viên dễ thương, có châm thêm nước lọc liên tục.",
    is_public: true,
    staff_response: "Cảm ơn bạn. Chúc bạn chạy deadline thành công nhen!",

    createdAt: new Date("2026-04-12T02:30:00.000Z"), // Đánh giá lúc nửa đêm
    updatedAt: new Date("2026-04-12T08:00:00.000Z")
  }
];