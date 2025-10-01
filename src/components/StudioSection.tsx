"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Feather } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Masterful Artistry",
    description: "20+ years of combined experience in gothic and fine line tattoo work",
  },
  {
    icon: Feather,
    title: "Bespoke Design",
    description: "Every piece is custom-crafted to reflect your unique story",
  },
  {
    icon: Users,
    title: "Intimate Experience",
    description: "Private studio sessions ensuring comfort and confidentiality",
  },
];

export default function StudioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="studio"
      ref={ref}
      className="relative py-32 px-6 bg-[#1a1a1a] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #f5f5f0 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#f5f5f0] mb-6 tracking-wider">
            The Studio
          </h2>
          <div className="w-32 h-px bg-[#f5f5f0] mx-auto mb-8" />
          <p className="text-[#c0c0b8] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Nestled in the heart of the city, Memento is a sanctuary where art meets
            permanence. Our studio embodies the essence of mysterious elegance—dark,
            intimate, and utterly sophisticated.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="border border-[#2a2a2a] bg-[#0f0f0f] p-8 h-full hover:border-[#f5f5f0] transition-all duration-500 hover:shadow-2xl hover:shadow-[#f5f5f0]/10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="mb-6"
                >
                  <feature.icon
                    size={48}
                    className="text-[#f5f5f0] group-hover:text-[#c0c0b8] transition-colors"
                    strokeWidth={1}
                  />
                </motion.div>
                <h3 className="font-serif text-2xl text-[#f5f5f0] mb-4 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-[#c0c0b8] leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative h-96 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=1600&q=80"
            alt="Studio Interior"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}