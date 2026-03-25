import axiosClient from "@/src/core/api/axios-instance";
import {LoginResponse} from "../auth_types/login_type"
export const loginSuccessSevice=async ():Promise<LoginResponse>=>{
    const response=await axiosClient.get<LoginResponse>("/auth/loginSuccess")   ;
    console.log("respone",response);
     
    return response.data;
}