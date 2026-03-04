import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Send, Twitter, Linkedin, Dribbble, Github } from "lucide-react";

const socials = [
  { icon: <Twitter size={18} />, label: "Twitter", href: "#" },
  { icon: <Linkedin size={18} />, label: "LinkedIn", href: "#" },
  { icon: <Dribbble size={18} />, label: "Dribbble", href: "#" },
  { icon: <Github size={18} />, label: "GitHub", href: "#" },
];


export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", mobile: "", email: "", subject: "", message: "" });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setSent(true);
  //   setTimeout(() => setSent(false), 4000);
  // };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send(
      // "YOUR_SERVICE_ID",
      "service_dcgc1ls",
      // "YOUR_TEMPLATE_ID",
      "template_ab12cd3",
  {
    name: form.name,
    mobile: form.mobile,
    email: form.email,
    subject: form.subject,
    message: form.message,
  },
  "QWERTY123456"
)
    .then(
      () => {
        setSent(true);
        setForm({
          name: "",
          mobile: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setSent(false), 4000);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
};

  return (
    <section id="contact" className="relative py-28 bg-[#0d0b14] overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />
            <span className="text-violet-400 text-xs tracking-[0.25em] uppercase" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}>Contact</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", letterSpacing: "-0.02em" }}
          >
            Let's <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Work Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/40 mt-3 max-w-lg mx-auto"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 400 }}
          >
            Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back within 24 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            {/* Info cards */}
            <div className="space-y-4 mb-10">
              {[
                { icon: <Mail size={20} className="text-violet-400" />, label: "Email", value: "shubhamgola100@gmail.com" },
                { icon: <MapPin size={20} className="text-purple-400" />, label: "Location", value: "Noida, India" },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4 p-4 rounded-2xl bg-white/4 border border-white/8 hover:bg-white/6 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-violet-500/15 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}>{item.label}</p>
                    <p className="text-white text-sm mt-0.5" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 500 }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600/20 to-purple-600/10 border border-violet-500/20 mb-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs uppercase tracking-widest" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}>Available Now</span>
              </div>
              <p className="text-white" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1.1rem" }}>Open to new projects</p>
              <p className="text-white/40 text-xs mt-1" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Starting from March 2026</p>
            </div>

            {/* Socials */}
            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}>Follow Me</p>
              <div className="flex gap-3">
                {socials.map(s => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 transition-colors"
                    title={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-[#13111c] border border-white/8 rounded-3xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { field: "name", label: "Your Name", placeholder: "Name" },
                  { field: "mobile", label: "Mobile Number", placeholder: "Mobile Number" },
                  { field: "email", label: "Email Address", placeholder: "jane@example.com" },
                ].map(({ field, label, placeholder }) => (
                  <div key={field}>
                    <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}>
                      {label}
                    </label>
                    <input
                      type={field === "email" ? "email" : field === "mobile" ? "tel" : "text"}
                      placeholder={placeholder}
                      required
                      value={form[field as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.9rem" }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}>
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  required
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.9rem" }}
                />
              </div>

              <div>
                <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}>
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all resize-none"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.9rem" }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white transition-all duration-300 ${
                  sent
                    ? "bg-green-600 shadow-lg shadow-green-500/25"
                    : "bg-gradient-to-r from-violet-600 to-purple-500 shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50"
                }`}
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: "0.95rem" }}
              >
                {sent ? (
                  <>✓ Message Sent!</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
