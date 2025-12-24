import Header from "./components/layout/header";
import Hero from "./sections/hero/hero";
import About from "./sections/about/about";
import Skills from "./sections/skills/skills";
import Projects from "./sections/projects/projects";
import Experience from "./sections/experience/experience";
import Contact from "./sections/contact/contact";
import Footer from "./components/layout/footer";

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Luzes de fundo */}
      <div
        className="
          pointer-events-none fixed inset-0 -z-10 opacity-80
          bg-[radial-gradient(circle_at_20%_20%,rgba(255,77,184,0.22),transparent_55%),
             radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.2),transparent_55%),
             radial-gradient(circle_at_10%_80%,rgba(124,58,237,0.22),transparent_55%)]
        "
      />

      <Header />

      <main className="soft-container pt-28 pb-24 space-y-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}