"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@mementostudio.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Gothic Lane, Dark City",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@mementostudio",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 px-6 bg-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#f5f5f0] mb-6 tracking-wider">
            Get in Touch
          </h2>
          <div className="w-32 h-px bg-[#f5f5f0] mx-auto mb-8" />
          <p className="text-[#c0c0b8] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Ready to begin your journey? Reach out to us and let's create something
            extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-[#f5f5f0] mb-2 font-light tracking-wider">
                  Name
                </label>
                <Input
                  type="text"
                  className="w-full bg-[#0f0f0f] border-[#2a2a2a] text-[#f5f5f0] focus:border-[#f5f5f0] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[#f5f5f0] mb-2 font-light tracking-wider">
                  Email
                </label>
                <Input
                  type="email"
                  className="w-full bg-[#0f0f0f] border-[#2a2a2a] text-[#f5f5f0] focus:border-[#f5f5f0] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-[#f5f5f0] mb-2 font-light tracking-wider">
                  Message
                </label>
                <Textarea
                  className="w-full bg-[#0f0f0f] border-[#2a2a2a] text-[#f5f5f0] focus:border-[#f5f5f0] transition-colors min-h-[150px]"
                  placeholder="Tell us about your tattoo idea..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#f5f5f0] text-[#0f0f0f] hover:bg-[#c0c0b8] font-serif tracking-wider py-6 text-lg"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="mt-1"
                >
                  <info.icon
                    size={24}
                    className="text-[#f5f5f0] group-hover:text-[#c0c0b8] transition-colors"
                    strokeWidth={1.5}
                  />
                </motion.div>
                <div>
                  <h4 className="text-[#f5f5f0] font-serif text-lg mb-1 tracking-wide">
                    {info.label}
                  </h4>
                  <p className="text-[#c0c0b8] font-light">{info.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 border-t border-[#2a2a2a] pt-8"
            >
              <h4 className="text-[#f5f5f0] font-serif text-2xl mb-4 tracking-wide">
                Studio Hours
              </h4>
              <div className="space-y-2 text-[#c0c0b8] font-light">
                <p>Tuesday - Friday: 12PM - 8PM</p>
                <p>Saturday: 10AM - 6PM</p>
                <p>Sunday - Monday: By Appointment</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-20 pt-12 border-t border-[#2a2a2a] text-center"
      >
        <p className="text-[#c0c0b8] font-light">
          © 2024 Memento Tattoo Studio. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
}