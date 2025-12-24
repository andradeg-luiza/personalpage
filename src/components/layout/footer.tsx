export default function Footer() {
  return (
    <footer className="mt-24 py-10 border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Texto */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Luiza.dev — All rights reserved.
        </p>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a
            href="#hero"
            className="text-gray-300 hover:text-pink-400 transition-colors"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-pink-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-pink-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}