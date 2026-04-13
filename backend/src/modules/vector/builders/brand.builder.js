export const textBuilBrand=(brand)=>{

  const rawText = [
    ` Thương hiệu: ${brand.name || 'Thương hiệu ẩn danh'} là 1 thương hiệu. `,
    brand.isActive === "INACTIVE" ? "tạm thời nghĩ" : brand.isActive === "TERMINATED" ? "nghĩ vĩnh viễn" : " đang hoạt động",
    brand.isFeatured ? "thương hiệu Tiêu biêu" : "",
    brand.new === false ? "" : "thương hiệu hàng mới",
    ` Mô tả: ${brand.description || "chưa cập nhật mô tả"}.`,
    ` Địa chỉ: ${brand.address || "chưa cập nhật địa chỉ"},`,
    ` ${brand.city || "chưa cập nhật thành phố"}.`,


  ].join(" ");
  return   rawText
}
export const buildBrandVector = (brand) => {
  const rawText = [
    ` Thương hiệu: ${brand.name || 'Thương hiệu ẩn danh'} là 1 thương hiệu.\n `,
    brand.isActive === "INACTIVE" ? "tạm thời nghĩ \n" : brand.isActive === "TERMINATED" ? "nghĩ vĩnh viễn\n" : " đang hoạt động \n",
    brand.isFeatured ? "thương hiệu Tiêu biêu \n" : "",
    brand.new === false ? "" : "thương hiệu hàng mới \n",
    ` Mô tả: ${brand.description || "chưa cập nhật mô tả"}.\n`,
    ` Địa chỉ: ${brand.address || "chưa cập nhật địa chỉ"},\n`,
    ` ${brand.city || "chưa cập nhật thành phố"}.\n`,


  ].join(" ");
  return {
    id: brand.id,
    values: brand.embedding,
    metadata: {
      name: brand.name || "thương hiệu ẩn danh",
      description: brand.description || "chưa cập nhật mô tả",
      city: brand.city || "chưa cập nhật thành phố",
      address: brand.address || "chưa cập nhật địa chỉ",
      isActive: brand.isActive || "ACTIVE",
      text: rawText
    }
  };
};
