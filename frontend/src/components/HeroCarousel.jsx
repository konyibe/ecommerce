// src/components/HeroCarousel.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/slider-1.jpg",
  "/slider-2.jpg",
  "/slider-3.jpg",
  "/slider-4.jpg",
  "/slider-5.jpg",
  "/slider-6.jpg",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Hero"
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-3">
          Welcome to E-Shop
        </h1>
        <p className="text-lg">
          Discover premium products at unbeatable prices
        </p>
      </div>
    </div>
  );
}
