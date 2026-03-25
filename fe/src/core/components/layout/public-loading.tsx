"use client"
import React from "react";

export default function ModernLoading() {
  return (
    <div className=" w-full flex items-center justify-center bg-transparent">
      <div className="flex flex-col items-center gap-6">

        {/* Animated Dots */}
        <div className="flex gap-2">
          <span className="w-3 h-3 bg-gray-900 rounded-full animate-bounce [animation-delay:-0.3s]" />
          <span className="w-3 h-3 bg-gray-900 rounded-full animate-bounce [animation-delay:-0.15s]" />
          <span className="w-3 h-3 bg-gray-900 rounded-full animate-bounce" />
        </div>

        {/* Text */}
        <p className="text-gray-900 text-sm font-medium tracking-wide">
          Đang tải dữ liệu...
        </p>

        {/* Subtle Line Loader */}
        <div className="w-40 h-[2px] bg-gray-200 overflow-hidden rounded-full">
          <div className="h-full w-1/2 bg-gray-900 animate-[slide_1.2s_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
