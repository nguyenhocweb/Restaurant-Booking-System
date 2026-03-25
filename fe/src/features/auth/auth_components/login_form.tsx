"use client"

import { useForm } from "react-hook-form"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginShema,loginForm } from "../auth_schemas/login_schemas";
import { useLogin } from "../auth_hook/login_hook"
import { Input, Div, Label, Button ,A,P} from "@/src/core/components/ui";

import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const FormLogin = () => {
    const [Eye, setEye] = useState(false);
    const { mutate: loginMutation, isPending } = useLogin();
    const {
        register,
        reset,
        handleSubmit,
        formState:{errors,isSubmitting},
    }=useForm<loginForm>({
        resolver:zodResolver(LoginShema),
        defaultValues:{
            user_name:"",
            password:""
        }
    })
const HandleOnsubmit=(data:loginForm)=>{
     loginMutation(data)
}
console.log(errors);

    
    return (
        <form action="" className="w-full flex flex-col gap-y-4" onSubmit={handleSubmit(HandleOnsubmit)}>
            <Div vitri="col_none" size="full" className=" relative">
                <Label htmlFor="user_name">Tên đăng nhập</Label>
                <Div className=" relative" size="full">
                    <Input id="user_name" sizea="full" className="pr-10" 
                    {...register("user_name")}
                    />
                    <CiUser className=" absolute text-2xl right-2" />
                </Div>
                {errors.user_name&&<P variant="mes" className=" absolute -right-2 -bottom-8">{errors.user_name.message}</P>}
            </Div>
            <Div vitri="col_none" size="full" className=" relative">
                <Label htmlFor="password">Mật khẩu</Label>
                <Div className=" relative" size="full" >
                    <Input type={Eye?"text":"password"} id="password" sizea="full" className="pr-10"
                      {...register("password")}
                    />
                    <Button className="absolute right-2  "
                    type="button"
                     onClick={()=>setEye(e=>!e)}
                    >
                        {Eye?<FaRegEye className=" text-2xl  text-gray-300" />:<FaRegEyeSlash className=" text-2xl  text-gray-300"/>}
                    </Button>
                </Div>
                {errors.password&&<P variant="mes" className=" absolute -right-2 -bottom-8">{errors.password.message}</P>}
            </Div>
            <A  href="/forgot-password" className="text-end text-gray-300/90">Forgot password</A>
            <Button type="submit" variant="mau1" sizea="p3_2"
            disabled={isSubmitting}
            >{isSubmitting?"...Đang đăng nhập":"Đăng nhập"}</Button>

        </form>
    )
}
export default FormLogin