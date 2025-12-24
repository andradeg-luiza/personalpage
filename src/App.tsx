import Layout from "./components/layout/layout";

// Seções
import Hero from "./sections/hero/hero";
import About from "./sections/about/about";
import Skills from "./sections/skills/skills";
import Projects from "./sections/projects/projects";
import Experience from "./sections/experience/experience";
import Contact from "./sections/contact/contact";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  );
}

export default App;