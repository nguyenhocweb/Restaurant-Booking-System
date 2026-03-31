import brandData from '../constants/brand.data.js';
import { buildBrandVector } from "../../../modules/vector/builders/brand.builder.js"
import { upsertVector } from "../../../modules/vector/service/vectorDB.service.js";
import { embedText } from "../../../modules/vector/service/embedding.service.js";
export const Brand_Extension = async (prisma) => {
    console.log('creating brands...');

    // tạo dữ liệu
    const result = await prisma.Brand.createMany({
        data: brandData,       // Mảng dữ liệu
    });




    const vectorsToUpsert = [];

    // 2. Chuẩn bị dữ liệu Vector
    for (const brandDataItem of brandData) {
        const text = [
            brandDataItem.name,
            brandDataItem.description,
            brandDataItem.city,
            brandDataItem.address
        ].filter(Boolean).join(" ");

        const embedding = await embedText(text);
        if (!embedding) {
            console.log(`❌ Skip: ${brandDataItem.name}`);
            continue;
        }
        const BrandVector = buildBrandVector({
            id: `brand_${brandDataItem.id}`,
            name: brandDataItem.name,
            description: brandDataItem.description,
            city: brandDataItem.city,
            address: brandDataItem.address,
            embedding: embedding
        });

        vectorsToUpsert.push(BrandVector);
        console.log(`✅ Prepared: ${brandDataItem.name}`);


    }

    // 3. CÚ CHỐT: Đẩy tất cả lên Pinecone trong 1 lần gọi duy nhất
    if (vectorsToUpsert.length > 0) {
        await upsertVector(vectorsToUpsert);
        console.log(`✅ Đã đẩy thành công ${vectorsToUpsert.length} vectors lên Pinecone!`);
    }
    console.log(`✅ Đã tạo thành công ${result.count} Brands!`);
}