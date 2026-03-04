import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.04 }}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-violet-500/30">
              <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff" }}>SG</span>
            </div>
            {/* <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#fff", letterSpacing: "-0.01em" }}>
              SG<span style={{ color: "#a78bfa" }}>.</span>
            </span> */}
          </motion.a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setActive(link.label)}
                  className={`relative px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
                    active === link.label ? "text-white" : "text-white/50 hover:text-white/80"
                  }`}
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 500 }}
                >
                  {active === link.label && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 text-white text-sm shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-shadow"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}
          >
            Hire Me
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] left-4 right-4 z-40 bg-[#13111c]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => { setActive(link.label); setMenuOpen(false); }}
                className="block px-4 py-3 text-white/70 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 500 }}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block mt-3 px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white text-center"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
