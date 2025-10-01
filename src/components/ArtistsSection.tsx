"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const artists = [
  {
    name: "Raven Blackwood",
    specialty: "Gothic & Blackwork",
    image: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=600&q=80",
    bio: "Master of intricate gothic patterns and bold blackwork designs. Raven's work tells stories of darkness and beauty.",
  },
  {
    name: "Morticia Vale",
    specialty: "Fine Line & Minimalist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    bio: "Specializing in delicate fine line work with an elegant, understated aesthetic that speaks volumes.",
  },
  {
    name: "Wednesday Cross",
    specialty: "Ornamental & Geometric",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
    bio: "Creating perfectly balanced geometric designs that merge ancient symbolism with modern precision.",
  },
];

export default function ArtistsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="artists"
      ref={ref}
      className="relative py-32 px-6 bg-[#0f0f0f]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#f5f5f0] mb-6 tracking-wider">
            Our Artists
          </h2>
          <div className="w-32 h-px bg-[#f5f5f0] mx-auto mb-8" />
          <p className="text-[#c0c0b8] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Meet the masterminds behind the ink. Each artist brings their own unique
            vision to create timeless pieces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="relative h-96 overflow-hidden"
                >
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-[#0f0f0f]/40 group-hover:bg-transparent transition-all duration-700" />
                </motion.div>
                
                {/* Decorative Corner */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#f5f5f0]"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#f5f5f0]"
                />
              </div>

              <h3 className="font-serif text-3xl text-[#f5f5f0] mb-2 tracking-wide">
                {artist.name}
              </h3>
              <p className="text-[#c0c0b8] text-sm tracking-widest uppercase mb-4 font-light">
                {artist.specialty}
              </p>
              <p className="text-[#c0c0b8] leading-relaxed font-light">
                {artist.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}