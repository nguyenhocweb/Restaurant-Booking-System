import * as React from "react";
import { cn } from "../../lib/tw";
import { cva, type VariantProps } from "class-variance-authority";

const PVariantProps = cva(
    "flex transition-all duration-300 ",
    {
        variants: {
            variant: {
                default: "text-gray-400",
                // Shadow mờ rộng màu trắng/xanh theo phong cách Glassmorphism
                glow: "text-white shadow-[0_0_20px_rgba(255,255,255,0.3)] bg-white/10 backdrop-blur-md border border-white/20",
                // Shadow mờ rộng màu sắc rực rỡ (Neon)
                neon: "text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)] border border-cyan-500/50 bg-cyan-500/5",
                mes: "text-red-500",
                truncate_1line: "line-clamp-1 h-7",
                truncate_2line: "line-clamp-2 h-14",
                text_black: "font-semibold text-gray-900 text-lg",
                text_green: "text-green-600 font-semibold tracking-wide"
            },
            line: {
                truncate_1line: "line-clamp-1 h-7",
                truncate_2line: "line-clamp-2 h-14",
            },
            shape: {
                circle: "rounded-full px-4 py-2",
                square: "rounded-2xl px-2 py-1",
            },
            size: {
                w80_hauto: "w-80",
                w100: "w-full", // Tailwind v4/v3 dùng w-full cho 100%
            },
        },
        defaultVariants: {
            variant: "default",
            shape: "square",
        }
    }
)

// Sửa Interface để khớp với thẻ <p>
interface PProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof PVariantProps> { }

const P = React.forwardRef<HTMLParagraphElement, PProps>(
    ({ className, variant, shape,line, size, ...props }, ref) => {
        return (
            <p
                className={cn(PVariantProps({ variant,line, shape, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
);

P.displayName = "P";

export { P };