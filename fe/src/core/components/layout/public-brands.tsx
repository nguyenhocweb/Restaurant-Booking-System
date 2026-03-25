"use client"
import { Div, Button } from "@/src/core/components/ui"

const PublicBrands = () => {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);

        if (element) {
            const y =
                element.getBoundingClientRect().top + window.pageYOffset - 100;

            window.scrollTo({
                top: y,
                behavior: "smooth",
            });
        }
    };
    return (
        // Tăng padding để tạo khoảng thở, h-[70vh] để khớp với ý bạn
        <Div vitri="col_none" id="Brands" className="h-[70vh] w-full">

            {/* Thêm h-full để grid chiếm toàn bộ 70vh của cha */}
            <div className="grid md:grid-cols-2 bg-gray-50 w-full overflow-hidden h-full shadow-sm border border-gray-100">

                {/* LEFT: Nội dung căn giữa hoàn hảo */}
                <div className="p-8 md:p-16 flex flex-col justify-center bg-white">
                    <div className="w-fit">
                        <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 block">
                            Danh mục độc quyền
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-gray-900">
                        Khám phá thế giới
                        <br />
                        <span className="text-green-600 italic font-serif">ẩm thực</span> tinh hoa
                    </h1>

                    <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-sm">
                        Nơi hội tụ những thương hiệu đẳng cấp, mang lại trải nghiệm vị giác không giới hạn.
                    </p>

                    {/* Thêm nút bấm để khung hình cân đối hơn */}
                    <Div size="full" className="mt-4" >
                        <Button variant="black" sizea="p5_3"
                        onClick={()=>{handleScroll("Brands")}} >
                            Xem ngay
                        </Button>
                    </Div>

                </div>

                {/* RIGHT: Ảnh phủ kín khung */}
                <div className="relative h-full w-full group overflow-hidden">
                    {/* Lớp phủ Gradient để ảnh sâu hơn */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent z-10" />

                    <img
                        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        alt="Culinary"
                    />

                    {/* Badge trang trí nhỏ ở góc ảnh */}
                    <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md p-4 rounded-2xl z-20 hidden md:block border border-white/50">
                        <p className="text-xs font-medium text-gray-500">Trải nghiệm</p>
                        <p className="text-lg font-bold text-gray-900">5 sao +</p>
                    </div>
                </div>
            </div>
        </Div>
    )
}

export default PublicBrands