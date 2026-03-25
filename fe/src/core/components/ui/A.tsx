import * as React from "react";
import { cn } from "../../lib/tw";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
const AVariantProps = cva(
    " ",
    {
        variants: {
            variant: {
                default: "hover:text-blue-500",
                icon:" ",
                green: [" flex items-center justify-center  rounded-xl text-white text-sm font-medium ",
                    "bg-gradient-to-r from-green-500 to-green-600",
                    "  shadow-md",
                    "  transition-all duration-300",
                    " hover:from-green-600 hover:to-green-700",
                    "hover:shadow-lg hover:scale-[1.03]",
                    "active:scale-95"
                ],
                gray: [" flex items-center justify-center  rounded-xl text-black text-sm font-medium ",
                    "bg-gradient-to-r from-gray-200 to-gray-300",
                    "  shadow-md",
                    "  transition-all duration-300",
                    " hover:from-gray-300 hover:to-gray-400",
                    "hover:shadow-lg hover:scale-[1.03]",
                    "active:scale-95"
                ],
                black: [" flex items-center justify-center  rounded-xl text-white text-sm font-medium ",
                    "bg-gradient-to-r from-gray-500 to-gray-600",
                    "  shadow-md",
                    "  transition-all duration-300",
                    " hover:from-gray-600 hover:to-gray-700",
                    "hover:shadow-lg hover:scale-[1.03]",
                    "active:scale-95"
                ],
            },
            shape: {
                circle: "rounded-full",
                square: "rounded-lg",
            },
            sizea:{
                full:"w-full",
                p2_1:"px-2 py-1",
                p3_2:"px-3 py-2",
                p4_3:"px-4 py-3",
                p4_2:"px-4 py-2",
            },
            colors:{
                green:"text-green-600 hover:text-green-700"
            }
            
        },
        defaultVariants: {
            variant:"default",
            shape:"square",
        }
    }
)
interface AProps extends React.ComponentPropsWithoutRef<typeof Link>,VariantProps<typeof AVariantProps>{
    href: string; // Force href phải có
}
const A=React.forwardRef<HTMLAnchorElement, AProps>(
    ({ className,href ,variant,shape,type,colors,sizea, ...props }, ref)=>{
        return (
            <Link
              href={href}
              className={cn(AVariantProps({variant,shape,sizea,colors,className}))}
              ref={ref}
              {...props}
            />
        )
    }
);
A.displayName = "A"; // Quan trọng để debug trong React DevTools
export { A };