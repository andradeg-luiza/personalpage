import { motion } from "framer-motion";
import { experience } from "../../assets/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        py-32 px-6 max-w-7xl mx-auto
        relative
      "
    >
      {/* Glow decorativo */}
      <div
        className="
          absolute top-20 left-0 w-72 h-72
          bg-purple-600/20 blur-[120px] rounded-full pointer-events-none
        "
      ></div>

      {/* Título */}
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
        My <span className="text-pink-400">Experience</span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative pl-6 border-l border-white/10">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            {/* Bolinha da timeline */}
            <span
              className="
                absolute -left-[14px] top-2 w-3 h-3
                bg-pink-400 rounded-full
                shadow-[0_0_10px_rgba(255,77,184,0.6)]
              "
            ></span>

            {/* Card */}
            <div
              className="
                bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-xl p-8
                shadow-[0_0_20px_rgba(255,77,184,0.15)]
                hover:shadow-[0_0_30px_rgba(255,77,184,0.35)]
                transition-all
                relative z-10
              "
            >
              <h3 className="text-xl font-semibold text-white">
                {item.role}
              </h3>

              <p className="text-pink-400 text-sm font-medium mt-1">
                {item.company}
              </p>

              <p className="text-gray-400 text-sm mt-1">{item.period}</p>

              {item.location && (
                <p className="text-gray-500 text-sm mt-1">{item.location}</p>
              )}

              {/* Lista de responsabilidades */}
              <ul className="text-gray-300 text-sm leading-relaxed mt-4 list-disc pl-5 space-y-2">
                {item.description
                  .trim()
                  .split("\n")
                  .map((line, i) => (
                    <li key={i}>{line.replace(/^- /, "")}</li>
                  ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}