import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PenTool, Monitor, Smartphone, BarChart3, Users, Code2 } from "lucide-react";

const skills = [
  { name: "User Research", level: 92, icon: <Users size={16} />, color: "#a78bfa" },
  { name: "UI Design", level: 96, icon: <PenTool size={16} />, color: "#7c3aed" },
  { name: "UX Strategy", level: 88, icon: <BarChart3 size={16} />, color: "#c084fc" },
  { name: "Web Design", level: 90, icon: <Monitor size={16} />, color: "#818cf8" },
  { name: "Mobile Design", level: 87, icon: <Smartphone size={16} />, color: "#a78bfa" },
  { name: "Prototyping", level: 94, icon: <Code2 size={16} />, color: "#7c3aed" },
];

const services = [
  {
    icon: <PenTool size={24} className="text-violet-400" />,
    title: "UI Design",
    desc: "Crafting beautiful, intuitive interfaces with obsessive attention to detail and pixel-perfect execution.",
    gradient: "from-violet-600/20 to-purple-600/10",
  },
  {
    icon: <Users size={24} className="text-purple-400" />,
    title: "UX Research",
    desc: "Deep user research, journey mapping, and usability testing to unlock insights that drive design decisions.",
    gradient: "from-purple-600/20 to-fuchsia-600/10",
  },
  {
    icon: <Smartphone size={24} className="text-fuchsia-400" />,
    title: "Mobile Design",
    desc: "Native iOS and Android design that feels natural, fluid, and aligned with platform conventions.",
    gradient: "from-fuchsia-600/20 to-pink-600/10",
  },
  {
    icon: <BarChart3 size={24} className="text-indigo-400" />,
    title: "Design Systems",
    desc: "Building scalable, consistent design languages that power entire product ecosystems.",
    gradient: "from-indigo-600/20 to-violet-600/10",
  },
];

function SkillBar({ skill, inView, index }: { skill: typeof skills[0]; inView: boolean; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.08, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span style={{ color: skill.color }}>{skill.icon}</span>
          <span className="text-white/80 text-sm" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}>{skill.name}</span>
        </div>
        <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: skill.color, fontSize: "0.9rem" }}>{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/8 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: 0.4 + index * 0.08, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-20 bg-[#0d0b14] overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-900/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />
            <span className="text-violet-400 text-xs tracking-[0.25em] uppercase" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}>
              Expertise
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", letterSpacing: "-0.02em" }}
          >
            Skills & <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Services</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills bars */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="text-white mb-8"
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1.3rem" }}
            >
              Core Proficiencies
            </motion.h3>
            <div className="space-y-6">
              {skills.map((s, i) => <SkillBar key={s.name} skill={s} inView={inView} index={i} />)}
            </div>
          </div>

          {/* Services */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="text-white mb-8"
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1.3rem" }}
            >
              What I Offer
            </motion.h3>
            <div className="grid grid-cols-1 gap-4">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className={`flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r ${s.gradient} border border-white/8 group hover:border-violet-500/30 transition-all duration-300`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="text-white mb-1" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>{s.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
