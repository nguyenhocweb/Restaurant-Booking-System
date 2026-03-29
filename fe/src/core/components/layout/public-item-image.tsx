"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState ,useEffect} from "react";
const PublicItemImages = ({ name, isFeatured, images }: { name: string, isFeatured: boolean, images: string[] }) => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const start = Math.max(0, Math.min(current - 1, images.length - 4));
  const visibleImages = images.slice(start, start + 4);

  const Tag = `${name.split(" ")[0].split("")[0]}${name.split(" ")[1]?.split("")[0]} `

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-orange-500",
    "bg-pink-500",
    "bg-black",
    "bg-gray-500",
  ];
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * colors.length);
    setBgColor(colors[random]??"")
  }, [])
  return (
    <div className="relative w-full max-h-[90vh] overflow-hidden">
      {/* Main Image with animation */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={`${images[current]}?auto=format&fit=crop&w=1600&q=80`}
          className="w-full h-full object-cover"
          alt="Aura Steakhouse"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/60"
      >
        ←
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/60"
      >
        →
      </button>

      {/* Content */}
      <div className="absolute bottom-10 left-10 text-white space-y-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-semibold ${bgColor}`}>
            {Tag}
          </div>
          {
            isFeatured &&
            <span className="text-xs tracking-widest text-green-400 font-semibold">
              Thương hiệu tiêu biểu
            </span>
          }
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold">
          {name}
        </h1>
      </div>

      {/* Thumbnail list (chỉ 4 ảnh + animation) */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {visibleImages.map((img, index) => {
          const realIndex = start + index;
          return (
            <motion.img
              key={realIndex}
              src={`${img}?auto=format&fit=crop&w=200&q=60`}
              onClick={() => setCurrent(realIndex)}
              className={`w-20 h-15 object-cover rounded-md cursor-pointer border-2 ${current === realIndex
                ? "border-white"
                : "border-transparent opacity-70"
                }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
      </div>
    </div>
  );
}
export default PublicItemImages