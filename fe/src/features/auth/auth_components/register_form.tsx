"use client"
import { Input, Div, Label, Button, A ,Select} from "@/src/core/components/ui";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const FormRegister = () => {
    const [newPass, setNewPass] = useState(false);
    const [ConfirmPassword, setConfirmPassword] = useState(false);

    return (
        <form action="" className="w-full flex flex-col gap-y-4" >
            <Div vitri="col_none" size="full" >
                <Label htmlFor="user_name">Tên đăng nhập</Label>
                <Div className=" relative" size="full">
                    <Input id="user_name" sizea="full" className="pr-10" />
                    <CiUser className=" absolute text-2xl right-2" />
                </Div>
            </Div>
            <Div vitri="col_none" size="full" >
                <Label htmlFor="name">Họ và tên</Label>
                <Div className=" relative" size="full">
                    <Input id="name" sizea="full" className="pr-10" />
                    <CiUser className=" absolute text-2xl right-2" />
                </Div>
            </Div>
            <Div vitri="col_none" size="full" >
                <Label htmlFor="email">Email</Label>
                <Div className=" relative" size="full">
                    <Input id="email" type="email" sizea="full" className="pr-10" />
                    <TfiEmail className=" absolute text-2xl right-2" />
                </Div>
            </Div>
            <Div size="full" className=" justify-between items-end" >
                <Div vitri="col_none" >
                    <Label htmlFor="Birthday">Ngày sinh</Label>
                    <Input id="Birthday" type="date" sizea="full" className="pr-10" />
                </Div>
                 <Select name="" id="" >
                    <option value="" disabled className="text-black">--chọn giới tính--</option>
                    <option value="NAM"  className="text-black">Nam</option>
                    <option value="NU"  className="text-black">Nữ</option>
                    <option value="KHAC"  className="text-black">Khác</option>
                 </Select>
            </Div>
            <Div vitri="col_none" size="full" >
                <Label htmlFor="password">Mật khẩu mới</Label>
                <Div className=" relative" size="full">
                    <Input type={newPass ? "text" : "password"} id="password" sizea="full" className="pr-10" />
                    <Button className="absolute right-2  "
                        type="button"
                        onClick={() => setNewPass(e => !e)}
                    >
                        {newPass ? <FaRegEye className=" text-2xl  text-gray-300" /> : <FaRegEyeSlash className=" text-2xl  text-gray-300" />}
                    </Button>
                </Div>
            </Div>
            <Div vitri="col_none" size="full" >
                <Label htmlFor="password">Nhập lại Mật khẩu</Label>
                <Div className=" relative" size="full">
                    <Input type={ConfirmPassword ? "text" : "password"} id="password" sizea="full" className="pr-10" />
                    <Button className="absolute right-2  "
                        type="button"
                        onClick={() => setConfirmPassword(e => !e)}
                    >
                        {ConfirmPassword ? <FaRegEye className=" text-2xl  text-gray-300" /> : <FaRegEyeSlash className=" text-2xl  text-gray-300" />}
                    </Button>
                </Div>
            </Div>
            <Button type="submit" variant="mau1" sizea="p3_2" className="mt-6">Đăng ký</Button>

        </form>
    )
}
export default FormRegister