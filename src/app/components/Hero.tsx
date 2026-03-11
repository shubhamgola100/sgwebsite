// import hero from "./src/assets/sg.png";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, Star } from "lucide-react";

// const OWNER_IMAGE = "https://in.pinterest.com/pin/1079526973196798911/";

const OWNER_IMAGE = "/hero.png";

const roles = ["UI/UX Designer", "Product Designer", "Visual Artist", "Brand Strategist"];

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(w => (w + 1) % words.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

// Floating orb component
function Orb({ color, size, x, y, duration, delay }: { color: string; size: number; x: string; y: string; duration: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl pointer-events-none"
      style={{ background: color, width: size, height: size, left: x, top: y, opacity: 0.18 }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

// Floating badge
function FloatingBadge({ icon, label, value, className, delay }: {
  icon: React.ReactNode; label: string; value: string; className?: string; delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      className={`absolute flex items-center gap-2.5 bg-[#1a1625]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl ${className}`}
    >
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg shadow-violet-500/30 shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-white/50 text-[10px] uppercase tracking-widest" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{label}</p>
        <p className="text-white text-sm" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>{value}</p>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const typed = useTypewriter(roles);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas!.width;
        if (p.x > canvas!.width) p.x = 0;
        if (p.y < 0) p.y = canvas!.height;
        if (p.y > canvas!.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Background orbs */}
      <Orb color="#7c3aed" size={600} x="-10%" y="-20%" duration={8} delay={0} />
      <Orb color="#4f46e5" size={500} x="60%" y="30%" duration={10} delay={2} />
      <Orb color="#a78bfa" size={350} x="30%" y="60%" duration={7} delay={1} />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(167,139,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          {/* Left Content */}
          <div className="flex-1 lg:pr-16 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6"
            >
              <Sparkles size={14} className="text-violet-400" />
              <span className="text-violet-300 text-xs tracking-widest uppercase" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}>
                Available for Freelance
              </span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1.05, color: "#fff", letterSpacing: "-0.03em" }}
            >
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
                Web Developer
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 mb-6 flex items-center gap-3 justify-center lg:justify-start"
            >
              <div className="h-px flex-shrink-0 w-8 bg-gradient-to-r from-transparent to-violet-500" />
              <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600, fontSize: "1.2rem", color: "#a78bfa" }}>
                {typed}
                <span className="animate-pulse text-violet-300">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/50 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 400, fontSize: "1rem" }}
            >
              Crafting pixel-perfect, user-centric digital experiences that blend beauty with function. 
              I turn complex problems into elegant, intuitive designs.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-8 mt-8 justify-center lg:justify-start"
            >
              {[
                { value: "1+", label: "Years Exp." },
                { value: "10+", label: "Projects" },
                { value: "5+", label: "Clients" },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "1.7rem", color: "#fff", lineHeight: 1 }}>
                    {s.value}
                  </p>
                  <p className="text-white/40 text-xs mt-1" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-4 mt-10 justify-center lg:justify-start flex-wrap"
            >
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-shadow"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: "0.95rem" }}
              >
                View My Work <ArrowRight size={16} />
              </motion.a>

              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white hover:bg-white/5 transition-colors"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
              >
                <Download size={15} /> Download CV
              </motion.a>


              
            </motion.div>
          </div>

          {/* Right — Image */}
          <div className="relative flex-shrink-0 w-full max-w-[420px] lg:max-w-[480px]">
            {/* Glowing ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20px] rounded-full border-2 border-dashed border-violet-500/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-48px] rounded-full border border-purple-400/10"
            />

            {/* Photo container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, type: "spring", stiffness: 100 }}
              className="relative mx-auto"
            >
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-violet-600/40 to-purple-600/20 blur-2xl scale-110" />

              <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-violet-900/50">
                <img
                  src={OWNER_IMAGE}
                  alt="SG - UI/UX Designer"
                  className="w-full h-[520px] object-cover object-top"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
              </div>

              {/* Floating badges */}
              <FloatingBadge
                icon={<Star size={16} className="text-yellow-300" />}
                label="Rating"
                value="5.0 Stars"
                className="-left-8 top-16 z-20"
                delay={0.7}
              />
              <FloatingBadge
                icon={<Sparkles size={16} className="text-violet-200" />}
                label="Projects Done"
                value="80+ Projects"
                className="-right-6 top-1/3 z-20"
                delay={0.85}
              />

              {/* Bottom card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute bottom-4 left-4 right-4 bg-[#1a1625]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-3 z-20"
              >
                <div className="flex -space-x-2">
                  {["#7c3aed","#a78bfa","#4f46e5"].map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1a1625]" style={{ background: c }} />
                  ))}
                </div>
                <div>
                  <p className="text-white text-xs" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>Happy Clients</p>
                  <p className="text-white/40 text-[10px]" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>50+ worldwide</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={10} className="text-yellow-400 fill-yellow-400" />)}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 cursor-pointer"
          >
            <span className="text-white/30 text-xs tracking-widest uppercase" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Scroll</span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 rounded-full bg-violet-400"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
