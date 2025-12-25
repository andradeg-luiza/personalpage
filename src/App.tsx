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
      {/* Luzes de fundo em tons esverdeados */}
      <div
        className="
          pointer-events-none fixed inset-0 -z-10 opacity-80
          bg-[radial-gradient(circle_at_20%_20%,rgba(62,243,192,0.18),transparent_55%),
             radial-gradient(circle_at_80%_10%,rgba(0,180,140,0.15),transparent_55%),
             radial-gradient(circle_at_10%_80%,rgba(0,255,200,0.12),transparent_55%)]
        "
      />

      <Header />

      <main className="soft-container pt-28 pb-24 space-y-32">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}