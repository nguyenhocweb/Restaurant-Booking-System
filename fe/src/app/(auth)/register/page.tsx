import { Div, P, Button, A } from "@/src/core/components/ui"
import Img from "@/public/img/Login1.jpg"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import FormRegister from "@/src/features/auth/auth_components/register_form"

const Register = () => {
    return (<>
        <Div variant="isImage" size="full_screen" style={{ backgroundImage: `url(${Img.src})`, backgroundPosition: "fixed" }}>

            <Div size="w100" variant="glass" gap="g2_3" className="p-8 text-white flex-col my-10">
                <h1 className="text-2xl">Đăng ký</h1>
                <FormRegister />
                <Div className="w-full">
                    <div className="flex-grow h-[1px] bg-gray-500/80"></div>
                    <P className="whitespace-nowrap">Or</P>
                    <div className="flex-grow h-[1px] bg-gray-500/80"></div>
                </Div>
                <Div gap="g5_6">
                    <Button variant="google" sizea="p3_2">
                        <FcGoogle className="text-4xl" />
                    </Button>
                    <Button variant="fb" sizea="p3_2">
                        <FaFacebook className="text-4xl text-blue-600" />
                    </Button>
                </Div>

                <P>Đã có tài khoản?  <A href="./login" className="text-blue-200 ml-2">Đăng nhập</A></P>



            </Div>

        </Div>

    </>)
}
export default Register