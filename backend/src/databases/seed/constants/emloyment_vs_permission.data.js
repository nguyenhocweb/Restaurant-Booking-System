export const emp_vs_per = [
  // ==========================================
  // 1. NHÓM QUẢN TRỊ THƯƠNG HIỆU (BRAND LEVEL)
  // ==========================================

  // --- Giám đốc thương hiệu (employmentId: 65b2a1c0d4f3e2a1b0c9da01) ---
  // Giám đốc có toàn quyền ở cấp độ Brand
  { id: "65b2a1c0d4f3e2a1b0c9dc01", employmentId: "65b2a1c0d4f3e2a1b0c9da01", permissionId: "65b2a1c0d4f3e2a1b0c9d929" }, // MANAGE_MENU
  { id: "65b2a1c0d4f3e2a1b0c9dc02", employmentId: "65b2a1c0d4f3e2a1b0c9da01", permissionId: "65b2a1c0d4f3e2a1b0c9d92a" }, // VIEW_REPORT
  { id: "65b2a1c0d4f3e2a1b0c9dc03", employmentId: "65b2a1c0d4f3e2a1b0c9da01", permissionId: "65b2a1c0d4f3e2a1b0c9d92b" }, // MANAGE_EMPLOYEE
  { id: "65b2a1c0d4f3e2a1b0c9dc04", employmentId: "65b2a1c0d4f3e2a1b0c9da01", permissionId: "65b2a1c0d4f3e2a1b0c9d92c" }, // MANAGE_RESTAURANT
  { id: "65b2a1c0d4f3e2a1b0c9dc05", employmentId: "65b2a1c0d4f3e2a1b0c9da01", permissionId: "65b2a1c0d4f3e2a1b0c9d92d" }, // MANAGE_PROMOTION
  { id: "65b2a1c0d4f3e2a1b0c9dc06", employmentId: "65b2a1c0d4f3e2a1b0c9da01", permissionId: "65b2a1c0d4f3e2a1b0c9d92e" }, // VIEW_CUSTOMER_DATA
  { id: "65b2a1c0d4f3e2a1b0c9dc07", employmentId: "65b2a1c0d4f3e2a1b0c9da01", permissionId: "65b2a1c0d4f3e2a1b0c9d92f" }, // MANAGE_BRAND_SETTINGS
  { id: "65b2a1c0d4f3e2a1b0c9dc08", employmentId: "65b2a1c0d4f3e2a1b0c9da01", permissionId: "65b2a1c0d4f3e2a1b0c9d930" }, // MANAGE_ROLE_PERMISSION

  // --- Kế toán thương hiệu (employmentId: 65b2a1c0d4f3e2a1b0c9da02) ---
  // Kế toán chỉ xem báo cáo và dữ liệu khách hàng
  { id: "65b2a1c0d4f3e2a1b0c9dc09", employmentId: "65b2a1c0d4f3e2a1b0c9da02", permissionId: "65b2a1c0d4f3e2a1b0c9d92a" }, // VIEW_REPORT
  { id: "65b2a1c0d4f3e2a1b0c9dc0a", employmentId: "65b2a1c0d4f3e2a1b0c9da02", permissionId: "65b2a1c0d4f3e2a1b0c9d92e" }, // VIEW_CUSTOMER_DATA

  // --- Marketing thương hiệu (employmentId: 65b2a1c0d4f3e2a1b0c9da03) ---
  // Marketing tập trung vào khuyến mãi và tệp khách hàng
  { id: "65b2a1c0d4f3e2a1b0c9dc0b", employmentId: "65b2a1c0d4f3e2a1b0c9da03", permissionId: "65b2a1c0d4f3e2a1b0c9d92d" }, // MANAGE_PROMOTION
  { id: "65b2a1c0d4f3e2a1b0c9dc0c", employmentId: "65b2a1c0d4f3e2a1b0c9da03", permissionId: "65b2a1c0d4f3e2a1b0c9d92e" }, // VIEW_CUSTOMER_DATA
  { id: "65b2a1c0d4f3e2a1b0c9dc0d", employmentId: "65b2a1c0d4f3e2a1b0c9da03", permissionId: "65b2a1c0d4f3e2a1b0c9d929" }, // MANAGE_MENU (để setup món mới)

  // --- Nhân sự/Hành chính (employmentId: 65b2a1c0d4f3e2a1b0c9da08 - giả định IT/HR) ---
  { id: "65b2a1c0d4f3e2a1b0c9dc0e", employmentId: "65b2a1c0d4f3e2a1b0c9da08", permissionId: "65b2a1c0d4f3e2a1b0c9d92b" }, // MANAGE_EMPLOYEE
  { id: "65b2a1c0d4f3e2a1b0c9dc0f", employmentId: "65b2a1c0d4f3e2a1b0c9da08", permissionId: "65b2a1c0d4f3e2a1b0c9d930" }, // MANAGE_ROLE_PERMISSION


  // ==========================================
  // 2. NHÓM VẬN HÀNH NHÀ HÀNG (RESTAURANT LEVEL)
  // ==========================================

  // --- Quản lý nhà hàng (employmentId: 65b2a1c0d4f3e2a1b0c9db01) ---
  // Có hầu hết quyền tại nhà hàng mình quản lý
  { id: "65b2a1c0d4f3e2a1b0c9dc10", employmentId: "65b2a1c0d4f3e2a1b0c9db01", permissionId: "65b2a1c0d4f3e2a1b0c9d91e" }, // CREATE_ORDER
  { id: "65b2a1c0d4f3e2a1b0c9dc11", employmentId: "65b2a1c0d4f3e2a1b0c9db01", permissionId: "65b2a1c0d4f3e2a1b0c9d91f" }, // UPDATE_ORDER
  { id: "65b2a1c0d4f3e2a1b0c9dc12", employmentId: "65b2a1c0d4f3e2a1b0c9db01", permissionId: "65b2a1c0d4f3e2a1b0c9d920" }, // CANCEL_ORDER
  { id: "65b2a1c0d4f3e2a1b0c9dc13", employmentId: "65b2a1c0d4f3e2a1b0c9db01", permissionId: "65b2a1c0d4f3e2a1b0c9d921" }, // VIEW_ORDER
  { id: "65b2a1c0d4f3e2a1b0c9dc14", employmentId: "65b2a1c0d4f3e2a1b0c9db01", permissionId: "65b2a1c0d4f3e2a1b0c9d922" }, // PROCESS_PAYMENT
  { id: "65b2a1c0d4f3e2a1b0c9dc15", employmentId: "65b2a1c0d4f3e2a1b0c9db01", permissionId: "65b2a1c0d4f3e2a1b0c9d923" }, // REFUND_PAYMENT
  { id: "65b2a1c0d4f3e2a1b0c9dc16", employmentId: "65b2a1c0d4f3e2a1b0c9db01", permissionId: "65b2a1c0d4f3e2a1b0c9d924" }, // MANAGE_TABLES
  { id: "65b2a1c0d4f3e2a1b0c9dc17", employmentId: "65b2a1c0d4f3e2a1b0c9db01", permissionId: "65b2a1c0d4f3e2a1b0c9d925" }, // CREATE_RESERVATION
  { id: "65b2a1c0d4f3e2a1b0c9dc18", employmentId: "65b2a1c0d4f3e2a1b0c9db01", permissionId: "65b2a1c0d4f3e2a1b0c9d926" }, // VIEW_RESERVATION
  { id: "65b2a1c0d4f3e2a1b0c9dc19", employmentId: "65b2a1c0d4f3e2a1b0c9db01", permissionId: "65b2a1c0d4f3e2a1b0c9d927" }, // UPDATE_INVENTORY
  { id: "65b2a1c0d4f3e2a1b0c9dc1a", employmentId: "65b2a1c0d4f3e2a1b0c9db01", permissionId: "65b2a1c0d4f3e2a1b0c9d928" }, // VIEW_INVENTORY

  // --- Thu ngân (employmentId: 65b2a1c0d4f3e2a1b0c9db02) ---
  // Xử lý đơn hàng, thanh toán và xem bàn
  { id: "65b2a1c0d4f3e2a1b0c9dc1b", employmentId: "65b2a1c0d4f3e2a1b0c9db02", permissionId: "65b2a1c0d4f3e2a1b0c9d91e" }, // CREATE_ORDER
  { id: "65b2a1c0d4f3e2a1b0c9dc1c", employmentId: "65b2a1c0d4f3e2a1b0c9db02", permissionId: "65b2a1c0d4f3e2a1b0c9d91f" }, // UPDATE_ORDER
  { id: "65b2a1c0d4f3e2a1b0c9dc1d", employmentId: "65b2a1c0d4f3e2a1b0c9db02", permissionId: "65b2a1c0d4f3e2a1b0c9d921" }, // VIEW_ORDER
  { id: "65b2a1c0d4f3e2a1b0c9dc1e", employmentId: "65b2a1c0d4f3e2a1b0c9db02", permissionId: "65b2a1c0d4f3e2a1b0c9d922" }, // PROCESS_PAYMENT
  { id: "65b2a1c0d4f3e2a1b0c9dc1f", employmentId: "65b2a1c0d4f3e2a1b0c9db02", permissionId: "65b2a1c0d4f3e2a1b0c9d924" }, // MANAGE_TABLES

  // --- Phục vụ / Waiter (employmentId: 65b2a1c0d4f3e2a1b0c9db03) ---
  // Tạo đơn, xem đơn, xếp bàn
  { id: "65b2a1c0d4f3e2a1b0c9dc20", employmentId: "65b2a1c0d4f3e2a1b0c9db03", permissionId: "65b2a1c0d4f3e2a1b0c9d91e" }, // CREATE_ORDER
  { id: "65b2a1c0d4f3e2a1b0c9dc21", employmentId: "65b2a1c0d4f3e2a1b0c9db03", permissionId: "65b2a1c0d4f3e2a1b0c9d91f" }, // UPDATE_ORDER (Thêm món)
  { id: "65b2a1c0d4f3e2a1b0c9dc22", employmentId: "65b2a1c0d4f3e2a1b0c9db03", permissionId: "65b2a1c0d4f3e2a1b0c9d921" }, // VIEW_ORDER
  { id: "65b2a1c0d4f3e2a1b0c9dc23", employmentId: "65b2a1c0d4f3e2a1b0c9db03", permissionId: "65b2a1c0d4f3e2a1b0c9d924" }, // MANAGE_TABLES

  // --- Bếp trưởng / Chef (employmentId: 65b2a1c0d4f3e2a1b0c9db04) ---
  // Xem đơn hàng (để nấu), quản lý kho nguyên vật liệu
  { id: "65b2a1c0d4f3e2a1b0c9dc24", employmentId: "65b2a1c0d4f3e2a1b0c9db04", permissionId: "65b2a1c0d4f3e2a1b0c9d921" }, // VIEW_ORDER (Xem ticket bếp)
  { id: "65b2a1c0d4f3e2a1b0c9dc25", employmentId: "65b2a1c0d4f3e2a1b0c9db04", permissionId: "65b2a1c0d4f3e2a1b0c9d927" }, // UPDATE_INVENTORY (Báo cáo trừ kho)
  { id: "65b2a1c0d4f3e2a1b0c9dc26", employmentId: "65b2a1c0d4f3e2a1b0c9db04", permissionId: "65b2a1c0d4f3e2a1b0c9d928" }, // VIEW_INVENTORY

  // --- Nhân viên kho nhà hàng / Stock (employmentId: 65b2a1c0d4f3e2a1b0c9db08) ---
  { id: "65b2a1c0d4f3e2a1b0c9dc27", employmentId: "65b2a1c0d4f3e2a1b0c9db08", permissionId: "65b2a1c0d4f3e2a1b0c9d927" }, // UPDATE_INVENTORY
  { id: "65b2a1c0d4f3e2a1b0c9dc28", employmentId: "65b2a1c0d4f3e2a1b0c9db08", permissionId: "65b2a1c0d4f3e2a1b0c9d928" }, // VIEW_INVENTORY

  // --- Chăm sóc khách hàng / Lễ tân (employmentId: 65b2a1c0d4f3e2a1b0c9db0a) ---
  // Xử lý đặt bàn, xem bàn trống
  { id: "65b2a1c0d4f3e2a1b0c9dc29", employmentId: "65b2a1c0d4f3e2a1b0c9db0a", permissionId: "65b2a1c0d4f3e2a1b0c9d925" }, // CREATE_RESERVATION
  { id: "65b2a1c0d4f3e2a1b0c9dc2a", employmentId: "65b2a1c0d4f3e2a1b0c9db0a", permissionId: "65b2a1c0d4f3e2a1b0c9d926" }, // VIEW_RESERVATION
  { id: "65b2a1c0d4f3e2a1b0c9dc2b", employmentId: "65b2a1c0d4f3e2a1b0c9db0a", permissionId: "65b2a1c0d4f3e2a1b0c9d924" }, // MANAGE_TABLES


  // ==========================================
  // 3. MỞ RỘNG THÊM CHO CÁC NHÂN VIÊN Ở CHI NHÁNH KHÁC
  // (Ví dụ: Các nhân viên ở chi nhánh BBQ Master hoặc Tokyo Sushi)
  // ==========================================

  // --- Cửa hàng trưởng BBQ Master (employmentId: 65b2a1c0d4f3e2a1b0c9db10) ---
  { id: "65b2a1c0d4f3e2a1b0c9dc2c", employmentId: "65b2a1c0d4f3e2a1b0c9db10", permissionId: "65b2a1c0d4f3e2a1b0c9d91e" }, // CREATE_ORDER
  { id: "65b2a1c0d4f3e2a1b0c9dc2d", employmentId: "65b2a1c0d4f3e2a1b0c9db10", permissionId: "65b2a1c0d4f3e2a1b0c9d91f" }, // UPDATE_ORDER
  { id: "65b2a1c0d4f3e2a1b0c9dc2e", employmentId: "65b2a1c0d4f3e2a1b0c9db10", permissionId: "65b2a1c0d4f3e2a1b0c9d920" }, // CANCEL_ORDER
  { id: "65b2a1c0d4f3e2a1b0c9dc2f", employmentId: "65b2a1c0d4f3e2a1b0c9db10", permissionId: "65b2a1c0d4f3e2a1b0c9d922" }, // PROCESS_PAYMENT
  { id: "65b2a1c0d4f3e2a1b0c9dc30", employmentId: "65b2a1c0d4f3e2a1b0c9db10", permissionId: "65b2a1c0d4f3e2a1b0c9d924" }, // MANAGE_TABLES
  { id: "65b2a1c0d4f3e2a1b0c9dc31", employmentId: "65b2a1c0d4f3e2a1b0c9db10", permissionId: "65b2a1c0d4f3e2a1b0c9d927" }, // UPDATE_INVENTORY

  // --- Chạy bàn BBQ Master (employmentId: 65b2a1c0d4f3e2a1b0c9db12) ---
  { id: "65b2a1c0d4f3e2a1b0c9dc32", employmentId: "65b2a1c0d4f3e2a1b0c9db12", permissionId: "65b2a1c0d4f3e2a1b0c9d91e" }, // CREATE_ORDER
  { id: "65b2a1c0d4f3e2a1b0c9dc33", employmentId: "65b2a1c0d4f3e2a1b0c9db12", permissionId: "65b2a1c0d4f3e2a1b0c9d91f" }, // UPDATE_ORDER
  { id: "65b2a1c0d4f3e2a1b0c9dc34", employmentId: "65b2a1c0d4f3e2a1b0c9db12", permissionId: "65b2a1c0d4f3e2a1b0c9d921" }, // VIEW_ORDER

  // --- Quản lý ca Coffee & Chill (employmentId: 65b2a1c0d4f3e2a1b0c9db15) ---
  { id: "65b2a1c0d4f3e2a1b0c9dc35", employmentId: "65b2a1c0d4f3e2a1b0c9db15", permissionId: "65b2a1c0d4f3e2a1b0c9d91e" }, // CREATE_ORDER
  { id: "65b2a1c0d4f3e2a1b0c9dc36", employmentId: "65b2a1c0d4f3e2a1b0c9db15", permissionId: "65b2a1c0d4f3e2a1b0c9d920" }, // CANCEL_ORDER
  { id: "65b2a1c0d4f3e2a1b0c9dc37", employmentId: "65b2a1c0d4f3e2a1b0c9db15", permissionId: "65b2a1c0d4f3e2a1b0c9d922" }, // PROCESS_PAYMENT
  { id: "65b2a1c0d4f3e2a1b0c9dc38", employmentId: "65b2a1c0d4f3e2a1b0c9db15", permissionId: "65b2a1c0d4f3e2a1b0c9d923" }, // REFUND_PAYMENT
  { id: "65b2a1c0d4f3e2a1b0c9dc39", employmentId: "65b2a1c0d4f3e2a1b0c9db15", permissionId: "65b2a1c0d4f3e2a1b0c9d927" }, // UPDATE_INVENTORY
];