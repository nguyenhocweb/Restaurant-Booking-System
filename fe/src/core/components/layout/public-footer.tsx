import { Div, A, P } from "../ui"
const PublicFooter = () => {
    return (
        <footer className="bg-gray-100 border-t  w-full">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Brand */}
                <div>
                    <A href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80 mb-3">
                        <span className="text-2xl font-black tracking-tight text-slate-900">
                            NVN<span className="text-orange-600">guyen</span>
                        </span>
                    </A>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Hệ thống quản lý nhà hàng đa thương hiệu cao cấp, mang đến trải nghiệm ẩm thực tinh hoa.
                    </p>
                </div>

                {/* About */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase">
                        Về chúng tôi
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li className="hover:text-gray-900 cursor-pointer">
                            <A href="#">Cơ hội nghề nghiệp</A>
                        </li>
                        <li className="hover:text-gray-900 cursor-pointer">
                            <A href="#">liên hệ</A>
                        </li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase">
                        Pháp lý
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li className="hover:text-gray-900 cursor-pointer">
                            <A href="#">Chính sách bảo mật</A>
                        </li>
                        <li className="hover:text-gray-900 cursor-pointer">
                            <A href="#">Điều khoản sử dụng</A>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase">
                        Theo dõi
                    </h4>
                    <div className="flex gap-3">
                        
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
                    <span>© 2026 NVNguyen. Bảo lưu mọi quyền.</span>
                    <span>Designed with Precision — Vietnam</span>
                </div>
            </div>
        </footer>
    )
}
export default PublicFooter