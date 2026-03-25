import { ReactNode } from "react";
interface PublicLayoutProps {
    children: ReactNode;
}
import PublicHeader from "@/src/core/components/layout/public-header";
import { Div } from "@/src/core/components/ui";
export default function CustomerLayout({ children }: PublicLayoutProps) {
    return (
        <Div size="full_screen" vitri="col_none" className=" bg-slate-50">
            {/* 2. Thanh điều hướng dùng chung cho mọi trang Public */}
            <PublicHeader />
            {/* 3. Phần ruột thay đổi theo từng trang (Trang chủ, Liên hệ, Giới thiệu...) */}
            {/* class "flex-1" cực kỳ quan trọng: Nó sẽ đẩy content giãn ra hết mức có thể, ép Footer chìm xuống đáy */}
            <main className="w-full">
                {children}
            </main>
            {/* 4. Chân trang dùng chung */}
            {/* <PublicFooter /> */}
        </Div>
    )
}