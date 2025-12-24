import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="
        mt-32 py-10
        bg-black/30 backdrop-blur-xl
        border-t border-white/10
        shadow-[0_0_20px_rgba(255,77,184,0.15)]
        relative
      "
    >
      {/* Glow decorativo */}
      <div
        className="
          absolute -top-10 left-1/2 -translate-x-1/2
          w-72 h-72 bg-pink-500/20 blur-[120px]
          rounded-full pointer-events-none
        "
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10"
      >
        {/* Texto */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Luiza.dev — All rights reserved.
        </p>

        {/* Navegação */}
        <div className="flex gap-6 text-sm">
          {[
            { label: "Home", id: "hero" },
            { label: "Projects", id: "projects" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                const el = document.getElementById(item.id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="
                text-gray-300 hover:text-pink-400
                transition-all
                hover:drop-shadow-[0_0_6px_rgba(255,77,184,0.6)]
              "
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}