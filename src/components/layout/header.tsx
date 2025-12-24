import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import useScrollToSection from "../../hooks/useScrollToSection";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
];

export default function Header() {
  const { scrollTo } = useScrollToSection();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Navegação */}
        <nav className="flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-gray-300 hover:text-pink-400 transition-colors text-sm font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social + CTA */}
        <div className="flex items-center gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-300 hover:text-pink-400 transition-colors text-lg" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-gray-300 hover:text-pink-400 transition-colors text-lg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-300 hover:text-pink-400 transition-colors text-lg" />
          </a>

          <button
            onClick={() => scrollTo("contact")}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </header>
  );
}