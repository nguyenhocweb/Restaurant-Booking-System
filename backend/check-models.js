// check-models.js
import "dotenv/config";

async function checkMyAllowedModels() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.log("❌ Không tìm thấy GEMINI_API_KEY trong file .env!");
        return;
    }

    console.log("⏳ Đang kết nối với máy chủ Google để lấy danh sách Model...");
    
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const data = await response.json();

        if (data.error) {
            console.log("❌ Lỗi từ Google:", data.error.message);
            return;
        }

        // Lọc ra NHỮNG MODEL CÓ HỖ TRỢ LÀM EMBEDDING
        const embeddingModels = data.models.filter(m => 
            m.supportedGenerationMethods && m.supportedGenerationMethods.includes("embedContent")
        );

        console.log("\n✅ === CÁC MODEL EMBEDDING BẠN ĐƯỢC PHÉP DÙNG ===");
        if (embeddingModels.length === 0) {
            console.log("⚠️ API Key của bạn không được hỗ trợ bất kỳ model Embedding nào!");
        } else {
            embeddingModels.forEach(model => {
                // Tên model thực tế bạn cần điền vào code
                const realModelName = model.name.replace('models/', '');
                console.log(`👉 Tên model chuẩn: "${realModelName}"`);
            });
        }
        console.log("==================================================\n");

    } catch (error) {
        console.error("❌ Lỗi mạng:", error.message);
    }
}

checkMyAllowedModels();