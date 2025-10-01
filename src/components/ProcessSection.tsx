"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Pencil, CheckCircle, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consultation",
    description:
      "Share your vision with us. We'll discuss concepts, placement, and design direction in a private session.",
  },
  {
    icon: Pencil,
    number: "02",
    title: "Design",
    description:
      "Our artists create a custom design tailored to your story. We refine until it's absolutely perfect.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Approval",
    description:
      "Review the final design and make any last adjustments. Your satisfaction is our priority.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Execution",
    description:
      "The magic happens. Our artists bring your design to life with precision and care in our studio.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-32 px-6 bg-[#0f0f0f] overflow-hidden"
    >
      {/* Connecting Line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-[#2a2a2a] hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#f5f5f0] mb-6 tracking-wider">
            The Process
          </h2>
          <div className="w-32 h-px bg-[#f5f5f0] mx-auto mb-8" />
          <p className="text-[#c0c0b8] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            From concept to completion, we guide you through every step of your
            tattoo journey with care and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Number Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="w-16 h-16 border-2 border-[#f5f5f0] rounded-full flex items-center justify-center mx-auto mb-6 bg-[#0f0f0f] relative z-20"
              >
                <span className="font-serif text-2xl text-[#f5f5f0]">
                  {step.number}
                </span>
              </motion.div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="mb-6 flex justify-center"
              >
                <step.icon
                  size={48}
                  className="text-[#f5f5f0]"
                  strokeWidth={1}
                />
              </motion.div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-serif text-2xl text-[#f5f5f0] mb-4 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-[#c0c0b8] leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {/* Decorative Arrow (desktop only) */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  className="hidden lg:block absolute top-8 -right-6 w-12 h-px bg-[#f5f5f0]"
                >
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 border-r border-t border-[#f5f5f0] rotate-45" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}