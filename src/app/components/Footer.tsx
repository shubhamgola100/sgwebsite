// import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center">
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "#fff" }}>SG</span>
          </div>
          {/* <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#fff", fontSize: "1rem" }}>
            Aria<span style={{ color: "#a78bfa" }}>.</span>
          </span> */}
        </div>

        <p className="text-white/30 text-sm flex items-center gap-1.5" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
          Crafted with <Heart size={12} className="text-violet-400 fill-violet-400" /> by SG © 2026
        </p>

        <div className="flex gap-6">
          {["Privacy", "Terms", "Sitemap"].map(link => (
            <a key={link} href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
