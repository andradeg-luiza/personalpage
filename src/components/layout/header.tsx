import { FaLinkedin } from "react-icons/fa";
import useScrollToSection from "../../hooks/useScrollToSection";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
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
        shadow-[0_0_20px_rgba(62,243,192,0.15)]
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
                hover:text-[var(--accent-green)]
                transition-all
                hover:drop-shadow-[0_0_6px_rgba(62,243,192,0.6)]
              "
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social + CTA */}
        <div className="flex items-center gap-6">

          {/* Ícone do LinkedIn com link */}
          <a
            href="https://www.linkedin.com/in/andradegluiza/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="
                text-gray-300 text-lg cursor-pointer
                hover:text-[var(--accent-green)]
                transition-all
                hover:drop-shadow-[0_0_6px_rgba(62,243,192,0.6)]
              "
            />
          </a>

          {/* Botão Let's Connect */}
          <button
            onClick={() => scrollTo("contact")}
            className="
              bg-gradient-to-r from-[var(--accent-green)]/60 to-[var(--accent-green)]
              hover:from-[var(--accent-green)]/80 hover:to-[var(--accent-green)]
              text-white px-4 py-2 rounded-md text-sm font-semibold
              shadow-[0_0_15px_rgba(62,243,192,0.4)]
              hover:shadow-[0_0_25px_rgba(62,243,192,0.6)]
              transition-all
            "
          >
            Let’s Connect
          </button>
        </div>
      </div>
    </header>
  );
}