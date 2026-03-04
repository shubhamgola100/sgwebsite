import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MarqueeBanner } from "./components/MarqueeBanner";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Skills } from "./components/Skills";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", background: "#0a0a0f" }}>
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
