import { getBrands, countBrands } from "../repository.brand/index.js";
export const getBrandsService = async (page, limit, where) => {
    const baseWhere = [
        ...(Array.isArray(where) ? where : where ? [where] : []),
        { isActive: "ACTIVE" },
        { isFeatured: false }
    ];

    const finalWhere = {
        AND: baseWhere
    };
    const [brands, total] = await Promise.all([
        getBrands({
            where: finalWhere,
            page: page,
            limit: limit
        }),
        countBrands(finalWhere)
    ])

    return brands ? { code: 200, data: { data: brands, total: total } } : { code: 404, mes: "không tìm thấy tài nguyên" }
}