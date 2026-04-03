import { index } from "../../../config/pinecone.config.js";
// upsert
// src/modules/vector/service/vectorDB.service.js
export const upsertVector = async (payload) => {
  const rawRecords = (Array.isArray(payload) ? payload : [payload]).flat();

  // DEBUG: Log thử record đầu tiên xem cấu trúc đúng chưa


  if (rawRecords.length === 0) {
    console.error("Mảng rỗng, không có gì để gửi");
    return;
  }

  try {
    // Đảm bảo dùng mảng sạch
    await index.namespace("").upsert({ records: rawRecords });
  } catch (error) {
    console.error("❌ Pinecone Upsert Error:", error.message);
    throw error;
  }
};
// search
export const queryVector = async ({ vector, topK = 5, filter = {} }) => {
  const result = await index.namespace("").query({
    vector, // Vector truy vấn (embedding của câu hỏi)
    topK, // Số lượng kết quả trả về
    includeMetadata: true, // Bao gồm metadata trong kết quả
    // Bộ lọc để giới hạn phạm vi tìm kiếm (ví dụ: { category: "fast_food" })
  });
  if (filter && Object.keys(filter).length > 0) {
    queryOptions.filter = filter;
  }
  return result.matches || [];
};

// delete
export const deleteVector = async (id) => {
  await index.namespace("").deleteOne(id);
};
export const deleteAllVector=async ()=>{
  await index.namespace("").deleteAll();
}