"use client";
import { useState, useEffect, useRef } from "react";

export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState<string>("");
  
  // Dùng useRef để ghi nhớ các section đang hiển thị mà không làm re-render component liên tục
  const visibleSections = useRef<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting) {
            // Nếu section đi vào màn hình -> Thêm vào mảng visibleSections
            if (!visibleSections.current.includes(id)) {
              visibleSections.current.push(id);
            }
          } else {
            // Nếu section đi ra khỏi màn hình -> Xóa khỏi mảng visibleSections
            visibleSections.current = visibleSections.current.filter((item) => item !== id);
          }
        });

        // TÌM PHẦN TỬ ACTIVE:
        // Lướt qua danh sách gốc `ids` (được sắp xếp từ trên xuống dưới theo giao diện).
        // Tìm section ĐẦU TIÊN đang có mặt trong mảng visibleSections.
        const firstVisible = ids.find((id) => visibleSections.current.includes(id));
        
        if (firstVisible) {
          setActiveId(firstVisible);
        }
      },
      {
        // Điều chỉnh rootMargin: Nhận diện khi section chạm vào khoảng 20% từ trên cùng
        rootMargin: "-20% 0px -50% 0px", 
      }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [ids]);

  return activeId;
}