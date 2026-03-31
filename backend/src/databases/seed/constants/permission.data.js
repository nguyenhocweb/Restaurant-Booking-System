export const permission_data = [
  // ==========================
  // QUYỀN CẤP NHÀ HÀNG (RESTAURANT)
  // ==========================
  {
    id: "65b2a1c0d4f3e2a1b0c9d91e",
    name: "CREATE_ORDER",
    description: "Tạo đơn hàng mới",
    type: "RESTAURANT"
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9d91f",
    name: "UPDATE_ORDER",
    description: "Cập nhật, chỉnh sửa món trong đơn hàng",
    type: "RESTAURANT"
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9d920",
    name: "CANCEL_ORDER",
    description: "Hủy đơn hàng",
    type: "RESTAURANT"
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9d921",
    name: "VIEW_ORDER",
    description: "Xem danh sách và chi tiết đơn hàng",
    type: "RESTAURANT"
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9d922",
    name: "PROCESS_PAYMENT",
    description: "Thanh toán đơn hàng, xuất hóa đơn",
    type: "RESTAURANT"
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9d923",
    name: "REFUND_PAYMENT",
    description: "Hoàn tiền cho khách hàng",
    type: "RESTAURANT"
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9d924",
    name: "MANAGE_TABLES",
    description: "Quản lý sơ đồ bàn, đóng/mở bàn",
    type: "RESTAURANT"
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9d925",
    name: "CREATE_RESERVATION",
    description: "Tạo đặt bàn mới",
    type: "RESTAURANT"
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9d926",
    name: "VIEW_RESERVATION",
    description: "Xem danh sách khách đặt bàn",
    type: "RESTAURANT"
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9d927",
    name: "UPDATE_INVENTORY",
    description: "Nhập/Xuất kho nguyên vật liệu tại chi nhánh",
    type: "RESTAURANT"
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9d928",
    name: "VIEW_INVENTORY",
    description: "Xem tồn kho tại chi nhánh",
    type: "RESTAURANT"
  },

  // ==========================
  // QUYỀN CẤP THƯƠNG HIỆU (BRAND)
  // ==========================
  {
    id: "65b2a1c0d4f3e2a1b0c9d929",
    name: "MANAGE_MENU",
    description: "Tạo, sửa, xóa món ăn và danh mục áp dụng toàn chuỗi",
    type: "BRAND"
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9d92a",
    name: "VIEW_REPORT",
    description: "Xem báo cáo doanh thu, lợi nhuận đa chi nhánh",
    type: "BRAND"
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9d92b",
    name: "MANAGE_EMPLOYEE",
    description: "Quản lý hồ sơ nhân viên toàn chuỗi",
    type: "BRAND"
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9d92c",
    name: "MANAGE_RESTAURANT",
    description: "Thêm mới, cấu hình thông tin các chi nhánh nhà hàng",
    type: "BRAND"
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9d92d",
    name: "MANAGE_PROMOTION",
    description: "Tạo và quản lý các chương trình khuyến mãi, voucher",
    type: "BRAND"
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9d92e",
    name: "VIEW_CUSTOMER_DATA",
    description: "Xem dữ liệu khách hàng (CRM) toàn chuỗi",
    type: "BRAND"
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9d92f",
    name: "MANAGE_BRAND_SETTINGS",
    description: "Cấu hình thông tin thương hiệu, phương thức thanh toán",
    type: "BRAND"
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9d930",
    name: "MANAGE_ROLE_PERMISSION",
    description: "Phân quyền và tạo các vai trò (Roles) cho nhân sự",
    type: "BRAND"
  },

  // ==========================
  // QUYỀN CẤP HỆ THỐNG (SYSTEM ADMIN)
  // ==========================
  {
    id: "65b2a1c0d4f3e2a1b0c9d931",
    name: "MANAGE_ALL_BRANDS",
    description: "Quản lý tất cả các thương hiệu trên hệ thống (Super Admin)",
    type: "SYSTEM"
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9d932",
    name: "VIEW_SYSTEM_LOGS",
    description: "Xem nhật ký hoạt động (Audit Logs) của toàn hệ thống",
    type: "SYSTEM"
  },
  {
    id: "65b2a1c0d4f3e2a1b0c9d933",
    name: "MANAGE_SUBSCRIPTION",
    description: "Quản lý các gói cước và thanh toán phí phần mềm của Brand",
    type: "SYSTEM"
  }
];