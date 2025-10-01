"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const portfolioItems = [
  {
    id: 1,
    category: "Gothic",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80",
    title: "Ornate Skull",
  },
  {
    id: 2,
    category: "Fine Line",
    image: "https://images.unsplash.com/photo-1590246814883-57c511a87f24?w=800&q=80",
    title: "Delicate Florals",
  },
  {
    id: 3,
    category: "Blackwork",
    image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703f?w=800&q=80",
    title: "Bold Statement",
  },
  {
    id: 4,
    category: "Geometric",
    image: "https://images.unsplash.com/photo-1568515387631-33e350f45645?w=800&q=80",
    title: "Sacred Geometry",
  },
  {
    id: 5,
    category: "Gothic",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&q=80",
    title: "Dark Romance",
  },
  {
    id: 6,
    category: "Fine Line",
    image: "https://images.unsplash.com/photo-1611496892929-b3e043ede5a4?w=800&q=80",
    title: "Minimalist Art",
  },
];

const categories = ["All", "Gothic", "Fine Line", "Blackwork", "Geometric"];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-32 px-6 bg-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#f5f5f0] mb-6 tracking-wider">
            Portfolio
          </h2>
          <div className="w-32 h-px bg-[#f5f5f0] mx-auto mb-8" />
          <p className="text-[#c0c0b8] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            A curated collection of our finest work. Each piece tells a story of
            collaboration and artistic vision.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 font-serif tracking-widest text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#f5f5f0] text-[#0f0f0f]"
                  : "border border-[#f5f5f0] text-[#f5f5f0] hover:bg-[#f5f5f0] hover:text-[#0f0f0f]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden aspect-square"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                className="absolute bottom-0 left-0 right-0 p-6 text-[#f5f5f0]"
              >
                <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                <p className="text-sm tracking-widest uppercase text-[#c0c0b8]">
                  {item.category}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}