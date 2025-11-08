// src/components/BrandShowcase.jsx
import { motion } from "framer-motion";

export default function BrandShowcase() {
  // Your brand logos in the public folder
  const brands = [
    "/adidas.png",
    "/under-armour.png",
    "/nike.png",
    "/reebok.png",
    "/puma.png",
    "/airjordan.png",
  ];
  return (
    <section className="relative bg-gray-900 py-10 border-y border-gray-800 overflow-hidden">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold text-emerald-400 mb-8">
        Our Trusted Brands
      </h2>

      <div className="relative overflow-hidden">
        {/* Outer wrapper (hides overflow) */}
        <motion.div
          className="flex items-center gap-16 px-10"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            ease: "linear",
            duration: 30, // slower and smoother scroll
            repeat: Infinity,
          }}
        >
          {/* Duplicate logos twice to create seamless infinite effect */}
          {[...brands, ...brands].map((logo, i) => (
            <div key={i} className="flex-shrink-0 px-6">
              <img
                src={logo}
                alt={`Brand ${i + 1}`}
                className="h-16 sm:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* Optional gradient fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent" />
      </div>
    </section>
  );
}
