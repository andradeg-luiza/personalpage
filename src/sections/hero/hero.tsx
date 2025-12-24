import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        min-h-screen flex flex-col justify-center items-start
        px-6 max-w-7xl mx-auto
      "
    >
      {/* Container animado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-start"
      >
        {/* Título */}
        <h1
          className="
            text-5xl md:text-6xl font-bold text-white leading-tight
            drop-shadow-[0_0_12px_rgba(255,77,184,0.35)]
          "
        >
          Hi, I'm <span className="text-pink-400">Luiza</span>
        </h1>

        {/* Subtítulo */}
        <p
          className="
            text-gray-300 text-lg md:text-xl mt-4 max-w-xl
            leading-relaxed
          "
        >
          Quality Assurance Engineer specializing in automated and manual testing
          for high‑performance systems.
        </p>

        {/* Botão */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            const el = document.getElementById("projects");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="
            mt-10 bg-gradient-to-r from-pink-500 to-purple-600
            hover:from-pink-400 hover:to-purple-500
            text-white px-8 py-3 rounded-md text-lg font-semibold
            shadow-[0_0_20px_rgba(255,77,184,0.45)]
            hover:shadow-[0_0_30px_rgba(255,77,184,0.6)]
            transition-all
          "
        >
          View My Work
        </motion.button>
      </motion.div>

      {/* Glow decorativo */}
      <div
        className="
          absolute top-40 right-10 w-72 h-72
          bg-pink-500/20 blur-[120px] rounded-full pointer-events-none
        "
      ></div>
    </section>
  );
}