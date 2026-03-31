import { notificationsData } from "../constants/notifications.data.js";

export const notificationExtension = async (prisma) => {
   

    // 3. Thực hiện insert hàng loạt
    const result = await prisma.Notifications.createMany({
        data: notificationsData
    });
    console.log(`✅ Đã tạo thành công ${result.count} notifications !`);
};