import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
        py-32 px-6 max-w-7xl mx-auto
        relative
      "
    >
      {/* Glow decorativo */}
      <div
        className="
          absolute -top-10 left-0 w-72 h-72
          bg-pink-500/20 blur-[120px] rounded-full pointer-events-none
        "
      ></div>

      {/* Container animado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-start gap-16 relative z-10"
      >
        {/* Texto */}
        <div className="flex-1">
          <h2
            className="
              text-4xl font-bold text-white mb-6
              drop-shadow-[0_0_12px_rgba(255,77,184,0.35)]
            "
          >
            About <span className="text-pink-400">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            I’m a Quality Assurance Engineer with over 5 years of experience
            ensuring the reliability, performance, and scalability of digital
            products. I work across manual and automated testing for web and
            backend systems, focusing on preventing issues early and delivering
            consistent, user‑ready software.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mt-4">
            My background includes building automated test suites, validating
            complex integrations, and collaborating daily in Agile environments
            to maintain high standards in large‑scale applications.
          </p>
        </div>

        {/* Foto / Placeholder estilizado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="
            flex-1 flex justify-center
          "
        >
          <div
            className="
              w-64 h-64 rounded-xl
              bg-gradient-to-br from-pink-500/30 to-purple-600/30
              border border-white/10 backdrop-blur-xl
              shadow-[0_0_25px_rgba(255,77,184,0.25)]
              flex items-center justify-center
              text-gray-300 text-sm
            "
          >
            Your Photo Here
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}