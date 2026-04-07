import { Div, Button } from "@/src/core/components/ui";
import { useRef, useState, useEffect } from "react";

interface ScrollMenuProps {
  children: React.ReactNode;
  totalItems: number;   
  itemWidth: number;    
  gap?: number;         
}

const ScrollMenu = ({ children, totalItems, itemWidth, gap = 20 }: ScrollMenuProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [stats, setStats] = useState({
    itemsPerView: 0,
    maxClicks: 0, // Bây giờ sẽ là tổng số bước nhảy từng thẻ
    currentClick: 0,
  });

  const step = itemWidth + gap;

  const updateStats = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      
      // 1. Tính số item hiện được trọn vẹn trên màn hình
      const perView = Math.floor((containerWidth + gap) / step);
      
      // 2. Logic MỚI: Số lần click tối đa để đưa phần tử CUỐI CÙNG vào mép PHẢI màn hình
      // Ví dụ: có 12 thẻ, hiện 4 thẻ -> Bạn cần click 8 lần để xem hết.
      const totalClicks = totalItems - perView;

      setStats({
        itemsPerView: perView,
        maxClicks: totalClicks > 0 ? totalClicks : 0,
        currentClick: 0
      });
      
      scrollRef.current.scrollTo({ left: 0 });
    }
  };

  useEffect(() => {
    updateStats();
    window.addEventListener("resize", updateStats);
    return () => window.removeEventListener("resize", updateStats);
  }, [totalItems, itemWidth, gap]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const isRight = direction === "right";
      
      // Xác định click tiếp theo
      const newClick = isRight 
        ? Math.min(stats.currentClick + 1, stats.maxClicks)
        : Math.max(stats.currentClick - 1, 0);

      // Logic MỚI: Khoảng cách cuộn = số lần click * độ rộng 1 thẻ (kèm gap)
      const scrollDistance = newClick * step;

      scrollRef.current.scrollTo({
        left: scrollDistance,
        behavior: "smooth"
      });

      setStats(prev => ({ ...prev, currentClick: newClick }));
    }
  };

  return (
    <Div className="flex flex-col gap-2 w-full">
      <Div className="relative w-full flex items-center bg-transparent">
        {/* Nút Trái */}
        {stats.currentClick > 0 && (
          <Button
            variant="gray"
            className="absolute -left-4 z-30 rounded-full w-9 h-9 shadow-xl border-2 border-white bg-white"
            onClick={() => handleScroll("left")}
          >
            ❮
          </Button>
        )}

        {/* Khung cuộn */}
        <Div
          ref={scrollRef}
          className="flex flex-row overflow-hidden scroll-smooth w-full items-center justify-start rounded-none" 
          style={{ gap: `${gap}px` }}
        >
          {children}
        </Div>

        {/* Nút Phải */}
        {stats.currentClick < stats.maxClicks && (
          <Button
            variant="gray"
            className="absolute -right-4 z-30 rounded-full w-9 h-9 shadow-xl border-2 border-white bg-white"
            onClick={() => handleScroll("right")}
          >
            ❯
          </Button>
        )}
      </Div>
    </Div>
  );
};
export default ScrollMenu;