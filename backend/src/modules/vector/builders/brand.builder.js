
export const buildBrandVector = (brand) => {
  const rawText = `Thương hiệu: ${brand.name || 'Thương hiệu ẩn danh'}. Mô tả: ${brand.description || "chưa cập nhật mô tả"}. Địa chỉ: ${brand.address || "chưa cập nhật địa chỉ"}, ${brand.city || "chưa cập nhật thành phố"}.`;
  return {
    id: brand.id,
    values: brand.embedding,
    metadata: {
      name: brand.name||"thương hiệu ẩn danh",
      description: brand.description||"chưa cập nhật mô tả",
      city: brand.city||"chưa cập nhật thành phố",
      address: brand.address||"chưa cập nhật địa chỉ",
      text: rawText
    }
  };
};
