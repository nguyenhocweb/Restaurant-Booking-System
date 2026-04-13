"use client"
import { Div, P, Button, A } from "../ui"
const brandTieubieu: {
    id: string,
    image: string,
    name: string
} = {
    id: "1",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    name: "Aura Steakhouse Riverside"
}
import FadeIn from "../animation/FadeIn"
const PublicHome = () => {
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
        <Div size="full_screen" gap="g3_4" className="px-20">
            {/* LEFT CONTENT */}
            <Div vitri="col_none" gap="g5_6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                    <FadeIn  > Trải nghiệm </FadeIn>
                    <FadeIn delay={0.2}><span className="text-green-600">Ẩm thực Tinh hoa</span></FadeIn>
                </h1>
                <FadeIn  delay={0.3}> <P className="w-1/2">
                    Kết nối bạn với những không gian ẩm thực đẳng cấp nhất,
                    từ Steakhouse thượng hạng đến phong vị Fusion hiện đại.
                </P>
                </FadeIn>
                <Div gap="g4_5">
                    <FadeIn delay={0.4}>
                        <Button variant="green" sizea="p4_3"
                            onClick={() => { handleScroll("restaurant") }}
                        >Khám phá nhà hàng </Button>
                    </FadeIn>
                    <FadeIn delay={0.5}>
                        <Button variant="gray" sizea="p4_3"
                            onClick={() => { handleScroll("brandHome") }}
                        >🍴 Xem Thương hiệu</Button>
                    </FadeIn>
                </Div>
            </Div>
            {/* RIGHT CARD */}
            <FadeIn>
                <Div vitri="col_none" className=" relative">
                    <A href="/login" className="rounded-2xl overflow-hidden shadow-xl h-[520px] bg-gray-300">
                        <img
                            src={`${brandTieubieu.image}?auto=format&fit=crop&w=900&q=80`}
                            alt="restaurant"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        {/* Text */}
                        <Div vitri="col_none" size="h16" shape="none" className=" absolute bottom-0 left-0 px-5 h-20">
                           <FadeIn delay={0.2}> <P>Thương hiệu tiêu biểu</P></FadeIn>
                             <FadeIn delay={0.3}>
                            <h3 className="text-xl font-semibold text-white " >
                                {brandTieubieu.name}
                            </h3>
                            </FadeIn>
                        </Div>
                    </A>
                </Div>
            </FadeIn>
        </Div>
    )
}
export default PublicHome