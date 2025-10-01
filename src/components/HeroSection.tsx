"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Skull } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 50,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 50,
    });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0f0f0f]"
      onMouseMove={handleMouseMove}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source
            src="https://cdn.pixabay.com/video/2022/12/15/143401-781465058_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/80 via-[#0f0f0f]/50 to-[#0f0f0f]" />
      </div>

      {/* Animated Tattoo Machine */}
      <motion.div
        className="absolute top-1/4 right-1/4 z-10 opacity-15 hidden md:block"
        style={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
        animate={{
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/05249a2e-8f18-44ad-9671-931969416cec/generated_images/professional-high-resolution-black-and-w-9dfc6d07-20251001051343.jpg"
          alt="Tattoo Machine"
          width={400}
          height={400}
          className="object-contain"
        />
      </motion.div>

      {/* Tattoo Pen Vector - Left Side */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 z-10 opacity-10 hidden lg:block"
        style={{
          x: mousePosition.x * -0.3,
          y: mousePosition.y * -0.3,
        }}
        animate={{
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/05249a2e-8f18-44ad-9671-931969416cec/generated_images/minimalist-vector-illustration-of-a-tatt-4722fb44-20251001051555.jpg"
          alt="Tattoo Pen"
          width={300}
          height={300}
          className="object-contain"
        />
      </motion.div>

      {/* Animated Raven Skull */}
      <motion.div
        className="absolute top-1/3 left-1/3 z-10 opacity-8"
        style={{
          x: mousePosition.x * 0.8,
          y: mousePosition.y * 0.8,
        }}
        animate={{
          rotate: [0, 5, 0, -5, 0],
          scale: [1, 1.05, 1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Skull size={200} className="text-[#f5f5f0]" strokeWidth={0.5} />
      </motion.div>

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-20 text-center px-6">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1
            className="font-serif text-7xl md:text-9xl lg:text-[12rem] font-bold text-[#f5f5f0] tracking-[0.15em] mb-4"
            animate={{
              textShadow: [
                "0 0 20px rgba(245,245,240,0.2), 0 0 40px rgba(245,245,240,0.1)",
                "0 0 40px rgba(245,245,240,0.3), 0 0 60px rgba(245,245,240,0.2)",
                "0 0 20px rgba(245,245,240,0.2), 0 0 40px rgba(245,245,240,0.1)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            MEMENTO
          </motion.h1>
          <motion.div
            className="h-[2px] w-64 md:w-96 mx-auto bg-gradient-to-r from-transparent via-[#f5f5f0] to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-serif text-xl md:text-3xl text-[#c0c0b8] tracking-[0.3em] mb-12 italic"
        >
          Eternal Art in Mysterious Elegance
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#contact"
            className="group relative inline-block border-2 border-[#f5f5f0] text-[#f5f5f0] px-10 py-4 font-serif text-lg tracking-[0.2em] hover:bg-[#f5f5f0] hover:text-[#0f0f0f] transition-all duration-500 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">BOOK A CONSULTATION</span>
            <motion.div
              className="absolute inset-0 bg-[#f5f5f0]"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              style={{ originX: 0 }}
            />
          </motion.a>
          
          <motion.a
            href="#portfolio"
            className="inline-block border-2 border-[#c0c0b8] text-[#c0c0b8] px-10 py-4 font-serif text-lg tracking-[0.2em] hover:border-[#f5f5f0] hover:text-[#f5f5f0] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW PORTFOLIO
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#f5f5f0] rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-[#f5f5f0] rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Gothic Filigree Decorations */}
      <svg
        className="absolute top-0 left-0 w-80 h-80 opacity-15"
        viewBox="0 0 200 200"
      >
        <motion.path
          d="M 20 100 Q 40 20, 100 20 T 180 100 M 20 80 Q 50 30, 100 30 T 180 80"
          stroke="#f5f5f0"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1 }}
        />
      </svg>
      <svg
        className="absolute bottom-0 right-0 w-80 h-80 opacity-15 rotate-180"
        viewBox="0 0 200 200"
      >
        <motion.path
          d="M 20 100 Q 40 20, 100 20 T 180 100 M 20 80 Q 50 30, 100 30 T 180 80"
          stroke="#f5f5f0"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1 }}
        />
      </svg>
    </section>
  );
}