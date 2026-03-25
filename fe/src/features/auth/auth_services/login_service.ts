import axiosClient from "@/src/core/api/axios-instance";
import {loginForm,LoginResponse} from "../auth_types/login_type"
export const loginSevice=async (payload:loginForm):Promise<LoginResponse>=>{
    const response=await axiosClient.post<LoginResponse>("/auth/login",payload)    
    return response.data;
}