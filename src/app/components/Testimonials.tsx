import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "CEO, TechFlow Inc.",
    avatar: "MC",
    color: "#7c3aed",
    rating: 5,
    text: "Aria completely transformed our product's UX. Our user retention jumped 68% after the redesign. She doesn't just design interfaces — she designs experiences that people fall in love with. Absolutely exceptional work.",
  },
  {
    id: 2,
    name: "Sofia Rodriguez",
    role: "Product Lead, NovaPay",
    avatar: "SR",
    color: "#a78bfa",
    rating: 5,
    text: "Working with Aria was a revelation. She asked questions nobody else thought to ask, delivered insights that reshaped our product strategy, and produced visuals that made our engineering team excited to build. 10/10.",
  },
  {
    id: 3,
    name: "James Okafor",
    role: "Founder, HealthKit",
    avatar: "JO",
    color: "#c084fc",
    rating: 5,
    text: "Our mobile app's App Store rating went from 3.2 to 4.8 stars after Aria redesigned the UX. She has an extraordinary ability to understand both users and business goals simultaneously. Hire her before your competition does.",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Design Director, Stratix",
    avatar: "PS",
    color: "#818cf8",
    rating: 5,
    text: "Aria built our design system from scratch and established processes that our team still use two years later. Her systems thinking and execution are world-class. A truly rare combination of skills.",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-28 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-900/12 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />
            <span className="text-violet-400 text-xs tracking-[0.25em] uppercase" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}>Testimonials</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", letterSpacing: "-0.02em" }}
          >
            What Clients <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Say</span>
          </motion.h2>
        </div>

        {/* Testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-[#13111c] border border-white/8 rounded-3xl p-8 md:p-12 relative overflow-hidden"
              >
                {/* Quote icon */}
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote size={80} className="text-violet-400" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-white/70 leading-relaxed mb-8 relative z-10" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 400, fontSize: "1.1rem", lineHeight: "1.8" }}>
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${testimonials[current].color}, ${testimonials[current].color}99)` }}
                  >
                    <span className="text-white text-sm" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>
                      {testimonials[current].avatar}
                    </span>
                  </div>
                  <div>
                    <p className="text-white" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1rem" }}>
                      {testimonials[current].name}
                    </p>
                    <p className="text-white/40 text-sm" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-violet-500" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prev}
                  className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
                >
                  <ChevronLeft size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={next}
                  className="w-11 h-11 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/25"
                >
                  <ChevronRight size={18} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini testimonial cards row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              whileHover={{ y: -4 }}
              onClick={() => setCurrent(i)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                current === i ? "border-violet-500/40 bg-violet-500/10" : "border-white/8 bg-white/3 hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs text-white shrink-0" style={{ background: t.color }}>
                  {t.avatar}
                </div>
                <span className="text-white text-xs truncate" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>{t.name}</span>
              </div>
              <p className="text-white/30 text-xs truncate" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{t.role}</p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
