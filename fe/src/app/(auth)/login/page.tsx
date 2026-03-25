"use client"
import { Div,P,Button,A } from "@/src/core/components/ui"
import Img from "@/public/img/Login1.jpg"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import FormLogin from "@/src/features/auth/auth_components/login_form";


const Login = () => {

    const HandleOAuth=(type:string)=>{
       const be_url= process.env.NEXT_PUBLIC_OAUTH_GOOGLE;
       window.location.href=`${be_url}/${type}`
    }
    return (<>
        <Div variant="isImage" size="full_screen" style={{ backgroundImage: `url(${Img.src})`, backgroundPosition: "fixed"  }}>

            <Div size="w100" variant="glass" gap="g2_3" className="p-8 text-white flex-col ">
                <h1 className="text-2xl">Login</h1>
                <FormLogin />
                <Div className="w-full">
                    <div className="flex-grow h-[1px] bg-gray-500/80"></div>
                    <P className="whitespace-nowrap">Or</P>
                    <div className="flex-grow h-[1px] bg-gray-500/80"></div>
                </Div>
                <Div gap="g5_6">
                    <Button variant="google" sizea="p3_2"
                    onClick={()=>{HandleOAuth("google")}}
                    >
                        <FcGoogle className="text-4xl"/>
                    </Button>
                    <Button variant="fb" sizea="p3_2">
                        <FaFacebook className="text-4xl text-blue-600"/>
                    </Button>
                </Div>
                    <P>Bạn chưa có tài khoản?  <A href="./register" className="text-blue-200 ml-2">Đăng ký ngay</A></P>
            </Div>

        </Div>

    </>)
}
export default Login