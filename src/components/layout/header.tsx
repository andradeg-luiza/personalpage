import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import useScrollToSection from "../../hooks/useScrollToSection";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const { scrollTo } = useScrollToSection();

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-black/30 backdrop-blur-xl
        border-b border-white/10
        shadow-[0_0_20px_rgba(255,77,184,0.15)]
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Navegação */}
        <nav className="flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="
                text-gray-300 text-sm font-medium
                hover:text-pink-400
                transition-all
                hover:drop-shadow-[0_0_6px_rgba(255,77,184,0.6)]
              "
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social + CTA */}
        <div className="flex items-center gap-6">

          {/* Ícones sociais */}
          {[FaLinkedin, FaFacebook, FaInstagram].map((Icon, i) => (
            <Icon
              key={i}
              className="
                text-gray-300 text-lg cursor-pointer
                hover:text-pink-400
                transition-all
                hover:drop-shadow-[0_0_6px_rgba(255,77,184,0.6)]
              "
            />
          ))}

          {/* Botão */}
          <button
            onClick={() => scrollTo("contact")}
            className="
              bg-gradient-to-r from-pink-500 to-purple-600
              hover:from-pink-400 hover:to-purple-500
              text-white px-4 py-2 rounded-md text-sm font-semibold
              shadow-[0_0_15px_rgba(255,77,184,0.4)]
              hover:shadow-[0_0_25px_rgba(255,77,184,0.6)]
              transition-all
            "
          >
            Let's Connect
          </button>
        </div>
      </div>
    </header>
  );
}