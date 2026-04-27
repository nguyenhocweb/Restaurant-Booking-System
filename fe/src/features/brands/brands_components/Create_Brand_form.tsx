"use client"
import { Div, H, P, Label, Input, Button } from "@/src/core/components/ui"
import { useState } from "react"
import FadeIn from "@/src/core/components/animation/FadeIn"
import { IoClose } from "react-icons/io5";
const Create_Brand_form = () => {
    const [openForm, setOpenForm] = useState<boolean>(false);

    return (
        <>
            {/* nút đăng ký */}
            <FadeIn className="w-full" delay={0.5}>
                <Div size="full" variant="bg_white" vitri="col_none">
                    <H variant="text_FireIce" className="text-2xl">Khởi tạo</H>
                    <Button variant="blue" className="flex-col w-full py-5"
                        onClick={() => { setOpenForm(prev => !prev) }}
                    >
                        <P className="text-white text-2xl">Đăng ký thương hiệu mới</P>
                        <span >tạo thương hiệu & gán chủ sở hữu</span>
                    </Button>
                </Div>
            </FadeIn>
            {/* forrm đăng ký */}
            {openForm &&
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 ">
                    <Div vitri="col_none" variant="bg_white" className=" relative w-200 h-[80vh] overflow-y-auto" >
                        <Button variant="icon" className=" absolute top-2 right-2"
                            onClick={() => { setOpenForm(prev => !prev) }}
                        >
                            <IoClose className="text-2xl" />
                        </Button>
                        <H variant="text_black" className="text-3xl">Đăng ký thương hiệu mới</H>
                        <P>Khởi tạo đối tác và bàn giao quyền quản trị</P>
                        <form action="" className="w-full">
                            {/* thông tin cơ bản cần thiết để tạo thương hiệu */}
                            <Div size="full">
                                {/* thông tin nhập cơ bản */}
                                <Div vitri="col_none" className="w-3/5 mt-5 " size="full" gap="g3_4">
                                    <Div size="full" vitri="col_none">
                                        <Label htmlFor="name" variant="black">Tên thương hiêu</Label>
                                        <Input type="text" placeholder="nhập tên thương hiệu"
                                            sizea="full"
                                            className="text-black"
                                        />
                                    </Div>
                                    <Div grids="col_2">
                                        <Div size="full" vitri="col_none">
                                            <Label htmlFor="tax_code" variant="black">Mã số thuế </Label>
                                            <Input type="text" id="tax_code" placeholder="nhập tên thương hiệu"
                                                sizea="full"
                                                className="text-black"
                                            />
                                        </Div>
                                    </Div>
                                </Div>
                                {/* lo go và hình ảnh */}
                                <Div vitri="col_none" className="w-1/3">

                                </Div>
                            </Div>
                        </form>
                    </Div>
                </div>
            }
        </>
    )
}
export default Create_Brand_form