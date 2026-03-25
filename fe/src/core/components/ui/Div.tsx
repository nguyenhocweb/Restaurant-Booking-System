import * as React from "react";
import { cn } from "../../lib/tw";;
import { cva, type VariantProps } from "class-variance-authority";
const DivVariantProps = cva(
    "flex items-center justify-center",
    {
        variants: {
            variant: {
                default: "",
                isImage: " bg-cover bg-center",
                glass: [
                    "border border-white/25 bg-white/10 shadow-lg",
                    "backdrop-blur-[8px] -webkit-backdrop-blur-[18px]" // Đảm bảo hỗ trợ Safari
                ],
               black_transparent: "bg-gradient-to-b from-transparent from-[1%] to-black to-[99%]",
               card:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
            },
            shape: {
                circle: "rounded-full",
                square: "rounded-2xl",
                none: ""
            },
            size: {
                full_screen: "min-h-screen w-full",
                w80_hauto: "w-80",
                w100: "w-100",
                full: "w-full",
                h16: "w-full h-16",
                w8_h8: "w-8 h-8"
            },
            gap: {
                g1_2: "gap-x-1 gap-y-2",
                g2_3: "gap-x-2 gap-y-3",
                g3_4: "gap-x-3 gap-y-4",
                g4_5: "gap-x-4 gap-y-5",
                g5_6: "gap-x-5 gap-y-6",
            },
            vitri: {
                col_none: "flex-col items-start justify-start"
            }
        },
        defaultVariants: {
            variant: "default",
            shape: "square",
        }
    }
)
interface DivProps extends React.ComponentPropsWithoutRef<"div">, VariantProps<typeof DivVariantProps> { }
const Div = React.forwardRef<HTMLInputElement, DivProps>(
    ({ className, variant, shape, size, gap, vitri, ...props }, ref) => {
        return (
            <div

                className={cn(DivVariantProps({ variant, shape, size, gap, vitri, className }))}
                ref={ref}
                {...props}
            />
        )
    }
);
Div.displayName = "Div"; // Quan trọng để debug trong React DevTools

export { Div };