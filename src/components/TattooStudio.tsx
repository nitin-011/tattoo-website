"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import StudioSection from "./StudioSection";
import ArtistsSection from "./ArtistsSection";
import PortfolioSection from "./PortfolioSection";
import ProcessSection from "./ProcessSection";
import ContactSection from "./ContactSection";
import Preloader from "./Preloader";

export default function TattooStudio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax effects for decorative elements
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <>
      <Preloader />
      <div ref={containerRef} className="relative bg-[#0f0f0f]">
        <Navigation />

        {/* Parallax Background Decorations */}
        <motion.div
          style={{ y: y1, opacity }}
          className="fixed top-1/4 left-10 z-0 pointer-events-none hidden lg:block"
        >
          <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-10">
            <motion.path
              d="M100,20 L120,60 L165,65 L130,95 L142,140 L100,115 L58,140 L70,95 L35,65 L80,60 Z"
              stroke="#f5f5f0"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </motion.div>

        <motion.div
          style={{ y: y2, opacity }}
          className="fixed top-1/2 right-10 z-0 pointer-events-none hidden lg:block"
        >
          <svg width="150" height="150" viewBox="0 0 150 150" className="opacity-10">
            <motion.circle
              cx="75"
              cy="75"
              r="60"
              stroke="#f5f5f0"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, rotate: 0 }}
              animate={{ pathLength: 1, rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="75"
              cy="75"
              r="40"
              stroke="#f5f5f0"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, rotate: 0 }}
              animate={{ pathLength: 1, rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </motion.div>

        {/* Gothic Filigree Decorations - Self-Drawing */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          {/* Top Left Corner */}
          <svg
            className="absolute top-0 left-0 w-64 h-64 opacity-10"
            viewBox="0 0 200 200"
          >
            <motion.path
              d="M 0,0 Q 50,50 100,20 T 200,0 M 0,0 Q 50,50 20,100 T 0,200"
              stroke="#f5f5f0"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 0.5 }}
            />
            <motion.path
              d="M 20,20 Q 60,60 100,50 M 20,20 Q 60,60 50,100"
              stroke="#f5f5f0"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />
          </svg>

          {/* Top Right Corner */}
          <svg
            className="absolute top-0 right-0 w-64 h-64 opacity-10 transform scale-x-[-1]"
            viewBox="0 0 200 200"
          >
            <motion.path
              d="M 0,0 Q 50,50 100,20 T 200,0 M 0,0 Q 50,50 20,100 T 0,200"
              stroke="#f5f5f0"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 0.5 }}
            />
          </svg>

          {/* Bottom Left Corner */}
          <svg
            className="absolute bottom-0 left-0 w-64 h-64 opacity-10 transform scale-y-[-1]"
            viewBox="0 0 200 200"
          >
            <motion.path
              d="M 0,0 Q 50,50 100,20 T 200,0 M 0,0 Q 50,50 20,100 T 0,200"
              stroke="#f5f5f0"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1.5 }}
            />
          </svg>

          {/* Bottom Right Corner */}
          <svg
            className="absolute bottom-0 right-0 w-64 h-64 opacity-10 transform scale-[-1]"
            viewBox="0 0 200 200"
          >
            <motion.path
              d="M 0,0 Q 50,50 100,20 T 200,0 M 0,0 Q 50,50 20,100 T 0,200"
              stroke="#f5f5f0"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1.5 }}
            />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <HeroSection />
          <StudioSection />
          <ArtistsSection />
          <PortfolioSection />
          <ProcessSection />
          <ContactSection />
        </div>
      </div>
    </>
  );
}