import { motion } from "framer-motion";
import { skills } from "../../assets/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        py-32 px-6 max-w-7xl mx-auto
        relative
      "
    >
      {/* Glow decorativo */}
      <div
        className="
          absolute top-20 right-0 w-72 h-72
          bg-purple-600/20 blur-[120px] rounded-full pointer-events-none
        "
      ></div>

      {/* Título animado */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          text-4xl font-bold text-white mb-12
          drop-shadow-[0_0_12px_rgba(255,77,184,0.35)]
          relative z-10
        "
      >
        My <span className="text-pink-400">Skills</span>
      </motion.h2>

      {/* Grid de skills */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-6 relative z-10
        "
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="
              px-5 py-4 rounded-lg
              bg-white/5 backdrop-blur-xl
              border border-white/10
              shadow-[0_0_15px_rgba(255,77,184,0.15)]
              hover:shadow-[0_0_25px_rgba(255,77,184,0.35)]
              transition-all
              text-pink-300 font-medium text-sm
            "
          >
            {skill.name}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}