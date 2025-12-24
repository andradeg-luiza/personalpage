import { motion } from "framer-motion";
import { projects } from "../../assets/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        py-32 px-6 max-w-7xl mx-auto
        relative
      "
    >
      {/* Glow decorativo */}
      <div
        className="
          absolute top-10 left-0 w-72 h-72
          bg-pink-500/20 blur-[120px] rounded-full pointer-events-none
        "
      ></div>

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="
          text-4xl font-bold text-white mb-12
          drop-shadow-[0_0_12px_rgba(255,77,184,0.35)]
          relative z-10
        "
      >
        Featured <span className="text-pink-400">Project</span>
      </motion.h2>

      {/* Card do projeto */}
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
          className="
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-xl p-10
            shadow-[0_0_20px_rgba(255,77,184,0.15)]
            hover:shadow-[0_0_30px_rgba(255,77,184,0.35)]
            transition-all
            relative z-10
          "
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            {project.title}
          </h3>

          <p className="text-gray-300 text-base leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Botão */}
          <motion.button
            whileHover={{ scale: project.link ? 1.05 : 1 }}
            whileTap={{ scale: project.link ? 0.97 : 1 }}
            disabled={!project.link}
            className={`
              px-6 py-3 rounded-md text-sm font-semibold transition-all
              ${
                project.link
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white shadow-[0_0_20px_rgba(255,77,184,0.45)] hover:shadow-[0_0_30px_rgba(255,77,184,0.6)]"
                  : "bg-gray-700 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            {project.link ? "View on GitHub →" : "Coming soon"}
          </motion.button>
        </motion.div>
      ))}
    </section>
  );
}