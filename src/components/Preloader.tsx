"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#0f0f0f] flex items-center justify-center"
        >
          {/* Animated Background Lines */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-px h-32 bg-gradient-to-b from-transparent via-[#f5f5f0]/20 to-transparent"
                  style={{
                    transformOrigin: "center",
                    transform: `rotate(${i * 30}deg) translateY(-200px)`,
                  }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: [0, 1, 0] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Tattoo Machine Image */}
          <motion.div
            className="absolute top-1/4 right-1/4 opacity-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1, rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/05249a2e-8f18-44ad-9671-931969416cec/generated_images/professional-high-resolution-black-and-w-9dfc6d07-20251001051343.jpg"
              alt="Tattoo Machine"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>

          {/* Center Content */}
          <div className="relative z-10 text-center">
            {/* MEMENTO Text with Drawing Effect */}
            <motion.div className="relative">
              <motion.h1
                className="font-serif text-7xl md:text-9xl font-bold text-[#f5f5f0] tracking-[0.3em] mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {"MEMENTO".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                    style={{
                      display: "inline-block",
                      textShadow: "0 0 20px rgba(245,245,240,0.3)",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Underline Animation */}
              <motion.div
                className="h-0.5 bg-[#f5f5f0] mx-auto"
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="font-serif text-lg md:text-xl text-[#c0c0b8] tracking-[0.2em] mt-6 italic"
            >
              Eternal Art
            </motion.p>

            {/* Loading Dots */}
            <motion.div className="flex justify-center gap-2 mt-8">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-[#f5f5f0] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Decorative Corner Elements */}
          <svg
            className="absolute top-8 left-8 w-32 h-32 opacity-20"
            viewBox="0 0 100 100"
          >
            <motion.path
              d="M 10 10 L 40 10 M 10 10 L 10 40"
              stroke="#f5f5f0"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </svg>
          
          <svg
            className="absolute top-8 right-8 w-32 h-32 opacity-20"
            viewBox="0 0 100 100"
          >
            <motion.path
              d="M 90 10 L 60 10 M 90 10 L 90 40"
              stroke="#f5f5f0"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </svg>
          
          <svg
            className="absolute bottom-8 left-8 w-32 h-32 opacity-20"
            viewBox="0 0 100 100"
          >
            <motion.path
              d="M 10 90 L 40 90 M 10 90 L 10 60"
              stroke="#f5f5f0"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </svg>
          
          <svg
            className="absolute bottom-8 right-8 w-32 h-32 opacity-20"
            viewBox="0 0 100 100"
          >
            <motion.path
              d="M 90 90 L 60 90 M 90 90 L 90 60"
              stroke="#f5f5f0"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}