import { motion } from "framer-motion";

const items = [
  "UI Design", "UX Research", "Brand Identity", "Design Systems",
  "Prototyping", "Mobile Apps", "Web Design", "User Testing",
  "UI Design", "UX Research", "Brand Identity", "Design Systems",
  "Prototyping", "Mobile Apps", "Web Design", "User Testing",
];

export function MarqueeBanner() {
  return (
    <div className="relative overflow-hidden bg-violet-600/10 border-y border-violet-500/15 py-4">
      <motion.div
        animate={{ x: [0, -50 + "%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap"
        style={{ width: "max-content" }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            <span className="text-violet-300/70 text-sm uppercase tracking-widest" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}>
              {item}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
