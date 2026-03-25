 "use client"
 import React from "react";
 import { useEffect } from "react";
 import {useLoginSuccess} from "@/src/features/auth/auth_hook/login_success_hook"
const LoginSuccess=()=>{
  const {mutate:use_login_success,isPending}=useLoginSuccess();
  useEffect(()=>{
    use_login_success();
  },[])
   return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-8">

        {/* Google Style Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-red-500 border-r-yellow-400 border-b-green-500 border-l-blue-500 animate-spin" />
        </div>

        {/* Main Text */}
        <h2 className="text-white text-xl font-semibold animate-pulse">
          Đang đăng nhập ...
        </h2>

        {/* Sub text */}
        <p className="text-white/60 text-sm">
          Đang xác thực tài khoản, vui lòng chờ
        </p>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-gradient-to-r from-blue-500 via-green-400 to-yellow-400 animate-[loading_1.5s_infinite]" />
        </div>

        {/* Hint */}
        <p className="text-xs text-white/40">
          Không đóng tab trong quá trình đăng nhập
        </p>
      </div>

      {/* Custom animation */}
      <style jsx global>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
export default LoginSuccess