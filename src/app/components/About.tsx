import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Layers, Zap, Heart } from "lucide-react";

const values = [
  { icon: <Palette size={18} className="text-violet-300" />, title: "Design-First", desc: "Every pixel intentional." },
  { icon: <Layers size={18} className="text-purple-300" />, title: "System Thinking", desc: "Scalable, consistent design." },
  { icon: <Zap size={18} className="text-fuchsia-300" />, title: "Fast Delivery", desc: "Speed without compromise." },
  { icon: <Heart size={18} className="text-pink-300" />, title: "User Empathy", desc: "Always human-centered." },
];

const tools = ["Figma", "HTML", "CSS", "Javascript", "React", "Github", "PHP", "Frontend"];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 bg-[#0d0b14] overflow-hidden">
      {/* bg decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4 justify-center"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />
          <span className="text-violet-400 text-xs tracking-[0.25em] uppercase" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}>
            About Me
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
          style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", letterSpacing: "-0.02em" }}
        >
          The Designer <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Behind the Work</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image with decoration */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-600/20 to-purple-600/10 rounded-3xl blur-xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <img
                // src="https://images.unsplash.com/photo-1740128041185-b2afa550f7cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmZW1hbGUlMjBkZXNpZ25lciUyMHBvcnRyYWl0JTIwc3R1ZGlvfGVufDF8fHx8MTc3MjYyMDY2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                src="./src/assets/sg.png"
                alt="About SG"
                className="w-full h-[480px] object-cover object-center grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b14]/80 via-transparent to-transparent" />
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute -bottom-6 -right-4 bg-gradient-to-br from-violet-600 to-purple-800 rounded-2xl p-5 shadow-2xl shadow-violet-900/40 border border-violet-500/30"
            >
              <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "2.5rem", color: "#fff", lineHeight: 1 }}>1+</p>
              <p className="text-violet-200 text-xs mt-1" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Years of<br />Experience</p>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-white/60 leading-relaxed mb-6" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 400, fontSize: "1.05rem" }}>
              I'm <strong className="text-white">SG</strong>, a passionate UI/UX Designer based in India. 
              I specialize in creating digital experiences that feel both beautiful and inevitable — 
              the kind where users never think twice about what to do next.
            </p>
            <p className="text-white/50 leading-relaxed mb-10" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 400, fontSize: "1rem" }}>
              With 1+ years crafting products for startups and Fortune some companies, I've developed 
              a deep belief: great design is invisible. My process begins with research, flows through 
              ideation, and finishes with pixel-perfect execution.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/8 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-violet-500/15 flex items-center justify-center shrink-0 group-hover:bg-violet-500/25 transition-colors">
                    {v.icon}
                  </div>
                  <div>
                    <p className="text-white text-sm" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>{v.title}</p>
                    <p className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tools */}
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}>Tools & Language I Use</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.06 }}
                    className="px-3 py-1.5 rounded-full border border-violet-500/25 text-violet-300 text-xs hover:bg-violet-500/10 transition-colors cursor-default"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 500 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
