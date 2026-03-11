import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CarsWorld",
    category: "Web App",
    tags: ["Car Selling ", "Sports Car", "Luxury"],
    image: "/car.png",
    accent: "#7c3aed",
    desc: "A modern car-buying platform designed to help you find, explore, and drive your dream car.",
  },
  // {
  //   id: 2,
  //   title: "ShopEase Mobile App",
  //   category: "Mobile App",
  //   tags: ["iOS", "E-commerce", "UI"],
  //   image: "https://images.unsplash.com/photo-1644984875410-e11486d2b94f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGFwcCUyMGRlc2lnbnxlbnwxfHx8fDE3NzI2MjA2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  //   accent: "#a78bfa",
  //   desc: "A seamless e-commerce experience with AR product preview features.",
  // },
  // {
  //   id: 3,
  //   title: "NovaBrand Identity",
  //   category: "Branding",
  //   tags: ["Brand", "Identity", "Print"],
  //   image: "https://images.unsplash.com/photo-1760386129108-d17b9cdfc4fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwZGVzaWduJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzcyNTc2Nzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  //   accent: "#c084fc",
  //   desc: "Complete brand identity design for a next-gen SaaS startup.",
  // },
  // {
  //   id: 4,
  //   title: "Pulse Health App",
  //   category: "Mobile App",
  //   tags: ["Health", "iOS", "Android"],
  //   image: "https://images.unsplash.com/photo-1663153204573-1e6581da098f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXAlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzI2MjA2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  //   accent: "#818cf8",
  //   desc: "Health tracking app with personalized insights and beautiful data display.",
  // },
];



// const filters = ["All", "Web App", "Mobile App", "Branding"];
const filters = ["All", "Web App"];

export function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <section id="work" className="relative py-20 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />
            <span className="text-violet-400 text-xs tracking-[0.25em] uppercase" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}>
              Portfolio
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", letterSpacing: "-0.02em" }}
          >
            Selected <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Work</span>
          </motion.h2>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-2 flex-wrap mb-12"
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                active === f
                  ? "bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-lg shadow-violet-500/25"
                  : "border border-white/10 text-white/50 hover:text-white hover:border-white/25"
              }`}
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, type: "spring" }}
                onHoverStart={() => setHovered(project.id)}
                onHoverEnd={() => setHovered(null)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer border border-white/8 bg-[#13111c]"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hovered === project.id ? 1.08 : 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13111c] via-[#13111c]/20 to-transparent" />

                  {/* Hover overlay */}
                  <motion.div
                    animate={{ opacity: hovered === project.id ? 1 : 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: `${project.accent}22` }}
                  >
                    <motion.div
                      animate={{ scale: hovered === project.id ? 1 : 0.7, opacity: hovered === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm"
                      style={{ background: project.accent }}
                    >
                      <ExternalLink size={20} className="text-white" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}>
                        {project.category}
                      </p>
                      <h3 className="text-white" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1.25rem" }}>
                        {project.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ x: hovered === project.id ? 0 : 8, opacity: hovered === project.id ? 1 : 0 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-white/15"
                    >
                      <ArrowRight size={16} className="text-white" />
                    </motion.div>
                  </div>
                  <p className="text-white/40 text-sm mb-4 leading-relaxed" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    {project.desc}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs border"
                        style={{
                          fontFamily: "Plus Jakarta Sans, sans-serif",
                          fontWeight: 500,
                          borderColor: `${project.accent}40`,
                          color: project.accent,
                          background: `${project.accent}12`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-violet-500/30 text-violet-300 hover:bg-violet-500/10 transition-colors"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
          >
            View All Projects <ArrowRight size={15} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
