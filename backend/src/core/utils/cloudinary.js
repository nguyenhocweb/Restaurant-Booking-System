import cloudinary from "../../config/cloudinary.config.js";
export const uploadMultipleImages = async (files,folder) => {
  
    const uploadPromises = files.map((file) => {
      return cloudinary.uploader.upload(file, {
        folder: `quan_ly_nha_hang/${folder}`,
        transformation: [
          { width: 1000, height: 1000, crop: "limit" }, // Giới hạn tối đa 1000px
          { quality: "auto" }
        ]
      });
    });

    const results = await Promise.all(uploadPromises);
    
    // Trả về mảng các URL và ID
    return results.map(result => ({
      url: result.secure_url,
      public_id: result.public_id
    }));
  
};

export const uploadSingleImage = async (fileToUpload, folder,publicId) => {
  // KIỂM TRA: Nếu fileToUpload bị undefined, báo lỗi ngay tại đây để dễ debug
  if (!fileToUpload) {
    throw new Error("lỗi không có file để tải lên");
  }
  const b64 = Buffer.from(fileToUpload.buffer).toString("base64");
    const dataURI = `data:${fileToUpload.mimetype};base64,${b64}`;

  const result = await cloudinary.uploader.upload(dataURI, {
    folder: `quan_ly_nha_hang/${folder}`,
    public_id: publicId, // Sử dụng public_id nếu được cung cấp
    use_filename: true,
    unique_filename: true,
    transformation: [
      { width: 800, height: 800, crop: "limit",},
      { quality: "auto", fetch_format: "auto" }
    ]
  });

  return {
    url: result.secure_url,
    public_id: result.public_id
  };
};