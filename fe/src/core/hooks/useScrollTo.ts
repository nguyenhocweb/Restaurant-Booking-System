"use client";

import { useCallback } from "react";

export function useScrollTo(defaultOffset: number = 80) {
  // Dùng useCallback để hàm không bị tạo lại mỗi lần component re-render
  const scrollToSection = useCallback(
    (idHtml: string, customOffset?: number) => {
      const element = document.getElementById(idHtml);
      
      if (element) {
        // Ưu tiên dùng offset truyền vào lúc click, nếu không có thì dùng mặc định
        const headerOffset = customOffset !== undefined ? customOffset : defaultOffset;

        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
    [defaultOffset]
  );

  return scrollToSection;
}