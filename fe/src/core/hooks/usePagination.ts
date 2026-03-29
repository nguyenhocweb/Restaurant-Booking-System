"use client";

import { useSearchParams, useRouter } from "next/navigation";

export const usePagination = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);


  // hàm set phân trang
  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", String(page));

    router.replace(`?${params.toString()}`,{ scroll: false });
  };

  // hàm set lấy bao nhiêu phần tử.... có or ko
  const setLimit = (newLimit: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("limit", String(newLimit));

    router.replace(`?${params.toString()}`,{ scroll: false });
  };
  // cac đk khác all nếu có
  const searchKeyword=searchParams.get("search");
  // hàm set đk 
  const setSearch=(newSearch:string)=>{
    const params = new URLSearchParams(searchParams.toString());

    params.set("search",newSearch)
   params.set("page", "1");
    router.replace(`?${params.toString()}`,{ scroll: false });
  }
  // cac đk khác all nếu có
  const city=searchParams.get("city");
  // hàm set đk 
  const setCity=(newCity:string)=>{
    const params = new URLSearchParams(searchParams.toString());

    
    params.set("city", newCity); // reset page
    params.set("page", "1");

    router.replace(`?${params.toString()}`);
  }
 type CleanKey = "all" | "search" | "city" | "page";

const clean = (key: CleanKey) => {
  const params = new URLSearchParams(searchParams.toString());

  if (key === "all") {
    // xoá hết
    router.replace("?",{ scroll: false });
    return;
  }

  // xoá 1 key cụ thể
  params.delete(key);

  router.replace(`?${params.toString()}`,{ scroll: false });
};
  return {
    currentPage,
    limit,
    searchKeyword,
    city,
    setPage,
    setLimit,
    setSearch,
    setCity,
    clean
  };
};