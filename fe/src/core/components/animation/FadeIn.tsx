"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useLayoutEffect } from "react";

export default function FadeIn({
    children,
    delay = 0,
    isFirstFolder = false,
}: {
    children: React.ReactNode;
    delay?: number;
    isFirstFolder?: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

    // Check xem element có sẵn trong viewport lúc mount không
    // (trường hợp Back button, scroll restore)
    const [wasVisibleOnMount, setWasVisibleOnMount] = useState(false);

    // useLayoutEffect chạy sync sau DOM paint, TRƯỚC khi browser scroll restore
    // → đọc được vị trí chính xác, không có khoảng trống gây flash
    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        const { top, bottom } = el.getBoundingClientRect();
        const inViewport = top < window.innerHeight && bottom > 0;

        if (inViewport) setWasVisibleOnMount(true);
    }, []);

    const shouldShow = isFirstFolder || isInView || wasVisibleOnMount;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
                duration: 0.5,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
        >
            {children}
        </motion.div>
    );
}